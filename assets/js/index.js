	var $mc= $('#mc');
	var height=$(window).height(), width=$(window).width();
	var enWidth = 80, enHeight=80;

	var randomEnemyPos = function(){
		this.pos =[{
		top: Math.random()*height,
		left: 0
	}, 
	{
		top: 0,
		left: Math.random()*width
	}, 
	{
		top: Math.random()*height,
		left: width-enWidth
	}, 
	{
		top: height-enHeight,
		left: Math.random()*width
	}];
};

	var bullet = function(){
		this.$bullet = $('<div class="bullet"></div>');
		this.$bullet
			.css({
			top: parseFloat($mc.css('top'))+18,
			left: parseFloat($mc.css('left'))+15
		});
	};

	var enemy = function(){
		this.$enemy = $('<div class="enemy"></div>');
		var random= new randomEnemyPos().pos[/*Math.round(Math.random()*3)*/0];

		this.$enemy
			.css(random);

	};


$(function(){
	initController();
	initEnemies();
	
})