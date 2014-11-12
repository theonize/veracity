$(function() {
	$('#logos').jstree({
		'core' : {
			'data' : {
				"url" : "./word.json",
				"dataType" : "json" // needed only if you do not supply JSON headers
			}
		}
	});
});

/*
$(document).ready(function() {
	var bookSelect = $('#book');
	var chapterSelect = $('#chapter');
	var logos = $('#logos');
	var verseSelect = $('#verse');

	for (var book in Bible) {
		bookSelect.append('<option val="' + book + '">' + book + '</option>');
	}

	bookSelect.change(function() {
		var book = bookSelect.val();

		for (var chapter in Bible[book]) {
			chapterSelect.append('<option val="' + chapter + '">' + chapter + '</option>');
		}
	});

	chapterSelect.change(function() {
		var book = bookSelect.val();
		var chapter = +chapterSelect.val();

		for (var verse in Bible[book][chapter]) {
			verseSelect.append('<option val="' + verse + '">' + verse + '</option>');
		}
	});

	verseSelect.change(function() {
		var book = bookSelect.val();
		var chapter = +chapterSelect.val();
		var verse = verseSelect.val();

		logos.html(Bible[book][chapter][verse]);
	});

	for (var book in Bible) {
		$('#logos').append('<ol>' + book + '</ol>');
	}
});
*/
