var selectedScene;

window.gameLoad = function(json){

	var journeyName = json.name;
	var width = json.width;
	var height = json.height;
	var scenes = json.scenes;

	document.getElementById('game-container').style.width = width;
	document.getElementById('game-container').style.height = height;
	document.getElementById('game-container').style.display = 'block';

	document.getElementById('scene-container').style.width = width;
	document.getElementById('scene-container').style.height = height;
	document.getElementById('scene-container').style.display = 'none';
	
	document.getElementById('desafio-container').style.width = width;
	document.getElementById('desafio-container').style.height = height;
	document.getElementById('desafio-container').style.display = 'none';

	var text = document.getElementById('journeyName').innerHTML = "Bem vindo a Jornada " + journeyName;

	window.journeyStage = new Konva.Stage({
		container: 'game-container',
		width: width,
		height: height
	});

	window.layer = new Konva.Layer();

	journeyStage.add(layer);

	var journey = new Journey(journeyName, width, height);

	var i;

	for(i = 0 ; i < scenes.length; i++){
		var scenej = scenes[i];

		var circle = JSON.parse(scenej.circle[0]);

		var konvaObject = KonvaFabric.generateSceneToGame(scenej.x, scenej.y, circle.attrs.radius, circle.attrs.fill);

		layer.add(konvaObject);
		layer.draw();

		var scene = new Scene(scenej.id, scenej.name, konvaObject);
		scene.content = scenej.content;
		scene.challenge = [];
		console.log(pluginList);

		if (scenej.challenge != null){
			for(var j = 0; j < scenej.challenge.length; j++){
				var cj = scenej.challenge[j];
				var challenge = new Challenge(cj.id, cj.name);
				challenge.plugin = cj.plugin;
				challenge.data = eval(pluginList[cj.plugin.substring(1)])(cj.data);
				scene.challenge.push(challenge);
			}
		}

		console.log(scene);
		KonvaFabric.setClickEvent(konvaObject, scene);

		journey.addScene(scene);
	}
}

function BackButton(){
	document.getElementById('game-container').style.display = 'block';
	document.getElementById('scene-container').style.display = 'none';
	document.getElementById('desafio-container').style.display = 'none';

	challengeNumber = 0;
}

var challengeNumber = 0;

function DesafioButton(){
	if (challengeNumber < selectedScene.challenge.length) {
		document.getElementById('desafio-container').style.display = 'block';
		document.getElementById('scene-container').style.display = 'none';
		document.getElementById('game-container').style.display = 'none';

		for(var i = 0; i < pluginList.length; i++){
			document.getElementById('p' + i).style.display = 'none';
		}
		document.getElementById(selectedScene.challenge[challengeNumber].plugin).style.display = 'block';

		selectedScene.challenge[challengeNumber].OpenDesafio();

		challengeNumber++;
	}
}