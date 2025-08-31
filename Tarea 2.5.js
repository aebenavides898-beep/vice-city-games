let custId = prompt("Enter ID:");
let amount = Number(prompt("Enter purchase amount:"));

let points = 100;
let addPoints = 0;

let tier = amount < 100000 ? "low" : (amount > 100000 && amount < 500000) ? "mid" : "high";

switch (tier) {
  case "low": addPoints = 100; break;
  case "mid": addPoints = 250; break;
  default: addPoints = 400; break;
}

points = points + addPoints;

alert(
  "ID: " + custId +
  "\nAmount: " + amount +
  "\nPoints added: " + addPoints +
  "\nNew total points: " + points
);

let status = points >= 500 ? "eligible" : "continue";

switch (status) {
  case "eligible":
    let discount = amount * 0.20;
    alert("Congrats! Pending discount for next purchase: $" + discount + " (20%).");
    break;
  default:
    let missing = 500 - points;
    alert("Keep collecting. You need " + missing + " more points.");
}
