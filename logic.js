var question = document.getElementById("question");
let answer = Array.from(document.getElementById("answer-text"));
let score = document.getElementById("score");

let currentQuestion = {};
let availableQuestions = [];

//create array of questions and answers
let questions = [
    {
        question: 'How do you create a flexbox in CSS?',
        choice1: 'display:flexbox;',
        choice2: 'display:flex;',
        choice3: 'display:box;',
        choice4: 'flex:flexbox;',
        answer: 1,
    },

    {
        question: 'How do you declare a function with a variable name "sum" in JavaScript?',
        choice1: 'variable = sum;',
        choice2: 'var = --sum;',
        choice3: 'var sum = function();',
        choice4: 'var (--sum) = function();',
        answer: 3,
    },

    {
        question: 'What does CDN stand for?',
        choice1: 'Content Delivery Network',
        choice2: 'Communication Data Network',
        choice3: 'Content Distribution Node',
        choice4: 'Constant Data Number',
        answer: 1,
    },

    {
        question: 'What is a pseudo-class?',
        choice1: 'A CSS rule that contains no declarations',
        choice2: 'A CSS declaration that hides the element',
        choice3: 'An element that has more than one class',
        choice4: "A CSS keyword to target an element's state",
        answer: 4,
    },

    {
        question: 'What does the z-index property do?',
        choice1: 'Removes an element from the DOM',
        choice2: 'Changes the stacking order of elements',
        choice3: 'Changes the opacity of an element',
        choice4: 'Forces an element to be positioned relatively',
        answer: 2,
    },
]

//function to start the quiz and start the countdown
var startGame = function() {
    //resets stats
    score = 0;
    timer = 60000;
    //spread syntax to access all questions in array
    availableQuestions = [...questions];

    console.log(availableQuestions);

getNewQuestion();

};

function getNewQuestion() {
    let i = 0; i < availableQuestions.length; i++;
    if (availableQuestions.length > 0 && timer > 0) {
        const currentQuestion = availableQuestions[i];
        question.innerText = currentQuestion.question;

        
    }


};  
//function to ask questions (for loop?)
    //check that there are more questions and time for another question


startGame();

//localStorage to store high scores

/*setTimeout function will need the endGame as an argument so endGame will be called after the set 
amount of time has passed || the user answers all questions */