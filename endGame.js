/////////Query selectors/////////
const totalScore = document.querySelector(`#totalScore`)
const endGameMessage = document.querySelector(`#end-game-message`)



/////////Assign local storage value to storedScore/////////
const storedScore = localStorage.getItem('totalscore')
    totalScore.innerHTML = `${storedScore}`



/////////If else statement to say different things based on different final scores /////////
    if (storedScore >= 100 && storedScore < 400 ) {
        endGameMessage.innerHTML = `You only got a few correct, need to watch more episodes!`
    } else if (storedScore >= 400 && storedScore < 700) {
        endGameMessage.innerHTML = `Not bad, want to try again?`
    } else {
        endGameMessage.innerHTML = `That's impressive, great job!`
    }




