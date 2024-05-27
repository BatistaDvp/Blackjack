//DOM
let desc = document.querySelector(".desc");
let cards = document.querySelector(".cards");
let sum = document.querySelector(".sum");
let startBtn = document.querySelector(".start");
let newBtn = document.querySelector(".new");

//DECLARATIONS
let random = Math.random(2, 11);
let card1, card2, soma;
let cardsArray = [card1, card2];

//FUNCTIONS

function getRandomCard() {
  return Math.floor(Math.random() * 10) + 2;
}

function startGame() {
  startBtn.addEventListener("click", function () {
    cardsReceived();
  });
}

function cardsReceived() {
  card1 = getRandomCard();
  card2 = getRandomCard();
  soma = card1 + card2;

  cards.textContent = `Cards: ${card1}, ${card2}`;
  sum.textContent = `Sum: ${soma}`;
  blackjack();
}

function blackjack() {
  if (soma === 12) {
    desc.textContent = `WINNER. You got a blackjack, congrats!!!`;
  } else if (soma < 12) {
    desc.textContent = `You can try a new card`;
    newCard();
  } else {
    desc.textContent = `You lost, try again!`;
  }
}

function newCard() {
  newBtn.addEventListener("click", function () {
    let card3 = getRandomCard();
    cardsArray.push(card3);
    soma = card1 + card2 + card3;
    cards.textContent = `Cards: ${card1}, ${card2}, ${card3}`;
    sum.textContent = `Sum: ${soma}`;
    blackjack();
  });
}


//INVOLKING
startGame();
