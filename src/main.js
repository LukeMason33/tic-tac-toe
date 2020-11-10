var currentGame;

var playersTurnIndicator = document.querySelector('h1');
var gameBoard = document.querySelector('.game-board');
var gameBoardBoxes = document.querySelectorAll('.sqaure');
var playerOneWinCounter = document.querySelector('.player-one-wins');
var playerTwoWinCounter = document.querySelector('.player-two-wins');

gameBoard.addEventListener('click', playTurn);
window.onload = createGame();

function createGame() {
  var playerOne = new Player('player1', '🔶');
  var playerTwo = new Player('player2', '🔷');
  currentGame = new Game(playerOne, playerTwo);
  displayWins();
  playersTurnIndicator.innerText = `It's ${currentGame.playersTurn}'s turn`
};

function checkForWin() {
  var winningSequence;
 for (var i = 0; i < currentGame.winningSequences.length; i++) {
   winningSequence = currentGame.winningSequences[i].split('');
   checkWhichPlayerWon(winningSequence);
   }
 };

function checkWhichPlayerWon (winningSequence) {
   if (currentGame.playerOneSelections.includes(winningSequence[0]) && currentGame.playerOneSelections.includes(winningSequence[1]) && currentGame.playerOneSelections.includes(winningSequence[2]) ) {
     currentGame.playerOneWins();
     playersTurnIndicator.innerText = `${currentGame.playerOne.token} WINS`;
     clearGameBoard();
   }
   else if (currentGame.playerTwoSelections.includes(winningSequence[0]) && currentGame.playerTwoSelections.includes(winningSequence[1]) && currentGame.playerTwoSelections.includes(winningSequence[2])) {
     currentGame.playerTwoWins();
     playersTurnIndicator.innerText = `${currentGame.playerTwo.token} WINS`;
     clearGameBoard();
   }
 };

function playTurn() {
  event.preventDefault();
  placeTokenInBox();
  checkForWin();
};


function placeTokenInBox() {
  var selectedBox;
  if (event.target.className === 'sqaure') {
    selectedBox = event.target;
    event.target.innerHTML = `
      <p>${currentGame.playersTurn}</p>`;
    recordSelectedBoxes(selectedBox);
    disablePlayedBox(selectedBox);
    changePlayersTurn();
  }
  else {
    alert("DOH! Choose a box that hasn't been played yet!");
  }
};

function disablePlayedBox(box) {
  box.classList.add('played');
};

function changePlayersTurn() {
  currentGame.switchPlayers();
  playersTurnIndicator.innerText = `It's ${currentGame.playersTurn}'s turn`;
};

function recordSelectedBoxes(box) {
  var boxNumber;
  for (var i = 0; i < gameBoardBoxes.length; i++) {
    if (box === gameBoardBoxes[i]) {
      boxNumber = i + 1;
      recordEachPlayersSelections(boxNumber);
    }
  }
};

function recordEachPlayersSelections(box) {
  if (currentGame.playersTurn === currentGame.playerOne.token) {
    currentGame.playerOneSelections.push(box.toString());
  }
  else {
    currentGame.playerTwoSelections.push(box.toString());
  }
};

function clearGameBoard() {
  for (var i = 0; i < gameBoardBoxes.length; i++) {
    gameBoardBoxes[i].innerHTML = '';
    gameBoardBoxes[i].classList.remove('played');
    displayWins();
  }
};

function displayWins () {
  playerOneWinCounter.innerText = `${currentGame.playerOne.wins} Wins`;
  playerTwoWinCounter.innerText = `${currentGame.playerTwo.wins} Wins`;
}
