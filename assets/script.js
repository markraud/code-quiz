/*
Array of questions with 

Questions 
Multiple choice answer buttions that highlight when hover
A final page showing score and asking for your initials to be entered. 
list of high scores 
*/





var startButton = document.getElementById('start-btn');  // this will start the game 
var timerEl = document.getElementById('timer');
var questionEl = document.getElementById('question-info');
var startInfo = document.getElementById('start-info');


function startQuiz() {
    countdown();
    questionEl.className = '';
    startInfo.className ='hide';

    return;
}

// Timer that counts down from 90
function countdown() {
    var timeLeft = 90;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            displayMessage();
        }
    }, 1000);
}

startButton.addEventListener("click", startQuiz);