var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var description = document.getElementById("description")
var inventoryItem = document.getElementById("inventoryItem")
var experience = 0
var title = document.getElementById("title")
var key = document.getElementById("inventoryItem")
var meat = document.getElementById("inventoryItem")
var fakkel = document.getElementById("inventoryItem")
//var inventory = {"key":false};
var inventory = []

gameContainer.className = "container0"
button1.onclick = level1;
button1.innerHTML = 'START';
button2.style.visibility="hidden";
button3.style.visibility="hidden";
animate.style.visibility="hidden"
key.style.visibility="hidden"


function level1(){
	gameContainer.className = "container1"
	title.innerHTML = "Level 1";
	description.innerHTML = "Je zit vast in een kooi en je moet ontsnappen. Wat doe je?";
	button1.innerHTML = "Blijf zitten.";
	button1.onclick = BlijfZitten;
	button3.style.visibility="hidden";
	key.style.visibility="visible"
	key.onclick = pickUpKey	
	inventoryItem.src = "sprites/key.png"
	animate.style.visibility="hidden";
}

function pickUpKey(){
    key.style.visibility = 'hidden';
    button2.style.visibility = 'visible'
    inventory['key']=true;
    if(inventory['key'] != null) {
        button2.innerHTML = "Open slot.";
		button2.onclick = level2;
    }
}

function BlijfZitten(){
	alert("je kunt niet blijven zitten!");
	button1.style.background = 'red';
	button1.disabled = true;
}

function level2(){
		gameContainer.className = "container2";
		title.innerHTML = "Level 2";
		description.innerHTML = "Je bent uit de kooi, maar de bewaker komt om je te pakken. Wat doe je?";
		button1.innerHTML = 'Ga terug in de kooi.';
		button1.onclick = level1;
		button2.innerHTML = 'sla met zwaard';
		button2.onclick = level2VictoryA;
		button3.innerHTML = 'gooi de sleutel';
		button3.style.visibility="visible";
		button3.onclick = level2VictoryB;
		button1.disabled = false;
		button1.style.background = '#4CAF50';
	
}

function level2VictoryA(){
	gameContainer.className = "container3";
	description.innerHTML = "Je hebt de bewaker verslagen. Wat doe je?";
	button2.onclick = level3;
	button2.innerHTML = 'Loop door.';
	button3.style.visibility="hidden";
	inventory['key']=true;
	//experience = experience + 2
}

function level2VictoryB(){
	gameContainer.className = "container3";
	description.innerHTML = "Je hebt de bewaker verslagen. Wat doe je?";
	button2.onclick = level3;
	button2.innerHTML = 'Loop door.';
	button3.style.visibility="hidden";
	inventory['key']=false;
	//experience = experience + 2
}

function level3(){
	gameContainer.className = "container4";
	title.innerHTML = "Level 3";
	description.innerHTML = "Je komt een reus tegen. Wat doe je?";	
	button1.onclick = level2;
	button1.innerHTML = 'Ga terug naar vorig level.';
	button2.onclick = level3Victory;
	button2.innerHTML = 'Sla met zwaard.';
	button3.onclick = level3VictoryB;
	button3.innerHTML = 'Geef de sleutel.';
	button3.style.visibility="visible";
	meat.style.visibility="visible"
	meat.onclick = pickUpMeat
	inventoryItem.src = "sprites/food.png"
}

function pickUpMeat(){
    meat.style.visibility = 'hidden';
    button2.style.visibility = 'visible'
    inventory['meat']=true;
}

function level3Victory(){
	gameContainer.className = "container5A";
	title.innerHTML = "Level 3";
	description.innerHTML = "Je hebt de reus verslagen. Wat doe je?";
	button1.onclick = level2;
	button1.innerHTML = 'Ga terug naar vorig level.';
	button2.onclick = level4;
	button2.innerHTML = 'Loop door.';
	button3.style.visibility="hidden";	
	//experience = experience + 2
}

function level3VictoryB(){
	if(inventory["key"] == true){
		gameContainer.className = "container5";
		title.innerHTML = "Level 3";
		description.innerHTML = "Je geeft de sleutel aan de reus. omdat je zo aardig bent laat de reus je door. Wat doe je?";
		button1.onclick = level2;
		button1.innerHTML = 'Ga terug naar vorig level.';
		button2.onclick = level4;
		button2.innerHTML = 'Loop door.';
		button3.onclick = shortcut; 
		button3.innerHTML = 'Ga in de kist.';
	}
	else{
		alert("Je hebt geen sleutel meer.");
	}
}

function shortcut(){
	gameContainer.className = "container5B";
	title.innerHTML = "Shortcut";
	description.innerHTML = "je bent in het riool. Wat doe je?";
	button1.onclick = level3VictoryB;
	button1.innerHTML = "ga terug";
	button2.onclick = level6;
	button2.innerHTML = "Loop door.";
	button3.style.visibility="hidden";
	meat.style.visibility = 'hidden';
	fakkel.style.visibility="visible"
	fakkel.onclick = pickUpFakkel	
	inventoryItem.src = "sprites/fakkel.png"
}

function pickUpFakkel(){
    fakkel.style.display = 'none';
    inventory['fakkel']=true;
}

function level4(){
	gameContainer.className = "container6";
	title.innerHTML = "Level 4";
	description.innerHTML = "Je komt een grote hond tegen. Wat doe je?";
	button1.innerHTML = "Ga terug naar vorig level.";
	button1.onclick = level3Victory;
	button2.innerHTML = "Sla met zwaard.";
	button2.onclick = level4Death;
	button3.innerHTML = "Geef een stuk vlees.";
	button3.style.visibility="visible";
	button3.onclick = level4Victory;
	meat.style.visibility = 'hidden';
}
	
function level4Death(){
		gameContainer.className = "container7";
		title.innerHTML = "Level 4";
		description.innerHTML = "De hond eet je op. GAME OVER";
		button1.innerHTML = "RESTART.";
		button1.onclick = level1;
		button2.style.visibility="hidden";
		button3.style.visibility="hidden";	
}

function level4Victory(){
	if(inventory["meat"] == true){
		gameContainer.className = "container7A";
		title.innerHTML = "Level 4";
		description.innerHTML = "Je geeft de hond een stuk vlees. omdat je zo aardig bent laat de hond je door. Wat doe je?";
		button1.onclick = level3Victory;
		button1.innerHTML = 'Ga terug naar vorig level.';
		button2.onclick = level5;
		button2.innerHTML = 'Loop door.';
		button3.style.visibility = "hidden";
	}
	else{
		gameContainer.className = "container7";
		title.innerHTML = "Level 4";
		description.innerHTML = "Je hebt geen vlees om te geven. Daarom eet de hond eet je op. GAME OVER";
		button1.innerHTML = "RESTART.";
		button1.onclick = level1;
		button2.style.visibility="hidden";
		button3.style.visibility="hidden";
	}
}
function level5(){
	gameContainer.className = "container8";
	title.innerHTML = "Level 5";
	description.innerHTML = "Je komt een steen tegen. Wat doe je?";
	button1.innerHTML = "Ga terug naar vorig level.";
	button1.onclick = level4Victory;
	button2.innerHTML = "Sla met zwaard.";
	button2.onclick = level5A;
	button3.innerHTML = "Ga op de steen staan.";
	button3.style.visibility="visible";
	button3.onclick = level5B;
}
function level5A(){
	gameContainer.className = "container9A";
	title.innerHTML = "Level 5";
	description.innerHTML = "Je slaat de steen met je zwaard. Je zwaard breekt. zonder zwaard kan je niet verder. GAME OVER";
	button1.innerHTML = "RESTART.";
	button1.onclick = level1;
	button2.style.visibility="hidden";
	button3.style.visibility="hidden";
}
function level5B(){
	gameContainer.className = "container9";
	title.innerHTML = "Level 5";
	description.innerHTML = "De steen doet niks. Wat doe je?";
	button1.innerHTML = "Ga terug.";
	button1.onclick = level5;
	button2.onclick = level6;
	button2.innerHTML = 'Loop door.';
	button3.style.visibility = "hidden";
	//experience = experience + 2
}
function level6(){
	gameContainer.className = "container10";
	title.innerHTML = "Level 6";
	description.innerHTML = "Je komt een ijsreus tegen. De ijsreus ziet er ziek uit. Wat doe je?";
	button1.innerHTML = "Ga terug naar vorig level.";
	button1.onclick = level5B;
	button2.innerHTML = "Sla met zwaard.";
	button2.onclick = level6A;
	button3.innerHTML = "Geef de fakkel.";
	button3.style.visibility="visible";
	button3.onclick = level6B;
	fakkel.style.visibility="hidden"
}
function level6A(){
	gameContainer.className = "container11";
	title.innerHTML = "Level 6";
	description.innerHTML = "Je slaat de ijsreus. De ijsreus is te ziek om terug te vechten. Wat doe je?";
	button1.innerHTML = "Ga terug naar vorig level.";
	button1.onclick = level6;
	button2.innerHTML = "Sla met zwaard.";
	button2.onclick = level6Victory;
	button3.style.visibility="hidden";
}
function level6B(){
	if(inventory["fakkel"] == true){
		gameContainer.className = "container10A";
		title.innerHTML = "Level 6";
		description.innerHTML = "Je geeft de fakkel aan de ijsreus. door de fakkel is zijn verkoudheid weg. Wat doe je?";
		button1.innerHTML = "Ga terug.";
		button1.onclick = level6;
		button2.innerHTML = "loop door.";
		button2.onclick = level7;
		button3.style.visibility="hidden";
	}
	else{
		alert("Je hebt geen fakkel")
	}
}
function level6Victory(){
	gameContainer.className = "container11A";
	title.innerHTML = "Level 6";
	description.innerHTML = "Je hebt de ijsreus verslagen. Wat doe je?";
	button1.innerHTML = "Ga terug naar vorig level.";
	button1.onclick = level6;
	button2.innerHTML = "Loop door.";
	button2.onclick = level7;
	button3.style.visibility="hidden";
	//experience = experience + 2
}
function level7(){
	gameContainer.className = "container12";
	title.innerHTML = "Level 7";
	description.innerHTML = "Je komt een mage tegen. Wat doe je?";
	button1.innerHTML = "Ga terug naar vorig level.";
	button1.onclick = level6;
	button2.innerHTML = "Sla met zwaard.";
	button2.onclick = level7A;
	button3.innerHTML = "vraag om boek te lezen.";
	button3.style.visibility="visible";
	button3.onclick = level7B;
}
function level7A(){
	gameContainer.className = "container12A";
	title.innerHTML = "Level 7";
	description.innerHTML = "Je slaat de mage met je zwaard, maar de mage is sneller en schiet je met een lazer. zonder zwaard kan je niet verder. GAME OVER";
	button1.innerHTML = "RESTART.";
	button1.onclick = level1;
	button2.style.visibility="hidden";
	button3.style.visibility="hidden";
}
function level7B(){
	gameContainer.className = "container13";
	title.innerHTML = "Level 7";
	description.innerHTML = "De mage laat je zijn boek lezen. Wat doe je?";
	button1.innerHTML = "lees verder.";
	button1.onclick = level7B;
	button2.innerHTML = "Sla met zwaard.";
	button2.onclick = level7C;
	button3.innerHTML = "loop door.";
	button3.onclick = level8;
}

function level7C(){
	gameContainer.className = "container13A";
	title.innerHTML = "Level 7";
	description.innerHTML = "Je slaat de mage met je zwaard. de mage wordt zo hard geraakt dat hij aan de andere kant van de kamer land. Wat doe je?";
	button1.innerHTML = "Loop verder.";
	button1.onclick = level8;
	button2.style.visibility="hidden";
	button3.style.visibility="hidden";
}
function level8(){
	gameContainer.className = "container14";
	title.innerHTML = "Level 8";
	description.innerHTML = "Je komt een minotaur tegen. Wat doe je?";
	button1.innerHTML = "Ga terug.";
	button1.onclick = level7B;
	button2.style.visibility="visible";
	button2.innerHTML = "Sla met zwaard.";
	button2.onclick = level8A;
	button3.style.visibility="visible";
	button3.innerHTML = "Ren langs hem.";
	button3.onclick = level9;
}
function level8A(){
	gameContainer.className = "container15";
	title.innerHTML = "Level 8";
	description.innerHTML = "Je valt de minotaur aan, maar de minotaur is zo eng dat je een hartaanval krijgt. Wat doe je?";
	button1.innerHTML = "RESTART.";
	button1.onclick = level1;
	button2.style.visibility="hidden";
	button3.style.visibility="hidden";
}

function level9(){
	gameContainer.className = "container16";
	title.innerHTML = "Level 9";
	description.innerHTML = "Je komt de koning tegen. Wat doe je?";
	button1.innerHTML = "Ga terug.";
	button1.onclick = level8;
	button2.style.visibility="visible";
	button2.innerHTML = "Sla met zwaard.";
	button2.onclick = level9A;
	button3.style.visibility="visible";
	button3.innerHTML = "Ren langs hem.";
	button3.onclick = myMove;
}

function level9A(){
	gameContainer.className = "container18";
	title.innerHTML = "Level 9";
	description.innerHTML = "Je hebt de koning verslagen. Wat doe je?";
	button1.innerHTML = "Wordt de nieuwe koning.";
	button1.onclick = ending1;
	button2.style.visibility="hidden";
	button3.style.visibility="visible";
	button3.innerHTML = "Ren langs hem.";
	button3.onclick = myMove;
}

function ending1(){
	gameContainer.className = "container19";
	title.innerHTML = "ending";
	description.innerHTML = "Je bent de koning. wil je restarten.";
	button1.innerHTML = "RESTART.";
	button1.onclick = level1;
	button2.style.visibility="hidden";
	button3.style.visibility="hidden";
}

function myMove() {
	var elem = document.getElementById("animate");   
	var pos = 0;
	var id = setInterval(ending2, 1);

	function ending2(){
		gameContainer.className = "container20";
		title.innerHTML = "ending";
		description.innerHTML = "Je bent ontsnapt. wil je restarten";
		button1.innerHTML = "RESTART.";
		button1.onclick = level1;
		button2.style.visibility="hidden";
		button3.style.visibility="hidden";
		animate.style.visibility="visible";
		if (pos == 2300) {
	      clearInterval(id);
	    } 
	    else {
	      pos++; 
	      elem.style.left = pos + 'px';
	    }
	}
}