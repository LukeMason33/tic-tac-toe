// var gameSqauresChosen = [];
// for (var i = 0; i < gameBoardSqaures.length; i++) {
//   var squarePosition = gameBoardSqaures[i];
//   squarePosition = i + 1;
//   gameSqauresChosen.push(squarePosition);


var currentGame;

var playersTurnIndicator = document.querySelector('h1');
var gameBoard = document.querySelector('.game-board');
var gameBoardBoxes = document.querySelectorAll('.sqaure');

gameBoard.addEventListener('click', playPiece);

function createGame() {
  var playerOne = new Player('player1', '🔶');
  var playerTwo = new Player('player2', '🔷');
  currentGame = new Game(playerOne, playerTwo);
  playersTurnIndicator.innerText = `It's ${currentGame.playersTurn}'s turn`
};

function playPiece() {
  event.preventDefault();
  placeTokenInBox();
  currentGame.checkForWin();
};


function placeTokenInBox() {
  var selectedBox;
  if (event.target.className === 'sqaure') {
    selectedBox = event.target;
    recordSelectedBoxes(selectedBox);
    event.target.innerHTML = `
      <p>${currentGame.playersTurn}</p>`;
      changePlayersTurn();
  }
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
