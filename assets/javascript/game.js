$(document).ready(function(){
    var gameNumber = 0;
    var currentScore = 0;
    var winsCounter = 0;
    var lossCounter = 0;
    var gameWon = false;
    var gameLost = false;

    function restart() {
        $(".button").attr("value", "0");
        $("#win-lose").text("");
        gameNumber = Math.floor((Math.random() * 101) + 19);
        currentScore = 0;
        gameWon = false;
        gameLost = false;
        update();
    }

    function update() {
        $("#instructions").text("How to Play: Choose and click on any of the crystal buttons. Each one will be worth a random value between one and twelve for each game you play. When you click on a crystal you will see your current score increase by the value of the crystal you chose. Your goal is to use the crystals strategically so that your current score matches the designated game score for that round. If you go over this amount, you will lose the game.");
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
        $("#win-lose").text("You won!");
        update();
        setTimeout(restart, 1000);
        // restart();
    }
    function loseGame() {
        lossCounter++;
        $("#win-lose").text("You lost!");
        update();
        setTimeout(restart, 1000);
        // restart();
    }



restart();
update(); 

$(".button").on("click", function() {
    var value1 = $(this).attr("value");
    var value2 = parseInt(value1);
    if (value2 === 0) {
        $(this).attr("value", Math.floor(Math.random() * 12) + 1);
    }
    currentScore += parseInt($(this).attr("value"));
    update();
    checkWon();
    checkLost();
    if (gameWon) {
        winGame();
        // restart();
    } else {
        if (gameLost) {
            loseGame();
            // restart();
        }
    }
})
})
