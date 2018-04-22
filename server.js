var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title : 'Article One Kb',
    heading: '<h3>Article One</h3>',
    content: `<p>Article one</p>`
    
}

var articleTwo = {
    title : 'Article Two Kb',
    heading: '<h3>Article Two</h3>',
    content: `<p>Article Two</p>`
    
}

var articleThree = {
    title : 'Article Three Kb',
    heading: '<h3>Article Three</h3>',
    content: `<p>Article Three</p>`
    
}
function createTemplate(data){
        var title = data.title;
        var heading = data.heading;
        var content = data.content;
        var htmlTemplate = `<html>
        <head>
            ${title}
            <meta name="viewport" content="width=device-width, initial-sclae=1"/>
            <link href="/ui/style.css" rel="stylesheet"/>
            
        </head>
        
        <body>
            <div class='container'>
                <div>
                    <a href="/">Home</a>
                </div>
               
                ${heading}
               <div>
                   ${content}
                </div>
            </div>
        </body>
        
    </html>`;
    return htmltemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){
    res.send(createTemplate(articleOne));
})

app.get('/article-two', function(req, res){
    res.send(createTemplate(articleTwo));
})

app.get('/article-three', function(req, res){
    res.send(createTemplate(articleThree));
})

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
