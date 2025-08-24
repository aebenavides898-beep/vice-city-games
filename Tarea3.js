let isOn = true
let color = "green"

if (!isOn) {
  console.log("Traffic light off")
} else {
  if (color === "green") console.log("Go")
  else if (color === "yellow") console.log("Caution")
  else if (color === "red") console.log("Stop")
  else console.log("Device error")
}
