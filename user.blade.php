<!DOCTYPE html>
<html>
<head>
	<title>Tales Ludos</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="./css/style.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</head>
<body class="container-fluid">
	<div class="topnav">
		<a class="active" href="home">Home</a> <a href="#news">Repositório</a>
		<a href="contact">Meus Projetos</a> <a href="#about">Contato</a>

		@if(Auth::check())
			<div class='logged' align='right' Valign='bottom'> Olá, {{ Auth::user()->name." ".Auth::user()->last_name }}</div>
		@else
			<script>
				window.location.href = "./resources/views/index.blade.php";
				alert("Você não esta logado, tente fazer o login antes de acessar esta página.");
			</script>
		@endif
	</div>

	<div class="row">
		<div id="bar" class="col bar">
			<a href="javascript:void(0);" class="icon" onclick="menu()">
				<i class="fa fa-bars"></i>
			</a>
			<div style="text-align: center; padding-top: 20px;">
				<img src="./img/talesludos.png" width="200" height="200">
			</div>
			<div class="sideBar">
				<div id="menu">
				<div class="accordion">
					<button id="MeusProjetos" onclick="rtvProjetos(event)">Meus Projetos</button>
				</div>
				<div class="accordion">
					<button id="MeusDados" onclick="updDados(event)">Meus Dados</button>
				</div>
				<div class="accordion">
					<button id="Sair" onclick="logout(event)">Sair</button>
				</div>
				</div>				
				
			</div>
		</div>
		<div id="frame-div" class="col-8 frame-fixer" style="overflow:auto">
			<div id="normalContent" align="center" style="display:none">
				<p align="center" ><h3>Olá {{ Auth::user()->name." ".Auth::user()->last_name }}, seja bem vindo a sua página!</h3></p>
			</div>			
			<div id="projectContent" align="center" style="display:none">
				
			</div>
			<div id="dadosContent" align="center"  style="Valign:top">
				<div>

					<center> <h2> Seus Dados </h2> </center>

					@if($errors->register->any())
						<div class='alert alert-danger'>
					   	@foreach ($errors->register->all() as $error)
					    	{{ $error }} <br>
					  	@endforeach
					  </div>
					@endif

					{!! Form::open(['url' => './update']) !!}
					
					<table>
						<tr>
							<td>{!! Form::label('name', 'Nome') !!}</td>
							<td>{!! Form::input('text', 'name', Input::old('name'), ['size' => '10', 'autofocus', 'placeholder' => Auth::user()->name]) !!}</td>
						</tr>
						<tr>
							<td>{!! Form::label('last_name', 'Sobrenome') !!}</td>
							<td>{!! Form::input('text', 'last_name', Input::old('last_name'), [ 'placeholder' => Auth::user()->last_name]) !!}</td>
						</tr>
						<tr>
							<td>{!! Form::label('email', 'Email') !!}</td>
							<td>{!! Form::input('text', 'email', Input::old('email'), [ 'placeholder' => Auth::user()->email]) !!}</td>
						</tr>
						<tr>					
							<td>{!! Form::label('old_password', 'Senha Antiga') !!}</td>
							<td>{!! Form::password('old_password', [ 'placeholder' => 'Senha Antiga']) !!}</td>
						</tr>
						<tr>
							<td>{!! Form::label('new_password', 'Senha Nova') !!}</td>
							<td>{!! Form::password('new_password', [ 'placeholder' => 'Senha Nova']) !!}</td>
						</tr>
						<tr>
							<td>{!! Form::label('re_password', 'Confirmação da senha nova') !!}</td>
							<td>{!! Form::password('re_password', [ 'placeholder' => 'Confirmar a senha nova']) !!}</td>
						</tr>
					</table>

				</div>
				<div class="modal-footer">
					<div style="width: 100%">
						{!! Form::submit('Alterar Cadastro', ['class' => 'btn login-btn']) !!}
						{!! Form::close() !!}
					</div>
			 	</div>
			</div>
		</div>
		
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
	<script src="https://unpkg.com/konva@2.4.2/konva.min.js"></script>

	<script src="./js/Journey.js"></script>
	<script src="./js/Scene.js"></script>
	<script src="./js/Challenge.js"></script>
	<script src="./js/SceneConnection.js"></script>
	<script src="./js/scripts.js"></script>
	<script src='./js/konvaScripts.js'></script>



</body>
</html>
