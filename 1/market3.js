const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
function ask(text, cb) { rl.question(text + "\n> ", a => cb(a.trim())) }

const productList = [
  ["apple", 2, 10],
  ["banana", 1, 15],
  ["orange", 3, 8],
  ["mango", 4, 6],
  ["protein powder", 25, 5],
  ["doggo boggo doggy treats", 8, 12]
]

const cart = [] // rows: [indexInProductList, qty]

function showProducts() {
  console.log("\nAvailable products:")
  for (let i = 0; i < productList.length; i++) {
    const p = productList[i]
    console.log((i + 1) + ") " + p[0] + " | Price: $" + p[1] + " | Stock: " + p[2])
  }
}

function findCartRow(index) {
  for (let i = 0; i < cart.length; i++) if (cart[i][0] === index) return i
  return -1
}

function showCart() {
  console.log("\nShopping Cart:")
  if (cart.length === 0) { console.log("Cart is empty."); return }
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    const idx = cart[i][0]
    const qty = cart[i][1]
    const p = productList[idx]
    const sub = p[1] * qty
    total += sub
    console.log(p[0] + " | Qty: " + qty + " | Subtotal: $" + sub)
  }
  console.log("Total: $" + total)
}

function addToCart() {
  showProducts()
  ask("Choose product number", numText => {
    const idx = parseInt(numText, 10) - 1
    if (!Number.isFinite(idx) || idx < 0 || idx >= productList.length) { console.log("Invalid product number."); return mainMenu() }
    const p = productList[idx]
    ask("Enter quantity", qtyText => {
      const qty = parseInt(qtyText, 10)
      if (!Number.isFinite(qty) || qty <= 0) { console.log("Invalid quantity."); return mainMenu() }
      if (qty > p[2]) { console.log("Not enough stock. Available: " + p[2]); return mainMenu() }
      p[2] -= qty
      const row = findCartRow(idx)
      if (row === -1) cart.push([idx, qty])
      else cart[row][1] += qty
      console.log("Added " + qty + " " + p[0] + "(s) to cart.")
      mainMenu()
    })
  })
}

function checkout() {
  console.log("\n--- Checkout ---")
  showCart()
  console.log("Thank you for your purchase!")
  rl.close()
}

function mainMenu() {
  console.log("\nSHOPPING CART MENU")
  console.log("1) Add product to cart")
  console.log("2) View cart")
  console.log("3) Checkout")
  console.log("4) Exit")
  ask("Choose 1-4", choice => {
    if (choice === "1") addToCart()
    else if (choice === "2") { showCart(); mainMenu() }
    else if (choice === "3") checkout()
    else if (choice === "4") { console.log("Goodbye!"); rl.close() }
    else { console.log("Invalid option."); mainMenu() }
  })
}

mainMenu()