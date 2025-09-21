

const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
function ask(q, cb) { rl.question(q, a => cb(a.trim())) }

/* ---------------- Bank data (USING OBJECTS) ---------------- */
const bankDB = {
  "1001": { pin: "1234", name: "Alice",  accounts: { checking: 900000, savings: 1200000 } },
  "2002": { pin: "4321", name: "Bob",    accounts: { checking: 500000, savings:  300000 } },
  "3003": { pin: "1111", name: "Carlos", accounts: { checking: 100000, savings:  750000 } },
}

/* ---------------- Helpers ---------------- */
function pickFromList(title, options, cb) {
  console.log(title)
  for (let i = 0; i < options.length; i++) console.log(`${i + 1}) ${options[i]}`)
  ask("> ", answer => {
    const index = parseInt(answer, 10)
    if (!Number.isFinite(index) || index < 1 || index > options.length) {
      console.log("Please enter a valid number from the list.")
      return pickFromList(title, options, cb)
    }
    cb(options[index - 1], index)
  })
}

function accountsArray(profile) {
  return Object.keys(profile.accounts)
}

function pickAccount(profile, promptText, cb) {
  const arr = accountsArray(profile)
  pickFromList(promptText, arr, account => cb(account))
}

function parseFriendlyAmount(raw) {
  if (!raw) return NaN
  const s = raw.trim().toLowerCase()

  if (s === "fifty") return 50000

  if (s.endsWith("k")) {
    const n = parseFloat(s.slice(0, -1))
    if (!Number.isFinite(n)) return NaN
    return Math.round(n * 1000)
  }

  const n = parseFloat(s)
  if (!Number.isFinite(n)) return NaN

  return n < 1000 ? Math.round(n * 1000) : Math.round(n)
}

function ensureMultipleOf50k(amount) {
  return amount > 0 && amount % 50000 === 0
}

/* ---------------- Operations ---------------- */
function withdraw(profile) {
  console.log("\nWithdrawal")
  pickAccount(profile, "From which account:", account => {
    ask("Amount (e.g., 50, 50k, fifty, or full pesos like 500000): ", value => {
      const amount = parseFriendlyAmount(value)
      if (!Number.isFinite(amount)) { console.log("Invalid amount."); return menu(profile) }
      if (!ensureMultipleOf50k(amount)) {
        console.log("Amount must be a multiple of $50,000.")
        return menu(profile)
      }
      const balance = profile.accounts[account]
      if (amount > balance) { console.log("Insufficient funds."); return menu(profile) }
      profile.accounts[account] = balance - amount
      console.log(`Withdrawal successful. Take $${amount} from the cash tray.`)
      console.log(`New balance (${account}): $${profile.accounts[account]}`)
      menu(profile)
    })
  })
}

function deposit(profile) {
  console.log("\nDeposit")
  pickAccount(profile, "To which account:", account => {
    pickFromList("Deposit type:", ["cash", "check"], (type) => {
      ask("Amount in pesos (e.g., 50000 or 50k): ", value => {
        const amount = parseFriendlyAmount(value)
        if (!Number.isFinite(amount) || amount <= 0) { console.log("Invalid amount."); return menu(profile) }
        profile.accounts[account] = profile.accounts[account] + amount
        console.log(`Deposit successful (${type}). New balance (${account}): $${profile.accounts[account]}`)
        menu(profile)
      })
    })
  })
}

function transfer(profile) {
  console.log("\nTransfer")
  pickAccount(profile, "From account:", fromAccount => {
    pickAccount(profile, "To account:", toAccount => {
      if (fromAccount === toAccount) { console.log("Source and destination must be different."); return menu(profile) }
      ask("Amount in pesos (e.g., 50000 or 50k): ", value => {
        const amount = parseFriendlyAmount(value)
        if (!Number.isFinite(amount) || amount <= 0) { console.log("Invalid amount."); return menu(profile) }
        const balanceFrom = profile.accounts[fromAccount]
        if (amount > balanceFrom) { console.log("Insufficient funds."); return menu(profile) }
        profile.accounts[fromAccount] = balanceFrom - amount
        profile.accounts[toAccount] = profile.accounts[toAccount] + amount
        console.log(`Transfer successful. ${fromAccount} -> ${toAccount}: $${amount}`)
        console.log(`New balances — ${fromAccount}: $${profile.accounts[fromAccount]}, ${toAccount}: $${profile.accounts[toAccount]}`)
        menu(profile)
      })
    })
  })
}

function balanceInquiry(profile) {
  console.log("\nBalance Inquiry")
  pickAccount(profile, "Which account:", account => {
    console.log(`Balance (${account}): $${profile.accounts[account]}`)
    menu(profile)
  })
}

/* ---------------- Menu & Login ---------------- */
function menu(profile) {
  pickFromList("\nMenu:", [
    "Withdraw",
    "Deposit",
    "Transfer",
    "Balance Inquiry",
    "Exit"
  ], (choice, idx) => {
    if (idx === 1) withdraw(profile)
    else if (idx === 2) deposit(profile)
    else if (idx === 3) transfer(profile)
    else if (idx === 4) balanceInquiry(profile)
    else if (idx === 5) { console.log("Goodbye."); rl.close() }
  })
}

function login() {
  console.log("=== ATM Simulation (Objects, numeric choices) ===")
  ask("Enter ID document: ", documentID => {
    const client = bankDB[documentID]
    if (!client) { console.log("Customer not found."); return rl.close() }
    let attempts = 0
    function checkPin() {
      ask("Enter 4-digit PIN: ", pin => {
        if (pin === client.pin) { console.log(`Welcome, ${client.name}.`); return menu(client) }
        attempts++
        if (attempts >= 3) { console.log("Too many attempts. Session ended."); return rl.close() }
        console.log("Invalid PIN. Attempts left:", 3 - attempts)
        checkPin()
      })
    }
    checkPin()
  })
}

login()