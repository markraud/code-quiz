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

/*
var myQuestion1 = new Object();
myQuestion1.text = 'Commonly used data types DO NOT include: ';
myQuestion1.one = 'strings';
myQuestion1.two = 'booleans';
myQuestion1.three = 'alerts';
myQuestion1.four = 'numbers';
myQuestion1.answer = 'alerts';
*/

myQuiz = [
    ['Commonly used data types DO NOT include: ', 'strings','booleans', 'alerts','numbers'],
    ['A very useful tool used during development and debugging for printing content to the debugger is:', 'JavaScript','terminal/bash', 'for loops', 'console.log'],
    [],
    []
]

//var quizArray = [myQuestion0];

function startQuiz() {
    countdown();
    questionEl.classList.remove('hide');
    startInfo.classList.add('hide');
    nextQuestion();
    return;
}

function nextQuestion(){   //I'd need to build a loop in here or something
    document.getElementById('question-text').innerHTML = myQuiz[0][0];
    document.getElementById('btn1').innerHTML = myQuiz[0][1];
    document.getElementById('btn2').innerHTML = myQuiz[0][2];
    document.getElementById('btn3').innerHTML = myQuiz[0][3];
    document.getElementById('btn4').innerHTML = myQuiz[0][4];
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