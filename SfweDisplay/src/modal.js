advmodal = document.getElementById("advmodal")

advBtn = document.getElementById("advBtn")
advText =document.getElementById("advText")

// Get the <span> element that closes the modal for adv
advspan = document.getElementById("advclose")

// When the user clicks on <span> (x), close the modal
advspan.onclick = function() {
  advmodal.style.display = "none";
  advText.style.display = "none";
}  

advBtn.onclick = function(){
  advmodal.style.display = "block";
  advText.style.display = "block";

  window.onclick = function(event) {
      if (event.target == advmodal) {
        advmodal.style.display = "none";
        advText.style.display = "none";
      }
  }
}


discmodal = document.getElementById("discmodal")

discBtn = document.getElementById("discBtn")
discText = document.getElementById("discText")

// Get the <span> element that closes the modal for qr
discspan = document.getElementById("discclose");

discBtn.onclick = function(){
  discmodal.style.display = "block";
  discText.style.display = "block";

  window.onclick = function(event) {
    if (event.target == discmodal) {
      discmodal.style.display = "none";
      discText.style.display = "none";
    }

}
}

// When the user clicks on <span> (x), close the modal
discspan.onclick = function() {
    discmodal.style.display = "none";
    discText.style.display = "none";
  }
  


quizmodal = document.getElementById("quizmodal")

quizBtn = document.getElementById("quizBtn")

// Get the <span> element that closes the modal for qr
quizspan = document.getElementById("quizclose");

quizBtn.onclick = function(){
  quizmodal.style.display = "block";
  //quizText.style.display = "block";
  window.onclick = function(event) {
    if (event.target == quizmodal) {
      quizmodal.style.display = "none";
      //quizText.style.display = "none";
    }
}
}

// When the user clicks on <span> (x), close the modal
quizspan.onclick = function() {
    quizmodal.style.display = "none";
    //quizText.style.display = "none";
}

ungradmodal = document.getElementById("ungradmodal")

ungradBtn = document.getElementById("ungradBtn")

// Get the <span> element that closes the modal for qr
ungradspan = document.getElementById("ungradclose");

ungradBtn.onclick = function(){
  ungradmodal.style.display = "block";
  window.onclick = function(event) {
    if (event.target == ungradmodal) {
      ungradmodal.style.display = "none";
      //ungradText.style.display = "none";
    }
}
  //ungradText.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ungradspan.onclick = function() {
    ungradmodal.style.display = "none";
    //ungradText.style.display = "none";
    
  

}

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 