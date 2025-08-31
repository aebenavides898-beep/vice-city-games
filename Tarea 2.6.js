let op = prompt("Operator: Claro / Tigo / Movistar").toLowerCase();
let opType = prompt("Type: recharge / package").toLowerCase();

let result = "";
let price = 0;
let details = "";

switch (opType) {
  case "recharge": {
    let recAmount = Number(prompt("Enter recharge amount (> 10000):"));
    switch (recAmount > 10000 ? "ok" : "bad") {
      case "ok":
        price = recAmount;
        result = "Recharge successful";
        details = "Amount: " + recAmount;
        break;
      default:
        result = "Amount must be > 10000";
        details = "Amount: " + recAmount;
    }
    break;
  }
  case "package": {
    switch (op) {
      case "claro": {
        let pkg = prompt("Package for Claro: CV ($12000) / CA ($20000)").toUpperCase();
        switch (pkg) {
          case "CV": price = 12000; result = "Package CV purchased"; details = "CV $12000"; break;
          case "CA": price = 20000; result = "Package CA purchased"; details = "CA $20000"; break;
          default: result = "Invalid package for Claro"; details = ""; break;
        }
        break;
      }
      case "tigo": {
        let pkg = prompt("Package for Tigo: TA ($22000) / TB ($30000)").toUpperCase();
        switch (pkg) {
          case "TA": price = 22000; result = "Package TA purchased"; details = "TA $22000"; break;
          case "TB": price = 30000; result = "Package TB purchased"; details = "TB $30000"; break;
          default: result = "Invalid package for Tigo"; details = ""; break;
        }
        break;
      }
      case "movistar":
        result = "Packages suspended for Movistar. Try recharge.";
        details = "";
        break;
      default:
        result = "Invalid operator";
        details = "";
    }
    break;
  }
  default:
    result = "Invalid type";
    details = "";
}

alert(
  "Operator: " + op +
  "\nType: " + opType +
  "\nDetails: " + details +
  "\nPrice: " + price +
  "\nResult: " + result
);
