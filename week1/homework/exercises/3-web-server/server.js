/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http');
var fs = require('fs');

//create a server
let server = http.createServer(function (req, res) {
	// YOUR CODE GOES IN HERE
	if(req.url === "/") {
		fs.readFile('./index.html', function (err, data) {
			if (err) {
					throw err; 
			}       
			res.writeHeader(200, {"Content-Type": "text/html"});  
			res.write(data);  
			res.end();  
		});
	} else if(req.url === "/index.js") {
		fs.readFile('./index.js', function (err, data) {
			if (err) {
					throw err;
			}
			res.writeHeader(200, {"Content-Type": "application/javascript"});
			res.write(data);
			res.end();
		});
	}	else if(req.url === "/style.css") {
		fs.readFile('./style.css', function (err, data) {
			if (err) {
					throw err;
			}
			res.writeHeader(200, {"Content-Type": "text/css"});
			res.write(data);
			res.end();
		});
	}
	
});

server.listen(3000); // The server starts to listen on port 3000