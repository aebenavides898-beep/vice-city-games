let code = "O12345"
code = code.toUpperCase()
let letter = code[0]
let numbers = code.slice(1)

if (code.length === 6 && numbers.length === 5 && !isNaN(numbers)) {
  if (letter === "O") console.log("Welcome. Go to Oriental zone.")
  else if (letter === "T") console.log("Welcome. Go to Occidental zone.")
  else if (letter === "S") console.log("Welcome. Go to South zone.")
  else if (letter === "N") console.log("Welcome. Go to North zone.")
  else console.log("Invalid code.")
} else {
  console.log("Invalid code.")
}

