

var doMove = function() {
	
	setInterval(function() {
     	$('#car').css('margin-left', '+=3');
	}, 20);

	
	$(".example_block").on("click", function() {
		var timer = 0
		var frame = function() {
			timer++
			$(".example_block").css('left', '+=3')
			if (timer == 100)  // check finish condition
      		clearInterval(id)
		}
		
		var id = setInterval(frame, 20);
	});

	

};




$(document).ready(doMove);
$(document).on('page:load', ready);



