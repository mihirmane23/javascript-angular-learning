let value = 500;
let currentTotal = 3750;
let count = 0;

// Keep using the current note while possible
while (currentTotal >= 100) {

    if (value <= currentTotal) {
        currentTotal = currentTotal - value;
        count++;
    } else {
        console.log(`${value}: ${count}`);

        // Move to the next smaller note
        if (value === 500) {
            value = 200;
            count = 0;
        } else if (value === 200) {
            value = 100;
            count = 0;
        } else {
            break;
        }
    }
}

console.log(`${value}: ${count}`);
console.log(`Remaining: ${currentTotal}`);
