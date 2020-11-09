// var gameSqauresChosen = [];
// for (var i = 0; i < gameBoardSqaures.length; i++) {
//   var squarePosition = gameBoardSqaures[i];
//   squarePosition = i + 1;
//   gameSqauresChosen.push(squarePosition);


var currentGame;

var playersTurnIndicator = document.querySelector('h1');
var gameBoard = document.querySelector('.game-board');

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
};


function placeTokenInBox() {
  if (event.target.className === 'sqaure') {
    event.target.innerHTML = `
      <p>${currentGame.playersTurn}</p>
      `;
      currentGame.switchPlayers();
  }
};
