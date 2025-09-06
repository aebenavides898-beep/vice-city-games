function checkZone(code) {
  let letter = code.charAt(0).toUpperCase()
  let numbers = code.substring(1)

  if (code.length === 6) {
    switch (letter) {
      case "O":
        return "Welcome. Go to the Oriental zone."
      case "T":
        return "Welcome. Go to the Occidental zone."
      case "S":
        return "Welcome. Go to the South zone."
      case "N":
        return "Welcome. Go to the North zone."
      default:
        return "Invalid code. Please check and try again."
    }
  } else {
    return "Invalid code. Please check and try again."
  }
}

let code = prompt("Enter your stadium access code (1 letter + 5 digits, e.g. O12345):")
let message = checkZone(code)
alert(message)

