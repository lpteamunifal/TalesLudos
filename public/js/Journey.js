class Journey {

    constructor(name, width, height){
        this.name = name;
        this.sceneNumber = 0;
        this.scenes = [];
        this.width = width;
        this.height = height;
    }

    get getWidth(){
        return this.width;
    }

    set setWidth(width){
        this.width = width;
    }

    get getHeight(){
        return this.height;
    }

    set setHeight(height){
        this.height = height;
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

    getSceneById(id){
        for(var i = 0; i < this.scenes.length; i++){
            if(this.scenes[i].getId == id){
                return this.scenes[i];
            }
        }
        return null;
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
                var scene = this.scenes[i];
                var connections = scene.getNextScenes;
                connections.forEach(function(conn){
                    var arrow = conn.getKonvaArrow;
                    arrow.destroy();
                    conn = null;
                });
                connections = [];
                connections = scene.getPreviousScenes;
                connections.forEach(function(conn){
                    var arrow = conn.getKonvaArrow;
                    arrow.destroy();
                    conn = null;
                });
                connections = [];
                scene = null;
                return true;
            }
        }
        return false;
    }

}