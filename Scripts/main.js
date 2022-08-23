var barack = true;
function googolQuestion() {
	let secretPass = "10^100";
	input = prompt("What is the formula of a googol?");
	
	if (input !== secretPass) {
		alert("Incorrect, please try again.")
		
	} else {
		alert("Correct answer, click return to continue to the website.")
		barack = false
	};
};
//do
	//googolQuestion();
//while(barack);