var Ldap = require('./models/Ldap');
var jwt = require('jwt-simple');

var ldap = new Ldap();
var sercet = "helloword";

module.exports = function(app) {

	//app.post('/', function(req, res){
//    //console.log(req.body.userName + "@" +req.body.passWord);
//    //var userName = req.body.userName;
//    bar.send('auth' , req.body.userName + "@" +req.body.passWord);
//    var html = 'requete envoyé <br>' +
//        '<a href="/">Try again.</a>';
//    res.send(html);
//});

	app.post('/login', function(req, res) {
		var userName = req.body.username;
		var userword = req.body.password;
		ldap.authentication(userName,userword).then (function(rep) {
		        console.log(rep);
			res.secret = sercet;
		}).catch(function(res) {
		    console.log(res + "cghdfghdh");
			res.secret = sercet;
		});
		//res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
