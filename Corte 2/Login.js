const PASS_CORRECTA = "seguro123"
let attempts = 0
let accessGranted = false

do {
  let input = prompt("Enter your password:")
  attempts++

  if (input === PASS_CORRECTA) {
    accessGranted = true
    alert("Access granted. Welcome!")
  } else {
    alert("Incorrect password. Attempts used: " + attempts)
  }
} while (!accessGranted && attempts < 3)

if (!accessGranted) {
  alert("Access blocked. You used all 3 attempts.")
}
