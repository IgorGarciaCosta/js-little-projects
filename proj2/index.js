let firstCard
let cards = []
let hasBJ = false;
let isAlive = false
let message = '' 
let topMessage = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#cards-el");
let cardCounter=0

let sum = 0

function startGame(){
    firstCard = getRandomCard()
    isAlive = true
    cards = [firstCard]
    sum = firstCard
    renderGame();
}

function renderGame(){
    cardEl.textContent ="Cartas: ";
    for(let i=0; i<cardCounter;i++){
        cardEl.textContent+= cards[i]+" "
    }

    sumEl.textContent = ("Soma: "+sum);

    if(sum<21){
        message = "want to draw a card?"
    }
    
    else if(sum === 21){
        message ="you've got a blackjack!"
        sumEl.textContent =("Soma: "+sum);
        hasBJ=true;
    }
    
    else{
        isAlive = false
        message ="u're out of the game!"
        sumEl.textContent = ("Soma: "+sum);
    }

    topMessage.textContent = message
}

function addCard(){
    if(isAlive){
        cardCounter++;
        let card = getRandomCard();
        sum+=card;
        cards.push(card)
        renderGame();
    }
    
}

function getRandomCard(){
    return Math.floor(Math.random()*13)+1;
}