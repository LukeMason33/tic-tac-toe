class Game {
  constructor(player1, player2) {
    this.playerOne = player1;
    this.playerTwo = player2;
    this.playerOneSelections = [];
    this.playerTwoSelections =[];
    this.winningSequences= ['123', '147', '369', '789', '456', '159', '357', '258'];
    this.playersTurn = player1.token;
  }

  switchPlayers() {
    if (this.playersTurn === this.playerOne.token) {
      this.playersTurn = this.playerTwo.token;
    }
    else {
      this.playersTurn = this.playerOne.token;
    }
  }

  playerOneWins () {
      this.resetGame();
      this.playerOne.wins += 1;
    }

  playerTwoWins () {
    this.resetGame();
    this.playerTwo.wins += 1;
  }


  resetGame() {
    this.playerOneSelections = [];
    this.playerTwoSelections = [];
  }
}
