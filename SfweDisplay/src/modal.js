qrmodal = document.getElementById("qrmodal")

advBtn = document.getElementById("advBtn")
advText =document.getElementById("advText")

// Get the <span> element that closes the modal for qr
qrspan = document.getElementsByClassName("close")[0];

advBtn.onclick = function(){
  qrmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
qrspan.onclick = function() {
    qrmodal.style.display = "none";
  }
  
window.onclick = function(event) {
    if (event.target == qrmodal) {
      qrmodal.style.display = "none";
    }
}

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
}