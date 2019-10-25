class Challenge {

    constructor(id, name) {
    	this.id =  id;
        this.name = name;
        //Elemento do menu de cenas lateral no html
        this.element = "";
		this.plugin = "p0";
		this.data = {}
    }
	
	get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }
}