function getDiscount(day) {
  let discount = ""
  switch (day) {
    case 1:
      discount = "Monday: 10% discount"
      break
    case 3:
      discount = "Wednesday: 15% discount"
      break
    case 5:
      discount = "Friday: 20% discount"
      break
    case 2:
    case 4:
    case 6:
    case 7:
      discount = "No discount today"
      break
    default:
      discount = "Invalid day. Please enter a number between 1 and 7."
      break
  }
  return discount
}

let day = parseInt(prompt(
  "Enter the day (1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday, 7: Sunday):"
))

let result = getDiscount(day)
alert(result)
