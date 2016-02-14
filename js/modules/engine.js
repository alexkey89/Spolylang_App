!(function() {
    "use strict";
// ----------------------------------------------------
// Engine //
//-----------------------------------------------------

var engine = {}

engine.init = function(){

// block iOS vertical scroll and bounce effect
document.addEventListener('touchmove',function(e){
      
      e.preventDefault();
  
});


var modal = $('#modal')

// pass delay time as attribute so you can use diferent feedback time for wrong and correct answer
var nextStep = function(delayTime){
    
    var question_placeholder = $('#question_placeholder'),
        scoreValue = $('#scoreValue')

    question_placeholder.velocity("fadeOut", {  queue: false, duration:300, delay:delayTime, complete:function(){
     
		if (core.game.isPlaying() == true) {
		
			question.generate()
			core.eventBus.triggerHandler("showQuestion")
			question_placeholder.velocity("fadeIn", {duration:300})
		
		
		} else {
			

            document.querySelector("#modalContent p:nth-child(1)").style.display = 'none'
            document.querySelector("#modalContent p:nth-child(2)").style.display = 'block'


			modal.velocity("fadeIn",{ display:"block", duration:300})
			scoreValue.velocity({fontSize:"50px"}, {duration:150, easing:"easeInOutQuint"})
                
               
		}
     
    }
    
    });
   

};


core.eventBus.on("wrongAnswer",function(){

    nextStep(1500);

});
 
 
core.eventBus.on("correctAnswer",function(){
 
    nextStep(400)
    

});

$('#submit').on('click touchend', function(e){

    e.preventDefault()
    validateLang()

    if($('#modal').is(':visible')){
    
      return;
    
    }else{
    
        nextStep(400)    
    
    }   
    

    //return false;

});



var validateLang = function(){
    var select1 = $('.selectedOption')[0].innerHTML;
    var select2 = $('.selectedOption')[1].innerHTML;
    var isMainViewTrue = true;

    //console.log(select1 == select2 ? "Equal" : "Not equal");
    if (select1 == select2){
            select1 != select2
    }else{

        isMainViewTrue ? null : nextStep(400);  
        views.close();

    }

        
}

 
modal.on("click touchend",function(e){

    e.preventDefault()
    
    var language_selection_first = document.querySelector('.language_selection_first')

    $(this).velocity("fadeOut",{duration:300, display:"none"})
    //language_selection_first.velocity("fadeOut",{duration:10, display:"none"})
    language_selection_first.style.display = 'none';
    
	core.eventBus.triggerHandler("startGame")

	//remove all incorrect answers if they exceed 500 words
	incorrectAnswers = JSON.parse(window.localStorage['allincorrectanswers'])
	if (incorrectAnswers.length > 500){
		localStorage.removeItem("allincorrectanswers");	
	}


});


core.eventBus.on("startGame", function(){

   	core.game.start()
	nextStep(0)
	message.show("<p><img src='img/punch_icon.png' /> <span class='go_msg'> GO! </span></p>")

 

});

core.eventBus.on("gameOver", function(){

	core.game.end()
 	message.show("Game Over!")

    
    //$('.language_selection_first').velocity("fadeIn", { delay: 2500, duration: 500 })

    //console.log(trophies)
    
 	scoreSet()
 	highScore()
 	setStats()

 	

});

var scoreSet = function(){
	
	//latest score	
	var usersLastScore = score.value - 150;
		if (usersLastScore < 0){
			usersLastScore = 0;
		}
 		
 		//localStorage.setItem('usersLastScore', usersLastScore)
 		//save incorrect answers during the game to local storage
        var usersLastScores = [];

        if (window.localStorage['usersLastScores'] != null){
            usersLastScores = JSON.parse(window.localStorage['usersLastScores'])
        }
        usersLastScores.push(usersLastScore);
        window.localStorage['usersLastScores'] = JSON.stringify(usersLastScores);
        

}

var highScore = function(){

	var userscores = localStorage.getItem('usersLastScores')

		 if (userscores){
			
			var numArray = userscores.match(/\d+/g); 

			numArray.sort(function(a,b){return a-b});

			var largest = numArray[numArray.length - 1];

			$('.h_s').text(largest)

            //checktrophies()

		}


        //add trophies
        // function checktrophies(){
        //     if (largest > 600){
        //         $('#trophies p').hide();
        //         $('#trophies').append('<img class="glow" src="img/magical_script.png"/>')
        //     }
        // }

};

var setStats = function(){

    var stats_screen = $('.stats_screen');
    var now = new Date;
    var utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

	var scoreS = JSON.parse(localStorage.getItem('usersLastScores'))
        var currentYear = new Date();    
        currentYear.getFullYear() + "/" + (currentYear.getMonth() + 1) + "/" + currentYear.getDate();
    if (scoreS != null){
    
    stats_screen.highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: currentYear.toJSON(currentYear).slice(0, 10),
            style: {
                color: '#ffffff'
            }
        },
        xAxis: {
		    title:{
		        text: 'Sequencial Performance',
		        style: {
		           color: '#ffffff',
		           fontSize: '12px',
		           fontWeight: 'normal'
		        }
		    },
            labels: {
                style: {
                    color: '#ffffff'
                }
            },
		    type: 'datetime',
		    dateTimeLabelFormats: {
		        //day: '%e.%b'   
		    },
		    showFirstLabel: false
		},
        yAxis: {
            title: {
                text: 'Points',
                style: {
                    color: '#ffffff'
                }
            },
            labels: {
                style: {
                    color: '#ffffff'
                }
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'Performance',
            //pointInterval: 24 * 3600 * 1000,
            //pointStart: Date.UTC(2015, 8, 21),
            pointStart: utc_timestamp,
            data: scoreS.slice(Math.max(scoreS.length - 10, 0))
        }]

    });
 }

}


$(function(){

	core.eventBus.triggerHandler("startApp");
	highScore();
	setStats();

});



}


return window.engine = engine

})();

