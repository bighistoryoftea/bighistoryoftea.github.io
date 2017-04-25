function mainFunction(){
  $("#subtitle").text("Welcome.");
  $("#desc").html("Welcome to the Little Big History of Tea. You may use either the arrow keys on your keyboard (work in progress) or the navigation bar above to explore the site. This site was made ");
}
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
};
});
mainFunction();
/*
  Guide:
  Paragraph 0 - Introduction and Guide
  Paragraph 1 -
*/
var textParagraphs = [
  [0,"<p>Hello! Press the <strong>right key</strong> to continue onto the first section (Origins of Tea).</p>"],
];
// function default(){
    $("#subtitle").html("Welcome.");
    $("#text").html("Welcome to the Little Big History of Tea. You may use either the arrow keys on your keyboard (work in progress) or the navigation bar above to explore the site. Project by: Isaac Addis, Sean Sng, Nathaniel Ventura, and Coleman Christy.");
// }
$("#default").click(function(){
  mainFunction();

});
