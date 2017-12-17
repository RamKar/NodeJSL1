var x;
process.argv.forEach((val, index) => {
  if(index===2){
	  x=val; 
  }
});
var fs=require('fs');
fs.readFile('./'+x, 'utf8', function (err,data) {
	  if (err) {
		return console.log(err);
	  }
	  console.log('File content: \n',data);
	});// Objective e