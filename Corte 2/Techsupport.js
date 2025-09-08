function getDepartment(option) {
  let info = ""
  switch (option) {
    case 1:
      info = "Department: Billing\nContact: billing@company.com\nPhone: 111-222-333"
      break
    case 2:
      info = "Department: Technical Support\nContact: support@company.com\nPhone: 222-333-444"
      break
    case 3:
      info = "Department: Sales\nContact: sales@company.com\nPhone: 333-444-555"
      break
    case 4:
      info = "Department: Complaints and Suggestions\nContact: complaints@company.com\nPhone: 444-555-666"
      break
    default:
      info = "Invalid option. Please select between 1 and 4."
      break
  }
  return info
}

let problem = parseInt(prompt(
  "Select problem type:\n" +
  "1. Billing\n" +
  "2. Technical problems\n" +
  "3. Sales\n" +
  "4. Complaints and suggestions"
))

let result = getDepartment(problem)
alert(result)
