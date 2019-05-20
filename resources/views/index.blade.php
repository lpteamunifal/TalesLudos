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
		<a class="active" href="#home">Home</a> <a href="#news">Repositório</a>
		<a href="#contact">Meus Projetos</a> <a href="#about">Contato</a>

		@if(Auth::check())
			<div class='logged'> Olá, {{ Auth::user()->name." ".Auth::user()->last_name }}</div>
		@else
			<button class="login-button" onclick="login_function()"><i class="fa fa-user-circle"></i> Entrar</button> 
			<button class="login-button" onclick="register_function()"><i class="fa fa-sign-in"></i> Registrar</button>
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
				<div id="cenaSelector">
					<!-- Exemplo -->
					<!--
					<div id="c1">
						<div class="accordion">
							<button class="col-8" onclick="openScene(event, 'c1')">Cena 1</button>
							<button class="delete col-4" onclick="deleteWarning(event, 'c1')"><span>&times;</span></button>
						</div>
						<div class="panel">
							<div id="ds1">
								<div id="c1d1" class="subaccordion desafio">
									<button class="col-8" onclick="openDesafio(event)">Desafio 1</button>
									<button class="delete col-4" onclick="deleteWarning(event, 'c1d1')"><span>&times;</span></button>
								</div>
							</div>
							<div class="subaccordion">
								<button onclick="addDesafio(event, 'ds1')">+ Adicionar Desafio</button>
							</div>
						</div>
					</div>
					-->
					<!-- End -->
				</div>
				<div class="accordion">
					<button onclick="addCena(event)">+ Adicionar Cena</button>
				</div>
			</div>
		</div>
		<div id="frame-div" class="col-8 frame-fixer">
			<div class="tab">
				<button class="tablinks" onclick="openTab(event, 'Jornada')"
					id="defaultOpen">Jornada</button>
				<button class="tablinks" onclick="openTab(event, 'Cena')">Cena</button>
				<button class="tablinks" onclick="openTab(event, 'Desafio')">Desafio</button>
			</div>
			@if(Auth::check())
				<button class="btn right"><i class="fa fa-save"></i> Salvar Projeto</button>
			@endif
			<button class="btn right"><i class="fa fa-play"></i> Visualizar</button>
			<button class="btn right"><i class="fa fa-download"></i> Exportar</button>
			<div id="Jornada" class="frame1 tabcontent">
				<div class="tool-bar">
					<div id="t1" class="tool-bar-item act">
						<div class="tooltip">
							<button class="btn-tool" onclick="selectedTool(event)" style="padding-left: 7px; padding-right: 3px; color: inherit;"><i class="fa fa-arrows"></i></button>
							<span class="tooltiptext" style="right: -55px">Redimensionar</span>
						</div>
					</div>
					<div id="t2" class="tool-bar-item">
						<div class="tooltip">
							<button class="btn-tool" onclick="selectedTool(event)" style="font-size: 18px; padding-left: 6px; padding-right: 1px; color: inherit;"><i class="fa fa-exchange"></i></button>
							<span class="tooltiptext" style="right: -20px;">Conectar</span>
						</div>
					</div>
					<div id="t3" class="tool-bar-item">
						<div class="tooltip">
							<button id="btn-backgroud" class="btn-tool" style="color: inherit;"><i class="fa fa-picture-o"></i></button>
							<input id="file-input" type="file" style="display:none;">
						<span class="tooltiptext">Imagem</span>
						</div>
					</div>
				</div>
				<div id="box-jornada" class="frame"></div>
			</div>
			<div id="Cena" class="frame1 tabcontent">
				<div class="tool-bar">
					<img src="./img/coracao.png" alt="coracao" width="25" align="center">
					  <select id="sel_life">
						  <option selected>0</option>
						  <option>1</option>
						  <option>2</option>
						  <option>3</option>
						  <option>4</option>
						  <option>5</option>
						  <option>6</option>
						  <option>7</option>
						  <option>8</option>
						  <option>9</option>
						  <option>10</option>
					  </select>
				</div>
				<div class="frame">
                    <!-- Create the editor container -->
                    <div id="editor">
                        <p>Hello World!</p>
                        <p>Some initial <strong>bold</strong> text</p>
                        <p><br></p>
                    </div>
                </div>
			</div>
			<div id="Desafio" class="frame1 tabcontent">
				<div class="frame"></div>
			</div>
		</div>
	</div>

	<div id="modal-login" class="modal">
		<div class="modal-content">
			<div class= "modal-header">
				<button class="delete" onclick="document.getElementById('modal-login').style.display='none'"><span>&times;</span></button>
			</div>

			<div class="modal-body">

				<center> <h2> Faça seu login! </h2> </center>

				@if(Session::has('success'))
					<div class='alert alert-success'> {{ Session::get('success') }} </div>
					<script>
						document.getElementById('modal-login').style.display='block';
					</script>
				@elseif(Session::has('login_fail'))
					<div class='alert alert-danger'> {{ Session::get('login_fail') }} </div>
					<script>
						document.getElementById('modal-login').style.display='block';
					</script>
				@elseif($errors->login->any())
						<div class='alert alert-danger'>
					   	@foreach ($errors->login->all() as $error)
					    	{{ $error }} <br>
					  	@endforeach
					  </div>

					  <script>
					  	document.getElementById("modal-login").style.display = "block";
					  </script>
				@endif
				{!! Form::open(['url' => './login']) !!}

				{!! Form::label('email', 'Email') !!}
				{!! Form::input('text', 'email', Input::old('email'), ['class' => 'form-control', 'placeholder' => 'email@email.com']) !!}

				{!! Form::label('password', 'Senha') !!}
				{!! Form::password('password', ['class' => 'form-control', 'placeholder' => 'Senha']) !!}
				<br>
				<span class="psw">Esqueceu sua <a href="#">senha?</a></span>		
			</div>	
			<div class="modal-footer">
				{!! Form::submit('Entrar', ['class' => 'btn login-btn']) !!}
				{!! Form::close() !!}
				<br>
				<label>
					<input type="checkbox" checked="checked" name="remember"> Lembrar senha
				</label>
		 	</div>
		</div>
    </div>
    
    <div id="modal-register" class="modal">
		<div class="modal-content">
			<div class= "modal-header">
				<button class="delete" onclick="document.getElementById('modal-register').style.display='none'"><span>&times;</span></button>
			</div>
				<div class="modal-body">

					<center> <h2> Crie sua conta! </h2> </center>

					@if($errors->register->any())
						<div class='alert alert-danger'>
					   	@foreach ($errors->register->all() as $error)
					    	{{ $error }} <br>
					  	@endforeach
					  </div>

					  <script>
					  	document.getElementById("modal-register").style.display = "block";
					  </script>
					@endif

					{!! Form::open(['url' => './register']) !!}

					{!! Form::label('name', 'Nome') !!}
					{!! Form::input('text', 'name', Input::old('name'), ['class' => 'form-control', 'autofocus', 'placeholder' => 'Nome']) !!}

					{!! Form::label('last_name', 'Sobrenome') !!}
					{!! Form::input('text', 'last_name', Input::old('last_name'), ['class' => 'form-control', 'placeholder' => 'Sobrenome']) !!}

					{!! Form::label('email', 'Email') !!}
					{!! Form::input('text', 'email', Input::old('email'), ['class' => 'form-control', 'placeholder' => 'email@email.com']) !!}

					{!! Form::label('password', 'Senha') !!}
					{!! Form::password('password', ['class' => 'form-control', 'placeholder' => 'Senha']) !!}

					{!! Form::label('re_password', 'Confirmação da senha') !!}
					{!! Form::password('re_password', ['class' => 'form-control', 'placeholder' => 'Confirmar a senha']) !!}

				</div>
				<div class="modal-footer">
					<div style="width: 100%">
						{!! Form::submit('Registrar-se', ['class' => 'btn login-btn']) !!}
						{!! Form::close() !!}
					</div>
			 	</div>
		</div>
    </div>

	<!-- Include the Quill library -->
	<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>

	<script>
		//Tool bar buttons
        var toolbarOptions = [
            [{ 'size': ['small', false, 'large', 'huge'] }],	// custom dropdown
            [{ 'font': [] }],									// font tyoe

            ['bold', 'italic', 'underline', { 'color': [] }, { 'background': [] }],// toggled buttons
            [{ 'align': [] }],									// text align
            [{ 'list': 'ordered'}, { 'list': 'bullet' },{ 'indent': '+1'}, { 'indent': '-1' }],// indent

            ['blockquote', 'code-block'],						// code block
            [{ 'direction': 'rtl' }],                         // text direction

            ['clean'],

            ['link', 'image', 'video', 'formula']
        ];
        //Initialize Quill editor
        var quill = new Quill('#editor', {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow'
        });
	</script>

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
	<script src="https://unpkg.com/konva@2.4.2/konva.min.js"></script>


	<script src="./js/jorney.js"></script>
	<script src="./js/scene.js"></script>
	<script src="./js/scripts.js"></script>
	<script src='./js/konvaScripts.js'></script>


</body>
</html>
