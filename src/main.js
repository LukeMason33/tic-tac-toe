var currentGame;

function createGame() {
  player1 = new Player("player1", "🔶");
  player2 = new Player("player2", "🔷");
  currentGame = new Game(player1, player2);
};
