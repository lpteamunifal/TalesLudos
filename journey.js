class Journey {

    constructor(name){
        this.name = name;
        this.sceneNumber = 0;
        this.scenes = [];
    }

    get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }

    get getSceneNumber(){
        return this.sceneNumber;
    }

    set setSceneNumber(sceneNumber){
        this.sceneNumber = sceneNumber;
    }
    
    get getScenes(){
        return this.scenes;
    }

    set setScenes(scene){
        this.scenes = scenes;
    }
    
    getSceneById(id)
    {
    	return this.scenes[id];
    }

    getNextSceneNumber(){
        this.sceneNumber++;
        return this.sceneNumber;
    }
    
    addScene(scene){
    	this.scenes.push(scene);
    }

    getSceneByName(name){
        for(var i = 0; i < this.scenes.length; i++){
            if(this.scenes[i].getName == name){
                return this.scenes[i];
            }
        }
        return null;
    }

    deleteSceneByName(name){
        for(var i = 0; i < this.scenes.length; i++){
            if(this.scenes[i].getName == name){
                this.scenes.splice(i, 1);
                return true;
            }
        }
        return false;
    }

}