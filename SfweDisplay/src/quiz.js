
let stbtn = document.getElementById("start");
let qz = document.getElementById("quiz");
let score = 0;
let Qarr =[
    {Q: "What is the capital of France?", A: "Paris", O: ["London", "Berlin", "Paris", "Rome"]},
    {Q: "What is the capital of Germany?", A: "Berlin", O: ["London", "Berlin", "Paris", "Rome"]},
    {Q: "What is the capital of Italy?", A: "Rome", O: ["London", "Berlin", "Paris", "Rome"]},
]
let cpy = []
stbtn.addEventListener("click", function() {
    $('#start').hide();
    cpy = Qarr.slice();
    $('#quiz').append(make_quiz_html(cpy[0]));
});

function make_quiz_html(Question){
    let html = `
    <div class="question"><h2>${Question.Q}</h2></div>
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
        }
	}
});