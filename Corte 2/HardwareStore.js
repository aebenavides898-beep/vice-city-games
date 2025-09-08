function pointsForPurchase(amount) {
  let points = 0
  switch (true) {
    case (amount < 100000):
      points = 100
      break
    case (amount < 500000):
      points = 250
      break
    default:
      points = 400
      break
  }
  return points
}

let initialPoints = 100
let exit = false

do {
  let id = prompt("Enter your ID:")
  let amount = parseInt(prompt("Enter the purchase amount (in pesos):"))

  let pointsEarned = pointsForPurchase(amount)
  let newBalance = initialPoints + pointsEarned

  let message =
    "ID: " + id +
    "\nPurchase amount: $" + amount +
    "\nPoints earned: " + pointsEarned +
    "\nNew points balance: " + newBalance

  if (newBalance >= 500) {
    let discount = amount * 0.20
    message += "\n\nCongratulations! You have a discount of $" +
      discount + " for your next purchase (20%)."
  } else {
    let missing = 500 - newBalance
    message += "\n\nKeep collecting. You need " +
      missing + " more points to reach 500."
  }

  alert(message)

  let option = prompt("Do you want to enter another purchase? (y/n)")
  if (option.toLowerCase() !== "y") {
    exit = true
  }

} while (!exit)