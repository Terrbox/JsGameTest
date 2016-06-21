function initController(){
	var up=false, down=false, left=false, right=false;
	var inUp, inDown, inLeft, inRight;
	
	$(document).keydown(function(ev){
			switch(ev.which){
			case 40:
				if(!down){
					inDown=	setInterval(
							function(){
								var top=parseFloat($mc.css("top"));
								if(top<=height-35-80){$mc.css("top", top+10);}
							}, 15);
						down=true;
					}

				break;

			case 38:
				if(!up){
					inUp=	setInterval(
							function(){
								var top=parseFloat($mc.css("top"));
								if(top>=35){$mc.css("top", top-10);}
							}, 15);
						up=true;
					}
				break;

			case 39:
				if(!right){
					inRight=  setInterval(
							function(){
								var left=parseFloat($mc.css("left"));
								if(left<=width-35-80){$mc.css("left", left+10);}
							}, 15);
						right=true;
					}
				break;

			case 37:
				if(!left){
					inLeft=	setInterval(
							function(){
								var left=parseFloat($mc.css("left"));
								if(left>=35){$mc.css("left", left-10);}
							}, 15);
						left=true;
					}
				break;

			case 83:
				var $bullet = new bullet().$bullet;

				$(document.body).append($bullet);

				var interval= setInterval(
							function(){
								var top=parseFloat($bullet.css('top'));
								if(top <height+50){
									$bullet.css('top', top+15);
								}else{
									clearInterval(interval);
									$bullet.remove();
								}
							}, 15);

				break;

			case 87:
				var $bullet = new bullet().$bullet;

				$(document.body).append($bullet);

				var interval= setInterval(
							function(){
								var top=parseFloat($bullet.css('top'));
								if(top >0-50){
									$bullet.css('top', top-15);
								}else{
									clearInterval(interval);
									$bullet.remove();
								}
							}, 15);

				break;

			case 65:
				var $bullet = new bullet().$bullet;

				$(document.body).append($bullet);

				var interval= setInterval(
							function(){
								var left=parseFloat($bullet.css('left'));
								if(left >0-50){
									$bullet.css('left', left-15);
								}else{
									clearInterval(interval);
									$bullet.remove();
								}
							}, 15);

				break;

			case 68:
				var $bullet = new bullet().$bullet;

				$(document.body).append($bullet);

				var interval= setInterval(
							function(){
								var left=parseFloat($bullet.css('left'));
								if(left <width+50){
									$bullet.css('left', left+15);
								}else{
									clearInterval(interval);
									$bullet.remove();
								}
							}, 15);

				break;
			}
			

		});


		$(document).keyup(function(ev){
			switch(ev.which){
			case 40:
				clearInterval(inDown);
				down=false;
				break;

			case 38:			
				clearInterval(inUp);
				up=false;
				break;

			case 39:
				clearInterval(inRight);
				right=false;
				break;

			case 37:
				clearInterval(inLeft);
				left=false;
				break;
			}
		});
}