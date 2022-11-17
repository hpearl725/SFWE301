qrmodal = document.getElementById("qrmodal")

advBtn = document.getElementById("advBtn")
advText =document.getElementById("advText")

// Get the <span> element that closes the modal for qr
qrspan = document.getElementsByClassName("close")[0];

advBtn.onclick = function(){
  qrmodal.style.display = "block";
  advText.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
qrspan.onclick = function() {
    qrmodal.style.display = "none";
    advText.style.display = "none";
  }
  
// window.onclick = function(event) {
//     if (event.target == qrmodal) {
//       qrmodal.style.display = "none";
//       advText.style.display = "none";
//     }
// }

discmodal = document.getElementById("discmodal")

discBtn = document.getElementById("discBtn")
discText = document.getElementById("discText")

// Get the <span> element that closes the modal for qr
discspan = document.getElementsByClassName("close")[1];

discBtn.onclick = function(){
  discmodal.style.display = "block";
  discText.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
discspan.onclick = function() {
    discmodal.style.display = "none";
    discText.style.display = "none";
  }
  
window.onclick = function(event) {
    if (event.target == discmodal) {
      discmodal.style.display = "none";
      discText.style.display = "none";
    }

    if (event.target == qrmodal) {
      qrmodal.style.display = "none";
      advText.style.display = "none";
    }
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