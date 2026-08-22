const country = "India";
const orderTotal = 1800;
const isExpress = true;
const isPrime = false;

if (country === "India") {
    if (orderTotal >= 2000) {
        console.log("Free shipping");
    } else if (isPrime) {
        console.log("Prime shipping: ₹0");
    } else if (isExpress) {
        console.log("Express shipping: ₹200");
    } else {
        console.log("Standard shipping: ₹100");
    }
} else {
    console.log("International shipping");
}
