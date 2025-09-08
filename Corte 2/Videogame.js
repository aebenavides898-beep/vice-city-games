function getReward(level) {
  let reward = ""
  switch (level) {
    case 1:
      reward = "100 gold coins"
      break
    case 2:
      reward = "A bronze sword"
      break
    case 3:
      reward = "A silver shield"
      break
    case 4:
      reward = "A golden armor"
      break
    case 5:
      reward = "A legendary dragon mount"
      break
    default:
      reward = "Invalid level. Please enter a number between 1 and 5."
      break
  }
  return reward
}

let level = parseInt(prompt("Enter your current level (1-5):"))
let reward = getReward(level)

alert("Your reward: " + reward)
