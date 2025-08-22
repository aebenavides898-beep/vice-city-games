// Ask user how many hours for small washer
let smallHours = parseInt(prompt("How many hours do you want to rent the small washing machine?"));
// Ask user how many hours for big washer
let bigHours = parseInt(prompt("How many hours do you want to rent the big washing machine?"));
// Prices
let smallPrice = 3000;
let bigPrice = 4000;
// Total Hours
let totalHours = smallHours + bigHours;
// Cost Before Discount
let cost = (smallHours * smallPrice) + (bigHours * bigPrice);
// If more than 10 hours apply 3% discount.
if (totalHours > 10) {
    cost = cost - (cost * 0.03);
}
// Show Result
alert("Your total is: $" + cost); 