window.$ = window.jQuery = require('jquery');

home = document.getElementById(1)
home.addEventListener("click", function (){
    // console.log("home is clicked");
    // tmp = document.body.appendChild(document.createElement('div'))
    // tmp.className = 'Home_Popup'
    // tmp.id = 'modal'
    tmp = $('#pop_up_div').load('test.html')
    console.log(this.children[0].classList.toggle('closed'))
},false);

news = document.getElementById(2)
news.addEventListener("click", function (){
    console.log("news is clicked")
    console.log(this.children[0].classList.toggle('closed'))
},false);

contact = document.getElementById(3)
contact.addEventListener("click", function (){
    console.log("contact is clicked")
    console.log(this.children[0].classList.toggle('closed'))
},false);

about = document.getElementById(4)
about.addEventListener("click", function (){

    console.log("about is clicked")
    // this.parentNode.parentNode.classList.toggle('closed')
    console.log(this.children[1].classList.toggle('closed')) // toggles closed
}, false);
