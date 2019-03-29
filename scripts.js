function openTab(evt, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


function openScene(evt, scene) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("panel");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("accordion");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(scene).style.display = "block";
    evt.currentTarget.parentNode.className += " active";
}

function openDesafio(evt) {
    var i, desafios;

    desafios = document.getElementsByClassName("desafio");
    for (i = 0; i < desafios.length; i++) {
        desafios[i].className = desafios[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
}

function addCena(evt) {
	
    var novaCena = document.getElementById('cenaSelector');
    var numeroCena = novaCena.getElementsByClassName('accordion').length + 1;
    var textBlock = '';
    textBlock += '<div class="accordion">';
    textBlock += '  <button onclick="openScene(event, \'cena' + numeroCena + '\')\">Cena ' + numeroCena + '</button>\n';
    textBlock += '  <button class="close" onclick="deleteCena(event, \'cena' + numeroCena + '\')">x</button>';
    textBlock += '</div>';
    textBlock += '<div id=\"cena' + numeroCena + '\" class=\"panel\">\n';
    textBlock += '  <div id=\"desafio' + numeroCena + '\"></div>\n';
    textBlock += '  <button class=\"subaccordion\" onclick=\"addDesafio(event, \'desafio' + numeroCena + '\')\">+ Adicionar Desafio</button>\n';
    textBlock += '</div>';
    $('#cenaSelector').append(textBlock);
    
    addSceneCircleInJourney(numeroCena);
}

function addDesafio(evt, cena) {
    var para = document.createElement("button");
    var novaCena = document.getElementById(cena);
    var numeroDesafio = novaCena.getElementsByTagName('button').length + 1;
    var t = document.createTextNode("Desafio " + numeroDesafio);
    para.appendChild(t);
    para.classList.add("subaccordion");
    para.classList.add("desafio");
    para.setAttribute("onclick","openDesafio(event)");
    novaCena.appendChild(para);
}

function deleteCena(evt, cena) {
    var element = evt.currentTarget.parentNode;
    var desafios = document.getElementById(cena);
    desafios.parentNode.removeChild(desafios);
    element.parentNode.removeChild(element);
    
    var numeroCena = cena.substring(4);
    
    console.log(numeroCena);
    
    removeSceneCircleFromJourney(numeroCena);
}

$("#selecionar-imagem").change(function(){
	var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
       $('#Jornada').css('background-image', 'url("' + reader.result + '")');
       $('#Jornada').css('background-size', 'cover');
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
    }
});





