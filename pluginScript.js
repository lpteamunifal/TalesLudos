function getPoints() {
    return 10;
}

function addOption() {
    var input = document.getElementById("addInput");
    var text = "<input type=\"checkbox\" name=\"alternativa\" value=\"op3\"><label>" + input.value + "</label><br>";
    input.value = "";
    $('#options').append(text);
}