// Questions for the game
let questions = [
    {
        question: "1. Whats Joey's special?",
        choices: [ "Bologna sandwich", "2 Pizzas", "Macaroni + Cheese", "Ramen"],
        answer: 2,
    },
    {   
        question: "2. How many times was Ross legally divorced?",
        choices: ["Twice", "Three times", "Four times", "Five times"],
        answer: 2,
    },
    {   
        question: "3. How many sisters does Joey have?",
        choices: ["2", "4", "7", "6"],
        answer: 3,
    },
    {   
        question: "4. Who did rachel discover her ex-fiancé Barry was cheating on her with?",
        choices: ["Her sister", "Her coworker", "Monica", "Her best friend"],
        answer: 4,
    },
    {   
        question: `5. Which of the following Chandler "facts" is true?`,
        choices: ["He has a third nipple", "He gas all his toes", "He dated Rachel", "He is a millionaire"],
        answer: 1,
    },
    {   
        question: `6. Which member of the Friends crew kissed Rachel’s mom?`,
        choices: ["Chandler", "Ross", "Joey", "Phoebe"],
        answer: 3,
    },
    {   
        question: "7. What’s Phoebe’s sister’s name?",
        choices: ["Amy", "Ursula", "Jill", "Monica"],
        answer: 1,
    },
    {   
        question: "8. Who hates Thanksgiving?",
        choices: ["Monica", "Joey", "Chandler", "Ross"],
        answer: 3,
    },
]


// console.log(questions[6])



const answers = document.querySelectorAll(`.answer-text`)
const question = document.querySelector(`#question`)
const progress = document.querySelector(`#progress`)

let questionCounter = 0
let score = 0
let correctAnswer = false




loadGame()


function loadGame() {
    question.innerHTML = questions[questionCounter].question
    answers.forEach(function(choice, i) {
        choice.innerHTML = questions[questionCounter].choices[i]
    })
    updateProgress()
}

function updateProgress() {
    progress.innerHTML = `Question ${questionCounter+1} of 8`
}

answers.addEventListener( 'click', () => {
    const question = questions[questionCounter].question
    if(question.answer === answer.textContent){
        score++
    }
    questionCounter++
    getQuestion();
})




function getQuestion () {
    questionCounter++

    if (count > 8) {
        count = 8;
    } else if (count !== 8) {
        loadGame();
    } else if (count === 8) {
        return window.location.assign('/end.html')
    }
    
}

function resetQuiz () {

}