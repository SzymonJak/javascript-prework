function playGame(playerInput) {

    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'ROCK';
        } else if (argMoveId == 2) {
            return 'PAPER';
        } else if (argMoveId == 3) {
            return 'SCISSORS';
        } else {
            printMessage('I don\'t the move by the id of ' + argMoveId + '.');
            return 'unknown move';
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let argComputerMove = getMoveName(randomNumber);

    console.log('Random number is: ' + randomNumber);

    printMessage('My move is: ' + argComputerMove);

    // let playerInput = prompt('Pick you move! 1: ROCK, 2: PAPER, 3: SCISSORS');

    let argPlayerMove = getMoveName(playerInput);

    console.log('Player input: ' + playerInput);

    printMessage('Your move is: ' + argPlayerMove);

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('move: ', argComputerMove, argPlayerMove);
        if (argComputerMove == 'ROCK' && argPlayerMove == 'PAPER') {
            printMessage('YOU win!');
        } else if (argComputerMove == 'ROCK' && argPlayerMove == 'SCISSORS') {
            printMessage('I win!');
        } else if (argComputerMove == 'PAPER' && argPlayerMove == 'ROCK') {
            printMessage('I win!');
        } else if (argComputerMove == 'PAPER' && argPlayerMove == 'SCISSORS') {
            printMessage('YOU win!');
        } else if (argComputerMove == 'SCISSORS' && argPlayerMove == 'ROCK') {
            printMessage('YOU win!');
        } else if (argComputerMove == 'SCISSORS' && argPlayerMove == 'PAPER') {
            printMessage('I win!');
        } else if (argComputerMove == argPlayerMove) {
            printMessage('DRAW!');
        } else {
            printMessage('you picked WRONG number');
        }
    }

    displayResult(argComputerMove, argPlayerMove);
}

let rockButton = document.getElementById('play-rock');
let paperButton = document.getElementById('play-paper');
let scissorsButton = document.getElementById('play-scissors');

rockButton.addEventListener('click', function() {
    playGame(1);
});
paperButton.addEventListener('click', function() {
    playGame(2);
});
scissorsButton.addEventListener('click', function() {
    playGame(3);
});

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