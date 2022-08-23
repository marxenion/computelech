var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "If A = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19} and B = {2, 4, 6, 8, 9, 12, 14, 16, 18, 20}, what is their intersection?",
		"options" : [
			{"a": "Nothing, it's a disjoint set", 
			 "b": "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}", 
			 "c": "{2, 4, 6, 8, 10, 12, 14, 16, 18, 20}", 
			 "d": "{9}"}
			],
		"answer":"{9}",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "What is the union of these two sets, C = {2, 1, 3, 5, 6, 10, 15} and D = {1, 2, 3, 5, 6, 10, 15, 30}?",
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
		"question" : "The difference of two sets, E = {1, 2, 3, 4, 5, 6, 7, 8, 9} and {1, 2, 3, 5, 6, 8, 9}",
		"options" : [
			{"a": "{7}", 
			 "b":"{2, 4, 6, 8}", 
			 "c":"{1, 3, 5, 7, 9}",
			 "d":"{3, 6, 9}"}
			],
		"answer":"{7}",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Which of the following is a subset of A if A = {12, 23, 34, 45, 56, 67, 78, 89}",
		"options" : [
			{"a":"C = {21, 32, 43, 54, 65, 76}", 
			 "b":"F = {13, 35, 57, 79}",
			 "c":"D = {35, 68, 21}",
			 "d":"E = {56, 34, 45}"}
			],
		"answer":"E = {56, 34, 45}",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "Let the universal set be U = { a, b, c, d, e, f}. If A = { a, b, d, f} then what is the complement of A?",
		"options" : [
			{"a": "{c, e}", 
			 "b":"{b, c, d}",
			 "c":"{a, b, c}",
			 "d":"{e, f}",
			}
			],
		"answer":"{c, e}",
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



