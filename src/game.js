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

  checkForWin(gameBoxes) {
     var winningSequence;
    for (var i = 0; i < this.winningSequences.length; i++) {
      winningSequence = this.winningSequences[i].split('');
      if (this.playerOneSelections.includes(winningSequence[0]) && this.playerOneSelections.includes(winningSequence[1]) && this.playerOneSelections.includes(winningSequence[2]) ) {
        this.resetGame(gameBoxes);
        this.playerOne.wins += 1;
      }
      else if (this.playerTwoSelections.includes(winningSequence[0]) && this.playerTwoSelections.includes(winningSequence[1]) && this.playerTwoSelections.includes(winningSequence[2])) {
        this.resetGame(gameBoxes);
        this.playerTwo.wins += 1;
      }
    }
  }

  resetGame(gameBoxes) {
    this.playerOneSelections = [];
    this.playerTwoSelections = [];
  }
}
