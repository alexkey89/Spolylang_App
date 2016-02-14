!(function() {
	"use strict";
// ----------------------------------------------------
// Levels module //
//-----------------------------------------------------

var levels = {}
levels.init = function(){



// ----------------------------------------------------
// Local variables //
//-----------------------------------------------------
	
var level = 0;
var answers = 0;
var modules = [];


// ----------------------------------------------------
// Reset levels //
//-----------------------------------------------------
	
var reset = function(){

	level = 0;
	answers = 0;
    
    for (var x = 0; x < modules.length ; x++) {
	
		updateModuleSettings(modules[x])
	
	}

};


// ----------------------------------------------------
// Helper function to get current level settings  //
//-----------------------------------------------------

// type in the console levels.getCurrent() to see active level configuration

levels.getCurrent = function(){
	
	for (var x = 0; x < modules.length ; x++) {
	
		console.log(modules[x].module.name, modules[x].config[level])
	
	}
	
};

// ----------------------------------------------------
// Register module  //
//-----------------------------------------------------

// We are pushing module settings here when initialize module

levels.registerModule = function(module,config){

	var obj = {module:module,config:config}
	modules.push(obj)
	updateModuleSettings(obj)

};


// ----------------------------------------------------
// Update module settings due to level settings  //
//-----------------------------------------------------

// Loop through all registered modules and update their settings

var levelUp = function(){

	level++
	
	for (var x = 0; x < modules.length ; x++) {
	
		updateModuleSettings(modules[x])
	
	}

};


var updateModuleSettings = function(obj){
	
	for (var key in obj.config[level] ) {
	
		if (obj.module.hasOwnProperty(key)) {
				
			obj.module[key] = obj.config[level][key] 
	
		}
	
	}

};


// ----------------------------------------------------
// Check game status - is it time to levelup?  //
//-----------------------------------------------------


	
 
var checkStatus = function(){

	answers++
	
	//change to 5,8,16,25,100,200,300,350,400 for production
	var numOfLevels = [];

        if (window.localStorage['numOfLevels'] != null){
            numOfLevels = JSON.parse(window.localStorage['numOfLevels'])
        }

	if (answers == 5) {
		levelUp()
		message.show("Level 2")
		numOfLevels.push(2);
		
	
	} else if (answers == 8) {
	
		levelUp()
		message.show("Level 3")
		message.show('<img class="glow" src="img/medalx50.png"/>')
		document.querySelector('.medal50').style.opacity = 1;
		numOfLevels.push(3);

		
	}
	else if (answers == 16){
		levelUp()
		message.show("Level 4")
		message.show('<img class="glow" src="img/medalx100.png"/>')
		document.querySelector('.medal100').style.opacity = 1;
		numOfLevels.push(4);


	}
	else if (answers == 25){
		levelUp()
		message.show("Level 5")
		message.show('<img class="glow" src="img/feather1.png"/>')
		document.querySelector('.feather').style.opacity = 1;
		numOfLevels.push(5);
	}
	else if (answers == 100){
		levelUp()
		message.show("Level 6")
		message.show('<img class="glow" src="img/diamond.png"/>')	
		document.querySelector('.diamond').style.opacity = 1;
		numOfLevels.push(6);
	}
	else if (answers == 200){
		levelUp()
		message.show("Level 7")	
		message.show('<img class="glow" src="img/diamond.png"/>')
		numOfLevels.push(7);
	}
	else if (answers == 300){
		levelUp()
		message.show("Level 8")
		message.show('<img class="glow" src="img/feather1.png"/>')
		numOfLevels.push(8);

	}
	else if (answers == 350){
		levelUp()
		message.show("Level 9")	
		message.show('<img class="glow" src="img/medalx100.png"/>')
		numOfLevels.push(9);

	}
	else if (answers == 400){
		levelUp()
		message.show("Level 10")
		message.show('<img class="glow" src="img/crown.png"/>')
		document.querySelector('.crown').style.opacity = 1;
		numOfLevels.push(10);

	}
        window.localStorage['numOfLevels'] = JSON.stringify(numOfLevels);

	return false;

}





	var checkCollections = function(){

		var numOfLevels = JSON.parse(localStorage.getItem('numOfLevels'))

		Array.prototype.contains = function(k) {
		  for(var i=0; i < this.length; i++){
		    if(this[i] === k){
		      return true;
		    }
		  }
		  return false;
		}

		if (numOfLevels){
			if (numOfLevels.contains(3)){ document.querySelector('.medal50').style.opacity = 1; }
			if (numOfLevels.contains(4)){ document.querySelector('.medal100').style.opacity = 1; }
			if (numOfLevels.contains(5)){ document.querySelector('.feather').style.opacity = 1; }
			if (numOfLevels.contains(6)){ document.querySelector('.diamond').style.opacity = 1; }
			if (numOfLevels.contains(10)){ document.querySelector('.crown').style.opacity = 1; }
		}

	}


	checkCollections()

// ----------------------------------------------------
// Add event listeners //
//-----------------------------------------------------

core.eventBus.on("correctAnswer",function(){
	
	checkStatus()

});

core.eventBus.on("wrongAnswer",function(){
	
	checkStatus()

});

core.eventBus.on("startGame",function(){
	
	reset()

});




}

return window.levels = levels


})();