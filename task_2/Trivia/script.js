
var QuestionText = document.getElementById('questionText');
var answerGet = document.getElementById('answerGet');
var category = document.getElementById('questionCategory');
var questionId = document.getElementById('questionTitle');
var SkipBtn = document.getElementById('btn');


function getData() {
var myObj;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        console.log(myObj);
		QuestionText.innerHTML = myObj[0].question;
        answerGet.innerHTML = myObj[0].answer.split('');
        category.innerHTML = myObj[0].category.title;
        questionId.innerHTML = myObj[0].id
        
        /*    
        console.log(QuestionText);
        console.log(answerGet);
        console.log(category);
        console.log(questionId);
        */
    	  
	}
};
xmlhttp.open("GET", "https://jservice.io/api/random", true);
xmlhttp.send();

}

//getData();

SkipBtn.onclick = function() {
    getData();
}




    	
    	
    
    
