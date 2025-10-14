// Dispensary Simulation (Node CLI) - Map version WITH accounts
// Run: node dispensary_cli.js

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, (ans) => res(ans.trim())));

// --- Dummy accounts ---
// Use these at checkout:
// 1) DL: DL123456  | MED: MED98765  | points: 20
// 2) DL: DL654321  | MED: MED54321  | points: 70
const accounts = [
  { dl: "DL123456", med: "MED98765", points: 20 },
  { dl: "DL654321", med: "MED54321", points: 70 },
];

// --- catalog: key -> {name, price} ---
const catalog = new Map([
  ["cal_kush_1_8", { name: "California Kush (1/8 oz)", price: 30 }],
  ["cal_kush_1_2", { name: "California Kush (1/2 oz)", price: 95 }],
  ["cal_kush_1",   { name: "California Kush (1 oz)",    price: 180 }],

  ["house_15g",    { name: "House Blend (15 g)",        price: 45 }],
  ["house_pr",     { name: "House Blend Pre-roll",      price: 15 }],

  ["moon_1_8",     { name: "Moonlight Beams (1/8 oz)",  price: 30 }],
  ["moon_1_2",     { name: "Moonlight Beams (1/2 oz)",  price: 110 }],
  ["moon_1",       { name: "Moonlight Beams (1 oz)",    price: 190 }],

  ["choco_bar",    { name: "Infused Dark Chocolate Bar",price: 25 }],
  ["oil_cart",     { name: "Oil Cart (single)",         price: 30 }], // special: 2 for $50
]);

// --- cart: key -> quantity ---
const cart = new Map();

function showCatalog() {
  console.log("\n=== CATALOG ===");
  for (const [key, item] of catalog.entries()) {
    console.log(`${key.padEnd(12)} | ${item.name.padEnd(30)} $${item.price}`);
  }
  console.log("(Special) Oil cart: 2 for $50");
  console.log("\nDummy accounts for testing:");
  console.log("  DL: DL123456  | MED: MED98765  | points: 20");
  console.log("  DL: DL654321  | MED: MED54321  | points: 70\n");
}

function viewCart() {
  console.log("\n=== CART ===");
  if (cart.size === 0) {
    console.log("Cart is empty.\n");
    return;
  }
  for (const [key, qty] of cart.entries()) {
    const { name, price } = catalog.get(key);
    console.log(`${qty} x ${name} @ $${price}`);
  }
  console.log("");
}

function addToCart(key, qty) {
  if (!catalog.has(key)) {
    console.log("! Invalid product key.\n");
    return;
  }
  qty = Math.floor(Number(qty));
  if (!Number.isFinite(qty) || qty <= 0) {
    console.log("! Quantity must be a positive integer.\n");
    return;
  }
  cart.set(key, (cart.get(key) || 0) + qty);
  console.log(`+ Added ${qty} x ${catalog.get(key).name}\n`);
}

function calculateTotals() {
  let subtotal = 0;
  for (const [key, qty] of cart.entries()) {
    const item = catalog.get(key);
    if (key === "oil_cart") {
      const pairs = Math.floor(qty / 2);
      const remainder = qty % 2;
      subtotal += pairs * 50;               // deal price
      subtotal += remainder * item.price;   // singles at $30
    } else {
      subtotal += qty * item.price;
    }
  }
  const pointsEarned = Math.floor(subtotal / 10); // 1 point per $10 (before discount)
  return { subtotal, pointsEarned };
}

async function checkout() {
  if (cart.size === 0) {
    console.log("! Cart is empty. Add items first.\n");
    return;
  }

  const dl = await ask("Driver's License number (required): ");
  const med = await ask("Medical Card number (required): ");
  if (!dl || !med) { console.log("! Both fields required. Checkout cancelled.\n"); return; }

  // Validate against dummy accounts
  const account = accounts.find(a => a.dl === dl && a.med === med);
  if (!account) {
    console.log("! Invalid account. Use one of the provided dummy accounts.\n");
    return;
  }

  const { subtotal: preDiscountSubtotal, pointsEarned } = calculateTotals();
  let total = preDiscountSubtotal;
  let discount = 0;

  console.log(`\nSubtotal (before any discount): $${preDiscountSubtotal.toFixed(2)}`);
  console.log(`Your points: ${account.points}  |  Points earned this order: ${pointsEarned}`);

  if (account.points >= 50) {
    const use = (await ask("Redeem 50 points for 25% off? (y/n): ")).toLowerCase();
    if (use === "y") {
      discount = 0.25 * total;
      total -= discount;
      account.points -= 50;
    }
  }

  account.points += pointsEarned;

  console.log("\n=== CHECKOUT SUMMARY ===");
  console.log(`Driver's License: ${dl}`);
  console.log(`Medical Card:    ${med}`);
  console.log(`Subtotal:        $${preDiscountSubtotal.toFixed(2)}`);
  console.log(`Discount:        $${discount.toFixed(2)}`);
  console.log(`TOTAL DUE:       $${total.toFixed(2)}`);
  console.log(`Points earned:   ${pointsEarned}`);
  console.log(`Points balance:  ${account.points}\n`);

  cart.clear();
}

// --- main loop ---
async function main() {
  console.log("Florida Dispensary (SIM) — Node CLI (Map)");
  console.log("Rules: 1 point per $10 (floor). 50 points = 25% off an order.");
  let exit = false;

  while (!exit) {
    console.log("Menu:");
    console.log(" 1) Show catalog");
    console.log(" 2) Add item to cart");
    console.log(" 3) View cart");
    console.log(" 4) Checkout");
    console.log(" 5) Exit");
    const choice = await ask("Choose (1-5): ");

    switch (choice) {
      case "1": showCatalog(); break;
      case "2": {
        const key = await ask("Enter product key: ");
        const qty = await ask("Enter quantity: ");
        addToCart(key, qty);
        break;
      }
      case "3": viewCart(); break;
      case "4": await checkout(); break;
      case "5": exit = true; break;
      default: console.log("! Invalid choice.\n");
    }
  }

  rl.close();
  console.log("Goodbye!");
}

main();