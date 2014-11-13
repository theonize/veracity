$(function() {
	$('li:has(~ol)').click(function() {
		console.log('click');
		$(this).next().toggle();
	});

	$('#logos').children('li:even').css("background-color", "#efe");

	// when a search term is entered highlight the word and it's parent and grandparent
});
