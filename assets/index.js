$(function(){
	var $mc= $('#mc');
	var up=false, down=false, left=false, right=false;
	var inUp, inDown, inLeft, inRight;
	var height=$(window).height();
	var width=$(window).width();
	console.log(height+" "+width);
	$(document).keydown(function(ev){
		switch(ev.which){
		case 40:
			if(!down){
				inDown=	setInterval(
						function(){
							var top=parseFloat($mc.css("top"));
							if(top<=height-35-125){$mc.css("top", top+10);}
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
							if(left<=width-35-125){$mc.css("left", left+10);}
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