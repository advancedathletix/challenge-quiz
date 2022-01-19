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

function start() {

    timerId = setInterval(function() {
        time--;
        timerElement.textContent = time;

        if(time <= 0 ){
            endQuiz();
        }

    }, 1000)

    

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



var startBtn = document.querySelector(".startBtn")
startBtn.addEventListener("click", start);

// document.querySelector(".startBtn").addEventListener("click", start)
