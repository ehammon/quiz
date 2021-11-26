var question = document.getElementById("question");
var answer = document.getElementById("answer-text");

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