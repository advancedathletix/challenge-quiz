// create variables
var yourScore = document.getElementById("yourScore");

var quizBox = document.getElementById("answer-buttons");


var leaderScore = document.getElementById("high-score");
var leaders = [];
var leaderList = document.getElementById("leader-list");
var submitButton = document.getElementById("submit-btn");
var scoreInput = document.getElementById("score-txt");
var name = document.getElementById("score-name");
var startButton = document.getElementById("startBtn");
var welcome = document.getElementById("start-div");
var highScoreLink = document.getElementById("highScore");




init();

function init() {
high-score.style.display = "none";
answer-buttons.style.display = "none";
var lastUser = JSON.parse(localStorage.getItem("leader-high-score"));

    if (lastUser !== null){
        leaders = lastUser;
    }
}

//start quiz


document.querySelector("#startBtn").addEventListener('click',startQuiz);

function start() {
    answer-buttons.style.display = "block";
    startButton.style.display = "none";
    startdiv.style.display ="none";

    

    timerId = setInterval(function() {
        time--;
        timerElement.textContent = time + "Seconds left for quiz";
        renderQuestions();

        if(time <= 0 ){
            leaderboard();
        }

    }, 1000)


    


// question index
var currentQuestionIndex = 0;

// question and answer array
var questionArray = [
    {
        text: "What is 1 + 1?",
        correctAnswer: 2,
        choices: [
            2, 5, 9, 6
        ]
    
    }, {
        text: "What is 10 + 10",
        choices: [
            25, 50, 90, 20
        ],
     
        correctAnswer: 20
    }, {
        text: "what is 3 x 3",
        choices: [
            21, 12, 9, 33
        ],

        correctAnswer: 9
    }, {
        text: "what is 8 x 8",
        choices: [
            25, 64, 32, 20
        ],
        correctAnswer: 64

    }
]
// end of array



// timer
var timerElement = document.querySelector("#timer-element")
var time = 60
var timerId;


// tells console if answers are right or wrong
console.log(questionArray)

function checkAnswer(event) {
    console.log(event.target.textContent);
    var selectedAnswer = event.target.textContent

    console.log(questionArray[currentQuestionIndex-1].correctAnswer)
    var correctAnswer = questionArray[currentQuestionIndex-1].correctAnswer
    

    if(selectedAnswer == correctAnswer) {
        alert("correct answer")



    } else {
        alert("Wrong answer")
        
    }

    
}
// 


// moves thorugh questions



    

    if(currentQuestionIndex < questionArray.length ) {
        // alert(questionArray[currentQuestionIndex].text)
        var textH2 = document.querySelector("#question-text");
        textH2.textContent = questionArray[currentQuestionIndex].text;

        for (let i = 0; i < 4; i++) {
            var choiceBtn = document.querySelector("#choice"+i+"-btn");
            choiceBtn.textContent = questionArray[currentQuestionIndex].choices[i];
            choiceBtn.addEventListener("click", checkAnswer)
        }

       
       

// alert pops up to say youve finished quiz
// need to make this a spot to add initials for final score
        currentQuestionIndex++;
    } else {
        var playerName = prompt("add your initials to save your score");
        console.log(playerName);
    }

    
    // 
}

function endQuiz() {}

answer-buttons.style.display = "none";
startButton.style.display = "none";

