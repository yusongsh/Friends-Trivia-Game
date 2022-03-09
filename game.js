// Questions for the game
let questions = [
    {
        question: "1. Whats Joey's special?",
        answer1: [ "Bologna sandwich", "2 Pizzas", "Macaroni + Cheese", "Ramen"],
        correctAnswer: 2,
    },
    {   
        question: "2. How many times was Ross legally divorced?",
        answer: ["Twice", "Three times", "Four times", "Five times"],
        correctAnswer: 2,
    },
    {   
        question: "3. How many sisters does Joey have?",
        answer1: "2",
        answer2: "4",
        answer3: "7",
        answer4: "6",
        correctAnswer: 3,
    },
    {   
        question: "4. Who did rachel discover her ex-fiancé Barry was cheating on her with?",
        answer1: "Her sister",
        answer2: "Her coworker",
        answer3: "Monica",
        answer4: "Her best friend",
        correctAnswer: 4,
    },
    {   
        question: `5. Which of the following Chandler "facts" is true?`,
        answer1: "He has a third nipple",
        answer2: "He gas all his toes",
        answer3: "He dated Rachel",
        answer4: "He is a millionaire",
        correctAnswer: 1,
    },
    {   
        question: `6. Which member of the Friends crew kissed Rachel’s mom?`,
        answer1: "Chandler",
        answer2: "Ross",
        answer3: "Joey",
        answer4: "Phoebe",
        correctAnswer: 3,
    },
    {   
        question: "7. What’s Phoebe’s sister’s name?",
        answer: ["Amy", "Ursula", "Jill", "Monica"],
        correctAnswer: 1,
    },
    {   
        question: "8. Who hates Thanksgiving?",
        answer: ["Monica", "Joey", "Chandler", "Ross"],
        correctAnswer: 3,
    },
]


// console.log(questions[6])



const answers = document.querySelectorAll(`.answer-text`)
const question = document.querySelector(`#question`)
const progress = document.querySelector(`#progress`)

let questionCounter = 0
let score = 0
let correctAnswer = false



startGame()

function startGame() {
    question.innerHTML = questions[questionCounter].question
    answers.forEach(function(answer, i) {
        answer.innerHTML = questions[questionCounter].answer[i]
    })
}
