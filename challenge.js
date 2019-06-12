class Challenge {

    constructor(id, name){
        this.id =  id;
        this.name = name;
        //Elemento do menu de cenas lateral no html
        this.element = "";
        //Conteudo do desafio em módulos
        
        
    }

    get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }

    get getChallengNumber(){
        return this.challengeNumber;
    }

     get getElement(){
        return this.element;
    }

    set setElement(element){
        this.element = element;
    }
}