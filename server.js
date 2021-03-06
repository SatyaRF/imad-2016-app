var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one' : {
	title: 'Article-one | Satyadeep Sharma',
	heading: 'Article one',
	date: '18 Sep, 2016',
	content: 
	`<p>This is the content of Article one. It's exciting to use Git.This is the content of Article one. It's exciting to use Git.This is the content of Article one. It's exciting to use Git.This is the content of Article one. It's exciting to use Git.This is the content of Article one. It's exciting to use Git.
	</p>
	<p>This is the content of Article one. It's exciting to use Git.This is the content of Article one. It's exciting to use Git.This is the content of Article one. It's exciting to use Git.This is the content of Article one. It's exciting to use Git.This is the content of Article one. It's exciting to use Git.
	</p>
	<p>This is the content of Article one. It's exciting to use Git.This is the content of Article one. It's exciting to use Git.This is the content of Article one. It's exciting to use Git.This is the content of Article one. It's exciting to use Git.This is the content of Article one. It's exciting to use Git.
	</p>`},
'article-two' : {
	title: 'Article-two | Satyadeep Sharma',
	heading: 'Article two',
	date: '18 Sep, 2016',
	content: 
	`<p>This is the content of Article two. It's exciting to use Git.
	</p>`},
'article-three' : {
	title: 'Article-three | Satyadeep Sharma',
	heading: 'Article two',
	date: '18 Sep, 2016',
	content: 
	`<p>This is the content of Article three. It's exciting to use Git.
	</p>`}	
}

function createTemplate(data){
	var title = data.title;
	var heading = data.heading;
	var date = data.date;
	var content = data.content;

var htmlTemplate = `
	<!DOCTYPE html>
	<html>
	<head>
		<title>${title}</title>
		<meta name="viewport" content="width=device with, initail-scale=1" />
		<link href="/ui/style.css" rel="stylesheet" />
	</head>
	<body>
	<div class="container">
	<div>
		<a href="/">Home</a>
		<!-- <a href="/article-two">Test</a> -->
	</div>
	<hr>
	<h3>${heading}</h3>
	<div>
		${date}
	</div>
	<div>
		${content}
	</div>
	</div>
	</body>
	</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter = 0;
app.get('/counter', function(req, res){
	counter = counter + 1;
	res.send(counter.toString());
});

app.get('/:articleName', function(req, res){
	// articleName == artcile-one
	// articles[articleName] == {} content object for article one
	var articleName = req.params.articleName; // used to extract article name and index into articles object
    res.send(createTemplate(articles[articleName]));
 });

// /:articleName where colon is a feature of express framework which match this part of the path and converts that into a variable
// app.get('/article-one', function(req, res){
//    res.send(createTemplate(articleOne));
// });

// // app.get('/article-two', function(req, res){
// //    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
// // });

// // app.get('/article-three', function(req, res){
// //    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
// // });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/home-bg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'home-bg.jpg'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
