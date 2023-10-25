let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
    const humanDifference = Math.abs(targetNum - humanGuess);
    const compDifference = Math.abs(targetNum - computerGuess);
    return humanDifference <= compDifference
};

const updateScore = winner => {
    if (winner === 'human'){
       humanScore++;
    } else {
        computerScore++;
    };
};

const advanceRound = () => {
    currentRoundNumber++;
};

generateTarget();
compareGuesses();
updateScore();
advanceRound();