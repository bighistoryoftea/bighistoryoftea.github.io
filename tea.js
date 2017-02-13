$(document).ready(function(){
setTimeout(function() {
    $('body').addClass('loaded');
}, 500);
document.onkeydown = function(e){
    switch(e.keyCode){
        case 37:
            // Left
        case 38:
            //Up
        case 39:
            // Right
        case 40:
            //Down
    }
}
});
