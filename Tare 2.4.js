let code = prompt("Enter code like O12345").trim();
let isPatternOK = /^[a-z]\d{5}$/i.test(code);

switch (isPatternOK ? "ok" : "bad") {
  case "ok":
    let letter = code.charAt(0).toUpperCase();
    switch (letter) {
      case "O": alert("Welcome. Go to Oriental zone."); break;
      case "T": alert("Welcome. Go to Occidental zone."); break;
      case "S": alert("Welcome. Go to South zone."); break;
      case "N": alert("Welcome. Go to North zone."); break;
      default: alert("Invalid code. Please verify and try again."); break;
    }
    break;
  default:
    alert("Invalid code. Please verify and try again.");
}
