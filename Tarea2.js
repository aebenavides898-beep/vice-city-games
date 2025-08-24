let magazine = "Dinero"
let time = "6 months"
let operator = "Claro"
let cost = 0

if (magazine === "Dinero") {
    if (time === "3 months") {
        cost = 6
    } else if (time === "6 months") {
        cost = 11
    } else if (time === "1 year") {
        cost = 20
    }
}

if (magazine === "National Geographic") {
    if (time === "3 months") {
        cost = 10
    } else if (time === "6 months") {
        cost = 13
    } else if (time === "1 year") {
        cost = 22
    }
}

if (magazine === "American Journal") {
    if (time === "3 months") {
        cost = 12
    } else if (time === "6 months") {
        cost = 18
    } else if (time === "1 year") {
        cost = 30
    }
}

if (operator.toLowerCase() === "claro") {
    cost = cost * 0.95
}

console.log("Total to pay: $" + cost)

