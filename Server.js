var express=require('express');
var app=express();
var  mysql=require('mysql');
var bodyParser = require('body-parser');
var sys = require ('util'),
url = require('url'),
http = require('http'),
qs = require('querystring');
//app.use(express.bodyParser());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
/*var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

connection.connect();
*/
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/JS'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res){
//res.render('index.html');
/*connection.query('SELECT * from users', function(err, rows, fields) {
	  if (err) throw err;
    var data=[];
    var title1='Welcome to ejs';
    for(i=0;i<rows.length;i++)
      {
        data.push({'id':rows[i].id,'name':rows[i].name,'email':rows[i].email,'mobile':rows[i].mobile});
      }
      var list=[];
      for(var j=0;j<10;j++)
      {
        list.push({'id':j});
      }
      res.render('data.html',{title:title1,data:data,list:list});

	});*/
var title1='name';
res.render('data.html',{title:title1});
});
/*app.get('/result',function(req,res){
  connection.query('SELECT * from users', function(err, rows, fields) {
    if (err) throw err;
    var data=[];
    var title1='Welcome to ejs';
    for(i=0;i<rows.length;i++)
      {
        data.push({'id':rows[i].id,'name':rows[i].name,'email':rows[i].email,'mobile':rows[i].mobile});
      }
      var list=[];
      for(var j=0;j<10;j++)
      {
        list.push({'id':j});
      }
      //res.render('data.html',{title:title1,data:data,list:list});
       res.writeHead(200, { 'Content-Type': 'application/json' }); 
      res.end(JSON.stringify(data));
  }); 
});
app.get('/login',function(req,res){
	var title='Login page';
	res.render('login.html',{title});
});
app.post('/loginaction',function(req,res){
	//req.body.username+' '+req.body.pass
	var username=req.body.username;
	var password=req.body.pass;
	res.render('result.html',{username,password});
});
/*app.get('/search',function(req,res){
connection.query('SELECT * from users', function(err, rows, fields) {
	  if (err) throw err;
    var data=[];
    var title1='Welcome to ejs';
    for(i=0;i<rows.length;i++)
      {
        data.push({'id':rows[i].id,'name':rows[i].name,'email':rows[i].email,'mobile':rows[i].mobile});
      }
      var list=[];
      for(var j=0;j<10;j++)
      {
        list.push({'id':j});
      }
      res.render('data.html',{title:title1,data:data,list:list});
	});
});*/

var server=app.listen(3000,function(){
console.log("We have started our server on port 3000");
});
