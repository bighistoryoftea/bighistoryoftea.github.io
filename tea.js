$(document).ready(function(){
setTimeout(function() {
    $('body').addClass('loaded');
}, 500);
document.onkeydown = function(e){
    switch(e.keyCode){
        case 37:
            // Left
            alert("Working");
        case 38:
            //Up
        case 39:
            // Right
        case 40:
            //Down
    }
}
});
/*
  Guide:
  Paragraph 0 - Introduction and Guide
  Paragraph 1 -
*/
var textParagraphs = [
  [0,"<p>Hello! Press the <strong>right key</strong> to continue onto the first section (Origins of Tea).</p>"],
];
