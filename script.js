let noButton = document.getElementById("noButton");
let container = document.querySelector(".container");
let initialSize = 50; // Initial size of the button

function moveButton() {
    // Generate random size between initialSize and 200 (maximum size)
    let randomSize = Math.max(initialSize, Math.random() * (200 - initialSize) + initialSize);
    noButton.style.width = randomSize + "px";
    noButton.style.height = randomSize + "px";

    let randomPositionX = Math.random() * (window.innerWidth - randomSize);
    let randomPositionY = Math.random() * (window.innerHeight - randomSize);
    noButton.style.position = "absolute";
    noButton.style.left = randomPositionX + "px";
    noButton.style.top = randomPositionY + "px";

    let randomColor = Math.floor(Math.random()*16777215).toString(16); // Generate random color
    noButton.style.backgroundColor = "#" + randomColor;
}

function animateButton(size, posX, posY) {
    let speedX = 3; // Horizontal speed
    let speedY = 3; // Vertical speed

    let animate = () => {
        posX += speedX;
        posY += speedY;

        if (posX + size > window.innerWidth || posX < 0) {
            speedX = -speedX; // Reverse horizontal direction if touching the left or right wall
        }

        if (posY + size > window.innerHeight || posY < 0) {
            speedY = -speedY; // Reverse vertical direction if touching the top or bottom wall
        }

        noButton.style.left = posX + 'px';
        noButton.style.top = posY + 'px';

        if (posX + size > window.innerWidth || posX < 0 || posY + size > window.innerHeight || posY < 0) {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
}

function showConfirmation() {
    window.location.href = "confirmation.html";
}

// Add hover effect
noButton.addEventListener('mouseover', () => {
    moveButton();
});
