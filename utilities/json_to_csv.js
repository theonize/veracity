var ESV = require('./ESV.js');
var fs = require('fs');
var line = '', output = '';
var OS = require('os');
var output = {};
var C=0, V=0;

for (var book in Logos) {
	output[book] = [];

	for (var chapter in Logos[book]) {
		C = parseInt(chapter);

		output[book][C] = [];

		for (var verse in Logos[book][chapter]) {
			V = parseInt(verse);

			output[book][C][V] = Logos[book][chapter][verse];
		}
	}
}

fs.writeFile('ESV.json', JSON.stringify(output));
