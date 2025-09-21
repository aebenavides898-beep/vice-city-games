// Save as bank.js and run with: node bank.js

const readline = require("readline")

let state = {
  nextNumber: 0,
  queue: [],
  lastCalled: null
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function prompt(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer)))
}

function showCounter() {
  console.log("Total Issued:", state.nextNumber)
}

function showLast() {
  console.log("Last Called:", state.lastCalled == null ? "—" : state.lastCalled)
}

function showQueue() {
  console.log("Waiting Queue:", state.queue.length ? state.queue.join(", ") : "Empty")
}

function takeTicket() {
  state.nextNumber++
  const n = state.nextNumber
  state.queue.push(n)
  console.log("You took ticket", n)
}

function callNext() {
  if (state.queue.length === 0) {
    console.log("No clients waiting")
    return
  }
  const called = state.queue.shift()
  state.lastCalled = called
  console.log("Calling ticket", called)
}

function callTicketByNumber(num) {
  const index = state.queue.indexOf(num)
  if (index === -1) {
    console.log("Ticket", num, "not in queue")
    return
  }
  state.queue.splice(index, 1)
  state.lastCalled = num
  console.log("Calling ticket", num)
}

function removeTicketByNumber(num) {
  const index = state.queue.indexOf(num)
  if (index === -1) {
    console.log("Ticket", num, "not in queue")
    return
  }
  state.queue.splice(index, 1)
  console.log("Removed ticket", num)
}

function resetAll() {
  state.nextNumber = 0
  state.queue = []
  state.lastCalled = null
  console.log("Reset done")
}

async function mainMenu() {
  console.log("\n=== Bank Queue - Object (Node) ===")
  console.log("1) Take Ticket")
  console.log("2) Call Next")
  console.log("3) Show Queue")
  console.log("4) Show Total Issued")
  console.log("5) Show Last Called")
  console.log("6) Call Specific Ticket")
  console.log("7) Remove Specific Ticket")
  console.log("8) Reset")
  console.log("9) Exit")

  const choice = await prompt("> ")

  switch (choice.trim()) {
    case "1":
      takeTicket()
      break
    case "2":
      callNext()
      break
    case "3":
      showQueue()
      break
    case "4":
      showCounter()
      break
    case "5":
      showLast()
      break
    case "6": {
      const val = await prompt("Enter ticket number to call: ")
      const num = parseInt(val, 10)
      if (Number.isNaN(num)) console.log("Enter a valid number")
      else callTicketByNumber(num)
      break
    }
    case "7": {
      const val = await prompt("Enter ticket number to remove: ")
      const num = parseInt(val, 10)
      if (Number.isNaN(num)) console.log("Enter a valid number")
      else removeTicketByNumber(num)
      break
    }
    case "8":
      resetAll()
      break
    case "9":
      rl.close()
      return
    default:
      console.log("Invalid option")
  }

  await mainMenu()
}

mainMenu()