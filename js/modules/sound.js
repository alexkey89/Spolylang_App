!(function(){
	"use strict";
var sound = {}
sound.init = function(){

sound.settings = {}


	//stop audio	

	$('audio').each(function(){
	  	this.pause(); // Stop playing
		this.currentTime = 0; // Reset time
	}); 



// ----------------------------------------------------
// Sound status, Did player start the sound? 
//-----------------------------------------------------

var isPlaying = false;

sound.settings.isPlaying = function(){

	return isPlaying;
}

sound.settings.start = function(){

	isPlaying = true;

}

sound.settings.end = function(){

	isPlaying = false;

}




}


return window.sound = sound;

})();