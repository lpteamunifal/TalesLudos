var selectedScene;

window.gameLoad = function(json){

	json = JSON.parse(json);

	console.log(json);

	var journeyName = json.name;
	var width = json.width;
	var height = json.height;
	var scenes = json.scenes;
	var desafio = json.scenes[0].challenge[0].data.answer;

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
		var scene = scenes[i];

		var circle = JSON.parse(scene.circle[0]);

		var konvaObject = KonvaFabric.generateSceneToGame(scene.x, scene.y, circle.attrs.radius, circle.attrs.fill);

		layer.add(konvaObject);
		layer.draw();

		scene.konvaObject = konvaObject;
		console.log(scene);
		KonvaFabric.setClickEvent(konvaObject, scene);

		journey.addScene(scene);
	}
}

function BackButton(){
	document.getElementById('game-container').style.display = 'block';
	document.getElementById('scene-container').style.display = 'none';
	document.getElementById('desafio-container').style.display = 'none';

}

function DesafioButton(){
	document.getElementById('desafio-container').style.display = 'block';
	document.getElementById('scene-container').style.display = 'none';
	document.getElementById('game-container').style.display = 'none';
	console.log(selectedScene);
	OpenDesafio(selectedScene.challenge[0]);
}