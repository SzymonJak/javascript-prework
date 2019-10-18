function playGame(playerInput) {

    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'ROCK';
        } else if (argMoveId == 2) {
            return 'PAPER';
        } else if (argMoveId == 3) {
            return 'SCISSORS';
        }
        printMessage('I don\'t the move by the id of ' + argMoveId + '.');
        return 'unknown move';
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

    let compScore = 0;
    let playerScore = 0;

    function score(argComputerMove, argPlayerMove) {
        if (argComputerMove == 'ROCK' && argPlayerMove == 'PAPER') {
            playerScore++;
        } else if (argComputerMove == 'ROCK' && argPlayerMove == 'SCISSORS') {
            compScore++;
        } else if (argComputerMove == 'PAPER' && argPlayerMove == 'ROCK') {
             compScore++;
        } else if (argComputerMove == 'PAPER' && argPlayerMove == 'SCISSORS') {
             playerScore++;
        } else if (argComputerMove == 'SCISSORS' && argPlayerMove == 'ROCK') {
             playerScore++;
        } else if (argComputerMove == 'SCISSORS' && argPlayerMove == 'PAPER') {
             compScore++;
        } else if (argComputerMove == argPlayerMove) {
            printResult('nothing');
        } else {
            printMessage('you picked WRONG number');
        }
    }

    displayResult(argComputerMove, argPlayerMove);
    printResult('comp: ' + compScore + ' - ' + playerScore);
    score(argComputerMove, argPlayerMove);
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

