const team = {
    _players: [
      {firstName: 'Liz', lastName: 'Bassett', age: 17},
      {firstName: 'Audrey', lastName: 'Bassett', age: 15},
      {firstName: 'Grace', lastName: 'Rothe', age: 17}
    ],
    _games: [
      {opponent: 'Lincoln', teamPoints: 25, opponentPoints: 17},
      {opponent: 'Bell East', teamPoints: 25, opponentPoints: 15},
      {opponent: 'Central', teamPoints: 25, opponentPoints: 10}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
     let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
     }
     this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
      }
      this.games.push(game);
    },
  
  };
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98)
  console.log(team.players);
  console.log(team.games)
  
  