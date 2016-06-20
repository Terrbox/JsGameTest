$(function(){
	var $mc= $('#mc');
	var up=false, down=false, left=false, right=false;
	var inUp, inDown, inLeft, inRight;

	$(document).keydown(function(ev){
		switch(ev.which){
		case 40:
			if(!down){
				inDown=	setInterval(
						function(){
							$mc.css("top", parseFloat($mc.css("top"))+10);
						}, 15);
					down=true;
				}

			break;

		case 38:
			if(!up){
				inUp=	setInterval(
						function(){
							$mc.css("top", parseFloat($mc.css("top"))-10);
						}, 15);
					up=true;
				}
			break;

		case 39:
			if(!right){
				inRight=  setInterval(
						function(){
							$mc.css("left", parseFloat($mc.css("left"))+10);
						}, 15);
					right=true;
				}
			break;

		case 37:
			if(!left){
				inLeft=	setInterval(
						function(){
							$mc.css("left", parseFloat($mc.css("left"))-10);
						}, 15);
					left=true;
				}
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
})