var globalInt = 0;
function mainFunction() {
    $("#subtitle").text("Welcome.");
    $("#desc").text("Welcome to the Little Big History of Tea. You may use either the arrow keys on your keyboard (work in progress) or the navigation bar above to explore the site. Project by: Isaac Addis, Sean Sng, Nathaniel Ventura, and Coleman Christy.");
}
function goToPosition(n){
  if(n==0){
    mainFunction();
    globalInt = 0;
  }
  if(n==1){
    $("#subtitle").text("China and East Asia");
    $("#desc").text(textParagraphs[0][1]);
    globalInt = 1;
  }
}
function incPosition(){
  globalInt++;
  goToPosition(globalInt);
}
function decPosition(){
  globalInt = globalInt-1;
  goToPosition(globalInt);
}

$(document).ready(function() {
    goToPosition(globalInt);
      setTimeout(function() {
        $('body').addClass('loaded');
    }, 500);
    document.onkeydown = function(e) {

        switch (e.keyCode) {
            case 37:
                // Left
                decPosition();
            case 38:
                //Up
                incPosition();
            case 39:
                // Right
                incPosition();
            case 40:
                //Down
                decPosition();
        }
    };
});
/*
  Guide:
  Paragraph 0 - Introduction and Guide
  Paragraph 1 -
*/
var textParagraphs = [
    [0, "Hello! Press the right (or up) arrow key to continue onto the first section (Origins of Tea)."],
];
// // function default(){
// $("#subtitle").html("Welcome.");
// $("#text").html("Welcome to the Little Big History of Tea. You may use either the arrow keys on your keyboard (work in progress) or the navigation bar above to explore the site. Project by: Isaac Addis, Sean Sng, Nathaniel Ventura, and Coleman Christy.");
// }
$("#default").click(function() {
    mainFunction();

});
