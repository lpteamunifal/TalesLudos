<div>
    <link rel="stylesheet" href="{{$path}}pluginStyle.css">

    <h1>Pergunta fechada</h1>
    <br>
    <label>Pergunta:</label><br>
    <textarea type="text" rows="4" style="width: 100%"></textarea><br>

    <br>

    <label>Respostas:</label><br>
	<br>
    <div id="options">
        <div style="width: inherit">
			<button class="pf-delete-btn" onclick="deleteOption(event)">X</button>
           	<label><input class="pf-checkbox-size" type="checkbox" name="alternativa" value="op1"> Teste</label>
            <br>
        </div>
    </div>
    <br>

    <input id="addInput" type="text" style="width: 94%">
    <button id="btnAddInput" class="pf-add-btn" onclick="addOption()">+</button><br>

    <script src="{{$path}}pluginScript.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
</div>