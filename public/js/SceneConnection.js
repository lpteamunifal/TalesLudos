class SceneConnection{
	constructor(from, to, gradeMin, gradeMax, konvaArrow){
		this.from = from;
		this.to = to;
		this.gradeMin = gradeMin;
		this.gradeMax = gradeMax;
		this.konvaArrow = konvaArrow;
		this.modal = null;
	}

	get getFrom(){
		return this.from;
	}

	set setFrom(from){
		this.from = from;
	}

	get getTo(){
		return this.to;
	}

	set setTo(to){
		this.to = to;
	}

	get getGradeMin(){
		return this.gradeMin;
	}

	set setGradeMin(gradeMin){
		this.gradeMin = gradeMin;
	}

	get getGradeMax(){
		return this.gradeMax;
	}

	set setGradeMax(gradeMax){
		this.gradeMax = gradeMax;
	}

	get getKonvaArrow(){
		return this.konvaArrow;
	}

	set setKonvaArrow(konvaArrow){
		this.konvaArrow = konvaArrow;
	}


	openEditableModal(){
		this.modal = "";

		this.modal = "";
        
        this.modal +=  "<div id='arrow_modal' class='modal' style='display:block;'>";
        this.modal +=  "    <div class='modal-content'>";
        this.modal +=  "        <div class= 'modal-header'>";
        this.modal +=  "            <button class='delete' onclick=document.getElementById('arrow_modal').remove();><span>&times;</span></button>";
        this.modal +=  "        </div>";
        this.modal +=  "        <div class='modal-body'>";
        this.modal +=  "             Acertos mínimos: <input type='text'>";
        this.modal +=  "             Acertos máximos: <input type='text'>";
        this.modal +=  "        </div>";
        this.modal +=  "    </div>";
        this.modal +=  "</div>";

        var body = document.body;
        var children = document.createElement('div');

        children.innerHTML = this.modal;
        body.appendChild(children);
	}
}