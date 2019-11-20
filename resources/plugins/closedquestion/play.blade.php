<div>
    <link rel="stylesheet" href="{{asset($path.'playStyle.css')}}">

    <h1 style="text-align: center">Pergunta fechada</h1>
    <br>
    <label style="margin: 10px 3px 20px 20px">Pergunta:</label><br>
    <textarea id="closed-question" type="text" rows="4" style="width: 100%"></textarea><br>

    <br>

    <label style="margin: 10px 3px 30px 20px">Respostas:</label><br>
	<br>
    <div id="options" style="margin: 10px 3px 10px 20px">
        <div style="width: inherit">
           	<label><input class="pf-checkbox-size" type="radio" name="alternativa" value="op1"> Teste</label>
            <br>
        </div>
    </div>
    <br>

    

    <script src="{{asset($path.'playScript.js')}}"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
</div>