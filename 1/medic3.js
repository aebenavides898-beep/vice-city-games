const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
function ask(text, cb) { rl.question(text + "\n> ", a => cb(a.trim())) }

const doctors = ["Patel", "Kennedy", "Gomex", "Guyen", "Atrazcada", "Schimdt"]
const timeSlots = ["08:00","09:00","10:00","11:00","12:00"]

let nextId = 1
const appointments = {}          // { [id]: { id, patient, doctorIndex, doctor, date, time, when } }
const occupied = {}              // { "doctorIndex|YYYY-MM-DD|HH:MM": true }

function slotKey(doctorIndex, dateStr, timeStr) {
  return doctorIndex + "|" + dateStr + "|" + timeStr
}

function toDate(dateStr) {
  const ms = Date.parse(dateStr + "T00:00:00")
  if (!Number.isFinite(ms)) return null
  return new Date(ms)
}

function fmtDate(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth()+1).padStart(2,"0")
  const dd = String(d.getDate()).padStart(2,"0")
  return y + "-" + m + "-" + dd
}

function isMonToSat(d) {
  const w = d.getDay()
  return w >= 1 && w <= 6
}

function upcomingMonToSat(days) {
  const out = []
  const now = new Date()
  for (let i = 0; i < days; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i)
    if (isMonToSat(d)) out.push(d)
  }
  return out
}

function pickDoctor(cb) {
  console.log("\nChoose a doctor:")
  for (let i = 0; i < doctors.length; i++) console.log((i+1) + ") " + doctors[i])
  ask("Enter doctor number (1-" + doctors.length + ")", txt => {
    const n = parseInt(txt, 10)
    if (!Number.isFinite(n) || n < 1 || n > doctors.length) { console.log("Invalid doctor number."); return cb(null) }
    cb(n - 1)
  })
}

function pickDateFriendly(cb) {
  const upcoming = upcomingMonToSat(14)
  console.log("\nPick a date (Mon–Sat). Options:")
  console.log("- Number from the list")
  console.log("- today / tomorrow")
  console.log("- A date like 2025-11-04 (must be Mon–Sat)")
  for (let i = 0; i < upcoming.length; i++) {
    const d = upcoming[i]
    const label = d.toLocaleDateString(undefined, { weekday: "short", year: "numeric", month: "2-digit", day: "2-digit" })
    console.log((i+1) + ") " + fmtDate(d) + "  (" + label + ")")
  }
  ask("Your choice", raw => {
    const s = raw.toLowerCase()
    if (s === "today") {
      const d = new Date()
      if (!isMonToSat(d)) { console.log("Today is not a working day (Mon–Sat)."); return cb(null) }
      return cb(fmtDate(d))
    }
    if (s === "tomorrow") {
      const d = new Date()
      d.setDate(d.getDate() + 1)
      if (!isMonToSat(d)) { console.log("Tomorrow is not a working day (Mon–Sat)."); return cb(null) }
      return cb(fmtDate(d))
    }
    const n = parseInt(raw, 10)
    if (Number.isFinite(n) && n >= 1 && n <= upcoming.length) return cb(fmtDate(upcoming[n-1]))
    const manual = toDate(raw)
    if (manual && isMonToSat(manual)) return cb(fmtDate(manual))
    console.log("Invalid date choice.")
    cb(null)
  })
}

function freeSlotsFor(doctorIndex, dateStr) {
  const free = []
  for (const t of timeSlots) if (!occupied[slotKey(doctorIndex, dateStr, t)]) free.push(t)
  return free
}

function pickTimeFriendly(doctorIndex, dateStr, cb) {
  const free = freeSlotsFor(doctorIndex, dateStr)
  if (free.length === 0) { console.log("\nNo free time slots on " + dateStr + " for this doctor."); return cb(null) }
  console.log("\nAvailable time slots on " + dateStr + ":")
  for (let i = 0; i < free.length; i++) console.log((i+1) + ") " + free[i])
  ask("Choose a time by number", txt => {
    const n = parseInt(txt, 10)
    if (!Number.isFinite(n) || n < 1 || n > free.length) { console.log("Invalid time choice."); return cb(null) }
    cb(free[n-1])
  })
}

function scheduleAppointment() {
  console.log("\nSchedule an appointment")
  pickDoctor(di => {
    if (di === null) return mainMenu()
    const doctorName = doctors[di]
    pickDateFriendly(dateStr => {
      if (!dateStr) return mainMenu()
      pickTimeFriendly(di, dateStr, timeStr => {
        if (!timeStr) return mainMenu()
        ask("Enter patient name", patient => {
          if (!patient) { console.log("Patient name is required."); return mainMenu() }
          console.log("\nPlease confirm:")
          console.log("Doctor: " + doctorName)
          console.log("Date: " + dateStr)
          console.log("Time: " + timeStr)
          console.log("Patient: " + patient)
          ask("Confirm? (1 yes / 2 no)", ok => {
            if (ok !== "1") { console.log("Cancelled."); return mainMenu() }
            const id = nextId++
            const when = Date.parse(dateStr + "T" + timeStr + ":00")
            const rec = { id, patient, doctorIndex: di, doctor: doctorName, date: dateStr, time: timeStr, when }
            appointments[id] = rec
            occupied[slotKey(di, dateStr, timeStr)] = true
            console.log("\nAppointment scheduled. ID: " + id)
            console.log("Doctor: " + doctorName + " | " + dateStr + " " + timeStr + " | Patient: " + patient)
            mainMenu()
          })
        })
      })
    })
  })
}

function viewAppointments() {
  console.log("\nScheduled appointments")
  const list = Object.values(appointments)
  if (list.length === 0) { console.log("No appointments."); return mainMenu() }
  list.sort((a, b) => (a.when - b.when) || (a.doctorIndex - b.doctorIndex))
  for (const a of list) {
    console.log("ID: " + a.id + " | " + a.date + " " + a.time + " | Doctor: " + a.doctor + " | Patient: " + a.patient)
  }
  mainMenu()
}

function cancelAppointment() {
  const list = Object.values(appointments)
  if (list.length === 0) { console.log("\nNo appointments to cancel."); return mainMenu() }
  console.log("\nCancel an appointment")
  ask("Enter appointment ID to cancel", idText => {
    const id = parseInt(idText, 10)
    if (!Number.isFinite(id)) { console.log("Invalid ID."); return mainMenu() }
    const rec = appointments[id]
    if (!rec) { console.log("Appointment not found."); return mainMenu() }
    delete appointments[id]
    delete occupied[slotKey(rec.doctorIndex, rec.date, rec.time)]
    console.log("Appointment " + id + " cancelled.")
    mainMenu()
  })
}

function mainMenu() {
  console.log("\nMEDICAL APPOINTMENT SYSTEM (Objects)")
  console.log("1) Schedule appointment")
  console.log("2) View appointments")
  console.log("3) Cancel appointment")
  console.log("4) Exit")
  ask("Choose 1-4", choice => {
    if (choice === "1") scheduleAppointment()
    else if (choice === "2") viewAppointments()
    else if (choice === "3") cancelAppointment()
    else if (choice === "4") { console.log("Goodbye."); rl.close() }
    else { console.log("Invalid option."); mainMenu() }
  })
}

mainMenu()