let totalPoints = 0
let i = 1

while (i <= 10) {
  let satisfaction = parseInt(prompt("Client " + i + ": Rate our service (1-5):"))
  
  if (satisfaction >= 1 && satisfaction <= 5) {
    totalPoints += satisfaction
    i++
  } else {
    alert("Invalid rating. Please enter a number between 1 and 5.")
  }
}

let average = totalPoints / 10
alert("Survey complete.\nAverage satisfaction: " + average.toFixed(2))
