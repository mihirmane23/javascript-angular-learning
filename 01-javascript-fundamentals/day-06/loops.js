{
    let count = 1
    let total = 0

    while (count <= 5) {
        total += count;
        console.log(total);
        count++;
    }
}
{
    total = 0;

    for (let count = 1; count <= 5; count++) {
        total += count;
        console.log(total);
    }
}
{
    let price = 100;
    let total = 0;

    for (let quantity = 1; quantity <= 5; quantity++) {
        total = quantity * price;
        console.log(total);
    }
}
{
    for (let number = 1; number <= 10; number++) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}
{
    let total = 0;
    for (let number = 1; number <= 10; number++) {
        if (number % 2 === 0) {
            total += number;
            
        }
    }
    console.log(total);
}
