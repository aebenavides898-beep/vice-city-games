let operator = prompt("Enter operator (Claro, Tigo, Movistar):");
operator = operator.toUpperCase();

let type = prompt("Enter type (recharge or package):");
type = type.toUpperCase();

if (type === "RECHARGE") {
    let amount = parseInt(prompt("Enter amount (must be > 10000):"));
    if (amount > 10000) {
        alert("Operator: " + operator);
        alert("Type: Recharge");
        alert("Amount: " + amount);
        alert("Recharge successful.");
    } else {
        alert("Invalid amount. Must be greater than 10000.");
    }
}
else if (type === "PACKAGE") {
    if (operator === "CLARO") {
        let code = prompt("Enter package code (CV or CA):");
        code = code.toUpperCase();
        if (code === "CV") {
            alert("Operator: Claro");
            alert("Type: Package CV");
            alert("Price: 12000");
            alert("Purchase successful.");
        } else if (code === "CA") {
            alert("Operator: Claro");
            alert("Type: Package CA");
            alert("Price: 20000");
            alert("Purchase successful.");
        } else {
            alert("Invalid package code.");
        }
    }
    else if (operator === "TIGO") {
        let code = prompt("Enter package code (TA or TB):");
        code = code.toUpperCase();
        if (code === "TA") {
            alert("Operator: Tigo");
            alert("Type: Package TA");
            alert("Price: 22000");
            alert("Purchase successful.");
        } else if (code === "TB") {
            alert("Operator: Tigo");
            alert("Type: Package TB");
            alert("Price: 30000");
            alert("Purchase successful.");
        } else {
            alert("Invalid package code.");
        }
    }
    else if (operator === "MOVISTAR") {
        alert("Packages suspended for Movistar. Try recharge instead.");
    }
    else {
        alert("Invalid operator.");
    }
}
else {
    alert("Invalid operation type.");
}
