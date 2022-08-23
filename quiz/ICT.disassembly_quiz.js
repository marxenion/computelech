var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Disassembling is the process of breaking down a device into ________ parts.",
		"options" : [
			{"a": "separate", 
			 "b":"delete", 
			 "c":"remove", 
			 "d":"dispatch"}
			],
		"answer":"separate",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "The CPU, RAM, and expansion cards are directly attached to the _________.",
		"options" : [
			{"a": "power supply", 
			 "b":"computer", 
			 "c":"motherboard",
			 "d":"chassis"}
			],
		"answer":"motherboard",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "The power supply is connected to the motherboard by a 20 pin connector and _____ pin connector.",
		"options" : [
			{"a": "8 pin connector", 
			 "b":"6 pin connector", 
			 "c":"7 pin connector",
			 "d":"4 pin connector"}
			],
		"answer":"4 pin connector",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Power cables are used to distribute electricity from the ______ supply to the motherboard and other components.",
		"options" : [
			{"a": "Power supply", 
			 "b":"UPS (uninterrupted power supply)",
			 "c":"motherboard",
			 "d":"hard drive"
			}
			],
		"answer":"Power supply",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "Which is one of the following tools would be helpful in building a computer?",
		"options" : [
			{"a": "Hammer", 
			 "b":"Allen wrench",
			 "c":"Screwdriver",
			 "d":"Duct tape",
			}
			],
		"answer":"Screwdriver",
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



