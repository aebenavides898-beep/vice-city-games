function getPackagePrice(operator, code) {
  const op = operator.toLowerCase();
  const c = code.toUpperCase();
  switch (op) {
    case "claro":
      if (c === "CV") return 12000;
      if (c === "CA") return 20000;
      return 0;
    case "tigo":
      if (c === "TA") return 22000;
      if (c === "TB") return 30000;
      return 0;
    case "movistar":
      return -1;
    default:
      return 0;
  }
}

let operator = "";
let kind = "";
let exit = false;

do {
  const option = parseInt(prompt(
    "=== Mobile Top-ups ===\n" +
    "1. Set operator (Claro / Tigo / Movistar)\n" +
    "2. Set operation (recharge / package)\n" +
    "3. Process purchase\n" +
    "4. Exit"
  ));

  switch (option) {
    case 1: {
      const inp = prompt("Operator (Claro, Tigo, Movistar):");
      operator = inp ? inp.trim() : "";
      alert("Operator set to: " + operator);
      break;
    }
    case 2: {
      const inp = prompt("Operation type (recharge or package):");
      kind = inp ? inp.trim().toLowerCase() : "";
      alert("Operation set to: " + kind);
      break;
    }
    case 3: {
      if (!operator) { alert("Set operator first."); break; }
      if (!kind) { alert("Set operation type first."); break; }

      if (kind === "recharge") {
        let amount = parseInt(prompt("Enter recharge amount (> 10000):"));
        while (isNaN(amount) || amount <= 10000) {
          amount = parseInt(prompt("Amount must be > 10000. Enter again:"));
        }
        alert(
          "Purchase OK\n" +
          "Operator: " + operator + "\n" +
          "Type: Recharge\n" +
          "Amount: $" + amount
        );
      } else if (kind === "package") {
        const code = prompt("Package code (Claro: CV/CA, Tigo: TA/TB):") || "";
        const price = getPackagePrice(operator, code);

        if (price === -1) {
          alert("Packages suspended for Movistar. Please choose a recharge.");
          break;
        }
        if (price === 0) {
          alert("Invalid package for selected operator.");
          break;
        }
        alert(
          "Purchase OK\n" +
          "Operator: " + operator + "\n" +
          "Type: Package\n" +
          "Code: " + code.toUpperCase() + "\n" +
          "Price: $" + price
        );
      } else {
        alert("Invalid operation type. Use 'recharge' or 'package'.");
      }
      break;
    }
    case 4:
      exit = true;
      break;
    default:
      alert("Invalid option.");
  }
} while (!exit);
