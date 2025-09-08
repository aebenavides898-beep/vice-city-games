function getPlan(option) {
  let details = ""
  let price = 0

  switch (option) {
    case 1:
      details = "Plan: Basic\nSpeed: 10MB\nPrice per month: $15"
      price = 15
      break
    case 2:
      details = "Plan: Intermediate\nSpeed: 50MB\nPrice per month: $30"
      price = 30
      break
    case 3:
      details = "Plan: Premium\nSpeed: 100MB\nPrice per month: $50"
      price = 50
      break
    default:
      details = "Invalid option. Please select between 1 and 3."
      price = 0
      break
  }

  return { details, price }
}

let plan = parseInt(prompt(
  "Select your internet plan:\n" +
  "1. Basic (10MB - $15)\n" +
  "2. Intermediate (50MB - $30)\n" +
  "3. Premium (100MB - $50)"
))

let chosenPlan = getPlan(plan)

if (chosenPlan.price > 0) {
  let months = parseInt(prompt("Enter number of months for your contract:"))
  let total = chosenPlan.price * months
  alert(chosenPlan.details + "\nContract months: " + months + "\nTotal cost: $" + total)
} else {
  alert(chosenPlan.details)
}
