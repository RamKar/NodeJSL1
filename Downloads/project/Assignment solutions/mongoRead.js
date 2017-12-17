const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/NodeJSAssignment');


const UserSchema = new mongoose.Schema({
   username: {
	type: String,
	unique: true
   },
   age: Number
});
var User=mongoose.model('User',UserSchema);

var user = new User();

user.username='NodeJS';
user.age=5;
user.save(function(err,data){
	
	User.find({}, function(err, doc) {
		 if(err)
			 console.log(err);
		console.log('Profile: ',doc);
	 });
	if(err)
		console.log(err);
	else
		console.log(data);
});//Objective j
