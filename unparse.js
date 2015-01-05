var book, chapter, verse, text;
var chapter_num = 0, verse_num = 0;
var logos = '', list = '', html = '';
var book_cell = '', chapter_cell = '', verse_cell = '';
var fs = require('fs');

require('./NASB.js');

list += '<ul id="book_list">';
logos += '<table>';

for (book in AZ) {
	list += '<li><a class="book_selector" data-book="' + book + '" href="#">' + book + '</a></li>';

	for (chapter in AZ[book]) {
		chapter_num = +chapter;
		verse_cell = '';

		for (verse in AZ[book][chapter]) {
			text = AZ[book][chapter][verse];
			verse_num = +verse + 1;
			verse_cell += '<span class="verse" data-verse="' + verse_num + '">' + text + '</span>';
		}

		++chapter_num;
		chapter_cell = '<td class="chapter">' + chapter_num + '</td>';

		verse_cell = '<td class="verses">' + verse_cell + '</td>';

		logos += '<tr class="book" data-book="' + book + '">';
		logos += book_cell;
		logos += chapter_cell;
		logos += verse_cell;
		logos += '</tr>';
	}
}

list += '</ul>';
logos += '</table>';

html = list + logos;

fs.writeFile("./NASB.html", html);
