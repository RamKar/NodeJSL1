const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/NodeJS-L1Assignment');

// define the User model schema
const UserSchema = new mongoose.Schema({
   username: {
	type: String,
	unique: true
   },
   age: Number
});
var User=mongoose.model('User',UserSchema);


var create=function(){
var user = new User();
user.username='NodeJS';
user.age=5;


user.save(function(err,data){
	
	if(err)
		console.log('Already created with same username: NodeJS');
	else
		console.log('Following document saved: ',data);
});

var user1 = new User();
user1.username='NodeJS2';
user1.age=10;
user1.save(function(err,data){
	
	if(err)
		console.log('Error: ',err);
	else
		console.log('Following document saved: ',data);
});//Create
}
var read=function(){
User.find({}, function(err, doc) {
	 if(err)
		 console.log('Error: ',err);
	 else
		 console.log('Documents: ',doc);
});//Read
}

var newAge = 15;

var update=function(){
User.findOneAndUpdate({'username':'NodeJS'}, { $set: { age: 20 }}, {upsert:true, new: true}, function(err, doc){
    if (err)
		console.log('Error: ',err);
	else
		console.log('Document updated: ',doc);
});//Update
}

var remove=function(){
User.findOneAndRemove({'username':'NodeJS2'}, function(err,doc) {
    if (err)
		console.log(err);
	if(doc)
		console.log('Document deleted with the following content: ', doc);
    else
		console.log('The document with username: NodeJS2, is not present in the db');
});//Delete
}
//Objective k


process.argv.forEach((val, index) => {
	if(index===2){
	  if(val==='create'){
		 create();
	  }
	  else if(val==='read'){
		  read();
	  }
	  else if(val==='update'){
		  update();
	  }
	  else if(val==='delete'){
		  remove();
	  }
	  else{
		  console.log(' Input create to save the document in db \n Input read to read the document in db \n Input update to update the document in db \n Input delete to delete the document in db')
	  }
	}
});