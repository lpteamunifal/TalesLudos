class SceneConnection{
	constructor(from, to, gradeMin, gradeMax, konvaArrow){
		this.from = from;
		this.to = to;
		this.gradeMin = gradeMin;
		this.gradeMax = gradeMax;
		this.konvaArrow = konvaArrow;
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
}