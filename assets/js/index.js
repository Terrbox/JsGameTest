	var $mc= $('#mc');
	var height=$(window).height();
	var width=$(window).width();

	var bullet = function(){
		this.$bullet = $('<div></div>');
		this.$bullet
			.addClass("bullet")
			.css({
			top: parseFloat($mc.css('top'))+18,
			left: parseFloat($mc.css('left'))+15
		});
	};

$(function(){
	initController();
	
})