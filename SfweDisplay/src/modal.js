modal = document.getElementById("modal")

modalBtn = document.getElementById("mBtn")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

modalBtn.onclick = function(){
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}