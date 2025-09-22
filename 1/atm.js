const readline = require("readline")

// Create interface for input/output
const rl = readline.createInterface({ // nodes equivalent of Python's input()
  input: process.stdin, // this tells readline to listen to standard input (keyboard) input is the keyboard
  output: process.stdout// this tells readline to show the text in the standard output (console) output is the console and or terminal
})

// Fake "database" 
const bankDB = { // using objects
  "1001": { pin: "1234", name: "Alice",  accounts: { checking: 900000, savings: 1200000 } },
  "2002": { pin: "4321", name: "Bob",    accounts: { checking: 500000, savings: 300000 } },
  "3003": { pin: "1111", name: "Carlos", accounts: { checking: 100000, savings: 750000 } }
}

// --- Helpers ---
function parseFriendlyAmount(raw) { // parse amounts like "50", "50k", "fifty", "50000"
  if (!raw) return NaN// if no input, return NaN
  const s = raw.trim().toLowerCase() // create a variable s that is the trimmed and lowercased version of raw
  if (s === "fifty") return 50000 // if s is "fifty", return 50000 (special case)
  if (s.endsWith("k")) { // if s ends with "k"
    const n = parseFloat(s.slice(0, -1)) // create a variable n that is the float version of s without the last character (the "k")
    if (!Number.isFinite(n)) return NaN // if n is not a finite number, return NaN
    return Math.round(n * 1000) // return n multiplied by 1000, (special case for "k")
  }
  const n = parseFloat(s) // create a variable n that is the float version of s
  if (!Number.isFinite(n)) return NaN // if n is not a finite number, return NaN
  return n < 1000 ? Math.round(n * 1000) : Math.round(n) // if n is less than 1000, return n multiplied by 1000, else return n (normal case)
}
function ensureMultipleOf50k(amount) {// ensure amount is a positive multiple of 50,000
  return amount > 0 && amount % 50000 === 0 // return true if amount is greater than 0 and amount ends with 00000
}

// --- Operations ---
function withdraw(profile) { // (profile) is the user object from bankDB
  const accounts = Object.keys(profile.accounts) // Object.keys(profile.accounts) returns an array of the keys in profile.accounts (checking, savings)
  rl.question("Withdraw from which account? (1) " + accounts[0] + "  (2) " + accounts[1] + "\n> ", ansAcc => { // ask user which account to withdraw from
    const accIdx = parseInt(ansAcc, 10) - 1 // coverts ansAccm to a whole number and subtracts 1 to get the index of the account in the accounts array
    const account = accounts[accIdx] //get the account name from accIdx index
    if (!account) return menu(profile) // if account is not valid, return to menu

    rl.question("Enter amount (e.g., 50, 50k, fifty, 500000):\n> ", val => {
      const amount = parseFriendlyAmount(val) // parse means the amount entered by the user is converted to a number
      if (!Number.isFinite(amount) || !ensureMultipleOf50k(amount)) {
        console.log("Invalid amount. Must be multiple of 50k.")
        return menu(profile)
      }
      if (amount > profile.accounts[account]) {
        console.log("Insufficient funds.")
        return menu(profile)
      }
      profile.accounts[account] -= amount
      console.log("Withdrawal successful. Take $" + amount)
      console.log("New balance (" + account + "): $" + profile.accounts[account])
      menu(profile)
    })
  })
}

function deposit(profile) { // (profile) is the user object from bankDB
  const accounts = Object.keys(profile.accounts) // returns an array of the keys in profile.accounts (checking, savings)
  rl.question("Deposit to which account? (1) " + accounts[0] + "  (2) " + accounts[1] + "\n> ", ansAcc => { // ask user which account to deposit to 
    const accIdx = parseInt(ansAcc, 10) - 1 // coverts ansAccm to a whole number and subtracts 1 to get the index of the account in the accounts array
    const account = accounts[accIdx] //get the account name from accIdx index
    if (!account) return menu(profile) // if account is not valid, return to menu

    rl.question("Select deposit type: (1) cash  (2) check\n> ", ansType => {
      const type = ansType === "1" ? "cash" : ansType === "2" ? "check" : null
      if (!type) return menu(profile)

      rl.question("Enter amount (e.g., 50000 or 50k):\n> ", val => {
        const amount = parseFriendlyAmount(val) // parse means the amount entered by the user is converted to a number
        if (!Number.isFinite(amount) || amount <= 0) { // if amount is not a number or less than or equal to 0
          console.log("Invalid amount.")
          return menu(profile)
        }
        profile.accounts[account] += amount // add amount to the selected account
        console.log("Deposit successful (" + type + "). New balance (" + account + "): $" + profile.accounts[account]) // show new balance
        menu(profile) 
      })
    })
  })
}

function transfer(profile) {
  const accounts = Object.keys(profile.accounts)
  rl.question("From which account? (1) " + accounts[0] + "  (2) " + accounts[1] + "\n> ", ansFrom => {
    const from = accounts[parseInt(ansFrom, 10) - 1]
    if (!from) return menu(profile)

    rl.question("To which account? (1) " + accounts[0] + "  (2) " + accounts[1] + "\n> ", ansTo => {
      const to = accounts[parseInt(ansTo, 10) - 1]
      if (!to || to === from) return menu(profile)

      rl.question("Enter amount (e.g., 50000 or 50k):\n> ", val => {
        const amount = parseFriendlyAmount(val)
        if (!Number.isFinite(amount) || amount <= 0) {
          console.log("Invalid amount.")
          return menu(profile)
        }
        if (amount > profile.accounts[from]) {
          console.log("Insufficient funds.")
          return menu(profile)
        }
        profile.accounts[from] -= amount // subtract amount from the "from" account
        profile.accounts[to] += amount // add amount to the "to" account
        console.log("Transfer successful. " + from + " -> " + to + ": $" + amount)
        console.log("New balances — " + from + ": $" + profile.accounts[from] + ", " + to + ": $" + profile.accounts[to])
        menu(profile)
      })
    })
  })
}

function balanceInquiry(profile) {
  const accounts = Object.keys(profile.accounts)
  rl.question("Which account? (1) " + accounts[0] + "  (2) " + accounts[1] + "\n> ", ansAcc => {
    const account = accounts[parseInt(ansAcc, 10) - 1]
    if (!account) return menu(profile)
    console.log("Balance (" + account + "): $" + profile.accounts[account])
    menu(profile)
  })
}

// --- Menu & Login ---
function menu(profile) {
  rl.question("\nMenu:\n1) Withdraw\n2) Deposit\n3) Transfer\n4) Balance Inquiry\n5) Exit\n> ", choice => {
    if (choice === "1") withdraw(profile)
    else if (choice === "2") deposit(profile)
    else if (choice === "3") transfer(profile)
    else if (choice === "4") balanceInquiry(profile)
    else if (choice === "5") { console.log("Goodbye."); rl.close() }
    else { console.log("Invalid option."); menu(profile) }
  })
}

function login() {
  console.log("=== ATM Simulation (Node.js with rl.question) ===")
  rl.question("Enter your ID document:\n> ", doc => {
    const client = bankDB[doc]
    if (!client) {
      console.log("Customer not found.")
      return rl.close()
    }
    let attempts = 0
    function checkPin() {
      rl.question("Enter your 4-digit PIN:\n> ", pin => {
        if (pin === client.pin) {
          console.log("Welcome, " + client.name + ".")
          return menu(client)
        }
        attempts++
        if (attempts >= 3) {
          console.log("Too many attempts. Session ended.")
          return rl.close()
        }
        console.log("Invalid PIN. Attempts left: " + (3 - attempts))
        checkPin()
      })
    }
    checkPin()
  })
}

login()