const totalScore = document.querySelector(`#totalScore`)
const endGameMessage = document.querySelector(`#end-game-message`)




const storedScore = localStorage.getItem('finalScore')
    totalScore.innerHTML = `${storedScore}`


    // console.log(storedScore)
    // if (storedScore == "100" || storedScore == "200" || storedScore == "300" || storedScore == "400") {
    //     endGameMessage.innerHTML = `You only got a few, need to watch more episodes`
    // } else if (storedScore == "500" || storedScore == "600" || storedScore == "700") {
    //     endGameMessage.innerHTML = `Not bad`
    // } else {
    //     endGameMessage.innerHTML = `That's impressive`
    // }




