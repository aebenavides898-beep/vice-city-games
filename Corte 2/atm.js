let balance = 1000
let option

do {
  option = parseInt(prompt(
    "Select an operation:\n" +
    "1. Check balance\n" +
    "2. Withdraw\n" +
    "3. Deposit\n" +
    "4. Exit"
  ))

  switch (option) {
    case 1:
      alert("Your current balance is: $" + balance)
      break
    case 2:
      let withdraw = parseFloat(prompt("Enter amount to withdraw:"))
      if (withdraw > 0 && withdraw <= balance) {
        balance -= withdraw
        alert("Withdrawal successful. New balance: $" + balance)
      } else {
        alert("Invalid amount or insufficient funds.")
      }
      break
    case 3:
      let deposit = parseFloat(prompt("Enter amount to deposit:"))
      if (deposit > 0) {
        balance += deposit
        alert("Deposit successful. New balance: $" + balance)
      } else {
        alert("Invalid amount.")
      }
      break
    case 4:
      alert("Thank you for using our ATM. Goodbye!")
      break
    default:
      alert("Invalid option. Please select 1–4.")
      break
  }
} while (option !== 4)
