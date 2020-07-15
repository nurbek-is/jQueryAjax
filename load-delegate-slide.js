$(function() {
	var $blogTitles = $('#blog>ul>li>h3:first-child');
	$blogTitles.each(function() {
		$.data(
			this, 
			'content',  
			$('<div class="ajaxContent" style="display:none" />')
			.insertAfter(this)
			);
	});
	 $('#blog>ul').delegate('li>h3:first-child', 'click', function(e) {
			e.preventDefault();
			var $content = $.data(this, 'content');
			$content.load(
				$(e.target).attr('href').replace('#', ' #'),
				function() {
					$content.slideDown(500, 'linear');
					$content
						.parent()
						.siblings()
						.find('div.ajaxContent:visible')
						.slideUp(500, 'linear');
				}
			);
		});
});