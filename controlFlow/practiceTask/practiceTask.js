let userRole = prompt("Enter your role (employee, enrolledMember, subscriber, non-subscriber):").toLowerCase();
let userMessage;

console.log("Welcome to our Dietary Services!")

switch (userRole) {
    case "employee":
        userMessage = "You are eligible to access the Dietary Services";
        break;
    case "enrolledMember":
        userMessage = "You are eligible to access the Dietary Services and have one-on-one interview with a dietician";
        break;
    case "subscriber":
        userMessage = "You are eligible for partial access to facilitated Dietary Services only.";
        break;
    case "non-subscriber":
        userMessage = "You are not eligible yet. Please enroll or subscribe first to avail this facility."
        break;
    default:
        userMessage = "Please choose from the 4 only.";
        break;
}

console.log(`User Role: ${userRole}`);
console.log(userMessage);