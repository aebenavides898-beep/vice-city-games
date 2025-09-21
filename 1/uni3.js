// universityAttentionStats_matrix.js — Run: node universityAttentionStats_matrix.js

const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
function ask(text, cb) { rl.question(text + "\n> ", a => cb(a.trim())) }

// stats as a "matrix" (array) with fixed index positions
// [ total, phone, advisoryStudent, advisoryDirector, transfersToPhone ]
const IDX_TOTAL = 0
const IDX_PHONE = 1
const IDX_ADV_STU = 2
const IDX_ADV_DIR = 3
const IDX_TRANS = 4
const stats = [0, 0, 0, 0, 0]

// attentions as a "matrix" of rows (each row is an array)
// [ ticket, id, module, subtype, fromTransfer ]
// module in {"phone","advisory"}, subtype in {"student","director",null}
let nextTicket = 1
const attentions = []

function inc(idx) { stats[idx] = (stats[idx] || 0) + 1 }

function showStats() {
  console.log("\n--- STATISTICS ---")
  console.log("Total attentions (events): " + stats[IDX_TOTAL])
  console.log("Phone calls: " + stats[IDX_PHONE])
  console.log("Advisory - Student: " + stats[IDX_ADV_STU])
  console.log("Advisory - Director: " + stats[IDX_ADV_DIR])
  console.log("Transfers (advisory → phone): " + stats[IDX_TRANS])
}

function mainMenu() {
  console.log("\nUNIVERSITY ATTENTION SYSTEM (Matrix)")
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
    if (mod === "1") phoneFlow()
    else if (mod === "2") advisoryFlow()
    else { console.log("Invalid option."); mainMenu() }
  })
}

function phoneFlow() {
  ask("Enter your ID number", id => {
    const ticket = nextTicket++
    attentions.push([ticket, id, "phone", null, false])
    inc(IDX_TOTAL)
    inc(IDX_PHONE)
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
      attentions.push([ticket, id, "advisory", subtype, false])
      inc(IDX_TOTAL)
      if (subtype === "student") inc(IDX_ADV_STU)
      else inc(IDX_ADV_DIR)

      console.log("\nAdvisory created. Ticket: " + ticket)

      console.log("\nDo you want to transfer this advisory to a phone call?")
      console.log("1) Yes")
      console.log("2) No")
      ask("Choose 1 or 2", transferAns => {
        if (transferAns === "1") {
          const t2 = nextTicket++
          attentions.push([t2, id, "phone", null, true])
          inc(IDX_TOTAL)
          inc(IDX_PHONE)
          inc(IDX_TRANS)
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