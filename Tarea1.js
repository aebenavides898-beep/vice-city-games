let smallHours = 5
let bigHours = 8
let total = (smallHours * 3000) + (bigHours * 4000)
if (smallHours + bigHours > 10) {
    total = total * 0.97
}
console.log("Total to pay: $" + total)
