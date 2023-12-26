const questionDiv = document.getElementById("question");
const questionNumDiv = document.getElementById("question-number");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

const red = "rgb(255, 153, 153)";
const green = "rgb(179, 255, 179)";
const grey = "rgb(204, 204, 204)";

const buttons = [

    document.getElementById("button1"),
    document.getElementById("button2"),
    document.getElementById("button3"),
    document.getElementById("button4")

]

let questionNum;
let score;

const questions = [
    {
        question: "Is Marty a good programmer?",
        answers: [
            {text: "Yes", correct: "true"},
            {text: "Maybe", correct: "false"},
            {text: "Maybe not", correct: "false"},
            {text: "No", correct: "false"},            
        ]
    },
    {
        question: "What are some racing games that I play? (2)",
        answers: [
            {text: "World Rally Championship (WRC)", correct: "false"},
            {text: "Assetto Corsa Competizione", correct: "true"},
            {text: "DiRT Rally", correct: "true"},
            {text: "Forza Horizon", correct: "false"},            
        ]
    },
    {
        question: "What is Marty's favorite programming language?",
        answers: [
            {text: "C/C++", correct: "true"},
            {text: "Python", correct: "false"},
            {text: "Javascript", correct: "false"},
            {text: "BASH", correct: "false"},            
        ]
    },
    {
        question: "Marty is cool",
        answers: [
            {text: "True", correct: "true"},
            {text: "False", correct: "false"},
            {text: null, correct: null},
            {text: null, correct: null}         
        ]
    },
]

function showQuestion() {
    
    questionNumDiv.innerHTML = 'Question ' + (Number(questionNum) + 1) + " of " + questions.length;
    questionDiv.innerHTML = questions[questionNum].question;
    
    for (let i = 0; i <= 3; i++) {
        
        buttons[i].innerHTML = questions[questionNum].answers[i].text;
        buttons[i].style.display = "flex";
        // console.log(questions[questionNum].answers[i].text);
        
        if (questions[questionNum].answers[i].text == null) {
            buttons[i].style.display = "none";
        }

    }

    // console.log(questions[questionNum].question);
}

const startQuiz = () => {questionNum = 0; score = 0; showQuestion();}

var timesPressed;
let selectedBtn = undefined;
let btnIsSelected = false;

function selectAnswer(i, n) {
    
    if (i == undefined) {
        
        return(selectedBtn);
    
    }
    
    if (btnIsSelected == false) {
        
        selectedBtn = i;
        btnIsSelected = true;
    
    } else if (selectedBtn == i) {
        
        selectedBtn = undefined;
        btnIsSelected = false;
    
    } else {
        
        selectedBtn = i;
    }

    for (let i = 0; i <= 3; i++) {
        document.getElementById("button" + (i + 1)).style.backgroundColor = "white";
    }
    
    if (selectedBtn != undefined) {
        
        document.getElementById("button" + (i + 1)).style.backgroundColor = grey;

    }

    // console.log("Selected: " + (selectedBtn + 1));

}

function submitAnswer() {
    
    // console.log(selectAnswer());
    // console.log(questions[questionNum].answers[selectAnswer()].correct);

    if (nextButton.innerHTML == "Next") {
        
        nextQuestion();

    } else if (nextButton.innerHTML == "Finish") {
        
        questionNumDiv.innerHTML = "Completed!";
        questionDiv.remove();
        answerButton.remove();
        nextButton.remove();

    }
    
    if (questions[questionNum].answers[selectAnswer()].correct === "true") {
        
        console.log("Correct!");
        document.getElementById("button" + (selectedBtn + 1)).style.backgroundColor = green;

        if (questionNum >= questions.length - 1) {
            
            nextButton.innerHTML = "Finish";

        } else {

            nextButton.innerHTML = "Next";

        }
        
        console.log(questionNum);

    } else {
        
        document.getElementById("button" + (selectedBtn + 1)).style.backgroundColor = red;
        console.log("Nope!");

    }
    
    selectedBtn = undefined;
    btnIsSelected = false;

}

function nextQuestion() {
    
    nextButton.innerHTML = "Submit";
    questionNum += 1;

    for (let i = 0; i <= 3; i++) {
        
        buttons[i].style.display = "flex";
        document.getElementById("button" + (i + 1)).style.backgroundColor = "white";

    }

    showQuestion();

}

startQuiz();

