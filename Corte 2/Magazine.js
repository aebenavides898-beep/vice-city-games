function calculateSubscription(magazine, months) {
  let total = 0

  switch (magazine.toLowerCase()) {
    case "money":
      if (months === 3) total = 6
      else if (months === 6) total = 11
      else if (months === 12) total = 20
      break

    case "national geographic":
      if (months === 3) total = 10
      else if (months === 6) total = 13
      else if (months === 12) total = 22
      break

    case "american journal":
      if (months === 3) total = 12
      else if (months === 6) total = 18
      else if (months === 12) total = 30
      break

    default:
      alert("Invalid magazine")
  }

  return total
}

let magazine = prompt("Enter magazine (Money, National Geographic, American Journal):")
let months = parseInt(prompt("Enter subscription time (3 = 3 months, 6 = 6 months, 12 = 1 year):"))
let provider = prompt("Enter your mobile provider:")

let cost = calculateSubscription(magazine, months)

if (provider.toLowerCase() === "claro") {
  cost = cost - (cost * 0.05)
}

alert("TOTAL TO PAY: $" + cost + " USD")
