var express=require('express');
var app=express();
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/'));
app.get('/', function(req,res){
	res.render('index.html');
});

app.listen('3000',function(){
	console.log('Server is listening on port: 3000');
});//Objective h