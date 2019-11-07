window.gameLoad = function(json){

	json = JSON.parse(json);


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
		var scene = scenes[i];

		var circle = JSON.parse(scene.circle[0]);

		var konvaObject = KonvaFabric.generateSceneToGame(scene.x, scene.y, circle.attrs.radius, circle.attrs.fill);

		var sceneContent = scene.content;

		layer.add(konvaObject);
		layer.draw();

		scene = new Scene(scene.id, scene.name, konvaObject);

		scene.setContent = sceneContent;

		KonvaFabric.setClickEvent(konvaObject, scene);

		journey.addScene(scene);
	}
}

function BackButton(){
	document.getElementById('game-container').style.display = 'block';
	document.getElementById('scene-container').style.display = 'none';
}

function DesafioButton(){
	document.getElementById('desafio-container').style.display = 'block';
	document.getElementById('scene-container').style.display = 'none';
}