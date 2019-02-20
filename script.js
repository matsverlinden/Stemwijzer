var homepage = document.getElementById('homepage');
var questions = document.getElementById('questions');
var title = document.getElementById('question');
var statement = document.getElementById('statement');
var answers = [];
var questionCount = 0;

function start() {
	// voegt class toe aan homepage
	homepage.classList.add("hidden");
	questions.classList.remove("hidden");
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