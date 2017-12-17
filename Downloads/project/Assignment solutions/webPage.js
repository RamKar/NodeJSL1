var http = require("http");
var fs=require('fs');
var options = {
    host: 'www.facebook.co.in',
	port:'80',
	url:'/'
};

http.get(options, function (http_res) {
    // initialize the container for our data
    var data = "";

    // this event fires many times, each time collecting another piece of the response
    http_res.on("data", function (chunk) {
        // append this chunk to our growing `data` var
        data += chunk;
    });

    // this event fires *one* time, after all the `data` events/chunks have been gathered
    http_res.on("end", function () {
        // you can use res.send instead of console.log to output via express
        fs.writeFile('./download.html',data, function (err,data) {
		  if (err) {
			return console.log(err);
		  }
		  console.log('File content: \n',data);
		});
		console.log(data);
    });
});