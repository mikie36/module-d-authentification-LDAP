// set up ======================================================================
var express  = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app      = express();					// mongoose for mongodb
var port  	 = process.env.PORT || 80; 					// set the port
//var database = require('./config/database'); 			// load the database config



app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
//app.use(express.logger('dev')); 						// log every request to the console
app.use(bodyParser());
//app.use(bodyParser.urlencoded());
app.use(cookieParser());							// pull information from html in POST


// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("The server is ruinnig on port : " + port);
