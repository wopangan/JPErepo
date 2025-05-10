// Defining variables and if else statement

let userRole = 'admin';
let accessLevel;

if (userRole === 'admin') {
    accessLevel = "Full access granted";
} else if (userRole === 'manager') {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log(`Access level: ${accessLevel}`);

// Defining variables and nested if…else statements

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === 'admin') {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system!";
}

console.log(`User message: ${userMessage}`)

// Defining variables and switch statement

let userType = "subscriber";
let userCategory;

switch (userType) {
    case 'admin':
        userCategory = "Administrator";
        break;
    case 'manager':
        userCategory = "Manager";
        break;
    case 'subscriber':
        userCategory = 'Subscriber';
        break;
    default:
        userCategory = 'Unknown';
}

console.log(`User category: ${userCategory}`)

// Using ternary operator

let isAuthenticated = false; // if true -> "Authenticated", if false -> "Not authenticated";

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log(`Authentication status: ${authenticationStatus}`)