let operator = "Claro"
let type = "package"
let amount = 15000
let packageCode = "CA"

if (type === "recarga") {
  if (amount > 10000) {
    console.log("Recharge successful: " + operator + " $" + amount)
  } else {
    console.log("Recharge must be greater than 10000.")
  }
} else if (type === "package") {
  if (operator === "Movistar") {
    console.log("Packages suspended for Movistar. Try recharge.")
  } else if (operator === "Claro") {
    if (packageCode === "CV") console.log("Package CV bought for $12000.")
    else if (packageCode === "CA") console.log("Package CA bought for $20000.")
    else console.log("Invalid package for Claro.")
  } else if (operator === "Tigo") {
    if (packageCode === "TA") console.log("Package TA bought for $22000.")
    else if (packageCode === "TB") console.log("Package TB bought for $30000.")
    else console.log("Invalid package for Tigo.")
  }
}