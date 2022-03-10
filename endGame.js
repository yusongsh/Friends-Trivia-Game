const totalScore = document.querySelector(`#totalScore`)
const endGameMessage = document.querySelector(`#end-game-message`)




const storedScore = localStorage.getItem('totalscore')
    totalScore.innerHTML = `${storedScore}`


    console.log(storedScore)
    if (storedScore >= 100 && storedScore < 400 ) {
        endGameMessage.innerHTML = `You only got a few correct, need to watch more episodes!`
    } else if (storedScore >= 400 && storedScore < 700) {
        endGameMessage.innerHTML = `Not bad, want to try again?`
    } else {
        endGameMessage.innerHTML = `That's impressive, great job!`
    }




