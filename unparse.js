var book, chapter, verse, text;
var logos = '', list = '', html = '';
var book_cell = '', chapter_cell = '', verse_cell = '';
var fs = require('fs');

require('./NASB.js');

logos += '<table>';
list += '<table cellpadding="5" cellspacing="1">';

for (book in AZ) {
	list += '<tr class="book_selector" data-book="' + book + '"><td>' + book + '</td></tr>';

	for (chapter in AZ[book]) {
		verse_cell = '';

		for (verse in AZ[book][chapter]) {
			text = AZ[book][chapter][verse];
			verse_cell += '<span class="verse" data-verse="' + verse + '">' + text + '</span>';
		}

		chapter_cell = '<td class="chapter">' + chapter + '</td>';

		verse_cell = '<td class="verses">' + verse_cell + '</td>';

		logos += '<tr class="book" data-book="' + book + '">';
		logos += book_cell;
		logos += chapter_cell;
		logos += verse_cell;
		logos += '</tr>';
	}
}

logos += '</table>';
list += '</table>';

html = '<table><tr><td>' + list + '</td><td>' + logos + '</td></tr></table>';

fs.writeFile("./NASB.html", html);
