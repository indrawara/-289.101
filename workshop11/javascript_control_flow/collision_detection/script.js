/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

var puck_x = 210;
var puck_y = 210;
var speed = 50;
var puck = document.getElementById('puck');
var gap = document.getElementById('gap');

function logCoordinates() {
    console.log('x=' + puck_x + 'y='+ puck_y);
}
function checkCollison() {
    if (puck_x > 250 && puck_x < 350 && puck_y > 150 && puck_y < 250) {
        gap.style.backgroundColor = 'red';
    }
    else{
        gap.style.backgroundColor = 'white'
    }
}


puck.style.left = puck_x + 'px';
puck.style.top = puck_y + 'px';
puck

// left
document.getElementById('left').addEventListener('click', function(){
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollison();
}); 
    
//right 
    
document.getElementById('right').addEventListener('click', function(){
    puck_x += speed;
    puck.style.left = puck_x + 'px'; 
    logCoordinates();
    checkCollison();
});
//top 
document.getElementById('up').addEventListener('click', function(){
    puck_y -= speed;
    puck.style.top = puck_y + 'px'; 
    logCoordinates();
    checkCollison();
});
//down
document.getElementById('down').addEventListener('click', function(){
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollison();
});
