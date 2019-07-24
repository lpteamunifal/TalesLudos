function getPoints() {
    return 10;
}

function connectionAddOption() {
    var input1 = document.getElementById("addInput1");
	var input2 = document.getElementById("addInput2");
    var text = "";
	text += "<div class=\"row\" style=\"width: inherit\">";
	text += 	"<div class=\"col-2\"></div>";
	text += 	"<div class=\"col-2\">";
	text += 		"<p>" + input1.value + "</p>";
	text += 	"</div>";
	text += 	"<div class=\"col-2\">";
	text += 		"<p>------------------------</p>";
	text += 	"</div>";
	text += 	"<div class=\"col-2\">";
	text += 		"<p>" + input2.value + "</p>";
	text += 	"</div>";
	text += 	"<button onclick=\"deleteOption(event)\">X</button>";
    text += "</div>";

    console.log(text);

    input1.value = "";
	input2.value = "";
    $('#connections').append(text);
}

window.onload = function() {
    var input = document.getElementById("addInput");
    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("btnAddInput").click();
        }
    });
}

function deleteOption(evt){
    var p = evt.currentTarget.parentNode;
    p.parentNode.removeChild(p);
}