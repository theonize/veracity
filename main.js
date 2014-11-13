$(function() {
	$('li:has(~ol)').click(function() {
		$(this).next().toggle(100, function() {
			highlightLines();
		});
	});

	highlightLines();

	// when a search term is entered highlight the word and it's parent and grandparent
});

function highlightLines() {
	$('li')
	.removeClass('highlight')
	.filter('li:not(:hidden):even')
	.addClass('highlight');
}
