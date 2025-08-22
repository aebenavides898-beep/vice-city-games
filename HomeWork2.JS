let magazine = prompt("Magazine? (Dinero / National Geographic / American Journal)");
let months   = parseInt(prompt("Months? (3 / 6 / 12)"), 10);
let operator = prompt("Your mobile operator?");

let cost = 0;

if (magazine === "Dinero") {
  if (months === 3) cost = 6;
  else if (months === 6) cost = 11;
  else if (months === 12) cost = 20;
} else if (magazine === "National Geographic") {
  if (months === 3) cost = 10;
  else if (months === 6) cost = 13;
  else if (months === 12) cost = 22;
} else if (magazine === "American Journal") {
  if (months === 3) cost = 12;
  else if (months === 6) cost = 18;
  else if (months === 12) cost = 30;
}

if (cost === 0) {
  alert("Please enter a valid magazine and months (3, 6, or 12).");
} else {
  if (operator && operator.toLowerCase() === "claro") {
    cost = cost - (cost * 0.05);
  }
  alert("Total to pay: $" + cost + " USD");
}
