var characterPoints = 100;
var enemyPoints = 100;
var attackPoints = 10;
display();
enemyDisplay();

//toad functions
function display() {
    document.getElementById("character-points").innerHTML = `<b>Points: </b> ${characterPoints}`;
    document.getElementById(`status`).innerHTML = '<h2>Playing...</h2>'
}

function attack() {
    var newPoints = enemyPoints - attackPoints;
    enemyPoints = newPoints;
    enemyDisplay();
    if (enemyPoints <= 0) {
        document.getElementById(`attack-btn`).style.display = "none";
        document.getElementById(`enemy-attack-btn`).style.display = "none";
        document.getElementById(`status`).innerHTML = '<h2>GAME OVER... TOAD WON</h2> <button onclick="restart();">Restart</button>'
    }
}

function restart() {
    characterPoints = 100;
    enemyPoints=100;
    display();
    enemyDisplay();
    document.getElementById(`attack-btn`).style.display = "block";
    document.getElementById(`enemy-attack-btn`).style.display = "block";
}

//link functions
function enemyDisplay() {
    document.getElementById("enemy-points").innerHTML = `<b>Points: </b> ${enemyPoints}`;
}

function enemyAttack() {
    var newPoints = characterPoints - attackPoints;
    characterPoints = newPoints;
    display();
    if (characterPoints <= 0) {
        document.getElementById(`attack-btn`).style.display = "none";
        document.getElementById(`enemy-attack-btn`).style.display = "none";
        document.getElementById(`status`).innerHTML = '<h2>GAME OVER... LINK WON</h2> <button onclick="restart();">Restart</button>'
    }
}

function enemyRestart() {
    characterPoints = 100;
    display();
    document.getElementById(`attack-btn`).style.display = "block";
}