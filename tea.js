var globalInt = 0;
function mainFunction() {
    $("#subtitle").text("Welcome.");
    $("#desc").text("Welcome to the Little Big History of Tea. You may use either the arrow keys on your keyboard (work in progress) or the navigation bar above to explore the site. Project by: Isaac Addis, Sean Sng, Nathaniel Ventura, and Coleman Christy.");
}
function goToPosition(n){
  n = parseInt(n);
  if(n==0){
    mainFunction();
    globalInt = 0;
    $("#subtitle").removeClass("green-text");
  }
  if(n==1){
    $("#subtitle").text("China and East Asia");
    $("#subtitle").removeClass("black-text");

    $("#subtitle").addClass("green-text");
    // $("#desc").addClass("animated bounceOutLeft");
    $("#desc").text(textParagraphs[0][1]);
    globalInt = 1;
  }
  if(n==2){
    $("#subtitle").text("European Use and Trade of Tea");
    $("#desc").text(textParagraphs[1][1]);

    $("#subtitle").addClass("green-text");
    globalInt = 2;
  }
  if(n==3){
    $("#subtitle").text("Tea in the Modern Era");

    $("#subtitle").addClass("green-text");
    $("#desc").text(textParagraphs[2][1]);
    globalInt = 3;
  }
  if(n==4){
    $("#subtitle").text("Harvesting and Production of Tea");

    $("#subtitle").addClass("green-text");
    $("#desc").text(textParagraphs[3][1]);
    globalInt = 4;
  }
  if(n==5){
    $("#subtitle").text("The Chemical Compounds of Tea");

    $("#subtitle").addClass("green-text");
    $("#desc").text(textParagraphs[4][1]);
    globalInt = 5;
  }
  if(n==6){
    $("#subtitle").text("How people are Affected by Tea");

    $("#subtitle").addClass("green-text");
    $("#desc").text(textParagraphs[5][1]);
    globalInt = 6;
  }
  if(n==7){
    $("#subtitle").text("Chinese Methods of Tea Preparation");

    $("#subtitle").addClass("green-text");
    $("#desc").text(textParagraphs[6][1]);
    globalInt = 7;
  }
  if(n==8){
    $("#subtitle").text("Tea Across the World");

    $("#subtitle").addClass("green-text");
    $("#desc").text(textParagraphs[7][1]);
    globalInt = 8;
  }
}
function incPosition(){
  globalInt = globalInt+1;
  goToPosition(globalInt);
  // alert("Inc position: "+globalInt);
}
function decPosition(){
    globalInt = globalInt-1;
  if(globalInt<0){
    globalInt=0;
  }
  goToPosition(globalInt);
  // alert("dec position: "+ globalInt);

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
                e.preventDefault();
            case 39:
                // Right
                incPosition();
            case 40:
                //Down
                decPosition();
                e.preventDefault();
        }
    };
});
/*
  Main Array:
    Where all the content is
*/
var textParagraphs = [
    [0, "China and East Asia"],
    [1, "European Use and the Trade of Tea"],
    [2, "Tea in the Modern Era"],
    [3,"Harvesting and production of tea"],
    [4,"The chemical compounds of tea"],
    [5,"How people are affected by tea"]
    [6,"Chinese Methods of Tea Preparation"],
    [7,"Tea across the World."]
];
/*
    HTML Manip
*/
$("#defaultbutton").click(function() {
  goToPosition(0);
});
$("#0").click(function() {
  goToPosition(1);
});
$("#1").click(function() {
  goToPosition(2);
});
$("#2").click(function() {
  goToPosition(3);
});
$("#3").click(function() {
  goToPosition(4);
});
$("#4").click(function() {
  goToPosition(5);
});
$("#5").click(function() {
  goToPosition(6);
});
$("#6").click(function() {
  goToPosition(7);
});
$("#7").click(function() {
  goToPosition(8);
});
/*
  Library Functions
)
*/
