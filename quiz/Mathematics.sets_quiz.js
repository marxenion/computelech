var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "In Mathematics, it is defined as a collection of things grouped together with a certain property in common.",
		"options" : [
			{"a": "Groupings", 
			 "b": "Objects", 
			 "c": "Sets", 
			 "d": "Elements"}
			],
		"answer":"Sets",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Which of the following is a set of the factors of 30?",
		"options" : [
			{"a": "{2, 4, 6, 15, 30}", 
			 "b":"{1, 3, 5, 30, 2, 6}", 
			 "c":"{2, 1, 3, 30, 5, 6, 10, 15}",
			 "d":"{1, 2, 3, 4,  5, 6, 10, 15, 30}"}
			],
		"answer":"{2, 1, 3, 30, 5, 6, 10, 15}",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "Which of the following is a set of even numbers",
		"options" : [
			{"a": "{2, 6, 4, 12, 36, 50}", 
			 "b":"{12, 24, 48, 11, 20}", 
			 "c":"{1, 2, 3, 4, 5, 6, 7}",
			 "d":"{2, 4, 6, 8, 10, 19}"}
			],
		"answer":"{2, 6, 4, 12, 36, 50}",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Which of the following is a subset of B if B = {21.3, 56.1, 3.14, 86, 5, 10}",
		"options" : [
			{"a":"C = {5, 10}", 
			 "b":"A = {12.3, 16.1, 10, 5, 14.3}",
			 "c":"D = {2, 4, 6, 8, 10}",
			 "d":"E = {1, 3, 5, 7, 9}"}
			],
		"answer":"C = {5, 10}",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "If A = {1, 3, 5, 7, 9} and B = {1, 3, 5, 7, 9, 11, 12}, then which of the following can you conclude?",
		"options" : [
			{"a": "A is not a subset of B", 
			 "b":"B is a subset of A",
			 "c":"A is a subset of B",
			 "d":"The union of A and B is a disjoint set",
			}
			],
		"answer":"A is a subset of B",
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



