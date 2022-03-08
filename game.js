// Questions for the game
let questions = [
    {
        question: "1. Whats Joey's special?",
        answer1: "Bologna sandwich",
        answer2: "2 Pizzas",
        answer3: "Macaroni + Cheese",
        answer4: "Ramen",
        correctAnswer: 2,
    },
    {   
        question: "2. How many times was Ross legally divorced?",
        answer1: "Twice",
        answer2: "Three times",
        answer3: "Four times",
        answer4: "Five times",
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
        answer1: "Amy",
        answer2: "Ursula",
        answer3: "Jill",
        answer4: "Monica",
        correctAnswer: 2,
    },
    {   
        question: "8. Who hates Thanksgiving?",
        answer1: "Monica",
        answer2: "Joey",
        answer3: "Chandler",
        answer4: "Ross",
        correctAnswer: 3,
    },
]


// console.log(questions[6].question)

////////////////////////////////////
//selectors
////////////////////////////////////

let question = document.querySelector(`#question`)
let answerOne = document.querySelector(`#answer1`)
let answerTwo = document.querySelector(`#answer2`)
let answerThree = document.querySelector(`#answer3`)
let answerFour= document.querySelector(`#answer4`)


function loadGame() {
    let currentQuestion = questions[1].question
    question.innerHTML = currentQuestion
    answerOne.innerHTML = questions[1].answer1
    answerTwo.innerHTML = questions[1].answer2
    answerThree.innerHTML = questions[1].answer3
    answerFour.innerHTML = questions[1].answer4
}
loadGame()

// answerFour.addEventListener("click", () => {
// 	console.log("clicked element");


