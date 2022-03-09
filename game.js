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



// grab html elements
let choices = document.querySelectorAll('.answer-text');
let question = document.querySelector('.question')
let progress = document.querySelector(`#progress`)
let currentScore = document.querySelector(`#score`)
let finalScore = document.querySelector(`#end-game-text`)


window.onload = loadGame();


function loadGame() {
    question.innerText = questions[questionCount].question;
    choices.forEach(function(choice, i) {
        choice.innerText = questions[questionCount].choices[i];
    });
    
    updateProgress();
}

choices.forEach(function(choice) {
    choice.addEventListener('click', scoring);
});



function updateProgress() {
  progress.innerHTML = `Questions ${questionCount+1}/8`
}

function scoring() {
    answer = questions[questionCount].answer;
 
    if (this.innerText === questions[questionCount].choices[answer]) {
        correctAnswer = true
        score += 100
        currentScore.innerText = score
    } else {
        correctAnswer = false;
    }
    nextQuestion();
}


function nextQuestion() {
    questionCount++;
    if (questionCount < 8) {
        loadGame();
    } else if (questionCount === 8) {
        return window.location.assign('/endGame.html')
    }
}



function resetQuiz() {
    
    renderQuestion();
}    

















// choicesPara = document.getElementsByTagName('p')[1];

// resetButton.addEventListener('click', resetQuiz);
// let resetButton = document.getElementsByClassName('reset');
// let prevButton = document.getElementsByClassName('prev');







// the prevButton will only be available to go back one question
// function prevQuestion() {
    //     // when the previous question renders, remove the prevButton
    //     prevFlag = false;
    
//     // if the user originally clicked the correctAnswer, remove score
//     if (correctAnswer) {
//         correctAnswer = false;
//         score--;
//     }
    
//     // then go back and render the old question
//     count--;
//     renderQuestion();
// }





// function renderCompletion() {
//     updateProgress();
    // scorePercentage = Math.round(score/20 * 100) + '%';
    
    // // update with a thank you note and the user's percentage
    // question.innerText = 'Thank you for Completing the Quiz!';
    // resultsPara.innerText = 'Your score is: ' + scorePercentage;
    
    // // reset avail, prevButton and choicesPara are removed
    // choicesPara.classList.add('hide');
    // prevButton.classList.add('hide');
    // resetButton.classList.remove('hide');
// }





// function resetQuiz() {
    // reset tracking variables
    // count = 0;
    // score = 0;
    // correctAnswer = false;
    // prevFlag = false;
    
    // // resultsPara is hidden
    // resultsPara.innerText = '';
    
    // // choicesPara displays while resetButton is hidden
    // choicesPara.classList.remove('hide');
    // resetButton.classList.add('hide');
    
//     renderQuestion();
// }    




// function updateProgress() {
        // progressPercentage = Math.round((count/20) * 100);
        // progress.style.width = progressPercentage + '%';
    // }