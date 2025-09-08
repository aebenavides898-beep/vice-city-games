let subjects = parseInt(prompt("How many subjects do you have?"))
let sum = 0

for (let i = 1; i <= subjects; i++) {
  let grade = parseFloat(prompt("Enter the grade for subject " + i + ":"))
  sum += grade
}

let average = sum / subjects
alert("Your average grade is: " + average.toFixed(2))
