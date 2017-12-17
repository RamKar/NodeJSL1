var stdin = process.openStdin();
var fs = require("fs");

stdin.addListener("data", function(d) {
    
	fs.readFile('./'+d.toString().trim(), 'utf8', function (err,data) {
	  if (err) {
		return console.log(err);
	  }
	  console.log('File content: \n',data);
	});
  });// Objective e