const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
function ask(text, cb) { rl.question(text + "\n> ", a => cb(a.trim())) }

// Statistics stored in an object
const stats = {
  total: 0,
  phone: 0,
  advisoryStudent: 0,
  advisoryDirector: 0,
  transfersToPhone: 0
}

// Storage for all attentions
let nextTicket = 1
const attentions = {} // { ticketId: { ticket, id, module, subtype, fromTransfer } }

function inc(key) { stats[key]++ }

function showStats() {
  console.log("\n--- STATISTICS ---")
  console.log("Total attentions (events): " + stats.total)
  console.log("Phone calls: " + stats.phone)
  console.log("Advisory - Student: " + stats.advisoryStudent)
  console.log("Advisory - Director: " + stats.advisoryDirector)
  console.log("Transfers (advisory → phone): " + stats.transfersToPhone)
}

function mainMenu() {
  console.log("\nUNIVERSITY ATTENTION SYSTEM")
  console.log("1) New attention")
  console.log("2) Show statistics")
  console.log("3) Exit")
  ask("Choose 1-3", choice => {
    if (choice === "1") newAttention()
    else if (choice === "2") { showStats(); mainMenu() }
    else if (choice === "3") { console.log("Goodbye."); rl.close() }
    else { console.log("Invalid option."); mainMenu() }
  })
}

function newAttention() {
  console.log("\nSelect module:")
  console.log("1) Phone call")
  console.log("2) Advisory")
  ask("Choose 1 or 2", mod => {
    if (mod === "1") {
      phoneFlow()
    } else if (mod === "2") {
      advisoryFlow()
    } else {
      console.log("Invalid option.")
      mainMenu()
    }
  })
}

function phoneFlow() {
  ask("Enter your ID number", id => {
    const ticket = nextTicket++
    const rec = { ticket, id, module: "phone", subtype: null, fromTransfer: false }
    attentions[ticket] = rec
    inc("total")
    inc("phone")
    console.log("\nPhone attention created. Ticket: " + ticket)
    mainMenu()
  })
}

function advisoryFlow() {
  console.log("\nAdvisory type:")
  console.log("1) Student")
  console.log("2) Director")
  ask("Choose 1 or 2", advType => {
    let subtype = null
    if (advType === "1") subtype = "student"
    else if (advType === "2") subtype = "director"
    else { console.log("Invalid option."); return mainMenu() }

    ask("Enter your ID number", id => {
      const ticket = nextTicket++
      const rec = { ticket, id, module: "advisory", subtype, fromTransfer: false }
      attentions[ticket] = rec
      inc("total")
      if (subtype === "student") inc("advisoryStudent")
      else inc("advisoryDirector")

      console.log("\nAdvisory created. Ticket: " + ticket)

      console.log("\nDo you want to transfer this advisory to a phone call?")
      console.log("1) Yes")
      console.log("2) No")
      ask("Choose 1 or 2", transferAns => {
        if (transferAns === "1") {
          const t2 = nextTicket++
          const rec2 = { ticket: t2, id, module: "phone", subtype: null, fromTransfer: true }
          attentions[t2] = rec2
          inc("total")
          inc("phone")
          inc("transfersToPhone")
          console.log("Transfer registered. New phone ticket: " + t2)
          mainMenu()
        } else if (transferAns === "2") {
          mainMenu()
        } else {
          console.log("Invalid option. Returning to main menu.")
          mainMenu()
        }
      })
    })
  })
}

mainMenu()