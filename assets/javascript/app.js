
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

// functon questionMatch
// document.getElementById("btn0").innerHTML = answersA["Question A"]; 
// document.getElementById("btn1").innerHTML = answersA["Question A"]; 
// document.getElementById("btn2").innerHTML = answersA["Question A"]; 
// document.getElementById("btn3").innerHTML = answersA["Question A"]; 
//********************************* Start Button ******************************************* //
$('#startBtn').on('click', function(){
	$(".jumbotron").css("display", "none");
	$(".layout").css("display", "block");
})

//********************************* Questions Placement *********************************** //
var questions= ["Chicago is an Indian word from which the name of the city is derived. What does the word mean?","A section of which Chicago Street is known as 'the magnificent mile?'", "What does that famous 'W' flag mean?","Chicago is referred to as...?","When was the Great Chicago Fire?"];

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

//********************************* Answers Placement *************************************** //
var answersA= ["The name of a Potawatomi Indian chief", "City by the lake", "Wild leek, or skunk cabbage","Marshy place"];

function answerFillA(answersA) {
document.getElementById("btn0").innerHTML = answersA[0]; 
document.getElementById("btn1").innerHTML = answersA[1]; 
document.getElementById("btn2").innerHTML = answersA[2]; 
document.getElementById("btn3").innerHTML = answersA[3]; 
}

var answersB= ["Randolph Street", "Michigan Avenue", "State Street","Wabash Avenue"];

function answerFillB(answersB) {
document.getElementById("btn0").innerHTML = answersB[0]; 
document.getElementById("btn1").innerHTML = answersB[1]; 
document.getElementById("btn2").innerHTML = answersB[2]; 
document.getElementById("btn3").innerHTML = answersB[3]; 
}

var answersC= ["The name of a Potawatomi Indian chief", "City by the lake", "Wild leek, or skunk cabbage","Marshy place"];

function answerFillC(answersC) {
document.getElementById("btn0").innerHTML = answersC[0]; 
document.getElementById("btn1").innerHTML = answersC[1]; 
document.getElementById("btn2").innerHTML = answersC[2]; 
document.getElementById("btn3").innerHTML = answersC[3]; 
}

var answersD= ["The name of a Potawatomi Indian chief", "City by the lake", "Wild leek, or skunk cabbage","Marshy place"];

function answerFillD(answersD) {
document.getElementById("btn0").innerHTML = answersD[0]; 
document.getElementById("btn1").innerHTML = answersD[1]; 
document.getElementById("btn2").innerHTML = answersD[2]; 
document.getElementById("btn3").innerHTML = answersD[3]; 
}

var answersE= ["The name of a Potawatomi Indian chief", "City by the lake", "Wild leek, or skunk cabbage","Marshy place"];

function answerFillE(answersE) {
document.getElementById("btn0").innerHTML = answersE[0]; 
document.getElementById("btn1").innerHTML = answersE[1]; 
document.getElementById("btn2").innerHTML = answersE[2]; 
document.getElementById("btn3").innerHTML = answersE[3]; 
}
//*********************** Matching Q & A ***************************************************** //
function matchQA(){
    if(questions === "Chicago is an Indian word from which the name of the city is derived. What does the word mean?"){
        answerFillA();
    }
    else if(questions === "A section of which Chicago Street is known as 'the magnificent mile?'"){
        answerFillB();

    }
}

matchQA();



