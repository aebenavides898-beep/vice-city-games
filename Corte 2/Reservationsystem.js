let reservedTables = 0

for (let table = 1; table <= 5; table++) {
  let reserved = prompt("Is table " + table + " reserved? (yes/no)")

  if (reserved.toLowerCase() === "yes") {
    reservedTables++
  }
}

let available = 5 - reservedTables

alert(
  "Reservation Summary:\n" +
  "Reserved tables: " + reservedTables + "\n" +
  "Available tables: " + available
)
