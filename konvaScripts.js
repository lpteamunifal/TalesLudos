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

    var arrows = [];

	group.on('click tap', function() {
	    console.log(window.Tool());
	    if(window.Tool() == "t2") {
            if (!BoolClick) {
                BoolClick = true;
                num = this;
            } else {

                if (num != this.name()) {
                    BoolClick = false;
                    var temp = '' + num.name() + ' ' + this.name();
                    var arrow = new Konva.Arrow({
                        name: temp,
                        points: [num.x(), num.y(), this.x(), this.y()],
                        pointerLength: 10,
                        pointerWidth: 10,
                        fill: 'black',
                        stroke: 'black',
                        strokeWidth: 0,
                    });
                    arrows.push(arrow);

                    num.on('dragmove', updateLine);
                    //this.on('dragmove', updateLine(arrow, num, this));

                    //Funções de verificação do desenho da seta..
                    scenesLayer.add(arrow);
                    scenesLayer.draw();
                }

            }
        }
	});

    function updateLine() {
        arrows.forEach(arrow => {
            var string = arrow.name().split(" ");
            var obj1 = journeyStage.find('.'+string[0]);
            obj1.splice(obj1.findIndex(v => v.nodeType == "Shape"), 1);
            var obj2 = journeyStage.find('.'+string[1]);
            obj2.splice(obj2.findIndex(v => v.nodeType == "Shape"), 1);
            arrow.points([obj1[0].x(), obj1[0].y(), obj2[0].x(), obj2[0].y]);
            console.log(obj1[0].x());
            console.log(obj2[0].x());
            scenesLayer.add(arrow);
            scenesLayer.draw();
        });
    }

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
	
	return group;

	//AddLink(scenesLayer);
}

journeyStage.on('click tap', function(e){
	if(e.target.getClassName() != "Group")
	{
		scenesLayer.find('Transformer').destroy();
		scenesLayer.draw();
	}
});

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
