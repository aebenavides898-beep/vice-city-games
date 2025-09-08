function getTicket(option) {
  let details = ""
  switch (option) {
    case 1:
      details = "Ticket: General\nPrice: $20\nBenefits: Standard entry"
      break
    case 2:
      details = "Ticket: VIP\nPrice: $50\nBenefits: Preferred seating + Free drink"
      break
    case 3:
      details = "Ticket: Platinum\nPrice: $100\nBenefits: Front row + Backstage access"
      break
    case 4:
      details = "Ticket: Child\nPrice: $10\nBenefits: Entry for children under 12"
      break
    default:
      details = "Invalid option. Please choose between 1 and 4."
      break
  }
  return details
}

let ticketType = parseInt(prompt(
  "Select ticket type:\n" +
  "1. General ($20)\n" +
  "2. VIP ($50)\n" +
  "3. Platinum ($100)\n" +
  "4. Child ($10)"
))

let result = getTicket(ticketType)
alert(result)
