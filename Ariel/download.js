var parseString = require('xml2js').parseString;
var request = require('request');

require('./ariel.js');

var I = 0;
var link = "";


for (I in ariel) {
	link = ariel[I];
	request(link, function (error, xml, body) {
		// parseString(xml, function(error, result) {
		// 	console.dir(result);
		// });
	});
}
