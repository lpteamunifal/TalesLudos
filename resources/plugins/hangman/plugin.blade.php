<div>
    <link rel="stylesheet" href="{{$path}}pluginStyle.css">

	<h1 class="title">
	Jogo da Forca 
	</h1>
	<h2 class="subtitle">
	Adivinhe a palavra!
	</h2>

    <div id="hang-game" class="row" style="width: inherit">
		<div class="col-3">
			<div class="input-row">
			  <label for="answer" class="label">Resposta:</label>
			  <input id="answer" class="textarea" type="text" value="Joana D'Arc"> 
			  <button id="hangman-ok" class="hang-add-btn">OK</button>
			</div>
			
			<div class="input-row">
			  <label class="label">Dica:</label><textarea class="textarea" rows="3" id="dica">Heroína Francesa que atuou na Guerra dos Cem Anos.</textarea>
			</div>
		</div>
		
		<div class="col-3">
			<div id="hangman-game">
			<div id="hangman-available-characters">
				<ul id="hangman-available-characters-list"></ul>
			</div>
			<div id="hangman-answer-placeholders"></div>
			<div id="hangman-notices"></div>
			
			</div>
			<script type='text/javascript'>
			/* <![CDATA[ */
			var hangman_app_script_data = {"answer":"aGV5IHRoZXJlIHNtYXJ0eXBhbnRz"};
			  // var hangman_app_script_data = {"answer":""};
			/* ]]> */
			</script>
		</div>
		
		<div id="hangman-figure" class= "col-6">
				<canvas id="hangman-canvas"></canvas>
		</div>
		
    </div>


    <script src="{{$path}}pluginScript.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
</div>