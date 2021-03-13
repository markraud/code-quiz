//Initalize variables
var startButton = document.getElementById('start-btn');  // this will start the game 
var timerEl = document.getElementById('timer');
var questionEl = document.getElementById('question-info');
var startInfo = document.getElementById('start-info');
var currentQuestion = 0;
var answerBtns = document.getElementById('answer-btns');
var timeLeft = 90;
var timer = document.getElementById('timer');
var score = 0;
var main = document.getElementById('main');
var newDiv = '';
var pageHeading = document.getElementById('heading');
// var initialsInput = document.getElementById('initials');
// var initialsForm = document.getElementsByID('initials-form');
// var allScores =[];

var myQuestions = [
    {
        question: 'Commonly used data types DO NOT include ________.',
        answers: ['strings','booleans','alerts','numbers'],
        correctAnswer: 'alerts'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is ________.',
        answers: ['JavaScript', 'terminal/bash','for loops','console.log'],
        correctAnswer: 'console.log'
    },
    {
        question: 'The condition in an if / else statement is enclosed within ______.',
        answers: ['quotes', 'curly brackets','parenthesis','square brackets'],
        correctAnswer: 'parenthesis'
    },
    {
        question: 'Arrays in JavaScript can be used to store _______.',
        answers: ['numbers and strings', 'other arrays','booleans','all of the above'],
        correctAnswer: 'all of the above'
    }
]
//var quizEnder = myQuestions.length - 1;

function startQuiz() {
    countdown();
    questionEl.classList.remove('hide');
    startInfo.classList.add('hide');
    nextQuestion();
    
}

function nextQuestion(){  
    if (currentQuestion <= (myQuestions.length - 1)) {
    answerBtns.innerHTML = '';
    document.getElementById('question-text').innerHTML = myQuestions[currentQuestion].question;
    //loop over all possible choices
        myQuestions[currentQuestion].answers.forEach(function(answer){
            //console.log(answer);
            // create a button to put the answers in
            var button = document.createElement('button');
            button.classList.add('btn');
            button.innerText = answer;
            button.addEventListener("click", checkAnswer);
            answerBtns.appendChild(button);
        
        })
    } else {
        showScore();
    }

    //console.log('this is users ' + score);

}

function checkAnswer(){
    if (event.target.innerText === myQuestions[currentQuestion].correctAnswer) {
        //console.log('this is correct');
        score++;
        currentQuestion++;
        nextQuestion();
    } else {
        //console.log('this is wrong');
        timeLeft = timeLeft - 10;
        currentQuestion++;
        nextQuestion();
    }
return;    
}

//this removes the elements on the page and 
//dynamically builds html to give user score and ask for initials
function showScore() {
    timer.classList.add('hide');
    questionEl.classList.add('hide');
    newDiv = document.createElement('div');
    newDiv.setAttribute("id", "high-score-div");
    main.appendChild(newDiv);
    var h2 = document.createElement('h2');
    h2.innerHTML = 'All Done!';
    newDiv.appendChild(h2);
    var finalText = document.createElement('p');
    finalText.innerHTML = "Your final score is: " + score;
    newDiv.appendChild(finalText);
    var formEl = document.createElement('form'); 
    formEl.setAttribute('id', 'initials-form');  
    formEl.setAttribute('method', 'POST');      
    newDiv.appendChild(formEl);
    formEl.innerHTML = "<label for='initials'>Please enter initials:</label>\
                        <input type='text' id='initials' name='initials'><br>";
    var submitButton = document.createElement('button');
    submitButton.innerHTML = 'Submit';
    newDiv.appendChild(submitButton);
    submitButton.addEventListener("click", submitInitials);

}

function submitInitials(){
    console.log('your submit button works and is connected to submitInitials !!');
    console.log(newDiv);
    newDiv.setAttribute('class', 'hide');
    console.log(pageHeading);
    pageHeading.setAttribute('class', 'hide');
    

    //this will need to store the list in local storage like the todo exercise



}
//this function continues to the showScore function when the timer runs out
function timerDone() {
    console.log('The timer is done')
    if (currentQuestion !== myQuestions.length){    // need to fix
        showScore();
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
            // displayMessage();
            timerDone();
        }
    }, 1000);
}

startButton.addEventListener("click", startQuiz);