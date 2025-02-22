var fs = require('fs');

fs.readFile('NASB.txt', function(error, data) {
	var AZ = [], logos = {};
	var I, J, line, L;
	var book, chapter, verse, text;

	AZ = data.toString().split('\n');

	for (I in AZ) {
		line = AZ[I];
		line = line.substring(0, line.length);
		L = line.split(' ');
		book = L[0];

		chapter = parseInt(L[1].split(':')[0]) - 1;

		verse = parseInt(L[1].split(':')[1]) - 1;

		delete L[0];
		delete L[1];
		text = L.join(' ').trim();

		if (!verse) {
			if (!chapter) logos[book] = [];

			logos[book][chapter] = [];
		}

		logos[book][chapter][verse] = text;
	}

	J = JSON.stringify(logos);
	fs.writeFile('NASB.json', J);
});
