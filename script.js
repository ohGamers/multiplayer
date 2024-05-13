// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to change the color of the header randomly
function changeHeaderColor() {
    const colors = ["red", "blue", "green", "yellow", "orange"];
    const randomColor = colors[getRandomNumber(0, colors.length - 1)];
    document.querySelector("header").style.backgroundColor = randomColor;
}

// Add event listener to the header to change its color when clicked
document.querySelector("header").addEventListener("click", changeHeaderColor);
