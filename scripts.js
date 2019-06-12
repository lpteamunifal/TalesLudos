var tool;
var journey = new Journey('Test');

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

function openTabScene() {
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
    document.getElementById("Cena").style.display = "block";
    document.getElementById("CenaTab").className += " active";
}

function openTabChallenge() {
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
    document.getElementById("Desafio").style.display = "block";
    document.getElementById("DesafioTab").className += " active";
}

document.getElementById("defaultOpen").click();

var y = document.getElementById("topnav");
if ($(window).width() < 1000) {
        if(y.className === "topnav"){
	    y.className = "topnav hidden";
	}
}

$('.frame').css('width','100%');
$('.frame').height($('.frame').width() / 2.031);

$(window).resize(function(){
    var x = document.getElementById("frame-div");
    var y = document.getElementById("topnav");
    if ($(window).width() < 1000) {
        if(x.className === "col-8 frame-fixer") {
            x.className = "col-10 frame-fixer";
        }
	if(y.className === "topnav"){
	    y.className = "topnav hidden";
	}
	document.getElementById("frame-div").style.marginRight="auto";
        document.getElementById("frame-div").style.marginLeft="auto";
    }
    else {
        if(x.className === "col-10 frame-fixer")
            x.className = "col-8 frame-fixer";
    }

    $('.frame').css('width','100%');
    $('.frame').height($('.frame').width() / 2.031);

    console.log($('.frame').width());
    console.log($('.frame').height());
    
    var resizeWidth = document.getElementById('box-jornada').clientWidth;
    var resizeHeight = document.getElementById('box-jornada').clientHeight;
    
    var scale = resizeWidth / journeyStage.width();
    
    journeyStage.width(resizeWidth);
    journeyStage.height(resizeHeight);
    //journeyStage.scale({x: scale, y: scale});
    journeyStage.draw();
});

function openNav(){
    var x = document.getElementById("topnav");
    if ($(window).width() < 1000) {
        if (x.className === "topnav hidden"){
            x.className = "topnav responsive";
            document.getElementById("btnnav1").style.display= "inline";
        }else if (x.className === "topnav responsive"){
            x.className = "topnav hidden";
            document.getElementById("btnnav1").style.display= "none";
        }
    }    
}

function menu() {
    var x = document.getElementById("bar");
    if (x.className === "col bar") {
        x.className += " responsive";
        x.className.replace(" col", "");
        console.log('a');
        document.getElementById("btnnav").style.display = "block";
    } else {
        x.className = "col bar";
        console.log('b');
        document.getElementById("btnnav").style.display = "none";
    }
}

var sel = 'c1';

function saveText() {
    var s = journey.getSceneByName(sel);
    var text = document.getElementsByClassName("ql-editor")[0].innerHTML;
    s.setContainer(text);
}

function loadText(scene) {
    var s = journey.getSceneByName(scene);
    var editor = document.getElementsByClassName("ql-editor")[0];
    editor.innerHTML = s.getContainer();
}

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
        if(tablinks[i].className.includes("active")) {
            saveText(tablinks[i].id);
        }
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    var element = document.getElementById(scene).getElementsByClassName('panel');
    element[0].style.display = "block";
    evt.currentTarget.parentNode.className += " active";

    sel = scene;
    openTabScene();
    loadText(scene);
}

function loadChallenge(challenge){

    var s = journey.getSceneByName(challenge.substring(0,2));
    var c = s.getChallengeByName(challenge);
    var frame = document.getElementsByClassName("frameDesafio")[0];


    var textBlock = '';
    textBlock += '<div id="challengeOptions" class="challengeOptions">';
    textBlock +=    '<p>Desafios Predefinidos</p>';
    textBlock +=        '<ul style="list-style-type:none;">';

    // Lógica de busca dos plugins feitos pelos desenvolvedores do Tales Ludos
    // Terá nas opçoes a chamada de função onde ira preencher o campo pluginDescription com o plugin

    textBlock +=        '</ul>';
    textBlock +=    '<p>Desafios da Comunidade</p>';
    textBlock +=        '<ul style="list-style-type:none;">';

    // Lógica de busca dos plugins feitos pela comunidade
    // Terá nas opçoes a chamada de função onde ira preencher o campo pluginDescription com o plugin

    textBlock +=        '</ul>';
    textBlock += '</div>';
    textBlock += '<div id="pluginDescription" class="pluginDescription">';
    textBlock += '</div>';

    


    frame.innerHTML = textBlock;

}

function openDesafio(evt, challenge) {
    var i, desafios;

    desafios = document.getElementsByClassName("desafio");
    for (i = 0; i < desafios.length; i++) {
        desafios[i].className = desafios[i].className.replace(" active", "");
    }

    openTabChallenge();
    loadChallenge(challenge);

    evt.currentTarget.parentNode.className += " active";
}

function addCena(evt) {
    var sceneNumber = journey.getNextSceneNumber();

    var element = document.createElement("div");
    
    var konvaObject = addSceneCircleInJourney(sceneNumber);
    
    var scene = new Scene(sceneNumber,'c' + sceneNumber, konvaObject);

    var textBlock = '';
    textBlock += '<div id="c' + scene.getId + '">';
    textBlock += '  <div class="accordion">';
    textBlock += '      <button class=\"col-8\" onclick="openScene(event, \'c' + scene.getId + '\')\">Cena ' + scene.getId + '</button>\n';
    textBlock += '      <button class="delete col-4" onclick="deleteWarning(event, \'c' + scene.getId + '\')"><span>&times;</span></button>';
    textBlock += '  </div>';
    textBlock += '  <div class="panel">\n';
    textBlock += '      <div id="ds' + scene.getId + '\"></div>\n';
    textBlock += '      <div class=\"subaccordion\">';
    textBlock += '          <button onclick="addDesafio(event, \'ds' + scene.getId + '\')">+ Adicionar Desafio</button>';
    textBlock += '      </div>';
    textBlock += '  </div>';
    textBlock += '</div>';

    element.innerHTML = textBlock;
    
    scene.setElement = element;

    journey.addScene(scene);

    $('#cenaSelector').append(element);
    
    console.log(journey);
}

function addDesafio(evt, selector) {
    var scene = journey.getSceneByName('c' + selector.substring(2));  

    var element = document.createElement("div");

    var challengeNumber = scene.getNextChallengeNumber;

    var challenge = new Challenge(challengeNumber,'c' + selector.substring(2) + 'd' + challengeNumber);

    var textBlock = '';
    textBlock += '<div id="c' + selector.substring(2) + 'd' + challengeNumber + '" class="subaccordion desafio">';
    textBlock += '  <button class=\"col-8\" onclick=\"openDesafio(event, \'c' + selector.substring(2) + 'd' + challengeNumber + '\')\">Desafio ' + challengeNumber + '</button>';
    textBlock += '  <button class="delete col-4" onclick="deleteWarning(event, \'c' + selector.substring(2) + 'd' + challengeNumber + '\')"><span>&times;</span></button>';
    textBlock += '</div>';

    element.innerHTML = textBlock;
    
    challenge.setElement = element;

    scene.addChallenge(challenge);

    $('#' + selector).append(element);

    console.log(scene);

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

    journey.deleteSceneByName('c' + sceneNumber);

    console.log(sceneNumber);

    removeSceneCircleFromJourney(sceneNumber);

    var modal = document.getElementById('modal-delete-confirmation');
    modal.parentNode.removeChild(modal);
}

function deleteDesafio(evt, desafio) {
    var element = document.getElementById(desafio);
    var scene = journey.getSceneByName(desafio.split('d'));
    element.parentNode.removeChild(element);

    var modal = document.getElementById('modal-delete-confirmation');
    modal.parentNode.removeChild(modal);
}

$("#file-input").change(function(){
	var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
       $('#box-jornada').css('background-image', 'url("' + reader.result + '")');
       $('#box-jornada').css('background-size', 'cover');
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
    }
});

$('#btn-backgroud').on('click', function() {
    $('#file-input').trigger('click');
});

function closeModal(modalName){
    var modal = document.getElementById(modalName);
    modal.style.display = "none";
}

function login_function(){
   document.getElementById("modal-login").style.display = "block";
}

function register_function(){
   document.getElementById("modal-register").style.display = "block";
}

function selectedTool(evt) {
    // Declare all variables
    var i, links;

    // Get all elements with class="tablinks" and remove the class "active"
    links = document.getElementsByClassName("tool-bar-item");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" act", "");
    }

    tool = evt.currentTarget.parentNode.parentNode.getAttribute('id');

    evt.currentTarget.parentNode.parentNode.className += " act";
}
