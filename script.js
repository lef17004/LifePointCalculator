var player1Life = 7000;
var player2Life = 5000;
var number      = 0;

// True - Clear Number  False - Reset Game 
var clear = false;
function reset() {
  player1Life = 8000;
  player2Life = 8000;
  number = 0;
  updateLifePoints();
  updateNumber();
}

function updateNumber() {
  document.querySelector("#number").innerHTML = number;
}

function updateLifePoints() {
  document.querySelector("#player1Points").innerHTML = player1Life;
  document.querySelector("#player2Points").innerHTML = player2Life;
}



function addDigitToNumber(digit) {
  setToClear()
  clear = true;
  if (digit == 10) {
    number *= 100;
  }
  else if (digit == 11) {
    number *= 1000;
  }
  else {
  number *= 10;
  number += digit;
  }
  updateNumber();
}


function clearOrReset() {
  if (clear) {
    number = 0;
    updateNumber();
    setToNewGame();
  }
  else {
    reset();
  }
}

function setToClear() {
  clear = true;
  document.querySelector("#clearOrReset").innerHTML = "Clear";
}

function setToNewGame() {
  clear = false;
  document.querySelector("#clearOrReset").innerHTML = "New Game";
}


function coinFlip() {
  var randomNumber = Math.floor((Math.random() * 2) + 1);
  if (randomNumber == 1) {
    alert("Heads")
  }
  else {
    alert("Tails")
  }
}

function rollDice() {
  var randomNumber = Math.floor((Math.random() * 6) + 1);
  alert(randomNumber);
}


function add(player) {
  if (player) {
    player1Life += number;
  }
  else {
    player2Life += number;
  }
  number = 0;
  updateNumber();
  updateLifePoints();
  setToNewGame();
}

function subtract(player) {
  if (player) {
    player1Life -= number;
  }
  else {
    player2Life -= number;
  }
  number = 0;
  updateNumber();
  updateLifePoints();
  setToNewGame();
}

function halfPoints(player) {
  if (player) {
    player1Life /= 2;
  }
  else {
    player2Life /= 2;
  }
  updateLifePoints();
}

reset();