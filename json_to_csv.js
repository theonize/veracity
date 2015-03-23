var ESV = require('./ESV.js');
var fs = require('fs');
var line = '', output = '';
var OS = require('os');

for (var book in Logos) {
	for (var chapter in Logos[book]) {
		for (var verse in Logos[book][chapter]) {
			line = book + ',' + chapter + ',' + verse + ',' + Logos[book][chapter][verse]; + OS.EOL;
			fs.appendFileSync('ESV.csv', line);
		}
	}
}