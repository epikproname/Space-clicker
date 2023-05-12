var money = 0;
var moneyGiver = 1;
var upgradeCost = 50;
var upgradeCost2 = 1000;
var upgradeCost3 = 10000;
var Taxes = 1000000;
var TotalClickes = 0;
var update;
var moonRock = 0;
var moonRockCost = 500;
var rebirth = 0;
var moonFactory = 0;
var moonFactoryPrice = 1000;

if (money >= -1) {
	money == 1;
	
}


function moonfactory() {
	if (money >= moonFactoryPrice) {
		money -= moonFactoryPrice;
		moonFactoryPrice *= 3
		moonFactory += 1;
		moneyGiver *= 2
    	document.getElementById("money").innerHTML = money;
    	document.getElementById("moonFactoryPrice").innerHTML = moonFactoryPrice;
    	document.getElementById("moonFactory").innerHTML = moonFactory;
	}
}




function buy() {
   if (money >= moonRockCost) {
    money -= moonRockCost;
	moonRockCost *= 2.5;
    moonRock += 1;
	moneyGiver += 0.5
    document.getElementById("money").innerHTML = money;
    document.getElementById("moonRockCost").innerHTML = moonRockCost;
    document.getElementById("moonRock").innerHTML = moonRock;
	}
}




function addMoney() {
   	money += moneyGiver;
	TotalClickes += 1;
	document.getElementById("money").innerHTML = money;
	document.getElementById("TotalClickes").innerHTML = TotalClickes;
}

function upgrade() {
   if (money >= upgradeCost) {
      money -= upgradeCost;
      moneyGiver += 2;
      upgradeCost *= 2.5;
      document.getElementById("money").innerHTML = money;
      document.getElementById("upgradeCost").innerHTML = upgradeCost;
      document.getElementById("moneyGiver").innerHTML = moneyGiver;
   }
}

function upgrade2() {
   if (money >= upgradeCost2) {
      money -= upgradeCost2;
      moneyGiver += 5;
      upgradeCost2 *= 2.5;
      document.getElementById("money").innerHTML = money;
      document.getElementById("upgradeCost2").innerHTML = upgradeCost2;
      document.getElementById("moneyGiver").innerHTML = moneyGiver;
   }
}

function upgrade3() {
   if (money >= upgradeCost3) {
      money-= upgradeCost3;
      moneyGiver += 5;
      upgradeCost3 *= 2.5;
      document.getElementById("money").innerHTML = money;
      document.getElementById("upgradeCost3").innerHTML = upgradeCost3;
      document.getElementById("moneyGiver").innerHTML = moneyGiver;
   }
}

function tax() {
   if (money >= Taxes) {
	rebirth += 1;
	moneyGiver *= .2
    money = 0;
    moneyGiver = 1;
    upgradeCost = 50;
    upgradeCost2 = 1000;
    upgradeCost3 = 10000;
	moonRockCost = 500;
	moonFactoryPrice = 1000;
    document.getElementById("money").innerHTML = money;
    document.getElementById("upgradeCost").innerHTML = upgradeCost;
    document.getElementById("upgradeCost2").innerHTML = upgradeCost2;
    document.getElementById("upgradeCost3").innerHTML = upgradeCost3;
    document.getElementById("moneyGiver").innerHTML = moneyGiver;
   }
}

function save() {
   	localStorage.setItem("money", money);
   	localStorage.setItem("moneyGiver", moneyGiver);
   	localStorage.setItem("upgradeCost", upgradeCost);
   	localStorage.setItem("upgradeCost2", upgradeCost2);
   	localStorage.setItem("upgradeCost3", upgradeCost3);
   	localStorage.setItem("moonRock", moonRock);
   	localStorage.setItem("moonRockCost", moonRockCost);
   	localStorage.setItem("rebirth", rebirth);
   	localStorage.setItem("moonFactory", moonFactory);
   	localStorage.setItem("moonFactoryPrice", moonFactoryPrice);
   	localStorage.setItem("Taxes", Taxes);
}

function load() {
   	money = parseInt(localStorage.getItem("money")) || money;
	//-----------------------------------------------------
   	moneyGiver = parseInt(localStorage.getItem("moneyGiver")) || moneyGiver;
	//-----------------------------------------------------
   	upgradeCost = parseInt(localStorage.getItem("upgradeCost")) || upgradeCost;
	//-----------------------------------------------------
   	upgradeCost2 = parseInt(localStorage.getItem("upgradeCost2")) || upgradeCost2;
	//-----------------------------------------------------
   	upgradeCost3 = parseInt(localStorage.getItem("upgradeCost3")) || upgradeCost3;
	//-----------------------------------------------------
   	moonRock = parseInt(localStorage.getItem("moonRock")) || moonRock;
	//-----------------------------------------------------
   	moonRockCost = parseInt(localStorage.getItem("moonRockCost")) || moonRockCost;
	//-----------------------------------------------------
	rebirth = parseInt(localStorage.getItem("rebirth")) || rebirth;
	//-----------------------------------------------------
	moonFactory = parseInt(localStorage.getItem("moonFactory")) || moonFactory;
	//-----------------------------------------------------
	moonFactoryPrice = parseInt(localStorage.getItem("moonFactoryPrice")) || moonFactoryPrice;
	//-----------------------------------------------------
   	Taxes = parseInt(localStorage.getItem("Taxes")) || "Taxes";
	//-----------------------------------------------------
	//-----------------------------------------------------
   	document.getElementById("money").innerHTML = money;
	//-----------------------------------------------------
   	document.getElementById("upgradeCost").innerHTML = upgradeCost;
	//-----------------------------------------------------
  	document.getElementById("upgradeCost2").innerHTML = upgradeCost2;
 	//-----------------------------------------------------
	document.getElementById("upgradeCost3").innerHTML = upgradeCost3;
	//-----------------------------------------------------
	document.getElementById("moonRock").innerHTML = moonRock;
	//-----------------------------------------------------
	document.getElementById("moonRockCost").innerHTML = moonRockCost;
	//-----------------------------------------------------
   	document.getElementById("moonFactory").innerHTML = moonFactory;
	//-----------------------------------------------------
   	document.getElementById("moonFactoryPrice").innerHTML = moonFactoryPrice;
	//-----------------------------------------------------
   	document.getElementById("rebirth").innerHTML = rebirth;
	//-----------------------------------------------------
	document.getElementById("moneyGiver").innerHTML = moneyGiver;

}

window.onload = function() {
   load();
}

window.onbeforeunload = function() {
   save();
}


