var homepage = document.getElementById('homepage');
var questions = document.getElementById('questions');
var title = document.getElementById('question');
var title2 = document.getElementById('title2');
var statement = document.getElementById('statement');
var answers = [];
var questionCount = 0;
var extraImportantSec = document.getElementById('extraImportantSec');


function start() {
	// voegt class toe aan homepage
	homepage.classList.add("hidden");
	questions.classList.remove("hidden");
	extraImportantSec.classList.add("hidden");
	setFirstQuestion();
}
	// Laat eerste vraag en statement zien
function setFirstQuestion() {
	var subject = subjects[questionCount];
	title.innerHTML = subject.title;
	statement.innerHTML = subject.statement;
}

function saveAnswer(event){
	var id = event.target.id;
	answers.push(id);
}

function setNextQuestion(){
	if (questionCount + 1 == subjects.length) {
		extraImportant();
		return;
	}
	questionCount ++;
	var subject = subjects[questionCount];
	title.innerHTML = subject.title;
	statement.innerHTML = subject.statement;
		saveAnswer(event);
}

function setPreviousQuestion(){
	if (questionCount == 0) {
		homepage.classList.remove("hidden");
	questions.classList.add("hidden");
		return;
	}
	questionCount --;

	var subject = subjects[questionCount];
	title.innerHTML = subject.title;
	statement.innerHTML = subject.statement;
	answers.pop();
}
function extraImportant(){
	questions.classList.add("hidden");
	extraImportantSec.classList.remove("hidden");
	title2.innerHTML = "Zijn er onderwerpen die u extra belangrijk vind?";
	h5.innerHTML = "Aangevinkte stellingen tellen extra mee bij het berekenen van het resulaat.";
	subjects.forEach(function(subject){
		createOpinion(subject);
	});

	// function(subject){
	// 	var li = document.createElement("li");
	// }
}