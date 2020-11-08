class Game {
  constrcutor(player1, player2) {
    this.playerOne = player1;
    this.playerTwo = player2;
    this.playerOneSelections = [];
    this.playerTwoSelections =[];
    this.winningSequences= [[1,2,3], [1,4,7], [3,6,9], [7,8,9], [4,5,6], [1,5,9], [3,5,7]];
    this.playersTurn = player1;
  }

  switchPlayers() {
    if (this.playersTurn === player1) {
      this.playersTurn = player2;
    }
    else {
      this.playersTurn = player1;
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
