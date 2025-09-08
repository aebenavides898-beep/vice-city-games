let product
let totalSold = 0

while (product !== "terminar") {
  product = prompt("Enter sold product (type 'terminar' to finish):")

  if (product !== "terminar") {
    totalSold++
  }
}

alert("End of the day.\nTotal products sold: " + totalSold)
