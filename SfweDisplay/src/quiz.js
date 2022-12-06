// Author: Harrison Pearl
// Date: 10/15/2020
// Description: This file contains the code for the quiz feature of the digital billboard.

//grabs refrence to start button element on DOM
let stbtn = document.getElementById("start");
//grabs refrence to quiz element on DOM
let qz = document.getElementById("quiz");
// variable to keep track of user score
let score = 0;
// variable for keeping track of question number
let qcount = 1;
// array that stores questions in {Q:'string' A:'string' O:['strings']} format
let Qarr =[
    {Q: "Who is the Software Engineering Director?", A: "Sharon O'neal", O: ["Juliana Lincoln", "Sharon O'neal", "Dr. Larry Head", "Dr. Diana Saldana"]},
    {Q: "T/F: Software Engineers are in demand?", A: "True", O: ["True", "False"]},
    {Q: "Which of these is a programming language?", A: "Python", O: ["English++", "StopLang", "Python" ,"Coffee"]},
    {Q: "What does IDE stand for?", A: "Integrated Development Environment", O: ["Internal Document Execution", "Integrated Development Environment", "I Don't Engineer" ,"Ivestigation Department of Engineering"]},
    {Q: "T/F: There are not many programming languages?", A: "False", O: ["True", "False"]},
    {Q: "Which of the following need software to work?", A: "All of the above", O: ["Dishwasher", "Microwave", "Cell phones","Cars","Calculators","Pacemakers","All of the above" ]},
    {Q: "Which of the following is the best runtime?", A: "O(1)", O: ["O(n)", "O(n^2)", "O(1)","O(log n)","O(n log n)"]},
    {Q: "Which data structure is best for searching?", A: "Hash Table", O: ["Linked List", "Hash Table", "Stack","Queue","Array"]},
]
// cpy is a copy of Qarr that will be used to make the quiz questions
let cpy = []

// add event listener to start button to start quiz
stbtn.addEventListener("click", function() {
    $('#start').hide(); // hides start button
    cpy = Qarr.slice(); // makes a copy of Qarr and stores it in cpy
    $('#quiz').append(make_quiz_html(cpy[0])); // populates quiz element with first question
});


// function that creates the html for the quiz
function make_quiz_html(Question){
    // html string template for quiz 
    // NOTE: DO NOT add comments in the html string template unless you want to break the code or know what you are doing
    let html = `
    <div class="question"><h2>Q${qcount}: ${Question.Q}</h2></div>
    <ul class="options">
        ${make_quiz_options_html(Question.O)}
    </ul>
    `
    return html;
}

// function that creates the html for the quiz options based on number of possible options
function make_quiz_options_html(Options){
    let html = "";
    for (let i = 0; i < Options.length; i++){
        html += `<li id='QO${i}'>${Options[i]}</li>`;
    }
    return html;
}

// add event listener to quiz element to listen for user selection on quiz options
document.getElementById("quiz").addEventListener("click", function(e) {
    // if the user clicks on a list item
	if(e.target && e.target.nodeName == "LI") {
		//increment qcount and store user selection
        qcount++;
        userSel = e.target.innerText;
        if (userSel == cpy[0].A){ // if user selection is correct increment score
            score += 1;
        }
        // remove question from cpy and quiz element
        qz.innerHTML = "";
        cpy.shift();
        // if there are more questions to be asked
        if(cpy.length > 0){
            // add next question to quiz element
            $('#quiz').append(make_quiz_html(cpy[0]));
        }
        // if there are no more questions to be asked
        else{
            $('#quiz').append(`<h1>Quiz Finished</h1>`);// add quiz finished message
            $('#quiz').append(`<h2>Score: ${score} / ${Qarr.length} </h2>`); // add score message
            if(score == Qarr.length){
                $('#quiz').append(`<h2>Perfect Score! You should consider Software Engineering!</h2>`); // add perfect score message
            }
            else if(score > Qarr.length/2){
                $('#quiz').append(`<h2>Good Score! You should consider Software Engineering!</h2>`); // add good score message
            }
            else{
                $('#quiz').append(`<h2>Nice Try! You should consider Software Engineering!</h2>`); // add nice try message
            }
            $('#quiz').append(`<div class=btn id=Restart>Restart</div>`); // add restart button
        }
	}
    if(e.target && e.target.innerText == "Restart"){ // if user clicks restart button
        location.reload(); // reload page
    }
});

