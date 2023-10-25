const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput
    } else {
    console.log('Error, please choose rock, paper or scissors');
    }
  }
  
  const getComputerChoice = () => { 
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    } 
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The Computer Wins';
      } else {
        return 'You Win!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The Computer Wins';
      } else {
        return 'You Win!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The Computer Wins';
      } else {
        return 'You Win!';
      }
    }
  };
  
  const playGame = () => {
    let userChoice = getUserChoice('scissors');
    console.log(userChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();