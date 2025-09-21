// hotelReservations_object.js — Run with: node hotelReservations_object.js

const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

function ask(text, cb) { rl.question(text + "\n> ", a => cb(a.trim())) }

const ROOM_TYPES = {
  individual: { max: 2, allowSmoking: false, allowPets: false },
  double:     { max: 4, allowSmoking: true,  allowPets: false },
  family:     { max: 6, allowSmoking: true,  allowPets: true  }
}

let nextId = 1
let reservations = {} // { [id]: reservation }

function typeFromChoice(n) {
  if (n === "1") return "individual"
  if (n === "2") return "double"
  if (n === "3") return "family"
  return null
}

function yesNo(n) {
  if (n === "1") return true
  if (n === "2") return false
  return null
}

function totalPeopleInHotel() {
  let total = 0
  for (const r of Object.values(reservations)) total += r.people
  return total
}

function roomsReservedCount() {
  return Object.keys(reservations).length
}

function showReservation(r) {
  console.log(
    "ID: " + r.id +
    "\nName: " + r.name +
    "\nCountry: " + r.country +
    "\nRoom Type: " + r.type +
    "\nSmoker: " + (r.smoker ? "yes" : "no") +
    "\nPet: " + (r.pet ? "yes" : "no") +
    "\nPeople: " + r.people +
    "\nStay Period: " + r.period +
    "\nHotel People (at creation): " + r.hotelPeopleAtCreation +
    "\n"
  )
}

function createReservation() {
  console.log("\nNew Reservation")

  console.log("Select room type:\n1) individual (max 2)\n2) double (max 4)\n3) family (max 6)")
  ask("Choose 1, 2 or 3", choiceType => {
    const type = typeFromChoice(choiceType)
    if (!type) { console.log("Invalid room choice."); return menu() }

    ask("How many guests? (digits only)", peopleText => {
      const people = parseInt(peopleText, 10)
      if (!Number.isFinite(people) || people <= 0) { console.log("Invalid number of guests."); return menu() }

      const rules = ROOM_TYPES[type]
      if (people > rules.max) {
        console.log("Invalid room: too many guests for " + type + ". Max is " + rules.max + ".")
        return menu()
      }

      console.log("Will bring a pet?\n1) yes\n2) no")
      ask("Choose 1 or 2", petText => {
        const pet = yesNo(petText)
        if (pet === null) { console.log("Invalid choice."); return menu() }
        if (pet && !rules.allowPets) {
          console.log("Invalid room: pets only allowed in family rooms.")
          return menu()
        }

        console.log("Smoking room?\n1) yes\n2) no")
        ask("Choose 1 or 2", smokerText => {
          const smoker = yesNo(smokerText)
          if (smoker === null) { console.log("Invalid choice."); return menu() }
          if (smoker && !rules.allowSmoking) {
            console.log("Invalid room: smoking only allowed in double or family rooms.")
            return menu()
          }

          ask("Enter full name", name => {
            if (!name) { console.log("Name required."); return menu() }
            ask("Enter country of origin", country => {
              if (!country) { console.log("Country required."); return menu() }
              ask("Enter stay period (e.g., 2025-10-01 to 2025-10-05)", period => {
                if (!period) { console.log("Stay period required."); return menu() }

                const reservation = {
                  id: nextId++,
                  name,
                  country,
                  type,
                  smoker,
                  pet,
                  people,
                  period,
                  hotelPeopleAtCreation: totalPeopleInHotel() + people
                }

                reservations[reservation.id] = reservation

                console.log("\nReservation created with ID: " + reservation.id)
                showReservation(reservation)
                console.log("Total rooms reserved: " + roomsReservedCount())
                console.log("Total people currently in hotel: " + totalPeopleInHotel())
                menu()
              })
            })
          })
        })
      })
    })
  })
}

function listReservations() {
  if (roomsReservedCount() === 0) { console.log("\nNo reservations."); return menu() }
  console.log("\nAll Reservations")
  for (const r of Object.values(reservations)) showReservation(r)
  console.log("Total rooms reserved: " + roomsReservedCount())
  console.log("Total people currently in hotel: " + totalPeopleInHotel())
  menu()
}

function showTotals() {
  console.log("\nTotals")
  console.log("Total rooms reserved: " + roomsReservedCount())
  console.log("Total people currently in hotel: " + totalPeopleInHotel())
  menu()
}

function cancelReservation() {
  if (roomsReservedCount() === 0) { console.log("\nNo reservations to cancel."); return menu() }
  console.log("\nCancel Reservation")
  ask("Enter reservation ID to cancel", idText => {
    const id = parseInt(idText, 10)
    if (!Number.isFinite(id)) { console.log("Invalid ID."); return menu() }
    if (!reservations[id]) { console.log("Reservation not found."); return menu() }
    delete reservations[id]
    console.log("Reservation " + id + " cancelled.")
    console.log("Total rooms reserved: " + roomsReservedCount())
    console.log("Total people currently in hotel: " + totalPeopleInHotel())
    menu()
  })
}

function menu() {
  console.log("\nHotel Reservations (Objects)")
  console.log("1) Create reservation")
  console.log("2) List reservations")
  console.log("3) Show totals")
  console.log("4) Cancel reservation")
  console.log("5) Exit")
  ask("Choose an option", choice => {
    if (choice === "1") return createReservation()
    if (choice === "2") return listReservations()
    if (choice === "3") return showTotals()
    if (choice === "4") return cancelReservation()
    if (choice === "5") { console.log("Goodbye."); rl.close(); return }
    console.log("Invalid option.")
    menu()
  })
}

menu()