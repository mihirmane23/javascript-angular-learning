// Exercise 1
{
    const isLoggedIn = false;

    if (isLoggedIn) {
        console.log("Welcome Back!");
    } else {
        console.log("Please log in.");
    }
}

// Exercise 2
{
    const total = 1250;
    const isDeliveryFree = total >= 1000;

    if (isDeliveryFree) {
        console.log("Free delivery");
    } else {
        console.log("Delivery charge applies");
    }
}

// Exercise 3
{
    const score = 82;

    if (score >= 90) {
        console.log("Excellent");
    } else if (score >= 75) {
        console.log("Good");
    } else if (score >= 50) {
        console.log("Needs Improvement");
    } else {
        console.log("Poor");
    }
}

// Exercise 4
{
    const isLoggedIn = true;
    const isAdmin = false;

    if (isLoggedIn && isAdmin) {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }
}

// Exercise 5
{
    const isLoggedIn = true;
    const isAdmin = true;

    if (isLoggedIn) {
        if (isAdmin) {
            console.log("Welcome, Admin!");
        } else {
            console.log("Welcome, User!");
        }
    } else {
        console.log("Please log in.");
    }
}

// Exercise 6
{
    const isLoggedIn = true;
    const isAdmin = false;
    const accountActive = true;

    if (isLoggedIn) {
        if (!accountActive) {
            console.log("Your account is inactive.");
        } else if (isAdmin) {
            console.log("Welcome, Admin!");
        } else {
            console.log("Welcome, User!");
        }
    } else {
        console.log("Please log in.");
    }
}
