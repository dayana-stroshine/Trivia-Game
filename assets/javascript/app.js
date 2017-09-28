
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


// function guess(id, guess){
// 	var button = document.getElementById(id);
// 	button.onclick=function(){
// 		quiz.guess(guess);
// 		populate();
// 	}
// };

// function showProgress(){
// 	var currentQuestion = quiz.getQuestionIndex + 1;
// 	var element = document.getElementById("progres");
// 	element.innerHTML = "Question " + currentQuestion + "of" + qiuz.questions.length;
// }



// function showScore(){
// 	var gameOver = "<h1> Results</h1>";
// 		gameOver += "<h2 id='score'>Your score: "+ quiz.score +" </h2>";
// 	var element = document.getElementById("quiz");
// 	element.innerHTML = gameOver;
// }


// var quiz = new Quiz(questions);

// populate();

$('#start').on('click', function(){
	$(".jumbotron").css("display", "none");
	$(".layout").css("display", "block");
})


var questions = ["Chicago is referred to as...?", "This is seen all over Chicago, what does that famous 'W' flag mean?", "C","D"];

	function shuffleArray(questions) {
    for (var i = questions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
 }
    return questions;
    
}

shuffleArray(questions);
document.getElementById("question").innerHTML = questions[0];
//     }
//     return questions;
//     $("#question").html("<h2>" + questions + "</h2>");
// }
// 	// 	//var element = document.getElementById("question");
// 	// 	//element.innerHTML = questions().text;
// 	// 	$("#question").html("<h2>" + questions + "</h2>");
// 	//     console.log("working");
// 	// }
// 			populate();

