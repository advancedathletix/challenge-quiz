// create variables
var timeLeft = 60;
var timerInterval = 0;
var yourScore = document.getElementById("yourScore");
var lastQuestionIndex = questionArray.length -1;
var quizBox = document.getElementById("quizBox");


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
quizBox.style.display = "none";
var lastUser = JSON.parse(localStorage.getItem("leader-high-score"));

    if (lastUser !== null){
        leaders = lastUser;
    }
}

//start quiz


document.querySelector("#startBtn").addEventListener('click',startQuiz);

function start() {
    quizBox.style.display = "block";
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


    function renderQuestions(){
        renderQuestions.innerHTML = questionArray[i].question-text;
        choice0-btn.innerHTML = questionArray[i].choice0;
        choice1-btn.innerHTML = questionArray[i].choice1;
        choice2-btn.innerHTML = questionArray[i].choice2;
        choice3-btn.innerHTML = questionArray[i].choice3;
    };

    document.getElementById("nextButton").addEventListener("click", function(){
        //when quiz is finished
if (i > lastQuestionIndex) {
    clearInterval(timerInterval);
    leaderBoard();
 } else {
        renderQuestions();
        i++;
    }
});

function checkAnswer(answer){
    if (answer === questionArray[i].correct) {
        timeLeft +=10;
    }if (answer !== questionArr[i].correct){
       
        // decrease timne 
        timeLeft -=10;
    }
}
    

function leaderBoard(){
    quizBox.style.display = "none";
    high-score.style.display = "block"
}

submitButton.addEventListener("click", function(event){
    event.preventDefault();

}

var scoreText = scoreInput.value.trim();

var div = document.createElement("div");
    div.textContent = "Your score is:" +" " + timeLeft;
    leaderList.appendChild(div);

    leaderBoard();
    storeScore();
    storeLeaders();
}};

function storeScore(event) {
    leaders[leaders.length] = {
        names: scoreInput.value,
        savedScores: timeLeft
    }
}        

function storeLeaders() {
    // Stringify and set "scores" key in localStorage to leader array
    localStorage.setItem("leaderHighScore", JSON.stringify(leaders));
}




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

quizBox.style.display = "none";
startButton.style.display = "none";
startdiv.style.display = "none";
high-score.style.display = "block";
