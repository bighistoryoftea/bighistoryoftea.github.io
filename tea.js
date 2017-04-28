var globalInt = 0;
function mainFunction() {
    $("#subtitle").html("Welcome.");
    $("#desc").html("Welcome to the Little Big History of Tea. You may use either the arrow keys on your keyboard (work in progress) or the navigation bar above to explore the site. Project by: Isaac Addis, Sean Sng, Nathaniel Ventura, and Coleman Christy.");
}
function goToPosition(n){
  n = parseInt(n);
  if(n==0){
    mainFunction();
    globalInt = 0;
    $("#subtitle").removeClass("green-text");
  }
  if(n==1){
    $("#subtitle").html("China and East Asia");
    $("#subtitle").removeClass("black-text");

    $("#subtitle").addClass("green-text");
    // $("#desc").addClass("animated bounceOutLeft");
    $("#desc").html(textParagraphs[0][1]);
    globalInt = 1;
  }
  if(n==2){
    $("#subtitle").html("European Use and Trade of Tea");
    $("#desc").html(textParagraphs[1][1]);

    $("#subtitle").addClass("green-text");
    globalInt = 2;
  }
  if(n==3){
    $("#subtitle").html("Tea in the Modern Era");

    $("#subtitle").addClass("green-text");
    $("#desc").html(textParagraphs[2][1]);
    globalInt = 3;
  }
  if(n==4){
    $("#subtitle").html("Harvesting and Production of Tea");

    $("#subtitle").addClass("green-text");
    $("#desc").html(textParagraphs[3][1]);
    globalInt = 4;
  }
  if(n==5){
    $("#subtitle").html("The Chemical Compounds of Tea");

    $("#subtitle").addClass("green-text");
    $("#desc").html(textParagraphs[4][1]);
    globalInt = 5;
  }
  if(n==6){
    $("#subtitle").html("How people are Affected by Tea");

    $("#subtitle").addClass("green-text");
    $("#desc").html(textParagraphs[5][1]);
    globalInt = 6;
  }
  if(n==7){
    $("#subtitle").html("Chinese Methods of Tea Preparation");

    $("#subtitle").addClass("green-text");
    $("#desc").html(textParagraphs[6][1]);
    globalInt = 7;
  }
  if(n==8){
    $("#subtitle").html("Tea Across the World");

    $("#subtitle").addClass("green-text");
    $("#desc").html(textParagraphs[7][1]);
    globalInt = 8;
  }
}
function incPosition(){
  globalInt = globalInt+1;
  if(globalInt>8){
    globalInt=8;
  }
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
  Main Array:
    Where all the content is
*/
var textParagraphs = [
    [0, "China and East Asia"],
    [1, "European Use and the Trade of Tea"],
    [2, "Tea in the Modern Era"],
    [3,"<p>Tea is grown all around Asia, especially in China and India. Tea grows all year long in most places, and is Tea harvested constantly as the leaves grow back. Tea is manually picked, then immediately taken to a factory. Tea goes through various processes depending on the type of tea, including drying, steaming, rolling, fermenting, and baking. Tea is then packaged and distributed.<p>"],
    [4,"The chemical compounds of tea"],
    [5,"How people are affected by tea"]
    [6,"<p>Tea remains immensely popular among the Chinese people since its first usage thousands of years ago. Different types of chinese teas are classified by the amount of fermentation they undergo, such as: 0%(green tea), 30-60% (Oolong tea), and 100% (Black tea).</p><p> Chinese teas have different forms of each major type of tea. For instance, Pu Erh Tea is a very famous tea that belongs to the black tea category. It is renowned for its unique aroma and sweet and mellow taste. </p>"],
    [7,'<p>In various areas across the world, tea has been integrated into its culture. In China and Japan, for example, tea ceremonies have existed for centuries. In China, for instance, the <i>Gongfu tea ceremony</i> uses Yixing clay teapots and oolong tea, focusing on brewing and serving tea in a refined, elegant manner.</p><p>In nations such as: India and Iran, tea is the most consumed hot beverage, whereas in areas like Myanmar, tea is also served as sweet tea and green tea. In the United States, 80% of tea is consumed in iced form, and particularly in the Southeast United States, tea is iconic in its culture</p>']
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
