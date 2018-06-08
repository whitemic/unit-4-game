$(document).ready(function(){

    var crystal1Val = 0;
    var crystal2Val = 0;
    var crystal3Val = 0;
    var crystal4Val = 0;
    var gameNumber = 0;

    var currentScore = 0;
    var winsCounter = 0;
    var lossCounter = 0;
    var gameWon = false;
    var gameLost = false;

    function restart() {
        crystal1Val = Math.floor((Math.random() * 12) + 1);
        crystal2Val = Math.floor((Math.random() * 12) + 1);
        crystal3Val = Math.floor((Math.random() * 12) + 1); 
        crystal4Val = Math.floor((Math.random() * 12) + 1);
        gameNumber = Math.floor((Math.random() * 101) + 19);
    
        currentScore = 0;
        gameWon = false;
        gameLost = false;

        update();
    }

    function update() {
        $("#number").text(gameNumber);
        $("#number2").text(currentScore);
        $("#outcome-box").text("Wins: " + winsCounter + " Losses: " + lossCounter);
    }

    function checkWon() {
        if (currentScore === gameNumber) {
            gameWon = true;
        }
    }

    function checkLost() {
        if (currentScore > gameNumber) {
            gameLost = true;
        }
    }

    function winGame() {
        winsCounter++;
        update();
    }
    function loseGame() {
        lossCounter++;
        update();
    }



restart();
update(); 


    $("#button1").on("click", function() {
        currentScore += crystal1Val;
        update();
        checkWon();
        checkLost();
        if (gameWon) {
            //flash something saying you won
            winGame();
            restart();
        } else {
            if (gameLost) {
                //flash something saying you lost
                loseGame();
                restart();
            }
        }
        console.log(crystal1Val);
    });

    $("#button2").on("click", function() {
        currentScore += crystal2Val;
        update();
        checkWon();
        checkLost();
        if (gameWon) {
            //flash something saying you won
            winGame();
            restart();
        } else {
            if (gameLost) {
                //flash something saying you lost
                loseGame();
                restart();
            }
        }
        
        console.log(crystal2Val);
    });

    $("#button3").on("click", function() {
        currentScore += crystal3Val;
        update();
        checkWon();
        checkLost();
        if (gameWon) {
            //flash something saying you won
            winGame();
            restart();
        } else {
            if (gameLost) {
                //flash something saying you lost
                loseGame();
                restart();
            }
        }
        
        console.log(crystal3Val);
    });

    $("#button4").on("click", function() {
        currentScore += crystal4Val;
        update();
        checkWon();
        checkLost();
        if (gameWon) {
            //flash something saying you won
            winGame();
            restart();
        } else {
            if (gameLost) {
                //flash something saying you lost
                loseGame();
                restart();
            }
        }
        console.log(crystal4Val);
    });

})
