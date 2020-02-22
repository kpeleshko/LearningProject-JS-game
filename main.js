let playerRoundScore, dulerRoundScore;

gamePlaying = true;

let cardsAll = [
    { img: 'img/2C.png', points: 2},
    { img: 'img/2D.png', points: 2},
    { img: 'img/2H.png', points: 2},
    { img: 'img/2S.png', points: 2},

    { img: 'img/3C.png', points: 3},
    { img: 'img/3D.png', points: 3},
    { img: 'img/3H.png', points: 3},
    { img: 'img/3S.png', points: 3},

    { img: 'img/4C.png', points: 4},
    { img: 'img/4D.png', points: 4},
    { img: 'img/4H.png', points: 4},
    { img: 'img/4S.png', points: 4},

    { img: 'img/5C.png', points: 5},
    { img: 'img/5D.png', points: 5},
    { img: 'img/5H.png', points: 5},
    { img: 'img/5S.png', points: 5},
    
    { img: 'img/6C.png', points: 6},
    { img: 'img/6D.png', points: 6},
    { img: 'img/6H.png', points: 6},
    { img: 'img/6S.png', points: 6},
    
    { img: 'img/7C.png', points: 7},
    { img: 'img/7D.png', points: 7},
    { img: 'img/7H.png', points: 7},
    { img: 'img/7S.png', points: 7},

    { img: 'img/8C.png', points: 8},
    { img: 'img/8D.png', points: 8},
    { img: 'img/8H.png', points: 8},
    { img: 'img/8S.png', points: 8},
    
    { img: 'img/9C.png', points: 9},
    { img: 'img/9D.png', points: 9},
    { img: 'img/9H.png', points: 9},
    { img: 'img/9S.png', points: 9},

    { img: 'img/10C.png', points: 10},
    { img: 'img/10D.png', points: 10},
    { img: 'img/10H.png', points: 10},
    { img: 'img/10S.png', points: 10},

    { img: 'img/JC.png', points: 10},
    { img: 'img/JD.png', points: 10},
    { img: 'img/JH.png', points: 10},
    { img: 'img/JS.png', points: 10},

    { img: 'img/QC.png', points: 10},
    { img: 'img/QD.png', points: 10},
    { img: 'img/QH.png', points: 10},
    { img: 'img/QS.png', points: 10},

    { img: 'img/KC.png', points: 10},
    { img: 'img/KD.png', points: 10},
    { img: 'img/KH.png', points: 10},
    { img: 'img/KS.png', points: 10},

    { img: 'img/AC.png', points: 11},
    // { img: 'img/AD.png', points: 11},
    { img: 'img/AH.png', points: 11},
    { img: 'img/AS.png', points: 11}
]

newGame()

function newGame() {
    playerRoundScore = 0;
    dulerRoundScore = 0;
    gamePlaying = true;
    document.querySelector('.all-cards').style.display = "block";
    document.querySelector('.final-message__wrapper').style.display = "none";
    document.getElementById('player__score').textContent = "0";
    document.getElementById('duler__score').textContent = "0";

    document.querySelector('.btn__wrapper').style.display = "none";
    document.querySelector('.btn__new').style.display = "none";

    document.querySelector('.player__card-1').style.display = "none";
    document.querySelector('.player__card-2').style.display = "none";
    document.querySelector('.player__card-3').style.display = "none";
    document.querySelector('.duler__card-1').style.display = "none";
    document.querySelector('.duler__card-2').style.display = "none";

    document.querySelector('.all-cards').addEventListener('click', startGame);
};


document.querySelector('.all-cards').addEventListener('click', startGame);
function startGame(){
    setTimeout(() => document.querySelector('.btn__wrapper').style.display = "inline-block", 2500);
    
    let playerCard1 = cardsAll[Math.floor(Math.random() * cardsAll.length)];
    let playerCard2 = cardsAll[Math.floor(Math.random() * cardsAll.length)];
    let dulerCard1 = cardsAll[Math.floor(Math.random() * cardsAll.length)];

    //display the img result
    document.querySelector('.player__card-1').style.display = "inline-block";
    setTimeout(() => document.querySelector('.player__card-2').style.display = "inline-block", 500);
    setTimeout(() => document.querySelector('.duler__card-1').style.display = "inline-block", 1200);
    setTimeout(() => document.querySelector('.duler__card-2').style.display = "inline-block", 1800);

    document.querySelector('.player__card-1').src = playerCard1.img;
    document.querySelector('.player__card-2').src = playerCard2.img;
    document.querySelector('.duler__card-1').src = dulerCard1.img;
    document.querySelector('.duler__card-2').src = 'img/gray_back.png';

    //display and add scores
    playerRoundScore = playerCard1.points + playerCard2.points;
    dulerRoundScore = dulerCard1.points;
    
    setTimeout(() => document.querySelector('#player__score').textContent = playerRoundScore, 1300)
    setTimeout(() => document.querySelector('#duler__score').textContent = dulerRoundScore, 2500)
    
    document.querySelector('.all-cards').removeEventListener('click', startGame);
    gamePlaying = false;
}

document.querySelector('.btn__add').addEventListener('click', function() {
    // random img+score
    let playerCard3 = cardsAll[Math.floor(Math.random() * cardsAll.length)];

    // add img and score
    document.querySelector('.player__card-3').src = playerCard3.img;
    document.querySelector('.player__card-3').style.display = "inline-block";
    playerRoundScore += playerCard3.points;
    document.querySelector('#player__score').textContent = playerRoundScore
});

document.querySelector('.btn__show').addEventListener('click', function() {
    
    // show diler second card
    let dulerCard2 = cardsAll[Math.floor(Math.random() * cardsAll.length)];
    document.querySelector('.duler__card-2').src = dulerCard2.img;
    dulerRoundScore += dulerCard2.points;
    document.querySelector('#duler__score').textContent = dulerRoundScore

    // check who won the game
    setTimeout(() => document.querySelector('.final-message__wrapper').style.display = "block", 100)
    setTimeout(() => document.querySelector('.all-cards').style.display = "none", 100)
    if (playerRoundScore < dulerRoundScore || playerRoundScore > 21) {
        document.querySelector('.final-message').textContent = 'You are looser!'
    } else if (playerRoundScore > dulerRoundScore) {
        document.querySelector('.final-message').textContent = 'You are winner!'
    } else {
        document.querySelector('.final-message').textContent = 'You both are winners!'
    }
    
    //end game
    gamePlaying = false;
    document.querySelector('.btn__wrapper').style.display = "none";
    document.querySelector('.btn__new').style.display = "inline-block";
    
});

document.querySelector('.btn__new').addEventListener('click', function() {
    newGame()
});