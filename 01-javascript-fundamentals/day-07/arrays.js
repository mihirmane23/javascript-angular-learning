const scores = [75, 82, 91, 68, 88];

let currentHigh = scores[0];

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > currentHigh) {
        currentHigh = scores[i]
    }
}

console.log(currentHigh);

const prices = [500, 1200, 750, 2000, 450];

let total = 0;

for (let i = 0; i < prices.length; i++) {
    if (prices[i] >= 1000) {
        total += prices[i];
    }
}

console.log(total);