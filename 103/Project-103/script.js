var characterPoints=100;
var attackPoints=10;
var enemyPoints=100;
enemyDisplay();
display();

function display(){
    document.getElementById("character-points").innerHTML=`<b>Points:</b>
    ${characterPoints}`;
    document.getElementById('status').innerHTML=`<h2>Playing ...</h2>`;
}

function attack(){
    var newPoints= enemyPoints-attackPoints;
    enemyPoints=newPoints;
    enemyDisplay();
    // display();
    if(characterPoints<=0){
        document.getElementById(`attack-btn`).style.display="none";
        document.getElementById(`enemy-attack-btn`).style.display= "none";
        document.getElementById(`status`).innerHTML=`<h2>Game OVER ... TOAD IS WINNER</h2> <button onclick= "restart()">RESTART</button>`
    }
}
function restart(){
    characterPoints=100;
    enemyPoints= 100;
    enemyDisplay();
    display();
    document.getElementById(`attack-btn`).style.display="block";
    document.getElementById(`enemy-attack-btn`).style.display="block";
}
//enemy function
function enemyDisplay(){
    document.getElementById("enemy-points").innerHTML = `<b>Points: </b> ${enemyPoints}`;
}
function enemyAttack() {
    var newPoints = characterPoints - attackPoints;
    characterPoints = newPoints;
    display();
    if (characterPoints <= 0) {
        document.getElementById(`attack-btn`).style.display = "none";
        document.getElementById(`enemy-attack-btn`).style.display = "none";
        document.getElementById(`status`).innerHTML = '<h2>GAME OVER... LINK Is THE WINNER!</h2> <button onclick="restart();">Restart</button>'
    }
}
function enemyRestart() {
    characterPoints = 100;
    display();
    document.getElementById(`attack-btn`).style.display = "block";
}