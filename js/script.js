'use strict';

{

    let compScore = 0;
    let playerScore = 0;

    let playGame = function(playerInput) {

        clearMessages();

        let getMoveName = function (argMoveId) {
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

        let argPlayerMove = getMoveName(playerInput);

        console.log('Player input: ' + playerInput);

        printMessage('Your move is: ' + argPlayerMove);

        let displayResult = function(argComputerMove, argPlayerMove) {
            
            if (argComputerMove == 'ROCK' && argPlayerMove == 'PAPER') {
                printMessage('YOU win!');
                playerScore++;
            } else if (argComputerMove == 'ROCK' && argPlayerMove == 'SCISSORS') {
                printMessage('I win!');
                compScore++;
            } else if (argComputerMove == 'PAPER' && argPlayerMove == 'ROCK') {
                printMessage('I win!');
                compScore++;
            } else if (argComputerMove == 'PAPER' && argPlayerMove == 'SCISSORS') {
                printMessage('YOU win!');
                playerScore++;
            } else if (argComputerMove == 'SCISSORS' && argPlayerMove == 'ROCK') {
                printMessage('YOU win!');
                playerScore++;
            } else if (argComputerMove == 'SCISSORS' && argPlayerMove == 'PAPER') {
                printMessage('I win!');
                compScore++;
            } else if (argComputerMove == argPlayerMove) {
                printMessage('DRAW!');
            } else {
                printMessage('you picked WRONG number');
            }
        }

        displayResult(argComputerMove, argPlayerMove);
        printResult('comp: ' + compScore + ' - ' + playerScore);
    }

    const rockButton = document.getElementById('play-rock'),
        paperButton = document.getElementById('play-paper'),
        scissorsButton = document.getElementById('play-scissors');

    rockButton.addEventListener('click', function() {
        playGame(1);
    });
    paperButton.addEventListener('click', function() {
        playGame(2);
    });
    scissorsButton.addEventListener('click', function() {
        playGame(3);
    });

}