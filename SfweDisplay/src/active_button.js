window.$ = window.jQuery = require('jquery');

var home = document.getElementById(1)
var news = document.getElementById(2)
var contact = document.getElementById(3)
var about = document.getElementById(4)

home.addEventListener("click", function (){
    // console.log("home is clicked");
    // tmp = document.body.appendChild(document.createElement('div'))
    // tmp.className = 'Home_Popup'
    // tmp.id = 'modal'
    var tmp = $('#pop_up_div').load('test.html');
    this.children[1].classList.toggle('closed');
    if(!news.children[1].classList.contains('closed')){
        news.children[1].classList.toggle('closed');
    }
    if(!about.children[1].classList.contains('closed')){
        about.children[1].classList.toggle('closed');
    }
    if(!contact.children[1].classList.contains('closed')){
        contact.children[1].classList.toggle('closed');
    }

}, false);


news.addEventListener("click", function (){
    console.log("news is clicked")
    console.log(this.children[1].classList.toggle('closed'))
    if(!home.children[1].classList.contains('closed')){
        home.children[1].classList.toggle('closed');
    }
    if(!about.children[1].classList.contains('closed')){
        about.children[1].classList.toggle('closed');
    }
    if(!contact.children[1].classList.contains('closed')){
        contact.children[1].classList.toggle('closed');
    }
},false);


contact.addEventListener("click", function (){
    console.log("contact is clicked")
    console.log(this.children[1].classList.toggle('closed'))
    if(!news.children[1].classList.contains('closed')){
        news.children[1].classList.toggle('closed');
    }
    if(!about.children[1].classList.contains('closed')){
        about.children[1].classList.toggle('closed');
    }
    if(!home.children[1].classList.contains('closed')){
        home.children[1].classList.toggle('closed');
    }
},false);

about.addEventListener("click", function (){

    console.log("about is clicked")
    // this.parentNode.parentNode.classList.toggle('closed')
    console.log(this.children[1].classList.toggle('closed')) // toggles closed
    if(!news.children[1].classList.contains('closed')){
        news.children[1].classList.toggle('closed');
    }
    if(!home.children[1].classList.contains('closed')){
        home.children[1].classList.toggle('closed');
    }
    if(!contact.children[1].classList.contains('closed')){
        contact.children[1].classList.toggle('closed');
    }
}, false);

