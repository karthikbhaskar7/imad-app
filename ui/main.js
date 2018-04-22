console.log('Loaded!');

// Change body of home page
var text = document.getElementById('body');
text.innerHTMl = 'Hi new Value';

// Move the image
var img = document.getElementById('img');
img.Onclick = function(){
    img.style.marginLeft = '100px';
    
}
