class Scene {

    constructor(id, name, konvaObject) {
    	this.id =  id;
        this.name = name;
        //Elemento do menu de cenas lateral no html
        this.element = "";
        //Conteudo da cena em html
        this.container = "";
        this.konvaObject = konvaObject;
        this.nextScene = null;
        this.challengeNumber = 0;
        this.challenge = [];
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

    get getElement(){
        return this.element;
    }

    set setElement(element){
        this.element = element;
    }
    
    get getContainer(){
    	return this.container;
    }
    
    set setContainer(container){
    	this.container = container;
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

    getChallengeByID(id){
        return this.challenge[id];
    }
}
