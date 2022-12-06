// initial variables
const fs = require('fs');
var txt = document.getElementById('tick'); // ticker text element on DOM
let tarr; // array to store ticker text
let numPrompts; // number of ticker text elements
let pindex = 0; // index of ticker text element

// read ticker text file, split into array based on newlines, and display first element
fs.readFile('src/ticker_text/ticker.txt', (error, data) => {
    // if error, throw error
    if(error){throw error;} 
    // convert data to string
    let file_content = data.toString(); 
     // split string into array based on newlines, and filter out empty elements
    tarr = data.toString().split(/\r?\n/).filter(element => element);
    // display first element and add bear down emoji's as separators
    txt.innerText = '    🐻⬇️    ' + tarr[0] + '    🐻⬇️    '; 
    // set number of prompts to length of array
    numPrompts = tarr.length; 
})

// Jquery for once page is loaded to begin moving the ticker text accross the screen
$(document).ready(function(e){
    // get width of ticker container
    cw = $('.ticker-container').width();
    // initialize left margin to width of ticker container
    left = cw;
    // variable to store seperator emojis
    sep = '    🐻⬇️    ';

    // function to decrement left margin and move ticker text across the screen
    function move() {
        // get width of ticker text
        width = $('.ticker-text h3').width();
        // decrement left margin
        left--;
        // if left margin is less than or equal to negative width of ticker text (i.e. ticker text is off screen)
        if(left <= -width){
            left = cw; // reset left margin to width of ticker container
            pindex = (pindex + 1) % (numPrompts); // move on to next ticker text while looping back to beginning if at end of array
            txt.innerText = sep + tarr[pindex] + sep; // display ticker text with seperator emojis
        }
        $(".ticker-text h3").css("margin-left", left + "px"); // edits css to move ticker text
        setTimeout(move, 4); // calls move function every 4 milliseconds
    }
    move();
});