class KonvaFabric{
	constructor(){}

	static generateSceneToGame(x,y,radius,fill){
		var circle = new Konva.Circle({
			x: x,
			y: y,
			radius: radius,
			fill: fill,
			stroke: 'black',
			strokeWidth: 1,
			draggable: false
		});

		return circle;
	}

	static setClickEvent(circle, scene){
		circle.on('click', function(){
			scene.openSceneModal();
		});
	}
}