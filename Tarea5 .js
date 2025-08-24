let id = "123456"
let purchase = 150000
let points = 100
let added = 0

if (purchase <= 100000) added = 100
else if (purchase <= 500000) added = 250
else added = 400

let newPoints = points + added
console.log("ID: " + id)
console.log("Purchase: $" + purchase)
console.log("Points earned: " + added)
console.log("New total points: " + newPoints)

if (newPoints >= 500) {
  let discount = purchase * 0.20
  console.log("Congrats! You have a discount of $" + discount + " for next purchase.")
} else {
  console.log("Keep going. You need " + (500 - newPoints) + " more points.")
}
