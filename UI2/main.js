$(function() {
	$('#book_list_ctrl').click(function() {
		$('#book_list').toggle();
	});

	$('a.book_selector').click(function() {
		var this_book = $(this).data('book');
		var selector = 'tr[data-book="' + this_book + '"]';

		$('tr.book').hide();
		$(selector).show();
		$('#book_list').toggle();
		$('#book_list_ctrl').html(this_book);
	});

	$('td.chapter').click(function() {
		var verses = $(this).next('td.verses');

		verses.toggle();
	});

	$('span.verse').hover(function() {
		$(this).toggleClass('highlight');
	});
});
