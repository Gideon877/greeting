/*
Author	: Thabang Gideon Magaola
About	: This is a web page that allows you to enter/input a name, and when a button is pressed it display a greeting message based on the language selected
			* keep track of how many times people were greeted
			* greet people in more than one language
			* save greeted names on a browser storage
*/

[greeting, userInput, counterMessage, namesGreeted] = 
[document.getElementById('display'), document.getElementById('user_input'), document.getElementById("result"), {}]

function showInput(){
	let userName = userInput.value.toLowerCase();
	var selectedLanguage = document.querySelectorAll("input[name='language']:checked");
	var language = selectedLanguage["0"].value;

	if (userInput.value && namesGreeted[userName] === undefined){
		namesGreeted[userName] = 1, greeting.innerHTML = obj[language] + userName, userInput.value = "";
		clickCounter(); 
	}

	if (userInput.value && namesGreeted[userName]){
		greeting.innerHTML = obj[language] + userName + message[language];userInput.value = "";
	}
};
