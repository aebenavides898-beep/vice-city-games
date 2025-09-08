let totalSaved = 0
let week = 1

while (week <= 4) {
  let amount = parseFloat(prompt("Enter the savings for week " + week + ":"))
  totalSaved += amount
  week++
}

alert("Total savings after 4 weeks: $" + totalSaved)
