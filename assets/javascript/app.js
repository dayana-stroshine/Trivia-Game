
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
//********************************* Start Button ******************************************* //
$('#startBtn').on('click', function(){
	$(".jumbotron").css("display", "none");
	$(".layout").css("display", "block");
})

//********************************* Questions Array ******************************************* //
var questions = ["Question A", "Question B", "Question C","Question D","Question E"];

function shuffleArray(questions) {
    for (var i = questions.length -1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
 }
    return questions;
    
}

shuffleArray(questions);
document.getElementById("question").innerHTML = questions[0];

//********************************* Answers Array ******************************************* //
var answersA = ["Answer A", "Answer B", "Answer C","Answer D"];

function showAnswer(answers) {
    if(questions[0] === questions[1])
    return answersA;
    
}

showAnswer(answersA);
document.getElementById("btn0").innerHTML = answersA[0];
document.getElementById("btn1").innerHTML = answersA[1];
document.getElementById("btn2").innerHTML = answersA[2];
document.getElementById("btn3").innerHTML = answersA[3];

