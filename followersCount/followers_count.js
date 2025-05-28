let count = 0;

function increaseCount() {
    count++; //To increment the count by 1

    // This is function hoisting
    displayCount(); // to display the count.
    checkCountValue(); // to check count value and display messages.
}

function checkCountValue() {
    if (count === 10) {
        alert('Your post gained 10 followers! Congratulations!')
    } else if (count === 20) {
        alert('Your post gained 20 followers! Keep it up!')
    }
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

// Practice task - add a reset button

function resetCount() {
    count = 0;
    document.getElementById('countDisplay').innerHTML = 0;
    alert("Your followers count has been reset.");
}

