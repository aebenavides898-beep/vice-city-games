function getProgram(option) {
  let details = ""
  switch (option) {
    case 1:
      details = "Program: Quick\nDuration: 30 minutes\nPrice: $5"
      break
    case 2:
      details = "Program: Normal\nDuration: 45 minutes\nPrice: $7"
      break
    case 3:
      details = "Program: Heavy\nDuration: 60 minutes\nPrice: $10"
      break
    case 4:
      details = "Program: Delicate\nDuration: 40 minutes\nPrice: $8"
      break
    default:
      details = "Invalid option. Please choose between 1 and 4."
      break
  }
  return details
}

let program = parseInt(prompt(
  "Select wash program:\n" +
  "1. Quick (30min - $5)\n" +
  "2. Normal (45min - $7)\n" +
  "3. Heavy (60min - $10)\n" +
  "4. Delicate (40min - $8)"
))

let result = getProgram(program)
alert(result)
