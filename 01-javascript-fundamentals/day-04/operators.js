let price = 500;
let quantity = 3;

price += 90;
const total = price * quantity;

console.log(`Is the total greater than Rs 1000? ${total > 1000}`);
console.log(`Is the total exactly Rs 1720? ${total === 1720}`)
console.log(`Is the total not equals to Rs 500? ${total !== 500}`);
console.log(` Is the quantity greater that or equal to 3? ${quantity >= 3}`)

const deliveryCharge = 50;
const afterDeliveryCharge = total + deliveryCharge;

const discount = 100;
const totalAfterDiscount = afterDeliveryCharge - discount;

console.log(`Total: ${total}`);
console.log(`After Delivery charge: ${afterDeliveryCharge}`);
console.log(`After discount: ${totalAfterDiscount}`);
