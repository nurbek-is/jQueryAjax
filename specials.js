$(function() {
	var $sel = $('#specials select[name=day]');
	var $content = $('<div />').insertAfter('#specials form');
	$sel.change(function(e) {
		var day = $(this).val();
		if (day) {
			$.ajax('data/specials.json', {
				dataType:'json',
				success: function(data) {
					var special = data[day];
					if (special) {
						$content
							.empty()
							.append($('<h1>' + special.title + '</h1>')
								.css('color', special.color))
							.append('<img src="' + special.image + '" />' +
											'<p>' + special.text + '</p>');
					}
				}
			});
		} else {
			$content.empty();
		}
	});
	$('#specials li.buttons').remove();
});