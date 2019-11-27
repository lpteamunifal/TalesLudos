var stageWidth = document.getElementById('box-jornada').clientWidth;
var stageHeight = document.getElementById('box-jornada').clientHeight;

var oldGroupClicked = null;
var newGroupClicked = null;

var gradeMin = 1;
var gradeMax = 2;

var connection;
var arrow;

var abort = false;

var wait = true;

window.journeyStage = new Konva.Stage({
	container: 'box-jornada',
	width: stageWidth,
	height: stageHeight
});

journey.setHeight = stageHeight;

var scenesLayer = new Konva.Layer();

var scenes = new Array();

function getConnectorPoints(from, to) {
        const dx = to.x() - from.x();
        const dy = to.y() - from.y();
        let angle = Math.atan2(-dy, dx);

        const radius = 20;

        return [
          (from.x() + -radius * Math.cos(angle + Math.PI) * from.scaleX()),
          (from.y() + radius * Math.sin(angle + Math.PI) * from.scaleY()),
          (to.x() + -radius * Math.cos(angle) * to.scaleX()),
          (to.y() + radius * Math.sin(angle) * to.scaleY())
        ];
}

function getGrades(){
	gradeMin = document.getElementById("gradeMin").value;
	gradeMax = document.getElementById("gradeMax").value;

	connection.setGradeMin = gradeMin;
	connection.setGradeMax = gradeMax;

	console.log(connection);

	document.getElementById('gradeModal').remove();
}

function abortConnection(){
	connection = null;
	arrow.destroy();
	scenesLayer.draw();
	document.getElementById('gradeModal').remove();
}

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

	group.on('click', function(){

		if(window.connectionMode == true)
		{

			if(oldGroupClicked == null)
			{
				oldGroupClicked = group;
				newGroupClicked = null;
			}
			else if(oldGroupClicked != group)
			{
				wait = true;
				var modal;

				modal +=  "<div id='gradeModal' class='modal' style='display:block;'>";
		        modal +=  "    <div class='modal-content'>";
		        modal +=  "        <div class='modal-body'>";
		        modal +=  "				Nota minima: <input type='text' id='gradeMin' value='1'><br>";
		        modal +=  "				Nota maxima: <input type='text' id='gradeMax' value='2'><br><center>";
		        modal +=  "				<button class='btn' onclick='getGrades();'>Confirmar</button>";
		        modal +=  "				<button class='btn red' onclick='abortConnection();'>Cancelar</button></center>";
		        modal +=  "        </div>";
		        modal +=  "    </div>";
		        modal +=  "</div>";

		        var body = document.body;
		        var children = document.createElement('div');

		        children.innerHTML = modal;
		        body.appendChild(children);

	        	newGroupClicked = group;
				var points = getConnectorPoints(oldGroupClicked, newGroupClicked);
				arrow = new Konva.Arrow({
					points: points,
					stroke: 'black',
					strokeWidth: 2,
					pointerLength: 5,
	      			pointerWidth: 5
				});

				arrow.on('dblclick', function(){
					connection = null;
					arrow.destroy();
					scenesLayer.draw();
				});

				connection = new SceneConnection(oldGroupClicked, newGroupClicked, gradeMin, gradeMax, arrow);

				var sceneFromId = oldGroupClicked.name();
				var sceneToId = newGroupClicked.name();

				var sceneFrom = journey.getSceneById(sceneFromId);
				var sceneTo = journey.getSceneById(sceneToId);

				sceneFrom.addNextScene(connection);
				sceneTo.addPreviousScene(connection);

				scenesLayer.add(arrow);
				scenesLayer.draw();

				oldGroupClicked = null;
				newGroupClicked = null;
			}
		}
		/*else if(window.resizeMode == true)
		{
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
		}*/
		else
		{
			var sceneId = group.name();

			var scene = journey.getSceneById(sceneId);

			scene.openSceneModal();
		}
	});

	group.on('dragmove', function(){
		var sceneId = group.name();

		var scene = journey.getSceneById(sceneId);

		scene.setX = group.x();
		scene.setY = group.y();

		var nextConnections = scene.getNextScenes;
		var previousConnections = scene.getPreviousScenes;

		nextConnections.forEach(function(conn){

			console.log(conn);
			var arrow = conn.getKonvaArrow;

			arrow.points(getConnectorPoints(group, conn.getTo));

			scenesLayer.draw();
		});
		

		previousConnections.forEach(function(conn){
			var arrow = conn.getKonvaArrow;

			arrow.points(getConnectorPoints(conn.getFrom, group));

			scenesLayer.draw();
		});
	});

	return group;
}

journeyStage.on('click tap', function(e){
	if(e.target.getClassName() != "Group")
	{
		scenesLayer.find('Transformer').destroy();
		scenesLayer.draw();
	}
});

window.removeSceneCircleFromJourney = function (sceneNumber)
{

	var groupToDestroy = journeyStage.find('.'+sceneNumber);

	groupToDestroy.destroy();

	//scenes[sceneNumber-1].destroy();

	scenesLayer.draw();
}

journeyStage.add(scenesLayer);
