let firstCard
let cards = []
let hasBJ = false;
let isAlive = false
let message = '' 
let topMessage = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#cards-el");
let nameEmpty = document.querySelector(".name-empty")
let player={
    name :"",
    chips: 0
}

let playerEl = document.querySelector("#player-el") 

let cardCounter=0

let sum = 0

const overlay = document.getElementById('overlay')
const popUp = document.querySelector(".modal")



function nameSubmit(){
    if(document.querySelector(".nameInput").value == ""){
        console.log("aa")
        nameEmpty.textContent = "Por favor, adote um nome"
    }
    else{
        player.name = document.querySelector(".nameInput").value
        playerEl.textContent = player.name+": "+player.chips
        closePopUp()
    }
    
}

function closePopUp(){
    if(document.querySelector(".nameInput").value == ""){
        console.log("aa")
        nameEmpty.textContent = "Por favor, adote um nome"
    }
    else{
        overlay.classList.add("unactive")
        modal.classList.add("unactive")
    }
    
}

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
        message = "Tirar outra carta?"
    }
    
    else if(sum === 21){
        message ="Uou! ganhou o blackjack!"
        sumEl.textContent =("Soma: "+sum);
        hasBJ=true;
    }
    
    else{
        isAlive = false
        message ="Perdeste, meu bom"
        sumEl.textContent = ("Soma: "+sum);
    }

    topMessage.textContent = message
}

function addCard(){
    if(isAlive&&!hasBJ){
        cardCounter++;
        let card = getRandomCard();
        sum+=card;
        cards.push(card)
        player.chips+=5
        playerEl.textContent = player.name+": "+player.chips
        renderGame();
    }
    
}

function getRandomCard(){
    return Math.floor(Math.random()*13)+1;
}