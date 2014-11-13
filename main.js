$(function() {
	$('li:has(~ol)').click(function() {
		$(this).next().toggle();
		highlightLines();
	});

	highlightLines();

	// when a search term is entered highlight the word and it's parent and grandparent
});

function highlightLines() {
	$('li:not(:hidden):even').css("background-color", "#efe");
}
