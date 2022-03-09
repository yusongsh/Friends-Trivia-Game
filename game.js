let questions = [
    {
        question: "1. Whats Joey's special?",
        choices: [ "Bologna sandwich", "2 Pizzas", "Macaroni + Cheese", "Ramen"],
        answer: 1,
    },
    {   
        question: "2. How many times was Ross legally divorced?",
        choices: ["Twice", "Three times", "Four times", "Five times"],
        answer: 1,
    },
    {   
        question: "3. How many sisters does Joey have?",
        choices: ["2", "4", "7", "6"],
        answer: 2,
    },
    {   
        question: "4. Who did rachel discover her ex-fiancé Barry was cheating on her with?",
        choices: ["Her sister", "Her coworker", "Monica", "Her best friend"],
        answer: 3,
    },
    {   
        question: `5. Which of the following Chandler "facts" is true?`,
        choices: ["He has a third nipple", "He gas all his toes", "He dated Rachel", "He is a millionaire"],
        answer: 0,
    },
    {   
        question: `6. Which member of the Friends crew kissed Rachel’s mom?`,
        choices: ["Chandler", "Ross", "Joey", "Phoebe"],
        answer: 2,
    },
    {   
        question: "7. What’s Phoebe’s sister’s name?",
        choices: ["Amy", "Ursula", "Jill", "Monica"],
        answer: 1,
    },
    {   
        question: "8. Who hates Thanksgiving?",
        choices: ["Monica", "Joey", "Chandler", "Ross"],
        answer: 2,
    },
]



let questionCount = 0;
let score = 0;
let correctAnswer = false;


let choices = document.querySelectorAll('.answer-text');
let question = document.querySelector('.question')
let progress = document.querySelector(`#progress`)
let currentScore = document.querySelector(`#score`)



window.onload = loadGame();


function loadGame() {
    question.innerText = questions[questionCount].question;
    choices.forEach((choice, i) => {
        choice.innerText = questions[questionCount].choices[i];
    });
    updateProgress();
}


function updateProgress() {
    progress.innerHTML = `Questions ${questionCount+1}/8`
}

choices.forEach(choice => {
    choice.addEventListener('click', scoreBoard);
});

//////line 81, credit to Louis, using 'this.'///////////
function scoreBoard() {
    answer = questions[questionCount].answer;
    if (this.innerText === newFunction()) {
        correctAnswer = true
        score += 100
        currentScore.innerText = score
    } else {
        correctAnswer = false;
    }
    nextQuestion();

    function newFunction() {
        return questions[questionCount].choices[answer];
    }
}

function nextQuestion() {
    questionCount++;
    if (questionCount < 8) {
        loadGame();
    } else if (questionCount === 8) {
        let finalScore = currentScore.innerHTML
        window.localStorage.setItem('finalScore',JSON.stringify(finalScore))
        return window.location.assign('/endGame.html')
    }
}

