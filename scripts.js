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
    var element = document.getElementById(scene).getElementsByClassName('panel');
    element[0].style.display = "block";
    evt.currentTarget.parentNode.className += " active";
}

function openDesafio(evt) {
    var i, desafios;

    desafios = document.getElementsByClassName("desafio");
    for (i = 0; i < desafios.length; i++) {
        desafios[i].className = desafios[i].className.replace(" active", "");
    }

    evt.currentTarget.parentNode.className += " active";
}

var jorney = new Jorney('Test');

function addCena(evt) {
    jorney.sceneNumber++;
    var sceneNumber = jorney.sceneNumber;

    var element = document.createElement("div");

    var textBlock = '';
    textBlock += '<div id="c' + sceneNumber + '">';
    textBlock += '  <div class="accordion">';
    textBlock += '      <button class=\"col-8\" onclick="openScene(event, \'c' + sceneNumber + '\')\">Cena ' + sceneNumber + '</button>\n';
    textBlock += '      <button class="delete col-4" onclick="deleteWarning(event, \'c' + sceneNumber + '\')"><span>&times;</span></button>';
    textBlock += '  </div>';
    textBlock += '  <div class="panel">\n';
    textBlock += '      <div id="ds' + sceneNumber + '\"></div>\n';
    textBlock += '      <div class=\"subaccordion\">';
    textBlock += '          <button onclick="addDesafio(event, \'ds' + sceneNumber + '\')">+ Adicionar Desafio</button>';
    textBlock += '      </div>';
    textBlock += '  </div>';
    textBlock += '</div>';

    element.innerHTML = textBlock;

    var scene = new Scene('c' + sceneNumber, element);
    jorney.scene.push(scene);

    $('#cenaSelector').append(element);
    
    addSceneCircleInJourney(jorney.sceneNumber);
}

function addDesafio(evt, selector) {
    var scene = jorney.getSceneByName('c' + selector.substring(2));

    console.log('c' + selector.substring(2));

    var numeroDesafio = scene.getNextChallengeNumber;
    var textBlock = '';
    textBlock += '<div id="c' + selector.substring(2) + 'd' + numeroDesafio + '" class="subaccordion desafio">';
    textBlock += '  <button class=\"col-8\" onclick=\"openDesafio(event)\">Desafio ' + numeroDesafio + '</button>';
    textBlock += '  <button class="delete col-4" onclick="deleteWarning(event, \'c' + selector.substring(2) + 'd' + numeroDesafio + '\')"><span>&times;</span></button>';
    textBlock += '</div>';

    $('#' + selector).append(textBlock);
}

function deleteWarning(evt, cena) {
    var textBlock = '';
    textBlock += '<div id="modal-delete-confirmation" class="modal">';
    textBlock += '  <div class="modal-content">';
    textBlock += '      <div class="modal-body">';
    textBlock += '          <p>Tem certeza que desaja excluir?</p>';
    textBlock += '      </div>';
    textBlock += '      <div class="modal-footer">';
    if(cena.indexOf('d') > -1){
        textBlock += '          <button class="btn red" onclick="deleteDesafio(event, \'' + cena + '\')">Excluir</button>';
    } else {
        textBlock += '          <button class="btn red" onclick="deleteCena(event, \'' + cena + '\')">Excluir</button>';
    }

    textBlock += '          <button id="deleteBtn" class="btn" onclick="closeModal(\'modal-delete-confirmation\')">Cancelar</button>';
    textBlock += '      </div>';
    textBlock += '  </div>';
    textBlock += '</div>';
    $('body').append(textBlock);

    var modal = document.getElementById('modal-delete-confirmation');
    modal.style.display = "block";
}

function deleteCena(evt, cena) {
    var element = document.getElementById(cena);
    element.parentNode.removeChild(element);

    var sceneNumber = cena.substring(1);

    jorney.deleteSceneByName('c' + sceneNumber);

    console.log(sceneNumber);

    removeSceneCircleFromJourney(sceneNumber);

    var modal = document.getElementById('modal-delete-confirmation');
    modal.parentNode.removeChild(modal);
}

function deleteDesafio(evt, desafio) {
    var element = document.getElementById(desafio);
    var scene = jorney.getSceneByName(desafio.split('d'));
    element.parentNode.removeChild(element);

    var modal = document.getElementById('modal-delete-confirmation');
    modal.parentNode.removeChild(modal);
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

function closeModal(modalName){
    var modal = document.getElementById(modalName);
    modal.style.display = "none";
}




