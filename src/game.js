class Game {
  constructor(player1, player2) {
    this.playerOne = player1;
    this.playerTwo = player2;
    this.playerOneSelections = [];
    this.playerTwoSelections =[];
    this.winningSequences= [[1,2,3], [1,4,7], [3,6,9], [7,8,9], [4,5,6], [1,5,9], [3,5,7]];
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

  checkForWin() {
    for (var i = 0; i < this.winningSequences.length; i++) {
      if (this.playerOneSelections.includes(this.winningSequences[i]) || this.playerTwoSelections.includes(this.winningSequences[i])) {
        this.resetGame(clearBoard);
      }
    }
  }

  resetGame(clearBoard) {
    clearBoard = "";
    this.playerOneSelections = [];
    this.playerTwoSelections = [];
  }
}
