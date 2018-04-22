console.log('Loaded!');

// Change body of home page
var text = document.getElementById('body');
text.innerHTML = 'Hi new Value';

// Move the image
var img = document.getElementById('img');
img.onclick = function(){
    var interval = setInterval(moveRight, 50);
    
}

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft +'px';
}
