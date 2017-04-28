var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var data = function(date, title, color, funct){
  this.date = date;
  this.title = title;
  this.color = color;
  this.funct = funct;
};

function test(){alert("P");};

/*Data format:
date = [month, day, year(put negative for BCE)] Put zero for month or day if not known or not needed.
title = "Title"
color = "#HEXVAL"
*/

var events = [
  //New events go here in chronological order
  new data(
  [1,0,3],
  "test a theory",
  "#FD5458",
    function(){test();}
  ),
  
  new data(
  [4,5,921],
  "Wassup bros",
  "#0089FC",
    function(){test();}
  ),
  
  new data(
  [0,0,-24],
  "The Death of CAMS Memes",
  "#4D9F24",
    function(){test();}
  ),
  
  new data(
  [4,5,921],
  "Wassup bros",
  "#0089FC",
    function(){test();}
  ),
  
  new data(
  [4,5,921],
  "Wassup bros",
  "#0089FC"
    ,function(){test();}
  ),
  
  new data(
  [4,5,921],
  "Wassup bros",
  "#0089FC",
    function(){test();}
  )
  
];


var font = function(){
  var fontSize = document.getElementById("timelinecont").offsetHeight/4;
var timeline = document.getElementsByClassName("timeline");
for(i=0; i<timeline.length; i++){
timeline[i].style.fontSize = fontSize + "px";
}
};
font();
document.onresize = function(){font();};

for(i=0;i<events.length;i++){
  var x = document.createElement("TD");
  //var x = document.createElement("DIV");
  x.className = "event";
  x.appendChild(document.createTextNode(events[i].title));
  //z.appendChild(x);
  document.getElementById("events").appendChild(x);
  x.action = events[i].funct;
  x.onclick = function(){x.action();};
  var y = document.createElement("TD");
  y.className = "date";
  y.appendChild(document.createTextNode(
    (events[i].date[0] ? months[events[i].date[0]] + (events[i].date[1] ? " " + events[i].date[1] : "") + ", " : "") + (events[i].date[2]>0 ? (events[i].date[2] + " AD") : (-1 * events[i].date[2] + " BCE"))));
  document.getElementById("dates").appendChild(y);
  y.onclick = function(){x.action();};
  
/*  y.style.width = (y.innerHTML.length > x.innerHTML.length ? y.innerHTML.length * fontSize : x.innerHTML.length * fontSize) + 200 + "px";*/
  
  x.style.color = events[i].color;
  x.style.borderLeft = "4px solid " + events[i].color;
  
  y.style.color = events[i].color;
  y.style.borderLeft = "4px solid " + events[i].color;
}
