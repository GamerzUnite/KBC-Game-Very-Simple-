let timer; // Variable to store the timer
let remainingTime = 30; // Initial time in seconds



// Function to start the timer
function startTimer() {
  timer = setInterval(updateTimer, 1000); // Update every 1 second
}

// Function to update and display the timer
function updateTimer() {
  if (remainingTime <= 0) {
    clearInterval(timer); // Clear the timer when it reaches 0
    document.getElementById('timerDisplay').textContent = alert("Game over");
    window.location.href = 'End.html';
    return;
  }
  document.getElementById('timerDisplay').textContent = `${remainingTime}`;
  remainingTime--;
}

// Function to reset and start the timer again
function resetTimer() {
  clearInterval(timer); // Clear the existing timer
  remainingTime = 30; // Reset the remaining time
  updateTimer(); // Update the timer display immediately
  startTimer(); // Start a new timer
}

// Start the initial timer
startTimer();
