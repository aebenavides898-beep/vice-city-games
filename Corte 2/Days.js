let dias = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let totalTemp = 0

let firstTemp = parseFloat(prompt("Enter the max temperature for " + dias[0] + ":"))
totalTemp += firstTemp
let maxTemp = firstTemp
let minTemp = firstTemp
let hottestDay = dias[0]
let coldestDay = dias[0]

for (let i = 1; i < dias.length; i++) {
  let temp = parseFloat(prompt("Enter the max temperature for " + dias[i] + ":"))
  totalTemp += temp

  if (temp > maxTemp) {
    maxTemp = temp
    hottestDay = dias[i]
  }

  if (temp < minTemp) {
    minTemp = temp
    coldestDay = dias[i]
  }
}

let average = totalTemp / dias.length

alert(
  "Weekly Report:\n" +
  "Hottest day: " + hottestDay + " (" + maxTemp + "°)\n" +
  "Coldest day: " + coldestDay + " (" + minTemp + "°)\n" +
  "Average temperature: " + average.toFixed(2) + "°"
)
