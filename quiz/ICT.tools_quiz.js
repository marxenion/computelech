var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "The anti static wrist strap _________ the computer equipment when grounded to a computer chassis.",
		"options" : [
			{"a": "Protects", 
			 "b":"Corrects", 
			 "c":"Perform", 
			 "d":"Safety"}
			],
		"answer":"Protects",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Electronic cutter belongs to the family of pliers and ________.",
		"options" : [
			{"a": "ESD tools", 
			 "b":"Cleaning tools", 
			 "c":"Diagnostic tools",
			 "d":"Hand tools"}
			],
		"answer":"Hand tools",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "Screwdriver is a hand held tool, commonly used for inserting and removing of _____________.",
		"options" : [
			{"a": "Hard drive", 
			 "b":"Wire", 
			 "c":"Screw",
			 "d":"Cable"}
			],
		"answer":"Screw",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Tweezers are used to manipulate _____________ parts.",
		"options" : [
			{"a": "Small parts", 
			 "b":"Screw",
			 "c":"Cable",
			 "d":"Wires"}
			],
		"answer":"Small parts",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "Batteries contains rare earth metals that can be harmful to the ____________.",
		"options" : [
			{"a": "Computer", 
			 "b":"Environment",
			 "c":"Metal",
			 "d":"Tools",
			}
			],
		"answer":"Environment",
		"score":0,
		"status": ""
	},]
}

var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
					  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
						quiz.JS[this.currentque].options[0][key] +
						"</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}	
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
	}
}

var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		 
	});

	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});	



