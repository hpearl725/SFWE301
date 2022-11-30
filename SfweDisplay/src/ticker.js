const fs = require('fs')
var txt = document.getElementById('tick')

  
fs.readFile('src/ticker_text/ticker.txt', (err, data) => {
    if (err) throw err;
  
    console.log(data.toString());
    let file_content = data.toString()
    txt.innerText = file_content;
})



var width = $('.ticker-text').width(),
    containerwidth = $('.ticker-container').width(),
    left = containerwidth;
$(document).ready(function(e){
	function tick() {
        if(--left < -width){
            left = containerwidth;
        }
        $(".ticker-text").css("margin-left", left + "px");
        setTimeout(tick, 8);
      }
      tick();
});