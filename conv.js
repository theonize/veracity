var word = {}
var html = '';
var fs = require('fs');

require('./ESV');

for (var book in Bible) {
	word[book] = [];
	for (var chapter in Bible[book]) {
		word[book][+chapter] = [];
		for (var verse in Bible[book][chapter]) {
			word[book][+chapter][+verse] = Bible[book][chapter][verse];
		}
		word[book][+chapter].splice(0,1);
	}
	word[book].splice(0,1);
}

html += '<ul>\n';
for (var book in word) {
	html += '<li>' + book + '</li>\n';
	html += chapterText(book);
}
html += '</ul>\n';

word = JSON.stringify(word);
fs.writeFile("./word.json", word);
fs.writeFile("./word.html", html);

/////////////////////////////

function chapterText(book) {
	var result = '';

	result += '<ol>\n';
	for (var chapter in word[book]) {
		result += '<li></li>\n';
		result += verseText(book, chapter);
	}
	result += '</ol>\n';

	return result;
}

function verseText(book, chapter) {
	var result = '';
	var text = '';

	result += '<ol>\n';
	for (var verse in word[book][chapter]) {
		text = word[book][chapter][verse];
		result += '<li>' + text + '</li>\n';
	}
	result += '</ol>\n';

	return result;
}
