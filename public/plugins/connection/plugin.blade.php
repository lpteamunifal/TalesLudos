<div>
    <link rel="stylesheet" href="{{asset($path.'pluginStyle.css')}}">

    <h1>Ligue os Pontos</h1>
    <br>
    <label>Descrição:</label><br>
    <textarea type="text" rows="4" style="width: 100%; padding: 10px 20px 0px 20px"></textarea><br>

    <br>

    <label>Conecções:</label><br>
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
			<button class="con-delete-btn" onclick="deleteOption(event)">X</button>
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
			<button class="con-delete-btn" onclick="deleteOption(event)">X</button>
        </div>
    </div>
    <br>

    <input id="addInput1" type="text" style="width: 40%"> liga a <input id="addInput2" type="text" style="width: 40%">
    <button id="btnAddInput1" class="con-add-btn" onclick="connectionAddOption()">+</button><br>

    <script src="{{asset($path.'pluginScript.js')}}"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
</div>