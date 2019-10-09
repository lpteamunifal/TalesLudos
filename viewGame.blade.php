<html>

<head>
	<title>In Game</title>
	<link rel="stylesheet" href="../css/inGameStyle.css">
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lemon" />
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>

</head>

<body>
	<center> <h2 id='journeyName' class='journeyName'> Bem vindo a Jornada </h2> </center>
	<div id='game-container' class='game-container'>

	</div>

	<script src="https://unpkg.com/konva@2.4.2/konva.min.js"></script>

	<script src='../js/Scene.js'></script>
	<script src='../js/Journey.js'></script>
	<script src='../js/KonvaFabric.js'></script>
	<script src='../js/gameLoad.js'></script>

	<script type="text/javascript">
		
		var json = atob("{{$data}}");

		gameLoad(json);

	</script>

</body>


</html>
