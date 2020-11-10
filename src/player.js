class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    var locallyStoredWins = this.wins;
    localStorage.setItem(this.id, JSON.stringify(locallyStoredWins));
  }

  retrieveWinsFromStorage() {
    var storedWins = localStorage.getItem(this.id.key());
    var parsedStoredWins = JSON.parse(storedWins);
    this.wins = parsedStoredWins;
  }
}
