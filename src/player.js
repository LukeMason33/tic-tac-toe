class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    // var locallyStoredWins = this.wins;
    // localStorage.setItem(this.id, JSON.stringify(locallyStoredWins));
  }

  retrieveWinsFromStorage() {

  }
}
