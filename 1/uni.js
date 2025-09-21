const readline = require("readline") // Readline module to handle input/output
const rl = readline.createInterface({ input: process.stdin, output: process.stdout }) // Create interface for input/output
function ask(text, cb) { rl.question(text + "\n> ", a => cb(a.trim())) } // Function to ask questions and get user input

const stats = new Map([ // Map to hold statistics
  ["total", 0],
  ["phone", 0],
  ["advisoryStudent", 0],
  ["advisoryDirectivo", 0],
  ["transfersToPhone", 0]
])

let nextTicket = 1
const attentions = new Map()

function inc(key) { stats.set(key, (stats.get(key) || 0) + 1) }

function showStats() {
  console.log("\nESTADÍSTICAS")
  console.log("Total atenciones: " + stats.get("total"))
  console.log("Llamadas telefónicas: " + stats.get("phone"))
  console.log("Asesorías estudiante: " + stats.get("advisoryStudent"))
  console.log("Asesorías directivo: " + stats.get("advisoryDirectivo"))
  console.log("Transferencias asesoría → teléfono: " + stats.get("transfersToPhone"))
}

function mainMenu() {
  console.log("\nSISTEMA DE ATENCIÓN UNIVERSIDAD")
  console.log("1) Nueva atención")
  console.log("2) Ver estadísticas")
  console.log("3) Salir")
  ask("Elige 1-3", choice => {
    if (choice === "1") newAttention()
    else if (choice === "2") { showStats(); mainMenu() }
    else if (choice === "3") { console.log("Adiós."); rl.close() }
    else { console.log("Opción inválida."); mainMenu() }
  })
}

function newAttention() {
  console.log("\nSelecciona módulo:")
  console.log("1) Llamada telefónica")
  console.log("2) Asesoría")
  ask("Elige 1 o 2", mod => {
    if (mod === "1") {
      phoneFlow()
    } else if (mod === "2") {
      advisoryFlow()
    } else {
      console.log("Opción inválida.")
      mainMenu()
    }
  })
}

function phoneFlow() {
  ask("Ingresa tu número de cédula", id => {
    const ticket = nextTicket++
    const rec = { ticket, id, module: "phone", subtype: null, fromTransfer: false }
    attentions.set(ticket, rec)
    inc("total")
    inc("phone")
    console.log("\nAtención telefónica creada. Ticket: " + ticket)
    mainMenu()
  })
}

function advisoryFlow() {
  console.log("\nTipo de asesoría:")
  console.log("1) Estudiante")
  console.log("2) Directivo")
  ask("Elige 1 o 2", advType => {
    let subtype = null
    if (advType === "1") subtype = "student"
    else if (advType === "2") subtype = "directivo"
    else { console.log("Opción inválida."); return mainMenu() }

    ask("Ingresa tu número de cédula", id => {
      const ticket = nextTicket++
      const rec = { ticket, id, module: "advisory", subtype, fromTransfer: false }
      attentions.set(ticket, rec)
      inc("total")
      if (subtype === "student") inc("advisoryStudent")
      else inc("advisoryDirectivo")

      console.log("\nAsesoría creada. Ticket: " + ticket)

      console.log("\n¿Deseas transferir esta asesoría a llamada telefónica?")
      console.log("1) Sí")
      console.log("2) No")
      ask("Elige 1 o 2", transferAns => {
        if (transferAns === "1") {
          const t2 = nextTicket++
          const rec2 = { ticket: t2, id, module: "phone", subtype: null, fromTransfer: true }
          attentions.set(t2, rec2)
          inc("total")
          inc("phone")
          inc("transfersToPhone")
          console.log("Transferencia registrada. Nuevo ticket de llamada: " + t2)
          mainMenu()
        } else if (transferAns === "2") {
          mainMenu()
        } else {
          console.log("Opción inválida. Volviendo al menú principal.")
          mainMenu()
        }
      })
    })
  })
}

mainMenu()