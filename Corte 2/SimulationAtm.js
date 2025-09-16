// SimulationAtm.js — ATM simulation using Map + readline (Node.js)
// Includes: Deposit as CASH or CHECK, and quick transfer SAVINGS → CHECKING

// ====== Data store (Map) ======
const accounts = new Map([
  // docID: { pin, balances: { savings, checking } }
  ["123", { pin: "1111", balances: { savings: 500000, checking: 300000 } }],
  ["456", { pin: "2222", balances: { savings: 1000000, checking: 500000 } }],
]);

// ====== Readline setup ======
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, (ans) => res(ans.trim())));

// ====== Helpers ======
const validAcc = (name) => name === "savings" || name === "checking";
const toInt = (s) => Number.parseInt(s, 10);
const isPositiveInt = (n) => Number.isInteger(n) && n > 0;
const fmt = (n) =>
  Number(n).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

// ====== Auth ======
async function login() {
  const doc = await ask("Enter your document ID: ");
  const record = accounts.get(doc);
  if (!record) {
    console.log("❌ Document not found.\n");
    return null;
  }
  let tries = 0;
  while (tries < 3) {
    const pin = await ask("Enter your 4-digit PIN: ");
    if (pin === record.pin) {
      console.log("✅ Login successful.\n");
      return { doc, user: record };
    }
    console.log("❌ Incorrect PIN.\n");
    tries++;
  }
  console.log("🚪 Too many attempts. Exiting.\n");
  return null;
}

// ====== Core actions ======
function showBalances(user) {
  console.log("\n📊 Balances:");
  console.log("  Savings :", fmt(user.balances.savings));
  console.log("  Checking:", fmt(user.balances.checking), "\n");
}

async function withdraw(user) {
  const acc = (await ask("Withdraw from (savings/checking): ")).toLowerCase();
  if (!validAcc(acc)) {
    console.log("❌ Invalid account name.\n");
    return;
  }

  const amount = toInt(await ask("Enter amount (multiples of 50000): "));
  if (!isPositiveInt(amount) || amount % 50000 !== 0) {
    console.log("❌ Amount must be a positive multiple of 50,000.\n");
    return;
  }
  if (user.balances[acc] < amount) {
    console.log("❌ Insufficient funds.\n");
    return;
  }

  // Simulated bank approval step
  const approved = true;
  if (!approved) {
    console.log("❌ Bank declined the withdrawal.\n");
    return;
  }

  user.balances[acc] -= amount;
  console.log(`💸 Withdrawal approved. Please take: ${fmt(amount)}\n`);
  showBalances(user);
}

// --- NEW: fixed-type deposits (cash/check) ---
async function depositFixed(user, type /* "cash" | "check" */) {
  const acc = (await ask(`Deposit to which account (savings/checking) for ${type.toUpperCase()}? `)).toLowerCase();
  if (!validAcc(acc)) {
    console.log("❌ Invalid account.\n");
    return;
  }
  const amount = toInt(await ask("Enter deposit amount: "));
  if (!isPositiveInt(amount)) {
    console.log("❌ Amount must be a positive integer.\n");
    return;
  }

  user.balances[acc] += amount;
  console.log(`✅ ${type === "cash" ? "Cash" : "Check"} deposit accepted: ${fmt(amount)}\n`);
  showBalances(user);
}

// --- NEW: quick transfers (fixed direction helper) ---
async function transferFixed(user, from, to) {
  // from/to are "savings" or "checking" and already validated by caller
  const amount = toInt(await ask(`Amount to transfer ${from} → ${to}: `));
  if (!isPositiveInt(amount)) {
    console.log("❌ Amount must be a positive integer.\n");
    return;
  }
  if (user.balances[from] < amount) {
    console.log("❌ Not enough funds.\n");
    return;
  }
  user.balances[from] -= amount;
  user.balances[to] += amount;
  console.log(`🔁 Transfer successful: ${fmt(amount)} from ${from} to ${to}\n`);
  showBalances(user);
}

// ====== Menu loop ======
async function menu(user) {
  while (true) {
    console.log("=== ATM Menu ===");
    console.log("1) Withdraw");
    console.log("2) Deposit CASH");
    console.log("3) Deposit CHECK");
    console.log("4) Transfer SAVINGS → CHECKING"); // requested
    console.log("5) Transfer CHECKING → SAVINGS");
    console.log("6) Balance");
    console.log("7) Exit\n");

    const choice = await ask("Choose an option: ");
    console.log("");

    if (choice === "1") await withdraw(user);
    else if (choice === "2") await depositFixed(user, "cash");
    else if (choice === "3") await depositFixed(user, "check");
    else if (choice === "4") await transferFixed(user, "savings", "checking"); // requested
    else if (choice === "5") await transferFixed(user, "checking", "savings");
    else if (choice === "6") showBalances(user);
    else if (choice === "7") {
      console.log("👋 Thanks for using the ATM.\n");
      break;
    } else {
      console.log("❌ Invalid option.\n");
    }
  }
}

// ====== Main ======
(async () => {
  const session = await login();
  if (session) await menu(session.user);
  rl.close();
})();
