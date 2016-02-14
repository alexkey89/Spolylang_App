!(function() {
    "use strict";
// ----------------------------------------------------
// Settings module //
//-----------------------------------------------------

        
var settings = {}
settings.init = function(){


settings.languageA = "en"
settings.languageB = "es"
settings.languageC = "fr"
settings.languageD = "gr"
settings.languageE = "pl"
settings.languageF = "de"
settings.languageG = "it"


settings.languages = [

    {
        name: "English",
        value: "en"
    },
    {
        name: "Español",
        value: "es"
    },
    {
        name: "Français",
        value: "fr"
    },
    {
        name: "Ελληνικά",
        value: "gr"
    },
    {
        name: "Polski",
        value: "pl"
    },
    {
        name: "Deutsch",
        value: "de"
    },{
        name: "Italiano",
        value: "it"
    }];



settings.update = function(setting, value){

    settings[setting] = value

};


}

return window.settings = settings;		
		
	
		
})();




