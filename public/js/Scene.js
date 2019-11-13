class Scene {

    constructor(id, name, konvaObject) {
    	this.id =  id;
        this.name = name;
        //Elemento do menu de cenas lateral no html
        this.element = "";
        //Conteudo da cena em html
        this.content = "";
        this.konvaObject = konvaObject;
        this.x = konvaObject.x();
        this.y = konvaObject.y();
        this.circle = konvaObject.getChildren(function(node){return node.getClassName() === 'Circle';});
        this.previousScenes = [];
        this.nextScenes = [];
        this.challengeNumber = 0;
        this.challenge = [];
        this.modal = '';
    }
    
    get getId(){
    	return this.id;
    }
    
    set setId(id){
    	this.id = id;
    }

    get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }

    get getX(){
        return this.x;
    }

    set setX(x){
        this.x = x;
    }

    get getY(){
        return this.y;
    }

    set setY(y){
        this.y = y;
    }

    get getCircle(){
        return this.circle;
    }

    set setCircle(circle){
        this.circle = circle;
    }

    get getElement(){
        return this.element;
    }

    set setElement(element){
        this.element = element;
    }
    
    get getContent(){
    	return this.content;
    }
    
    set setContent(content){
    	this.content = content;
    }
    
    get getKonvaObject(){
    	return this.konvaObject;
    }
    
    set setKonvaObject(konvaObject){
    	this.konvaObject = konvaObject;
    }

    get getChallengeNumber(){
        return this.challengeNumber;
    }

    set setChallengeNumber(challengeNumber){
        this.challengeNumber = challengeNumber;
    }

    get getChallenge(){
        return this.challenge;
    }

    set setChallenge(challenge){
        this.challenge = challenge;
    }

    get getNextChallengeNumber(){
        this.challengeNumber++;
        return this.challengeNumber;
    }

    get getPreviousScenes(){
        return this.previousScenes;
    }

    get getNextScenes(){
        return this.nextScenes;
    }

    addNextScene(next){
        this.nextScenes.push(next);
    }

    addPreviousScene(next){
        this.previousScenes.push(next);
    }

    addChallenge(challenge){
        this.challenge.push(challenge);
    }
    
    getChallengeByName(name){
        for(var i = 0; i < this.challenge.length; i++){
            if(this.challenge[i].getName == name){
                return this.challenge[i];
            }
        }
        return null;
    }

    getChallengeByID(id){
        return this.challenge[id];
    }

    openSceneModal(){
        this.modal = "";
        
        this.modal +=  "<div id='scene_" + this.id + "_modal' class='modal' style='display:block;'>";
        this.modal +=  "    <div class='modal-content'>";
        this.modal +=  "        <div class= 'modal-header'>";
        this.modal +=  "            <button class='delete' onclick=document.getElementById('scene_" + this.id + "_modal').remove();><span>&times;</span></button>";
        this.modal +=  "        </div>";
        this.modal +=  "        <div class='modal-body'>";
        this.modal +=               this.content;
        this.modal +=  "        </div>";
        this.modal +=  "    </div>";
        this.modal +=  "</div>";

        var body = document.body;
        var children = document.createElement('div');

        children.innerHTML = this.modal
        body.appendChild(children);

        this.modal = "";
    }
}

function OpenScene(scene){
	document.getElementsByClassName('ql-editor')[0].innerHTML = scene.content;
	console.log(scene.content);
}
