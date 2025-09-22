//  run with node bank.js

const readline = require("readline") // import the readline module to read input and output to the console

let nextNumber = 0
let turnsMap = new Map()
let lastCalled = null

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function prompt(question) { // function to prompt the user for input
  return new Promise(resolve => rl.question(question, answer => resolve(answer))) // return a promise that resolves with the user's answer promise contains a value that will be available in the future
}

function showCounter() { // function to show the total number of issued tickets
  console.log("Total Issued:", nextNumber) // print the total number of issued tickets
}

function showLast() {
  console.log("Last Called:", lastCalled == null ? "—" : lastCalled)
}

function showQueue() {
  const waiting = []
  for (const [num, info] of turnsMap.entries()) {
    if (info.status === "waiting") waiting.push(num)
  }
  console.log("Waiting Queue:", waiting.length ? waiting.join(", ") : "Empty")
}

function takeTicket() {
  nextNumber++
  const n = nextNumber
  turnsMap.set(n, { status: "waiting" }) // add the new ticket to the map with status "waiting"
  console.log("You took ticket", n)
}

function callNext() {
  let toCall = null
  for (const [num, info] of turnsMap.entries()) {
    if (info.status === "waiting") { toCall = num; break }
  }
  if (toCall == null) {
    console.log("No clients waiting")
    return
  }
  turnsMap.set(toCall, { status: "called" }) // update the status of the called ticket to "called"
  lastCalled = toCall
  console.log("Calling ticket", toCall)
}

function callTicketByNumber(num) {
  if (!turnsMap.has(num) || turnsMap.get(num).status !== "waiting") {
    console.log("Ticket", num, "not in queue")
    return
  }
  turnsMap.set(num, { status: "called" })
  lastCalled = num
  console.log("Calling ticket", num)
}

function removeTicketByNumber(num) {
  if (!turnsMap.has(num) || turnsMap.get(num).status !== "waiting") {
    console.log("Ticket", num, "not in queue")
    return
  }
  turnsMap.delete(num)
  console.log("Removed ticket", num)
}

function resetAll() {
  nextNumber = 0
  turnsMap.clear()
  lastCalled = null
  console.log("Reset done")
}

async function mainMenu() {
  console.log("\n=== Bank Queue - Map (Node) ===")
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