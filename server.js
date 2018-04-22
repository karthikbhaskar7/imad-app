var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'articleOne' : {
        title : 'Article One Kb',
        heading: '<h3>Article One</h3>',
        content: `<p>Article one</p>` },
    
    'articleTwo' : {
        title : 'Article Two Kb',
        heading: '<h3>Article Two</h3>',
        content: `<p>Article Two</p>`
        
    },
    
    'articleThree' : {
        title : 'Article Three Kb',
        heading: '<h3>Article Three</h3>',
        content: `<p>Article Three</p>`
        
    }
};
function createTemplate(data){
        var title = data.title;
        var heading = data.heading;
        var content = data.content;
        var htmlTemplate = `<html>
        <head>
            <title>${title}</title>
            
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
    return htmlTemplate;
}

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
    articleName = req.params.articleName
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter = 0;
app.get('/counter', function(req, res){
   counter = counter + 1;
   res.send(counter.toString());
   
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});



