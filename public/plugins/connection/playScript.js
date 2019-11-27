class DataConnection {
	constructor() {
		this.plugin = "connection";
        this.question = "Aqui é o connection";
		this.answers = [];
    }

	SaveData(){
		return JSON.stringify(this);
	}

	LoadData(){

	}
}

function connection(){
	return new DataConnection();
}

function getPoints() {
    return 10;
}

function connectionAddOption() {
    var input1 = document.getElementById("addInput1");
	var input2 = document.getElementById("addInput2");
	if(input1.value != "" && input2.value != ""){
		var text = "";
		text += "<div class=\"row\" style=\"width: inherit\">";
		text += 	"<div class=\"col-2\"></div>";
		text += 	"<div class=\"col-2\">";
		text += 		"<p>" + input1.value + "</p>";
		text += 	"</div>";
		text += 	"<div class=\"col-1\">";
		text += 		"<p>↔</p>";
		text += 	"</div>";
		text += 	"<div class=\"col-2\">";
		text += 		"<p>" + input2.value + "</p>";
		text += 	"</div>";
		text += 	"<button class=\"con-delete-btn\" onclick=\"deleteOption(event)\">X</button>";
		text += "</div>";

		console.log(text);

		input1.value = "";
		input2.value = "";
		$('#connections').append(text);
	}
}

function deleteOption(evt){
    var p = evt.currentTarget.parentNode;
    p.parentNode.removeChild(p);
}