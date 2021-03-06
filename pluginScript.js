function getPoints() {
    return 10;
}

function addOption() {
    var input = document.getElementById("addInput");

    if(input.value != ""){
        var text = "<div>";
        text += "<input type=\"checkbox\" name=\"alternativa\" value=\"op1\">";
        text += "<label>" + input.value + " </label>";
        text += "<button class=\"btn\" onclick=\"deleteOption(event)\">X</button>";
        text += "<br>";
        text += "</div>";

        console.log(text);

        input.value = "";
        $('#options').append(text);
    }
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