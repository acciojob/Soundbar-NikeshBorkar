// Select all buttons with class 'btn'
let buttons = document.querySelectorAll(".btn");
let currentSound;

// Add event listeners to each button
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const sound = btn.getAttribute("data-sound");
        playSound(sound);
    });
});
// Select the stop button
let stopButton = document.querySelector(".stop");
// Add event listener to the stop button
stopButton.addEventListener("click", stop);
// Function to play the sound
function playSound(sound) {
    stop(); // Stop any currently playing sound
    // Create a new audio object
    currentSound = new Audio(`./sounds/${sound}.mp3`);
    // Append the audio object to the body
    document.body.appendChild(currentSound);
    // Play the sound
    currentSound.play();
}

// Function to stop the sound
function stop() {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
        // Remove the audio object from the body
        document.body.removeChild(currentSound);
    }
}