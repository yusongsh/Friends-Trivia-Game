/////////Questions stored in an array/////////
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
    {   
        question: "9. Ross says whose name at the altar in London?",
        choices: ["Monica", "Rachel", "Phoebe", "Susan"],
        answer: 1,
    },
    {   
        question: "10. What year did Friends first premiere?",
        choices: ["1992", "1993", "1994", "1995"],
        answer: 2,
    },
]



let questionCount = 0;
let score = 0;
let correctAnswer = false;

/////////Query selectors/////////
let choices = document.querySelectorAll('.answer-text');
let question = document.querySelector('.question')
let progress = document.querySelector(`#progress`)
let currentScore = document.querySelector(`#score`)



window.onload = loadGame();


/////////When page opens, load empty container with questions/////////
function loadGame() {
    question.innerText = questions[questionCount].question;
    choices.forEach((choice, i) => {
        choice.innerText = questions[questionCount].choices[i];
    });
    updateProgress();
}


/////////Add event listener to each button/////////
choices.forEach(choice => {
    choice.addEventListener('click', scoreBoard);
});


/////////Update score /////////
function updateProgress() {
    progress.innerHTML = `Questions ${questionCount+1}/10`
}


///////// When clicked the correct answer, score goes up, progress update, nothing happens if wrong answer clicked /////////
/////////Credit to Louis(A friend, fellow GA student, who helped me figured this out)/////////
function scoreBoard() {
    let answer = questions[questionCount].answer;
    if (this.innerText === questions[questionCount].choices[answer]) {
        correctAnswer = true
        score += 100
        currentScore.innerText = score
      
    } else {
        correctAnswer = false;
    }
    nextQuestion()
}


    
    /////////testing function/////////
    //////////////////////////////////
    //////////Didn't work/////////////
    
///////////////////////////////////////////

// function changeColor() {
//     if (correctAnswer = true ) {
//     choices.classList.add = (`correctAnswer`)
//     } else {
//     choices.classList.add =(`wrongAnswer`)
//     }
// }



/////////Assign next question after answers selected, store the final score at local storage/////////
function nextQuestion() {
    questionCount++;
    if (questionCount < 10) {
        loadGame();
    } else if (questionCount === 10) {
        let finalScore = currentScore.innerText
        localStorage.setItem("totalscore", finalScore)
        return window.location.assign('/endGame.html')
    }
}

