<html>

<head>
	<title>In Game</title>

	<link rel="stylesheet" href="../css/inGameStyle.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lemon" />

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
	<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</head>

<body>
	<center> <h2 id='journeyName' class='journeyName'> Bem vindo a Jornada </h2> </center>
	<div id='game-container' class='game-container'>

	</div>
	<center>
		<div id='scene-container' class='scene-container'>
			<button class='btn-arrow' onclick="BackButton()"><i class="fa fa-arrow-left"></i> Voltar</button>
			<button class='btn-arrow' style='float:right; margin-right: 5px;' onclick="DesafioButton()">Desafio <i class="fa fa-arrow-right"></i></button>
			<div id='editor'>
				<h3>Scene</h3>
			</div>
		</div>
	</center>
	
	<center>
		<div id='desafio-container' class='desafio-container'>
			<button class='btn-arrow' onclick="BackButton()"><i class="fa fa-arrow-left"></i> Voltar</button>
			<button class='btn-arrow' style='float:right; margin-right: 5px;' onclick="DesafioButton()">Proximo <i class="fa fa-arrow-right"></i></button>
			
			<?php
				$dirs = scandir('./../resources/plugins/');
				$dir = array_shift($dirs);
				$dir = array_shift($dirs);
			?>
			@for ($i = 0; $i < count($dirs); $i++)
				<div id="p{{ $i }}" style="display: none">
					@component($dirs[$i].'.play')
					
						@slot('path')
							./plugins/{{$dirs[$i]}}/
						@endslot
				
					@endcomponent
				</div>
			@endfor
		
		</div>
	</center>

	<script>
		var pluginList = {!! json_encode($plugins) !!};
	</script>

	<script src="https://unpkg.com/konva@2.4.2/konva.min.js"></script>

	<script src='../js/Challenge.js'></script>
	<script src='../js/Scene.js'></script>
	<script src='../js/Journey.js'></script>
	<script src='../js/KonvaFabric.js'></script>
	<script src='../js/gameLoad.js'></script>

	<script type="text/javascript">
		
		var json = atob("{{$data}}");

		gameLoad(json);

	</script>

	<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>

	<script>
		var quill = new Quill('#editor', {
			readOnly: true
		});
	</script>

</body>


</html>
