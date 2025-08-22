let code = prompt("Enter your stadium code (Example: O12345):");
code = code.toUpperCase();

if (code.length === 6) {
    let letter = code[0];
    let numbers = code[1] + code[2] + code[3] + code[4] + code[5];

    if (!isNaN(numbers)) {
        if (letter === "O") {
            alert("Welcome. Go to Oriental zone.");
        }
        else if (letter === "T") {
            alert("Welcome. Go to Occidental zone.");
        }
        else if (letter === "S") {
            alert("Welcome. Go to South zone.");
        }
        else if (letter === "N") {
            alert("Welcome. Go to North zone.");
        }
        else {
            alert("Invalid code.");
        }
    }
    else {
        alert("Invalid code.");
    }
}
else {
    alert("Invalid code.");
}
