
let stbtn = document.getElementById("start");
let qz = document.getElementById("quiz");
let score = 0;
let qcount = 1;
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
let cpy = []
stbtn.addEventListener("click", function() {
    $('#start').hide();
    cpy = Qarr.slice();
    $('#quiz').append(make_quiz_html(cpy[0]));
});

function make_quiz_html(Question){
    let html = `
    <div class="question"><h2>Q${qcount}: ${Question.Q}</h2></div>
    <ul class="options">
        ${make_quiz_options_html(Question.O)}
    </ul>
    `
    return html;
}

function make_quiz_options_html(Options){
    let html = "";
    for (let i = 0; i < Options.length; i++){
        html += `<li id='QO${i}'>${Options[i]}</li>`;
    }
    return html;
}

// Get the element, add a click listener...
document.getElementById("quiz").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
		// List item found!  Output the ID!
        qcount++;
        userSel = e.target.innerText;
        if (userSel == cpy[0].A){
            score += 1;
            console.log("Correct");
        }
        else{
            console.log("Incorrect");
        }
        qz.innerHTML = "";
        cpy.shift();
        if(cpy.length > 0){
            console.log(cpy);
            $('#quiz').append(make_quiz_html(cpy[0]));
        }
        else{
            $('#quiz').append(`<h1>Quiz Finished</h1>`);
            $('#quiz').append(`<h2>Score: ${score} / ${Qarr.length} </h2>`);
            if(score == Qarr.length){
                $('#quiz').append(`<h2>Perfect Score! You should consider Software Engineering!</h2>`);
            }
            else if(score > Qarr.length/2){
                $('#quiz').append(`<h2>Good Score! You should consider Software Engineering!</h2>`);
            }
            else{
                $('#quiz').append(`<h2>Nice Try! You should consider Software Engineering!</h2>`);
            }
            $('#quiz').append(`<div class=btn id=Restart>Restart</div>`);å
        }
	}
    if(e.target && e.target.innerText == "Restart"){
        location.reload();
    }
});

