class DataClosed {
	constructor(data) {
		this.plugin = "closedquestion";
        this.question = data.question;
		this.answers = data.answers;
		this.correct = data.correct;
    }

	SaveData(){
		var question = document.getElementById("closed-question");
		this.question = question.value;

		var options = document.getElementById("options");
		var labels = options.getElementsByTagName("label");
		for(var i = 0; i < options.length; i++){
			this.answers.push(options.value);
		}
		console.log(labels);
	}

	LoadData(){
		var question = document.getElementById("closed-question");
		question.innerHTML = this.question;

		document.getElementById("options").innerHTML = "";

		for(var i = 0; i < this.answers.length; i++){
			var text = "<div style=\"width: inherit\">";
			text += "<label>" + this.answers[i] + "</label>";
			text += "<br>";
			text += "</div>";
			$('#options').append(text);
		}

		var options = document.getElementById("options");
		var inputs = options.getElementsByTagName("input");
		for(var i = 0; i < inputs.length; i++){
			inputs[i].type = "radio";
		}
	}
}

function closedquestion(data){
	return new DataClosed(data);
}


function getPoints() {
    return 10;
}