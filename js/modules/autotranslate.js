!(function(){
	"use strict";
	
var autotranslate = {}

autotranslate.init = function (){

	//helpers
	function q(name){
		return document.querySelector(name)
	}

	//to make this work - put it above view and position absolute it - adjust it etc
	var langselect = q('.language_selection_first select')



	langselect.addEventListener('change', langchange, false);

	function langchange(e){
		e.preventDefault()

		var langs = []

		//this.value === 'el' ? greek() : null;

		if (this.value == 'el') { greek() }
		if (this.value == 'pl') { polish() }
		if (this.value == 'en') { english() }
		if (this.value == 'fr') { french() }
		if (this.value == 'de') { german() }
		if (this.value == 'es') { spanish() }
		if (this.value == 'it') { italian() }

	}



	var allcontent = document.getElementsByClassName("translate"),
		description1 = document.getElementsByClassName('description')[0],
		description2 = document.getElementsByClassName('description')[1]
	
		

	//greek		
	var greek = function(){

			var allwords = ['Επιλέξτε γλώσσα',
					'Εκκίνηση',
					'Προσπάθησε ξανά', 
					'Συλλογές', 
					'Στατιστικά',
					'Επιλογές', 
					'Σχετικά με αυτό το app',
					'Επιλογές',
					'Αποθήκευση και επιστροφή',
					'Στατιστικά',
					'Η απόδοσή σας / 10 τελευταίες προσπάθειες',
					'Συλλογές',
					'Τα τρόπαια σας',
					'Υψηλότερη βαθμολογία: ',
					'Ο ευκολότερος τρόπος για να ενισχύσετε το λεξιλόγιό σας είναι εδώ!',
					'Έχουμε εισαγάγει 7 διαφορετικές γλώσσες που είναι εύκολα προσαρμόσιμες.',
					'Απλά επιλέξτε μια γλώσσα που ξέρετε και μια γλώσσα που θέλετε να μάθετε'
					]

	for( var i=0 ;i<allcontent.length;){
		
	    allcontent[i].textContent = allwords[i++];
		
	}

		//options section
		description1.textContent = 'Ξέρω'
		description2.textContent = 'Θα ήθελα να μάθω'

		//main modal
		gameScore.firstChild.textContent = 'Σκορ'
    	
    	q('tspan').textContent = 'Διαδοχική απόδοση'
    	q('.highcharts-yaxis-title').textContent = 'Βαθμοί'

    	return false;
	}



//english
		var english = function(){

			var allwords = ['Choose your language',
					'Start',
					'Try again', 
					'Collections', 
					'Statistics',
					'Options', 
					'About',
					'Options',
					'Save and go back',
					'Statistics',
					'Your performance / Last 10 attempts',
					'Collections',
					'Trophies collected',
					'High Score: ',
					'The easiest way to boost your vocabulary is here!',
					'We have introduced 7 different languages that are easily updatable',
					'Simply choose your native language and navigate to the languaeg which you would like to learn'
					]

	for( var i=0 ;i<allcontent.length;)
	    allcontent[i].textContent = allwords[i++];

		//options section
		description1.textContent = 'I know'
		description2.textContent = 'I want to learn'

		//main modal
		gameScore.firstChild.textContent = 'Score:'

		//stats view
		q('tspan').textContent = 'Sequential performance'
    	q('.highcharts-yaxis-title').textContent = 'Points'

    	return false;


	}

	//polish
		var polish = function(){

			var allwords = ['Wybierz język',
					'Rozpocznij',
					'Spróbuj ponownie', 
					'Kolekcje', 
					'Statystyki',
					'Opcje', 
					'O aplikacji',
					'Opcje',
					'Zapisz i wróć',
					'Statystyki',
					'Twoje wykonanie / Ostatnie 10 prób',
					'Kolekcje',
					'Trofea',
					'Twój rekord: ',
					'Najprostszy sposób, aby wzbogacić swoje słownictwo jest tutaj!',
					'Wprowadziliśmy 7 różnych języków, które są łatwe w aktualizacji.',
					'Po prostu wybierz swój język ojczysty i przejdź do języka, którego chcesz się uczyć.'
					]

	for( var i=0 ;i<allcontent.length;)
	    allcontent[i].textContent = allwords[i++];

		//options section
		description1.textContent = 'Znam'
		description2.textContent = 'Chciałbym się uczyć'

		//main modal
		gameScore.firstChild.textContent = 'Puknty:'

		//stats view
		q('tspan').textContent = 'Ilość wykonań';
    	q('.highcharts-yaxis-title').textContent = 'Puknty'

    	return false;


	}

		//french
		var french = function(){

			var allwords = ['Choisissez votre langue',
					'Démarrer',
					'Reéssayer', 
					'Collection', 
					'Statistiques',
					'Options', 
					'A propos',
					'Options',
					'Sauvegarder et retourner',
					'Statistiques',
					'Votre performance/ derniers 10 essais',
					'Collection',
					'Trophées',
					'Meilleur score: ',
					"La meilleure façon d'améliorer votre vocabulaire est arrivée!",
					'Nous avons introduit 7 langues différentes faciles à mettre à jour.',
					'Choisissez simplement votre langue maternelle et naviguez et naviquez pour sélectionner la langue que vous souhaitez apprendre'
					]


	for( var i=0 ;i<allcontent.length;)
	    allcontent[i].textContent = allwords[i++];

		//options section
		description1.textContent = 'Je connais', 

		description2.textContent = " J'aimerais apprendre "

		//main modal
		gameScore.firstChild.textContent = 'Points:'

		//stats view
		q('tspan').textContent = 'Performances séquentielles';
    	q('.highcharts-yaxis-title').textContent = 'Points'

    	return false;


	}

	//german
		var german = function(){

			var allwords = ['Sprache auswählen',
					'Das Spiel beginnen ',
					'Es noch mal probieren', 
					'Sammlungen', 
					'Statistiken',
					'Möglichkeiten', 
					'Über uns',
					'Möglichkeiten',
					'Speichern und zurückgehen',
					'Statistiken',
					'Deine Leistung / Die zehn letzten Versuche',
					'Sammlungen',
					'Gesammelte Trophäen',
					'Höchste Punktzahl: ',
					"Hier ist die einfachste Weise deine Vokabel zu verstärken!",
					'Wir haben sieben verschiedene Sprachen eingeleitet, die einfach zu austauschen sind.',
					'Einfach deine Muttersprache wählen und die Sprache, die du lernen möchtest, drücken.'
					]


	for( var i=0 ;i<allcontent.length;)
	    allcontent[i].textContent = allwords[i++];

		//options section
		description1.textContent = 'Ich kenne', 

		description2.textContent = " Ich möchte lernen "

		//main modal
		gameScore.firstChild.textContent = 'Punkte:'

		//stats view
		q('tspan').textContent = 'Sequentielle Leistung';
    	q('.highcharts-yaxis-title').textContent = 'Punkte'

    	return false;


	}

//spanish
		var spanish = function(){

			var allwords = ['Escoge un idioma',
					'Comenzar',
					'Prueba otra vez', 
					'Colecciones', 
					'Estadísticas',
					'Opciones', 
					'Sobre Nosotros',
					'Opciones',
					'Guardar y volver',
					'Estadísticas',
					'Rendimiento / últimos 10 intentos',
					'Colecciones',
					'Trofeos ganados',
					'Puntuación: ',
					"¡La mejor manera de impulsar tu vocabulario está aquí!",
					'Hemos introducido 7 idiomas diferentes intercambiables.',
					'Simplemente elige tu lengua materna y el idioma que quieres aprender.'
					]


	for( var i=0 ;i<allcontent.length;)
	    allcontent[i].textContent = allwords[i++];

		//options section
		description1.textContent = 'Yo sé', 

		description2.textContent = " Me gustaría aprender "

		//main modal
		gameScore.firstChild.textContent = 'Puntos:'

		//stats view
		q('tspan').textContent = 'Rendimiento secuencial';
    	q('.highcharts-yaxis-title').textContent = 'Puntos'

    	return false;


	}

//italian
		var italian = function(){

			var allwords = ['Scegli la tua lingua',
					'Inizio',
					'Prova ancora', 
					'Collezioni', 
					'Statistiche',
					'Opzioni', 
					'A proposito di questa app',
					'Opzioni',
					'Salvare e tornare indietro',
					'Statistiche',
					'La tua performance / Ultimi 10 tentativi',
					'Collezioni',
					'Trofei raccolti',
					'Punteggio alto: ',
					'Il modo più semplice per aumentare il vostro vocabolario è questo!',
					'Abbiamo introdotto 7 lingue differenti che sono facilmente aggiornabili.',
					'Basta scegliere la vostra lingua madre e passare alla lingua che si desidera imparare.'
					]


	for( var i=0 ;i<allcontent.length;)
	    allcontent[i].textContent = allwords[i++];

		//options section
		description1.textContent = 'Lo so', 

		description2.textContent = "Vorrei imparare "

		//main modal
		gameScore.firstChild.textContent = 'Punti:'

		//stats view
		q('tspan').textContent = 'Prestazioni sequenziali';
    	q('.highcharts-yaxis-title').textContent = 'Punti'

    	return false;


	}





	
}

return window.autotranslate = autotranslate;

	
})()