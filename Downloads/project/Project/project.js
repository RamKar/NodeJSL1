var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req,res){
	res.render('index.html');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/NodeJSAssignment-L1');


const UserSchema = new mongoose.Schema({
   username: {
	type: String,
	unique: true
   },
   age: Number,
   subject: String
});
var User=mongoose.model('User',UserSchema);

app.post('/', function(req,res){
var user = new User();
user.username=req.body.username;
user.age=req.body.age;
user.subject=req.body.subject;
user.save(function(err,data){	
	if(err)
		User.find({}, function(err, doc) {
		 if(err)
			 res.send(404).json(err);
		 else{
			res.status(400).json({
			message: 'Username is already present in the db',
			doc: doc
			});
		 }
		});
	else
		res.status(200).json({
			message: 'Student is registered in the db',
			data: data
		});
	 });
});


app.listen('3000',function(){
	console.log('Server is listening on port: 3000');
});
