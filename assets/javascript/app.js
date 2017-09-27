
//$("#resume").on("click", run);

// function populate(){
// 	if(quiz.hasEnded()){
// 		//showScore();
// 	}
// 	else{
// 		//show question
// 		var element = document.getElementById("question");
// 		element.innerHTML = quiz.getQuestionIndex().text;
// 		console.log("working");

// 		//show choices
// 		var choices = quiz.getQuestionIndex().choices;
// 		for(var i=0; i<choices.length; i++){
// 			var element = document.getElementById("choices" + i );
// 			element.innerHTML = choices[i];
// 			guess("btn" + i, choices[i]);
// 		}

// 		showProgress();
// 	}


// };


function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick=function(){
		quiz.guess(guess);
		populate();
	}
};

function showProgress(){
	var currentQuestion = quiz.getQuestionIndex + 1;
	var element = document.getElementById("progres");
	element.innerHTML = "Question " + currentQuestion + "of" + qiuz.questions.length;
}



function showScore(){
	var gameOver = "<h1> Results</h1>";
		gameOver += "<h2 id='score'>Your score: "+ quiz.score +" </h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOver;
}


var questions = [
	["Chicago is referred to as...?", ["The City that Never Sleeps", "The Windy City", "The City of Angels", "The Mini Apple"], "The Windy City"],
	["The current estimated population of Chciago is...?", ["A", "B", "C", "D"], "D"],
	["I miss everything about Chicago, except...? - Gary Cole", ["the traffic", "hotdogs and beer", "the noise", "January and February"], "January and February"],
];

$('#start').on('click', function(){
	$(".jumbotron").css("display", "none");
	$(".layout").css("display", "block");
})

// var quiz = new Quiz(questions);

// populate();