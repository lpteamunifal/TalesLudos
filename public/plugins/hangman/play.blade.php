<div>
    <link rel="stylesheet" href="{{asset($path.'playStyle.css')}}">



	<h1 class="title">
	Jogo da Forca 
	</h1>
	

	
	<div>
		<h3 rows="1" id="dica">Dica: Heroína Francesa que atuou na Guerra dos Cem Anos.</h3>
	</div>
	
    <div id="hang-game">
		<div style="display:none">
			<div>
			  <label for="answer" class="label">Resposta:</label>
			  <input id="answer" class="textarea" type="text" value="Joana D'Arc"> 
			  <button id="hangman-ok" class="hang-add-btn">OK</button>
			</div>
		</div>
		
		<div>
			<div id="hangman-game" style="padding:10px 40px 30px 100px;">
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
		
		<div id="hangman-figure" style="padding:15px 100px 5px 10px;">
				<canvas id="hangman-canvas"></canvas>
		</div>
		
    </div>

    <script src="{{asset($path.'playScript.js')}}"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
</div>