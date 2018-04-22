console.log('Loaded!');

// Change body of home page
var text = document.getElementById('body');
text.innerHTML = 'Hi new Value';

// Move the image
var img = document.getElementById('img');
img.onClick = function(){
    img.style.marginLeft = '100px';
    
}
