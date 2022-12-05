const fs = require('fs')
var txt = document.getElementById('tick')
let tarr;
let numPrompts;
let pindex = 0
fs.readFile('src/ticker_text/ticker.txt', (err, data) => {
    if (err) throw err;
    let file_content = data.toString()
    tarr = data.toString().split(/\r?\n/).filter(element => element);
    txt.innerText = '    🐻⬇️    ' + tarr[0] + '    🐻⬇️    '
    numPrompts = tarr.length;

})
$(document).ready(function(e){
    containerwidth = $('.ticker-container').width(),
    left = containerwidth;
    sep = '    🐻⬇️    '
    function tick() {
        width = $('.ticker-text h3').width()
        if(--left <= -width){
            left = containerwidth;
            pindex = (pindex + 1) % (numPrompts)
            txt.innerText = sep + tarr[pindex] + sep
        }
        $(".ticker-text h3").css("margin-left", left + "px");
        setTimeout(tick, 4);
    }
    tick();
});