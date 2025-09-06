function trafficLightMessage(isOn, color) {
  if (!isOn) {
    return "Traffic light is OFF"
  }

  switch (color.toLowerCase()) {
    case "green":
      return "You may go"
    case "yellow":
      return "Caution"
    case "red":
      return "Stop"
    default:
      return "Device failure"
  }
}

let state = prompt("Is the traffic light ON or OFF?").toLowerCase()

if (state === "on") {
  let color = prompt("Enter the color (green, yellow, red):")
  let message = trafficLightMessage(true, color)
  alert(message)
} else {
  let message = trafficLightMessage(false, "")
  alert(message)
}
