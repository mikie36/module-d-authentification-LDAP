//var ldap = require('ldapjs');
var Promise = require('promise');

var method = Ldap.prototype;

function Ldap() {
//	this.adresseAD = ""; //<--AD    ldap/192.168.1.5'// <--domino
//	this.client = ldap.createClient({
//		url: this.adresseAD
//	});
}



method.authentication = function(userName, password) {
	var test = "null";
	/*var bind = (function (client, userName, password) {
		return new Promise(function(fulfill, reject) {
			client.bind(userName, password, function (err) {
				if (err) {
					console.log(err);
					console.log('Access denied');
					test = "non";
					reject(test);
				} else {
					console.log('Authenticated');
					test = "oui";
					fulfill(test);
				}
			})
		})
	});

	var promise = bind(this.client, userName, password);
	return promise;*/

    return true;
	//console.log("fini").then(console.log("fini2"));

	//promiseInit(this.client).then(console.lol("fini"));

};

module.exports = Ldap;