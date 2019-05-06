var stageWidth = document.getElementById('box-jornada').clientWidth;
var stageHeight = document.getElementById('box-jornada').clientHeight;

window.journeyStage = new Konva.Stage({
	container: 'box-jornada',
	width: stageWidth,
	height: stageHeight
});

var scenesLayer = new Konva.Layer();

var scenes = new Array();

var X, Y, BoolClick = false;

var num;

var rect = new Konva.Rect({
	x: 0,
	y: 0,
	width: stageWidth,
	height: stageHeight
});

rect.on('click', function() {
	if(BoolClick){
		BoolClick = false;
	}
});

scenesLayer.add(rect);
scenesLayer.draw();


window.addSceneCircleInJourney = function (sceneNumber)
{

	var circle = new Konva.Circle({
		radius: 15,
		stroke: 'black',
		strokeWidth: 1,
		fill: '#b9deff'
	});

	var text = new Konva.Text({
		fontSize: 15,
		fontFamily: 'Calibri',
		text: "" + sceneNumber,
		fill: 'black',
		x: -4,
		y: -7
	});

	var group = new Konva.Group({
		name: "" + sceneNumber,
		width: 15,
		height: 15,
		x: 50,
		y: 50,
		draggable: true,
		dragBoundFunc: function(pos){
			var newY;
			var newX;

			if(pos.y < group.height() * group.scaleY())
				newY = group.height() * group.scaleY();
			else if(pos.y > (journeyStage.height() - group.height() * group.scaleY()))
				newY = journeyStage.height() - group.height() * group.scaleY();
			else
				newY = pos.y;

			if(pos.x < group.width() * group.scaleX())
				newX = group.width() * group.scaleX();
			else if(pos.x > (journeyStage.width() - group.width() * group.scaleX()))
				newX = journeyStage.width() - group.width() * group.scaleX();
			else
				newX = pos.x;

			return{
				x: newX,
				y: newY
			};
		}
	});

	group.add(circle).add(text);

	scenesLayer.add(group);
	scenesLayer.draw();


	/*
	group.on('click tap', function() {
		var pos = journeyStage.getPointerPosition();

		if (!BoolClick) {
			X = pos.x;
			Y = pos.y;
			BoolClick = true;
			num = this.name();
		} else {

			if(num != this.name()){
				BoolClick = false;
				var temp = '' + num + ' ' + this.name();
				var arrow = new Konva.Arrow({
					name: temp,
					points: [X, Y, pos.x, pos.y],
					pointerLength: 10,
					pointerWidth: 10,
					fill: 'black',
					stroke: 'black',
					strokeWidth: 0,
				});
				//Funções de verificação do desenho da seta..
				scenesLayer.add(arrow);
				scenesLayer.draw();
				//anim.start();
			}

		}
	});
	 */
	group.on('mouseenter', function() {
		journeyStage.container().style.cursor = 'pointer';
	});

	group.on('mouseleave', function() {
		journeyStage.container().style.cursor = 'default';
	});

	group.on('dblclick', function(){
		scenesLayer.find('Transformer').destroy();
		var tr = new Konva.Transformer({
			node: group,
			enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
			rotateEnabled: false
		});
		scenesLayer.add(tr);
		scenesLayer.draw();

		tr.boundBoxFunc(function(oldBox, newBox) {
			if (newBox.width > journeyStage.width()/4) {
				return oldBox;
			}
			return newBox;
		});
	});
	
	journeyStage.on('click tap', function(e){
		if(e.target.getClassName() != "Group")
		{
			scenesLayer.find('Transformer').destroy();
			scenesLayer.draw();
		}
			
	});

	//AddLink(scenesLayer);
}

/*var anim = new Konva.Animation(function(frame) {
		var arrow = findSuffix('2');
		if(arrow != null) {		
			var pointsArrow = arrow[0].points();
		    var pos = journeyStage.getPointerPosition();

			console.log(arrow[0].points());
			arrow[0].points(pointsArrow[0], pointsArrow[1], pos.x, pos.y); 
            scenesLayer.add(arrow);
			scenesLayer.draw();       
		}

    }, scenesLayer); */

function findSuffix(word){
	var shapes = journeyStage.find('Arrow');
	var temp = new Array();

	shapes.forEach(function(element, index, array) {
		if(element.name().endsWith(word))
			temp.push(element);
	})

	return temp;
}

window.removeSceneCircleFromJourney = function (sceneNumber)
{

	var groupToDestroy = journeyStage.find('.'+sceneNumber);

	var arrowToDestroy = findSuffix(''+sceneNumber);

	groupToDestroy.destroy();

	//scenes[sceneNumber-1].destroy();

	scenesLayer.draw();
}

journeyStage.add(scenesLayer);

/*
window.addArrayFromJourney = function(group)
{
	var layer = new Konva.Layer();

	var arrow = new Konva.Arrow({
		x: System.Windows.Forms.Cursor.Positon.x,
		y: System.Windows.Forms.Cursor.Positon.y,
		points: [x,y, x+20, y+20],
		pointerLength: 20,
		pointerWidth : 20,
		fill: 'black',
		stroke: 'black',
		strokeWidth: 4
	});

	// add the shape to the layer
	layer.add(arrow);

}
 */
