function initEnemies(){

	setInterval(function(){
		var $enemy = new enemy().$enemy;
		$(document.body).append($enemy);

		var interval = setInterval(function(){

			var left= parseFloat($enemy.css('left'));
      var top= parseFloat($enemy.css('top'));
      var eHeight = $('.enemy').height();
      var eWidth = $('.enemy').width();

      $enemy.css("left", left+10);

      if(top <0-eHeight || top > height+eHeight || left <0 -eWidth || left > width+eWidth){
                  $enemy.remove();
                  clearInterval(interval);
        }

      $.each($('.bullet'),function(){
      	if(collision($(this), $enemy)){
          clearInterval(interval);
          $enemy.remove();
      		$(this).remove();
        }
      });
      
		}, 10);

	}, 400);

}