<div>
    <link rel="stylesheet" href="{{asset($path.'playStyle.css')}}>

    <h1 style="text-align:center">Ligue os Pontos</h1>
    <h4 style="text-align:center">Aqui estará a Descrição do Jogo ou qualquer coisa que o professor queira colocar, seja um parágrafo de explicação ou sei lá.</h4>
    <br>

    <h4 style="background-color: red">Ligue:</h4><br>
    <div id="connections" style="text-align: center">
        <div class="row" style="width: inherit">
			<div class="col-2"></div>
			<div class="col-2">
				<p>Maçã</p>
			</div>
			<div class="col-1">
				<p>↔</p>
			</div>
			<div class="col-2">
				<p>Vermelho</p>
			</div>
        </div>
		<div class="row" style="width: inherit">
			<div class="col-2"></div>
			<div class="col-2">
				<p>Uva</p>
			</div>
			<div class="col-1">
				<p style="text-align:center">↔</p>
			</div>
			<div class="col-2">
				<p>Roxo</p>
			</div>
			
        </div>
    </div>
    <br>

    
    

    <script src="{{asset($path.'playScript.js')}}"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
</div>