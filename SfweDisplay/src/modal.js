modal = document.getElementById("modal")

modalBtn = document.getElementById("mBtn")

modalBtn.onclick = function(){
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}