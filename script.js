
window.onload = function() { 

var correctAnswer = document.getElementById('correct-answer');
var totalAnswer = document.getElementById('total-answer');
var question = document.getElementById('questionText');
var questionId = document.getElementById('question-id');
var category = document.getElementById('category');
var btn = document.getElementById('skip-btn');
var result = document.getElementById('result-letters');
var answer = document.getElementById('letters');
var successMessage = document.getElementById('success-message');
var errorMessage = document.getElementById('error-message');
var trueAnswerCounter = 0;
var allAnswerCounter = 0;

getData();

function getData() {
//get data from server
const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        let answerGet = myObj[0].answer.split('').sort(() => 0.5 - Math.random());

		question.innerHTML = myObj[0].question;
		questionId.innerHTML = myObj[0].id;
		category.innerHTML = myObj[0].category.title;
		console.log(myObj[0].answer);

		// add buttons
		answerGet.map (function (i) {
			let newBtnAnswer = document.createElement('button');
			newBtnAnswer.innerHTML = i;
			answer.appendChild(newBtnAnswer);
		});


answer.onclick = function() {
		var target = event.target;
		if (target.tagName == 'BUTTON') {
			result.appendChild(target);
			check();
		}
	};

result.onclick = function() {
		var target = event.target;
		if (target.tagName == 'BUTTON') {
			answer.appendChild(target);
		}
	};

function check() {
		//check if answer is correc 
		let element = [];
		let newAnswer = [];
		element = result.childNodes;
		if (!answer.firstChild) {
			
			element.forEach (function(i) {
				newAnswer += i.innerHTML;
			});
	
			if (newAnswer == myObj[0].answer) {
				successMessage.style.display = 'block';
				trueAnswerCounter++;
				correctAnswer.innerHTML = trueAnswerCounter;
			}
			else {
				errorMessage.style.display = 'block';
				}
			}
		};

    }
};

xmlhttp.open('GET', 'https://jservice.io/api/random', true);
xmlhttp.send();

}

btn.onclick = function() {
	allAnswerCounter++;
	totalAnswer.innerHTML = allAnswerCounter;
	result.innerHTML = "";
	answer.innerHTML = "";
	successMessage.style.display = "none";
	errorMessage.style.display = "none";
	getData();
	
	};
};

