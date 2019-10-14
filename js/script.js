let computerMove = 'unknown move';
let playerMove = 'unknown move';

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

if (randomNumber == 1) {
    computerMove = 'ROCK';
} else if (randomNumber == 2) {
    computerMove = 'PAPER';
} else if (randomNumber == 3) {
    computerMove = 'SCISSORS';
}

printMessage('My move is: ' + computerMove);

let playerInput = prompt('Pick you move! 1: ROCK, 2: PAPER, 3: SCISSORS');

console.log('Player input: ' + playerInput);

if (playerInput == '1') {
    playerMove = 'ROCK';
} else if (playerInput == '2') {
    playerMove = 'PAPER';
} else if (playerInput == '3') {
    playerMove = 'SCISSORS';
}

printMessage('Your move is: ' + playerMove);



//  Step By Step

// let randomFraction = Math.random();
// printMessage('Random fraction is: ' + randomFraction)

// let calculation = randomFraction * 3 + 1;
// printMessage('Fraction multiplied by 3 and appended by 1: ' + calculation);

// let roundNumber = Math.floor(calculation);
// printMessage('Number rounded down is: ' + roundNumber);

// Random in a range
// let testRandom = Math.floor(Math.random() * ((19 - 11) + 1) + 11);
// printMessage('random within 11-19 range: ' + testRandom);