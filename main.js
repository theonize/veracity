$(function() {
	var search = $('#search');

	// this selects all but the leaf-nodes of the nested lists
	// nfo: the outer list is a ul, inner lists are ol
	var allListItems = $('li')

	var innerListItems = allListItems.filter(':has(~ol)');

	highlightLines();

	innerListItems.click(function() {
		$(this).next().toggle(100, function() {
			highlightLines();
		});
	});

	search.change(function() {
		// when a search term is entered highlight the word and it's parent and grandparent
		var searchTerm = search.val();

		var query = ":contains('" + searchTerm + "')";

		var items = allListItems.filter(":contains('" + searchTerm + "')");

		allListItems.removeClass('search');

		items
		.addClass('search');

		items
		.parent()
		.prev()
		.addClass('search');

		items
		.parent()
		.parent()
		.prev()
		.addClass('search');
	});
});

function highlightLines() {
	$('li')
	.removeClass('highlight')
	.filter('li:not(:hidden):even')
	.addClass('highlight');
}
