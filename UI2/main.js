$(function() {
	$('#book_list_ctrl').click(function() {
		$('#book_list').toggle();
	});

	$('a.book_selector').click(function() {
console.dir($(this));
		var this_book = $(this).data('book');
console.log(this_book);
		var selector = 'tr[data-book="' + this_book + '"]'

		$('tr.book').hide();
		$(selector).show();
	});
});
