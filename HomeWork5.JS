let id = prompt("Enter your ID:");
let amount = parseInt(prompt("Enter your purchase amount:"));

let points = 100;
let earned = 0;

if (amount < 100000) {
    earned = 100;
}
else if (amount >= 100000 && amount < 500000) {
    earned = 250;
}
else if (amount >= 500000) {
    earned = 400;
}

points = points + earned;

alert("ID: " + id);
alert("Purchase: $" + amount);
alert("Points earned: " + earned);
alert("New balance: " + points);

if (points >= 500) {
    let discount = amount * 0.20;
    alert("Congratulations! You have a pending discount of $" + discount + " for your next purchase (20%).");
}
else {
    let missing = 500 - points;
    alert("Keep saving. You need " + missing + " more points to reach 500.");
}
