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
var currentQuestion = 0;
var answerBtns = document.getElementById('answer-btns');
var timeLeft = 90;
var score = 0;

var myQuestions = [
    {
        question: 'Commonly used data types DO NOT include: ',
        answers: ['strings','booleans','alerts','numbers'],
        correctAnswer: 'alerts'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: ['JavaScript', 'terminal/bash','for loops','console.log'],
        correctAnswer: 'console.log'
    }
]

// console.log(myQuestions[0].question);
// console.log(myQuestions[0].answers[0].text);
// console.log(myQuestions[0].answers[0].correct);



function startQuiz() {
    countdown();
    questionEl.classList.remove('hide');
    startInfo.classList.add('hide');
    nextQuestion();
    return;
}

function nextQuestion(){   //I'd need to build a loop in here or something
    document.getElementById('question-text').innerHTML = myQuestions[currentQuestion].question; 
    answerBtns.innerHTML = '';
    //loop over all possible choices
    myQuestions[currentQuestion].answers.forEach(function(answer){
        console.log(answer);
        // create a button to put the answers in
        var button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener("click", checkAnswer);
        answerBtns.appendChild(button);
        
    })
    
    return;
}

function checkAnswer(){
    if (event.target.innerText === myQuestions[currentQuestion].correctAnswer) {
        console.log('this is correct');
        score++;
        currentQuestion++;
        nextQuestion();
    } else {
        console.log('this is wrong');
        timeLeft-10;
        currentQuestion++;
        nextQuestion();
    }
}

// Timer that counts down from 90
function countdown() {
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