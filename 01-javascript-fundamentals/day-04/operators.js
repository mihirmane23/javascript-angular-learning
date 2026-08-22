let price = 500;
let quantity = 3;

// Assignment operator
price += 90;

// Arithmetic operator
const total = price * quantity;

// Comparison operators
console.log(`Is the total greater than Rs 1000? ${total > 1000}`);
console.log(`Is the total exactly Rs 1720? ${total === 1720}`);
console.log(`Is the total not equal to Rs 500? ${total !== 500}`);
console.log(`Is the quantity greater than or equal to 3? ${quantity >= 3}`);

// Logical AND operator
const freeDelivery = total >= 1000 && quantity >= 3;
console.log(`Free delivery: ${freeDelivery}`);

const deliveryCharge = 50;

// Arithmetic addition operator
const afterDeliveryCharge = total + deliveryCharge;

// Logical AND operator
const isDiscountApplicable = total >= 1500 && quantity >= 2;
console.log(`Qualifies for discount: ${isDiscountApplicable}`);

const discount = 100;

// Arithmetic subtraction operator
const totalAfterDiscount = afterDeliveryCharge - discount;

console.log(`Total: ${total}`);
console.log(`After Delivery charge: ${afterDeliveryCharge}`);
console.log(`After discount: ${totalAfterDiscount}`);

// Comparison + logical AND operators
const age = 25;
const hasLicense = true;

console.log(age >= 18 && hasLicense);
