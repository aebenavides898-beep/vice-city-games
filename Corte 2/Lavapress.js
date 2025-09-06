function calculateCost(hoursSmall, hoursLarge) {
  let total = (hoursSmall * 3000) + (hoursLarge * 4000)
  let totalHours = hoursSmall + hoursLarge
  if (totalHours > 10) {
    total = total - (total * 0.03)
  }
  return total
}

let hoursSmall = 0
let hoursLarge = 0
let exit = false

while (!exit) {
  let option = parseInt(prompt(
    "=== LavaSpress ===\n" +
    "1. Hours SMALL washer\n" +
    "2. Hours LARGE washer\n" +
    "3. Calculate TOTAL\n" +
    "4. Exit"
  ))

  switch (option) {
    case 1:
      hoursSmall = parseInt(prompt("Enter hours for SMALL washer:"))
      break
    case 2:
      hoursLarge = parseInt(prompt("Enter hours for LARGE washer:"))
      break
    case 3:
      let total = calculateCost(hoursSmall, hoursLarge)
      alert("TOTAL TO PAY: $" + total)
      break
    case 4:
      exit = true
      break
    default:
      alert("Invalid option")
  }
}
