let power = prompt("Is the traffic light on or off? (on/off)");

if (power && power.toLowerCase() === "on") {
  let color = prompt("What color is the light? (green/yellow/red)");

  if (color) {
    let c = color.toLowerCase();

    if (c === "green") {
      alert("You may go");
    } else if (c === "yellow") {
      alert("Caution");
    } else if (c === "red") {
      alert("Stop");
    } else {
      alert("Device failure");
    }
  } else {
    alert("Device failure");
  }
} else {
  alert("Traffic light is off");
}
