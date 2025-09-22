

const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const ROOM_TYPES = new Map([ // creates a map named ROOM_TYPES
  ["individual", { max: 2 }],
  ["double",     { max: 4 }],
  ["family",     { max: 6 }]
])

let nextId = 1 // next reservation ID works as a simple counter
let reservations = new Map() // creates new empty map named reservations saves reservations with key as ID and value as reservation object

function ask(q, cb) { rl.question(q + "\n> ", a => cb(a.trim())) } // function to ask a question and get user input

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
  for (const r of reservations.values()) total += r.people // sum the number of people in each reservation
  return total
}

function roomsReservedCount() {
  return reservations.size
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
    if (!type) { console.log("Invalid room type."); return menu() }

    ask("How many guests? (digits only)", peopleText => {
      const people = parseInt(peopleText, 10)
      if (!Number.isFinite(people) || people <= 0) { console.log("Invalid number of guests."); return menu() }
      const maxAllowed = ROOM_TYPES.get(type).max
      if (people > maxAllowed) { console.log("Too many guests for this room. Max is " + maxAllowed + "."); return menu() }

      console.log("Will bring a pet?\n1) yes\n2) no")
      ask("Choose 1 or 2", petText => {
        const pet = yesNo(petText)
        if (pet === null) { console.log("Invalid choice."); return menu() }
        if (pet && type !== "family") { console.log("Pets are only allowed in family rooms."); return menu() }

        console.log("Smoking room?\n1) yes\n2) no")
        ask("Choose 1 or 2", smokerText => {
          const smoker = yesNo(smokerText)
          if (smoker === null) { console.log("Invalid choice."); return menu() }
          if (smoker && type === "individual") { console.log("Smoking is only allowed in double or family rooms."); return menu() }

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

                reservations.set(reservation.id, reservation)

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
  if (reservations.size === 0) { console.log("\nNo reservations."); return menu() }
  console.log("\nAll Reservations")
  for (const r of reservations.values()) showReservation(r)
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
  if (reservations.size === 0) { console.log("\nNo reservations to cancel."); return menu() }
  console.log("\nCancel Reservation")
  ask("Enter reservation ID to cancel", idText => {
    const id = parseInt(idText, 10)
    if (!Number.isFinite(id)) { console.log("Invalid ID."); return menu() }
    if (!reservations.has(id)) { console.log("Reservation not found."); return menu() }
    reservations.delete(id)
    console.log("Reservation " + id + " cancelled.")
    console.log("Total rooms reserved: " + roomsReservedCount())
    console.log("Total people currently in hotel: " + totalPeopleInHotel())
    menu()
  })
}

function menu() {
  console.log("\nHotel Reservations (Map)")
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