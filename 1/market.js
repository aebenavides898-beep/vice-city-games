const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
function ask(text, cb) { rl.question(text + "\n> ", a => cb(a.trim())) }

// Product list: index matters so we can let user pick by number
const productList = [
  { name: "apple", price: 2, stock: 10 },
  { name: "banana", price: 1, stock: 15 },
  { name: "orange", price: 3, stock: 8 },
  { name: "mango", price: 4, stock: 6 },
  { name: "protein powder", price: 25, stock: 5 },
  { name: "doggo boggo doggy treats", price: 8, stock: 12 }
]

// Shopping cart: key = product index, value = quantity
const cart = new Map()

function showProducts() {
  console.log("\nAvailable products:")
  for (let i = 0; i < productList.length; i++) {
    const p = productList[i]
    console.log((i + 1) + ") " + p.name + " | Price: $" + p.price + " | Stock: " + p.stock)
  }
}

function showCart() {
  console.log("\nShopping Cart:")
  if (cart.size === 0) {
    console.log("Cart is empty.")
    return
  }
  let total = 0
  for (const [index, qty] of cart.entries()) {
    const product = productList[index]
    const subtotal = product.price * qty
    total += subtotal
    console.log(product.name + " | Qty: " + qty + " | Subtotal: $" + subtotal)
  }
  console.log("Total: $" + total)
}

function addToCart() {
  showProducts()
  ask("Choose product number", numText => {
    const idx = parseInt(numText, 10) - 1
    if (idx < 0 || idx >= productList.length) {
      console.log("Invalid product number.")
      return mainMenu()
    }
    const product = productList[idx]
    ask("Enter quantity", qtyText => {
      const qty = parseInt(qtyText, 10)
      if (!Number.isFinite(qty) || qty <= 0) {
        console.log("Invalid quantity.")
        return mainMenu()
      }
      if (qty > product.stock) {
        console.log("Not enough stock. Available: " + product.stock)
        return mainMenu()
      }
      product.stock -= qty
      cart.set(idx, (cart.get(idx) || 0) + qty)
      console.log("Added " + qty + " " + product.name + "(s) to cart.")
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