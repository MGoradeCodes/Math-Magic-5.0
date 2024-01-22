function checkAddRightAnswer(random1, random2, value){
           //console.log("random1 = ",random1,"random2 = ",random2,"value = ",value);
			buttons = document.getElementsByName("options");
			buttons.forEach(item=>{item.disabled=true;console.log(item);});

    if(value == (random1+random2)){
		document.getElementById("correct").play();
        //document.getElementById("img").innerHTML = '<img src="images/correct.png"/>';
		document.getElementById("correct_img").style.visibility='visible';
		
        /*setInterval(function(){newQuestion();},5000);*/
		myTimer = setTimeout(function(){
			newAddQuestion();
		},2000);
		updateScore(flag=1);
	}
    else{
		document.getElementById("wrong").play();
        document.getElementById("wrong_img").style.visibility='visible';
		
		
		setTimeout(function(){
			
			sum	= random1+random2;		
			//console.log("Hello ", document.getElementsByName("options")[0].tagName);
			document.getElementsByName("options").forEach(highlightCorrect);
			function highlightCorrect(item,index){
				//console.log("Success ",item.value);
				if(sum == item.value){
					item.style.backgroundColor = "Orange";
					item.style.backgroundColor = "Yellow";
				}
			}
		},1000);

		myTimer = setTimeout(function(){newAddQuestion();},4000);
		updateScore(flag=0);		
    }   
}

function checkSubRightAnswer(random1, random2, value){
           //console.log("random1 = ",random1,"random2 = ",random2,"value = ",value);
			buttons = document.getElementsByName("options");
			buttons.forEach(item=>{item.disabled=true;console.log(item);});

    if(value == Math.abs(random1-random2)){
		document.getElementById("correct").play();
        document.getElementById("correct_img").style.visibility='visible';
		
        /*setInterval(function(){newQuestion();},5000);*/
		myTimer = setTimeout(function(){
			newSubQuestion();
		},2000);
		updateScore(flag=1);
	}
    else{
		document.getElementById("wrong").play();
        document.getElementById("wrong_img").style.visibility='visible';
		
		
		setTimeout(function(){
			
			diff = Math.abs(random1-random2);		
			//console.log("Hello ", document.getElementsByName("options")[0].tagName);
			document.getElementsByName("options").forEach(function highlightCorrect(item,index){
				//console.log("Success ",item.value);
				if(diff == item.value){
					item.style.backgroundColor = "Orange";
					item.style.backgroundColor = "Yellow";
				}
			});
		},1000);

		myTimer = setTimeout(function(){newSubQuestion();},4000);
		updateScore(flag=0);		
    }   
}

/*newQuestion();*/

var table_array = [11,12,13,14,15,16,17,18,19,20];
table_array = shuffle(table_array);

function askTableQuestions(){
	var table_of = table_array.pop();
	var len_array = table_array.length;
	console.log("table_array length = ",len_array);
	document.getElementById("correct_img").style.visibility='hidden';
	document.getElementById("wrong_img").style.visibility='hidden';
	document.getElementById("correct_rimg").style.visibility='hidden';
	document.getElementById("wrong_rimg").style.visibility='hidden';
	
	console.log("I am called in askTableQuestions");  
	playerName = document.getElementById("playerName").innerHTML;
	
	//var table_of=2;
	document.getElementById("questionArea").innerHTML = "";
	document.getElementById("optionArea").innerHTML = "";
	
	tableQuestion = "<h3>Table of " + table_of +"</h3><table id='myTable'>";
	
	for(i=0;i<10;i++){
		
	tableQuestion += "<tr><td>" +  table_of +  " X " + (i+1) + " = " + "</td><td><input type=text autocomplete='off' id = '" + (i+1) + "' size=2></td><td></td></tr>";
	
	}
	
	tableQuestion +="</table>";
	document.getElementById("questionArea").innerHTML = tableQuestion;
	
	document.getElementById("optionArea").innerHTML += "<input type='button' id = 'tables_submit' class='tables' value = 'submit' onclick= checktablesRightAnswer(" +table_of + "," + len_array +  ")>";	
	document.getElementById("1").focus();
	document.getElementById("tables_submit").disabled = false;
}

function checktablesRightAnswer(table_of,len_array){
	document.getElementById("tables_submit").disabled = true;
	answer_array = [];
	for(i=0;i<10;i++){
		answer_array.push(document.getElementById(i+1).value);
	}
	correct_count = 0;
	all_correct_flag=1;
	answer_array.forEach(function(item,index){
		if(item==(index+1)*table_of){
			console.log('val = ',item,index+1);
			document.getElementById(index+1).style.backgroundColor = 'lightgreen';
			correct_count+=1
			}
			else{
				document.getElementById(index+1).style.backgroundColor = 'red';
				document.getElementById('myTable').rows[index].cells[2].innerHTML = (index+1)*table_of;
				all_correct_flag=0;
			}
				});
	if(all_correct_flag == 1){
		document.getElementById("correct").play();
		document.getElementById("correct_rimg").style.visibility='visible';
		
	}
	else if(all_correct_flag == 0){
		document.getElementById("wrong").play();
		document.getElementById("wrong_rimg").style.visibility='visible';
	}		
	setTimeout(function(){
		
		updateTableScore(correct_count,len_array);
			
	},5000);
	
	
	
	
	console.log(answer_array);
}

function newAddQuestion(){
	document.getElementById("correct_img").style.visibility='hidden';
	document.getElementById("wrong_img").style.visibility='hidden';
	
	
	playerName = document.getElementById("playerName").innerHTML;
	var min=1; 
	var max=200;
		
		if(playerName == "Maithili"){
			max=200;
		}
	var random1 =Math.floor(Math.random() * (max - min)) + min; 
	var random2 =Math.floor(Math.random() * (max - min)) + min;
	var option1 =random1+random2;
	var option2 =Math.floor(Math.random() * (max - min)) + max; 
	var option3 =Math.floor(Math.random() * (2*max - min)) + min; 
	var option4 =Math.floor(Math.random() * (max - min)) + max; 

	while(option2==option1){
		var option2 =Math.floor(Math.random() * (max - min)) + min; 
	}
	while(option3==option1 || option3==option2){
		var option3 =Math.floor(Math.random() * (max - min)) + min; 
	}
	while(option4==option1 || option4==option2 || option4==option3){
		var option4 =Math.floor(Math.random() * (max - min)) + min; 
	}

	/*"How much is " + random1 + " + " random2*/
	//document.getElementById("questionArea").innerHTML = "<h1>How much is " + random1 + " + "  + random2 + " ?</h1>";
	document.getElementById("questionArea").innerHTML = "<h1>How much is " + random1 + " + "  + random2 + " ?</h1>" + 
	"<table id = 'question-table'><th></th><th>h</th><th>t</th><th>o</th>" + 
	"<tr><td></td><td><input type='text' maxlength='1' size='1'></td><td><input type='text' maxlength='1' size='1'></td><td></td></tr>"+
	"<tr>"+ "<td></td>" + 
	"<td>" + Math.floor(random1/100) + "</td><td>" +  Math.floor((random1-Math.floor(random1/100)*100)/10) + "</td><td>" + random1%10 +"</td></tr>"+
	"<tr>" + "<td> + </td>" + 
	"<td>" + Math.floor(random2/100) + "</td><td>" +  Math.floor((random2-Math.floor(random2/100)*100)/10) + "</td><td>" + random2%10 +"</td></tr>" + 
	"<tr><td></td><td><input type='text' maxlength='1' size='1'></td><td><input type='text' maxlength='1' size='1'></td><td><input type='text' maxlength='1' size='1'></td></tr>"
	"</table>+<br>+<br>";
	
	answerList = [option1,option2,option3,option4];
	newList = shuffle(answerList);
	optionString="<br><br>";
	newList.forEach(function(item){optionString += "<input type='button' class='options' value = " + item +" name =options onclick= checkAddRightAnswer(" + random1 + "," + random2 + "," + "value)>";});
	document.getElementById("optionArea").innerHTML = optionString;	
}

function newWordQuestion(){
	location.replace('loadQuestion.php');
}

function askQuestion(){
	document.getElementById("correct_img").style.visibility='hidden';
	document.getElementById("wrong_img").style.visibility='hidden';
	
	
	isMember = 1;
	//questionSet.push(randomQuestionId);
	//console.log("current questionSet = ",questionSet,questionSet.length,questionBank.length);
 	while(isMember==1){
		randomQuestionId = Math.floor(Math.random()*(questionBank.length));
		console.log("randomId = ",randomQuestionId);
		if(questionSet.indexOf(randomQuestionId)==-1){
			questionSet.push(randomQuestionId);
			break;
		}
	} 
	//randomQuestionId = 61;
	//console.log("question = ",questionBank.length,"randomId = ",randomQuestionId,questionBank[randomQuestionId]['question']);
	chosenQuestion = questionBank[randomQuestionId];
	document.getElementById("questionArea").innerHTML = "<h1>" + chosenQuestion['question'] + "</h1>";
	answerList = [chosenQuestion['option1'],chosenQuestion['option2'],chosenQuestion['option3'],chosenQuestion['option4']];
	newList = shuffle(answerList);
	optionString="";
	window.answer = chosenQuestion[chosenQuestion['answer']].toString()
	newList.forEach(function(item){optionString += "<input type='button' class='options' value = '" + item +"' name =options onclick= checkWordAnswer(value)>";});
	document.getElementById("optionArea").innerHTML = optionString;	
}

function AskNewCountryQuestion(){
	document.getElementById("correct_img").style.visibility='hidden';
	document.getElementById("wrong_img").style.visibility='hidden';
	
	
	isMember = 1;
	//questionSet.push(randomQuestionId);
	console.log("CountryBank.length = ",CountryBank.length);
 	while(isMember==1){
		randomQuestionId = Math.floor(Math.random()*(CountryBank.length));
		console.log("randomId = ",randomQuestionId);
		if(questionSet.length == CountryBank.length){
			document.getElementById("questionArea").innerHTML = "<h1>" + "Game Over !!! Choose Another Game to Play !!!" + "</h1>";
			break;
		}
		else if(questionSet.indexOf(randomQuestionId)==-1){
			questionSet.push(randomQuestionId);
			break;
		}
		
	} 
	//randomQuestionId = 61;
	//console.log("question = ",questionBank.length,"randomId = ",randomQuestionId,questionBank[randomQuestionId]['question']);
	chosenQuestion = CountryBank[randomQuestionId];
	document.getElementById("questionArea").innerHTML = "<h1>" + chosenQuestion['question'] + "</h1>";
	answerList = [chosenQuestion['option1'],chosenQuestion['option2'],chosenQuestion['option3'],chosenQuestion['option4']];
	newList = shuffle(answerList);
	optionString="";
	window.answer = chosenQuestion[chosenQuestion['answer']].toString()
	newList.forEach(function(item){optionString += "<input type='button' class='options' value = '" + item +"' name =options onclick= checkCountryCapitalAnswer(value)>";});
	document.getElementById("optionArea").innerHTML = optionString;	
}

function checkWordAnswer(value){
	 //console.log("random1 = ",random1,"random2 = ",random2,"value = ",value);
	 buttons = document.getElementsByName("options");
	 buttons.forEach(item=>{item.disabled=true;console.log(item);});
	 userChoice = value;
	 console.log("User chose", userChoice);
	if(value == window.answer){
		
 		document.getElementById("correct").play();
 		document.getElementById("correct_img").style.visibility='visible';
		

 		/*setInterval(function(){newQuestion();},5000);*/
 	myTimer = setTimeout(function(){
		askQuestion();
		updateScore(flag=1);
 		},2000);
	}
	else{
 		document.getElementById("wrong_img").style.visibility='visible';
 		document.getElementById("wrong").play();
		
 		setTimeout(function(){
	 
		rightAnswer	= window.answer;	
		console.log("right Answer = ",rightAnswer) 	;
	 	//console.log("Hello ", document.getElementsByName("options")[0].tagName);
	 	document.getElementsByName("options").forEach(function highlightCorrect(item,index){
		 	//console.log("Success ",item.value);
		 	if(rightAnswer == item.value){
			 	item.style.backgroundColor = "Orange";
			 	item.style.backgroundColor = "Yellow";
		 	}
	 	});
 		},1000);

		 myTimer = setTimeout(function(){
			 askQuestion();
			 updateScore(flag=0);},4000);
				
		}   

}

function checkCountryCapitalAnswer(value){
	//console.log("random1 = ",random1,"random2 = ",random2,"value = ",value);
	buttons = document.getElementsByName("options");
	buttons.forEach(item=>{item.disabled=true;console.log(item);});
	userChoice = value;
	console.log("User chose", userChoice);
   if(value == window.answer){
	   
		document.getElementById("correct").play();
		document.getElementById("correct_img").style.visibility='visible';
	   

		/*setInterval(function(){newQuestion();},5000);*/
	myTimer = setTimeout(function(){
	   AskNewCountryQuestion();
	   updateScore(flag=1);
		},2000);
   }
   else{
		document.getElementById("wrong_img").style.visibility='visible';
		document.getElementById("wrong").play();
	   
		setTimeout(function(){
	
	   rightAnswer	= window.answer;	
	   console.log("right Answer = ",rightAnswer) 	;
		//console.log("Hello ", document.getElementsByName("options")[0].tagName);
		document.getElementsByName("options").forEach(function highlightCorrect(item,index){
			//console.log("Success ",item.value);
			if(rightAnswer == item.value){
				item.style.backgroundColor = "Orange";
				item.style.backgroundColor = "Yellow";
			}
		});
		},1000);

		myTimer = setTimeout(function(){
			AskNewCountryQuestion();
			updateScore(flag=0);},4000);
			   
	   }   

}

function newSubQuestion(){
	document.getElementById("correct_img").style.visibility='hidden';
	document.getElementById("wrong_img").style.visibility='hidden';
	
	playerName = document.getElementById("playerName").innerHTML;
	var min=1; 
	var max=30;
		
		if(playerName == "Maithili"){
			max=30;
		}
	var random1 =Math.floor(Math.random() * (max - min)) + min; 
	var random2 =Math.floor(Math.random() * (max - min)) + min;
	
	var option1 =Math.abs(random1-random2);
	var option2 =Math.floor(Math.random() * (max - min)) + min; 
	var option3 =Math.floor(Math.random() * (max - min)) + min; 
	var option4 =Math.floor(Math.random() * (max - min)) + min; 

	while(option2==option1){
		var option2 =Math.floor(Math.random() * (max - min)) + min; 
	}
	while(option3==option1 || option3==option2){
		var option3 =Math.floor(Math.random() * (max - min)) + min; 
	}
	while(option4==option1 || option4==option2 || option4==option3){
		var option4 =Math.floor(Math.random() * (max - min)) + min; 
	}

	/*Prompt Question*/
	if(random1>=random2){
		document.getElementById("questionArea").innerHTML = "<h1>How much is " + random1 + " - "  + random2 + " ?</h1>";
	}
	else{
		document.getElementById("questionArea").innerHTML = "<h1>How much is " + random2 + " - "  + random1 + " ?</h1>";
	}
	answerList = [option1,option2,option3,option4];
	newList = shuffle(answerList);
	optionString="";
	newList.forEach(function(item){optionString += "<input type='button' class='options' value = " + item +" name =options onclick= checkSubRightAnswer(" + random1 + "," + random2 + "," + "value)>";});
	document.getElementById("optionArea").innerHTML = optionString;	
}


function askNumberWordQuestions(){
	document.getElementById("correct_img").style.visibility='hidden';
	document.getElementById("wrong_img").style.visibility='hidden';
	console.log("I am in ask Number Question");
	
	isMember = 1;
	//questionSet.push(randomQuestionId);
	//console.log("current questionSet = ",questionSet,questionSet.length,questionBank.length);
	numberData = data[0];
 	while(isMember==1){
		randomQuestionId = Math.floor(Math.random()*(100));
		console.log("randomId = ",randomQuestionId);
		if(questionSet.indexOf(randomQuestionId)==-1){
			console.log("I am in if block questionSet = ", questionSet);
			questionSet.push(randomQuestionId);
			break;
		}
	} 
	
	chosenNumber = data[0][1];
	document.getElementById("questionArea").innerHTML = "<h1>" + "Write the number "  + randomQuestionId + " in words" + "</h1>";
	
	optionString="";
	document.getElementById("optionArea").innerHTML = "<input type='text' id='response' ><br><br>";	
	
	document.getElementById("optionArea").innerHTML += "<input type='text' id='correct_Answer'><br><br>";	
	document.getElementById("optionArea").innerHTML += "<button id='myBtn' class='tables' onclick = checkNumbers(randomQuestionId)>Click Me !</button>";	
	document.getElementById("correct_Answer").style.visibility = 'hidden';
	document.getElementById("response").focus();
	input = document.getElementById("response");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
	
	
	
	//document.getElementById("optionArea").innerHTML = optionString; 
}

function checkNumbers(randomQuestionId){
	response=document.getElementById("response").value;
	console.log(" response = ",response,randomQuestionId,data[0][randomQuestionId]);
	response = response.trim().toLowerCase();
	if(response==data[0][randomQuestionId]){
		document.getElementById("correct_img").style.visibility='visible';
		document.getElementById("correct").play();
			
	myTimer=setTimeout(function(){
		askNumberWordQuestions();
		updateScore(flag=1);
			
	},3000);
	}
	else{
        document.getElementById("wrong_img").style.visibility='visible';
		document.getElementById("wrong").play();
		
		setTimeout(function(){
			document.getElementById("correct_Answer").value = data[0][randomQuestionId];
			document.getElementById("correct_Answer").style.backgroundColor = "Yellow";
			document.getElementById("correct_Answer").style.visibility = 'visible';
			/*sum	= random1+random2;		
			//console.log("Hello ", document.getElementsByName("options")[0].tagName);
			document.getElementsByName("options").forEach(highlightCorrect);
			function highlightCorrect(item,index){
				//console.log("Success ",item.value);
				if(sum == item.value){
					item.style.backgroundColor = "Orange";
					item.style.backgroundColor = "Yellow";
				}
			}*/
		},100);

		myTimer = setTimeout(function(){askNumberWordQuestions();
		updateScore(flag=0);
		},4000);
		
	
	}
		
}
function shuffle(my_array){
	
	console.log("original_array = ", my_array);
	//currentIndex = Math.floor(Math.random() * my_array.length); 

	sub_array = my_array;
	//console.log("my_array_length",my_array.length);
	shuffled_array = [];

	for(i=0;i<my_array.length;i++){
		/****  Assign Value to shuffled array ****/
		shuffled_array[i] = sub_array[Math.floor(Math.random() * sub_array.length)];
		//console.log(shuffled_array[i]);
		//sub_array = build_subarray(sub_array,shuffled_array[i]);
		new_array=[];
		sub_array.forEach(function(item){if(item!=shuffled_array[i]){new_array.push(item);}});
		sub_array = new_array;
	}
	//console.log("sub_array = ",new_array);
	console.log("shuffled_array",shuffled_array);
	return shuffled_array;
}

console.log("Address ",window.location.href);
if(window.location.href != 'http://localhost/EduProject/addQuestion.php' && window.location.href != 'http://localhost/EduProject/loadQuestion.php'){
	userLogin();
}

function userLogin(){
	document.getElementById("questionArea").innerHTML = "<h1>Click on Your Name?</h1>";
	users = ['Manthan','Maithili',"Aarya"];
	
	
	users.forEach(listUsers);
	function listUsers(item,index){
		//console.log("item",item,"index",index);
		document.getElementById("optionArea").innerHTML += "<input type='button' class='options' value=" + item + " onclick=updateUser(value)>";
	}
	
	
}

function chooseTest(){
	document.getElementById("questionArea").innerHTML = "<h1>Choose a Test </h1>";
	document.getElementById("optionArea").innerHTML = "";
	tests = ['Addition','Subtraction','PlayWords','Tables',"Numbers in Words","CountryCapital"];
	
	
	tests.forEach(function(item,index){
		document.getElementById("optionArea").innerHTML += "<input type='button' class='options' value=" + item + " onclick=registerTest(value)>";
	});

}

function registerTest(value){
	document.getElementById("test").innerHTML = value;
	window.Test = value;
	if(window.Test=='Addition'){
		newAddQuestion();
	}
	else if (window.Test=='Subtraction'){
		newSubQuestion();
	}
	else if (window.Test=='PlayWords'){
		window.questionSet = [];
		askQuestion();
	}
	else if (window.Test=='Tables'){
		//window.questionSet = [];
		askTableQuestions();
	}
	else if(window.Test=="Numbers"){
		window.questionSet = [];
		askNumberWordQuestions();
	}
	else if(window.Test=="CountryCapital"){
		window.questionSet = [];
		AskNewCountryQuestion();
	}
}

function updateUser(value){
	//console.log("PlayerName",value);
	window.playerName = value;
	document.getElementById("playerName").innerHTML = value;
	if(window.playerName == 'Vrushali'){
		location.replace('addQuestion.php');
	}
	else{
		chooseTest();
	}
	
}

totalCorrect = 0;
totalQuestions = 0;
function updateTableScore(correct_count,len_array){
		console.log(" i am passed here len_array = ", len_array);
		 
		if(len_array > 0){
			totalCorrect += correct_count;
			totalQuestions +=1;
			document.getElementById("score").innerHTML = totalCorrect*10 + " / " + totalQuestions*100;
			askTableQuestions();}
		if(len_array == 0){
			totalCorrect += correct_count;
			totalQuestions +=1;
			document.getElementById("score").innerHTML = totalCorrect*10 + " / " + totalQuestions*100;
			
		//myVar = clearTimeout(myTimer);
		//console.log("myVar = ",myVar);
		//console.log("questionSet = ",questionSet);
		document.getElementById("questionArea").innerHTML = "<h1>You are Done !!!!</h1><br>";
		document.getElementById("questionArea").innerHTML += "<h1>Score = " + totalCorrect*10/(totalQuestions) + " % " + " </h1>";
		document.getElementById("score").innerHTML = "";
		document.getElementById("optionArea").innerHTML = "";
		document.getElementById("wrong_rimg").style.visibility='hidden';
		
		
		document.getElementById("questionArea").innerHTML += "<input type='button' class='options' value=OK onclick=location.reload()>";
		playerName = document.getElementById("playerName").innerHTML;
		
		setTimeout(function(){		
		if(totalCorrect>=(totalQuestions*10*0.8) && playerName=="Maithili"){
			document.getElementById("allcorrect_maithili").play();
		}
		else if(totalCorrect>=(totalQuestions*10*0.9) && playerName=="Manthan"){
			document.getElementById("allcorrect_manthan").play();
		}
		
		},1000);
//console.log("correct answers ",totalCorrect,"totalQuestions", totalQuestions);
	}
	
}

function updateScore(flag){
	//console.log("flag = ",flag);
	if(flag ==1){
		//console.log("I am in");
		totalCorrect += 1;
		totalQuestions +=1;
		document.getElementById("score").innerHTML = totalCorrect*10 + " / " + totalQuestions*10;
	}
	else{
		totalQuestions +=1;
		document.getElementById("score").innerHTML = totalCorrect*10 + "/" + totalQuestions*10;
	}

	if(totalQuestions==10){
		myVar = clearTimeout(myTimer);
		console.log("myVar = ",myVar);
		//console.log("questionSet = ",questionSet);
		document.getElementById("questionArea").innerHTML = "<h1>You are Done !!!!</h1><br>";
		document.getElementById("questionArea").innerHTML += "<h1>Score = " + totalCorrect*10 + " / " + totalQuestions*10 + " </h1>";
		document.getElementById("score").innerHTML = "";
		document.getElementById("optionArea").innerHTML = "";
		//document.getElementById("img").innerHTML = "";
		document.getElementById("correct_img").style.visibility='hidden';
		document.getElementById("wrong_img").style.visibility='hidden';
		
		document.getElementById("questionArea").innerHTML += "<input type='button' class='options' value=OK onclick=location.reload()>";
		playerName = document.getElementById("playerName").innerHTML;
		
		setTimeout(function(){		
		if(totalCorrect>=(totalQuestions-2) && playerName=="Maithili"){
			document.getElementById("allcorrect_maithili").play();
		}
		else if(totalCorrect>=(totalQuestions-1) && playerName=="Manthan"){
			document.getElementById("allcorrect_manthan").play();
		}
		
		},1000);
//console.log("correct answers ",totalCorrect,"totalQuestions", totalQuestions);
	}
}
