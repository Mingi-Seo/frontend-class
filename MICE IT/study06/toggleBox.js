$(document).ready(function()
{
	var $w_width = $(window).width();
	var $w_height = $(window).height();
	var $box = $('#box');

	$box.on('click', function(event)
	{
		if ($box.hasClass('toggle'))
			toggle(10, 10);

		else
			toggle($w_height - $box.height(), $w_width - $box.width());

		$box.toggleClass('toggle');
	});
});

function toggle(top, left)
{
	$('#box').animate(
	{
		top: top,
		left: left
	}, 2000);
}