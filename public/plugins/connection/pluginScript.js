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

window.onload = function() {
    var input1 = document.getElementById("addInput1");
    // Execute a function when the user releases a key on the keyboard
    input1.addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("btnAddInput1").click();
        }
    });
	
	var input2 = document.getElementById("addInput2");
    // Execute a function when the user releases a key on the keyboard
    input2.addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("btnAddInput1").click();
        }
    });
}

function deleteOption(evt){
    var p = evt.currentTarget.parentNode;
    p.parentNode.removeChild(p);
}