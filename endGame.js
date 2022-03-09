const totalScore = document.querySelector(`#totalScore`)
// const endGameText = document.querySelector(`#end-game-text`)
const endGameMessage = document.querySelector(`#end-game-message`)




let storedScore = localStorage.getItem('finalScore')
    totalScore.innerHTML = `${storedScore}`
    // if (storedScore == 100|| storedScore == 200 || storedScore == 300) {
    //     endGameMessage.innerHTML = `You only got a few, need to watch more episode`
    // } else {
    //     endGameMessage.innerHTML = `That's impressive`
    // }




