class DataHangman{
  constructor() {
    this.plugin = "hangman";
    this.answer = "Joana D'Arc";
    this.dica = "Heroína francesa";
  }
  
  SaveData(){
    var i = document.getElementById("answer");
    this.answer = i.value;
    console.log(i.value);
    console.log(this.answer);
    var dica = document.getElementById("dica");
    this.dica = dica.value;
  }
  
  LoadData(){
    var i = document.getElementById("answer");
    i.value = this.answer;
    console.log(i.value);
    console.log(this.answer);
    var dica = document.getElementById("dica");
    dica.value = this.dica;	

  }
} 

function hangman(){
  return new DataHangman();
}

;(	
  
	
	
	function(window, document) {
  	
		const availableChars = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
          ],
          maxGuesses = 10;
		  
		  var answer = document.getElementById('answer').value,
          answerChars = getAnswerChars(),
		  //toUpperCase = Converte a resposta para maiúscula e a retorna. 
          placeholderChars = answer.toUpperCase().split(''),		  
          availableCharsSelector = document.getElementById(
              'hangman-available-characters-list'),
			  
          answerPlaceholdersSelector = document.getElementById(
              'hangman-answer-placeholders'),
			  
          noticesSelector = document.getElementById('hangman-notices'),
		  okSelector = document.getElementById('hangman-ok'),
          canvasSelector = document.getElementById('hangman-canvas'),
          canvasContext = canvasSelector.getContext('2d'),
          stickmanCoordinates = [
            { // Base.
              'lineStartX': 20,
              'lineStartY': 300,
              'lineEndX': 230,
              'lineEndY': 300,
            },
            { // Forca lateral.
              'lineStartX': 40,
              'lineStartY': 20,
              'lineEndX': 40,
              'lineEndY': 300,
            },
            { // Forca Superior.
              'lineStartX': 40,
              'lineStartY': 20,
              'lineEndX': 150,
              'lineEndY': 20,
            },
            { // Corda.
              'lineStartX': 150,
              'lineStartY': 20,
              'lineEndX': 150,
              'lineEndY': 60,
            },
            { // Cabeça.
              'arcCenterX': 150,
              'arcCenterY': 80,
              'radius': 20,
            },
            { // Tronco.
              'lineStartX': 150,
              'lineStartY': 100,
              'lineEndX': 150,
              'lineEndY': 220,
            },
            { // Perna esquerda.
              'lineStartX': 150,
              'lineStartY': 220,
              'lineEndX': 75,
              'lineEndY': 280,
            },
            { // Perna Direita.
              'lineStartX': 150,
              'lineStartY': 220,
              'lineEndX': 225,
              'lineEndY': 280,
            },
            { // Braço esquerdo.
              'lineStartX': 150,
              'lineStartY': 150,
              'lineEndX': 80,
              'lineEndY': 125,
            },
            { // Braço direito.
              'lineStartX': 150,
              'lineStartY': 150,
              'lineEndX': 220,
              'lineEndY': 125,
            },
          ];

      var guessedChars = [],
          misses = 0,
          characterPlaceholderElements = [];

      /**
       * Retorna um array de caracteres ordenados, sem repetição de letras. 
       * answer.
       * @returns {Array}
       */
	   
      function getAnswerChars() {
        var answerArray = answer.toUpperCase().split('');

        return answerArray.sort().filter(function(char, index, inputArray) {
          return isValidChar(char) && char !== inputArray[index - 1];
        });
      } 
	  
	  
      /**
       * Verifica se o caracteres pertence aos caracteres disponíveis.
       * @parametro {string} char Character para checagem.
       * @returns {boolean}
       */
      function isValidChar(char) {
        return availableChars.includes(char.toUpperCase());
      }

      /**
       * Verifica se o jogador perdeu.
       * @returns {boolean}
       */
      function playerWon() {
        var correctGuesses = guessedChars.sort().filter(function(char) {
          return answerChars.includes(char);
        });

        return correctGuesses.length === answerChars.length &&
               correctGuesses.every(function(element, index) {
                 return element === answerChars[index];
               });
      }

      /**
       * Verifica se o player perdeu.
       * @returns {boolean}
       */
      function playerLost() {
        return maxGuesses <= misses;
      }

      /****************************
       *  Configurações do Jogo
       ****************************/

      /**
       * Reinderiza os caracteres disponíveis. 
       */
      function renderAvailableChars() {
        var html = '';
        for (var $i = 0; $i < availableChars.length; $i++) {
          html += '<li class="hangman-available-character" data-key-code="' +
                  availableChars[$i].charCodeAt(0) + '" data-char="' +
                  availableChars[$i] + '">' + availableChars[$i] +
                  '</li>';
        }

        availableCharsSelector.innerHTML += html;
      }

      /**
       *  Reinderiza o HTML para mostrar espaços reservados vazios para cada um dos caracteres
	   *  que compõe a resposta. 
	   * 
	   * Render the HTML to show empty placeholders for each of the characters
       * that comprise the answer. Really this could be done with PHP, but hey,
       * why not do it with JS. We will interact with these placeholders quite
       * a bit, so let's give each one an id as well as a class.
       */
      function renderEmptyPlaceholders() {
		answerPlaceholdersSelector.innerHTML = '';
		
        if (!answer) {
          answerPlaceholdersSelector.innerHTML += '<strong>Oops! Alguma coisa errada com a recuperação da resposta.&hellip;</strong>';
          return;
        }
		var html = ''; 
        html += '<ul id="hangman-placeholders"><li class="word-placeholder"><ul>';

        for (var $i = 0; $i < placeholderChars.length; $i++) {
          if (' ' === placeholderChars[$i]) {
            html += '<li class="character-placeholder space"></ul></li><li class="word-placeholder"><ul>';
          }
          else if (!isValidChar(placeholderChars[$i])) {
            html += '<li class="character-placeholder given">' +
                    placeholderChars[$i] + '</li>';
          }
          else {
            html += '<li class="character-placeholder guess">_</li>';
          }
        }

        html += '</ul></li></ul>';

        answerPlaceholdersSelector.innerHTML += html;
      }

      /**
       * Recupera os elementos do alocador de espaço de caractere.
       */
      function getCharacterPlaceholderElements() {
        characterPlaceholderElements = answerPlaceholdersSelector.querySelectorAll(
            '.character-placeholder');
      }

      /**
       * Recupera o palpite atual e retorna para a função validadeCurrentGuess(). 
       */
      function addGuessListener() {

        /*document.onkeydown = function(event) {
          validateCurrentGuess(event.key.toUpperCase());
        };*/

        availableCharsSelector.addEventListener('click', function(event) {
          if (event.target.matches('li')) {
            validateCurrentGuess(event.target.textContent);
          }
        });

      }

      /**
       * Reseta o jogo quando o botão apropriado for clicado. 
       */
      function addResetListener() {
        noticesSelector.addEventListener('click', function(event) {
          if (event.target.matches('button#hangman-reset-game')) {
            resetGame();
          }
        });
      }

      /**
       * Sets up the HTML canvas.
       */
      function setupCanvas() {
        canvasSelector.width = 250;
        canvasSelector.height = 310;
      }

      /***********************
       * Interação com o Jogador
       ***********************/

      /**
       * Verifica se o palpite atual corresponde a um caractere na resposta.
	   * Checks if the current guess matches a character in the answer and takes
       * the appropriate next step for the game.
       * @param {string|number} currentGuess Current guess submitted by the
       *   player.
       */
      function validateCurrentGuess(currentGuess) {

        if (playerWon() || playerLost()) {
          return;
        }

       /* if (!isValidChar(currentGuess) || guessedChars.includes(currentGuess)) {
          console.log('Invalid guess');
          return;
        } */

        guessedChars.push(currentGuess);

        //O palpite atual é correto?
        if (answerChars.includes(currentGuess)) {
          printCorrectGuess(currentGuess);
          if (playerWon()) {
            doGameEnd('venceu');
          }
        }
        else {
          misses++;
          drawHangman(misses - 1);
          if (playerLost()) {
            doGameEnd('perdeu');
          }
        }

        // Disable the guessed character.
        disableCharacter(currentGuess);
      }

      /**
       * Preenche os espacos com as estimativas corretas. 
       * @param {string} guess Player's guess.
       */
      function printCorrectGuess(guess) {
        for (var $i = 0; $i < placeholderChars.length; $i++) {
          if (placeholderChars[$i] === guess) {
            characterPlaceholderElements[$i].innerHTML = guess;
          }
        }
      }

      /**
       * Desabilita os caracteres que foram selecionados.
       * @param {string|number} character Character para ser desabilitado.
       */
      function disableCharacter(character) {
        var charSelector = availableCharsSelector.querySelector(
            '[data-char="' + character + '"]');
        if (!charSelector.classList.contains('disabled')) {
          charSelector.className += ' disabled';
        }
      }

      /**
       * Desenha o homem enforcado.
       * @param {number} quantidade de erros que se pode ter. 
       */
      function drawHangman(misses) {
        canvasContext.beginPath();

        var path = stickmanCoordinates[misses];

        // Check if we should draw a circle or line.
        if (path.hasOwnProperty('radius')) {
          canvasContext.arc(path.arcCenterX, path.arcCenterY, path.radius, 0,
              2 * Math.PI);
        }
        else {
          canvasContext.moveTo(
              path.lineStartX,
              path.lineStartY
          );
          canvasContext.lineTo(
              path.lineEndX,
              path.lineEndY
          );
        }
        canvasContext.stroke();
      }

      /*****************
       * 	Game 
       *****************/

      /**
       * Fim do Jogo.
       * @param {String} Resultado se o jogador ganhou ou perdeu. 
       */
      function doGameEnd(outcome) {
        var html;

        if ('venceu' === outcome) {
          html = '<p>Você venceu! :D </p>';
        }
        else {
          html = '<p>Não foi dessa vez :( .  <button id="hangman-reset-game">De novo?</button></p>';
        }

        noticesSelector.innerHTML = html;
      }

      /**
       * Redefine o jogo para que o jogador possa comecar de novo. 
       */
      function resetGame() {		
        var disabledChars = availableCharsSelector.querySelectorAll(
            'li.hangman-available-character.disabled'),
            blankPlaceholders = answerPlaceholdersSelector.querySelectorAll(
                'li.guess')
        ;

        disabledChars.forEach(function(element) {
          element.className = 'hangman-available-character';
        });

        blankPlaceholders.forEach(function(element) {
          element.innerHTML = '_';
        });

        noticesSelector.innerHTML = '';

        canvasContext.clearRect(0, 0, canvasSelector.width,
            canvasSelector.height);

        guessedChars = [];

        misses = 0;
      }
	  
	  
	  	  
	  function ChoseAnswer() {
        okSelector.addEventListener('click', function(event) {    
           // answer = document.getElementById('answer').value;
			//renderEmptyPlaceholders();
			updateName();
			renderEmptyPlaceholders();
			getCharacterPlaceholderElements();
			addGuessListener();
			addResetListener();
			setupCanvas();;
			resetGame();
			
        });
      }
	  
	  function updateName() {
			answer = document.getElementById("answer").value;
			answerChars = getAnswerChars();		  
			placeholderChars = answer.toUpperCase().split('');
			console.log(answer);

	  } 
	  
		function Imput() {
			var input = document.getElementById("answer");
			// Execute a function when the user releases a key on the keyboard
			input1.addEventListener("keyup", function (event) {
				// Number 13 is the "Enter" key on the keyboard
				if (event.keyCode === 13) {
					// Cancel the default action, if needed
					event.preventDefault();
					// Trigger the button element with a click
					document.getElementById("btnAddInput").click();
					
				}
			});
		}
	  
		
      function init() {
		ChoseAnswer(); 
        renderAvailableChars();
        renderEmptyPlaceholders();
        getCharacterPlaceholderElements();
        addGuessListener();
        addResetListener();
        setupCanvas();

//        console.log('get random word' );
//        getRandomWord();
      }

      init();

    }
)(window, document);
  


