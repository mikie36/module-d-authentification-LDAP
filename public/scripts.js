$(document).ready(function() {
	$('.champ').on('click', function(){
	});
});

$('#goalban').click(function() {
	$.get("goalbanpro.html", function( data ) {
		$('#test').html(data);
	});

	$('#test').toggle(800);

});