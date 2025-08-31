let small = 3000;
let big = 4000;

let kindofwasher = prompt("1. small  2. big");
let numberofhours = 0;
let total = 0;

switch (kindofwasher) {
  case "1": {
    numberofhours = parseInt(prompt("How many hours would you use the small washer?"));
    switch (numberofhours > 10 ? "discount" : "normal") {
      case "discount":
        total = (numberofhours * small) * 97 / 100;
        break;
      case "normal":
        total = numberofhours * small;
        break;
    }
    break;
  }
  case "2": {
    numberofhours = parseInt(prompt("How many hours would you use the big washer?"));
    switch (numberofhours > 10 ? "discount" : "normal") {
      case "discount":
        total = (numberofhours * big) * 97 / 100;
        break;
      case "normal":
        total = numberofhours * big;
        break;
    }
    break;
  }
  default: {
    console.log("Invalid selection");
  }
}

alert("Total to pay: " + total + " pesos");

