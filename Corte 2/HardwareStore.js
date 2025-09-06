function pointsForPurchase(amount) {
  if (amount < 100000) {
    return 100
  } else if (amount < 500000) {
    return 250
  } else {
    return 400
  }
}

let id = prompt("Enter your ID:")
let amount = parseInt(prompt("Enter the purchase amount (in pesos):"))

let initialPoints = 100
let pointsEarned = pointsForPurchase(amount)
let newBalance = initialPoints + pointsEarned

let message =
  "ID: " + id +
  "\nPurchase amount: $" + amount +
  "\nPoints earned: " + pointsEarned +
  "\nNew points balance: " + newBalance

if (newBalance >= 500) {
  let pendingDiscount = amount * 0.20
  message += "\n\nCongratulations! You have a pending discount of $" + pendingDiscount + " for your next purchase (20%)."
} else {
  let missing = 500 - newBalance
  message += "\n\nKeep collecting. You need " + missing + " more points to reach 500."
}

alert(message)

