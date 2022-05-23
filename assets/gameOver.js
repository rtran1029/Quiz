

const userINT = document.getElementById('userINT');
const finalScore = document.getElementById ('finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore

// JSON to the rescue
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];


saveHighScore = (e) => {
    e.preventDefault()
    // console.log("i just saved the score")
    const score = {
        score: mostRecentScore,
        name : userINT.value
    };
    // console.log(highScores);
    highScores.push(score)

    localStorage.setItem('highscores', JSON.stringify(highScores));
    window.location.assign("./index.html");
}