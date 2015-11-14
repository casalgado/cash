

var doMove = function() {

	setInterval(function() {
     	$('#car').css('margin-left', '+=5');
	}, 20);
	
	function animate(opts) {
	  
	  var start = new Date   

	  var id = setInterval(function() {
	    var timePassed = new Date - start
	    var progress = timePassed / opts.duration

	    if (progress > 1) progress = 1
	    
	    var delta = opts.delta(progress)
	    opts.step(delta)
	    
	    if (progress == 1) {
	      clearInterval(id)
	    }
	  }, opts.delay || 10)
	  
	}

	function move(element, delta, duration) {
	  var to = 1000
	  
	  animate({
	    delay: 10,
	    duration: duration || 1000, // 1 sec by default
	    delta: delta,
	    step: function(delta) {
	      element.css('left', to*delta + 'px')   
	    }
	  })
	  
	}

	function bounce(progress) {
	  for(var a = 0, b = 1, result; 1; a += b, b /= 2) {
	    if (progress >= (7 - 4 * a) / 11) {
	      return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
	    }
	  }
	}

	function makeEaseOut(delta) {  
	  return function(progress) {
	    return 1 - delta(1 - progress)
	  }
	}

	var bounceEaseOut = makeEaseOut(bounce)

	$(".example_block").on("click", function() {
		move($(".example_block"), bounceEaseOut, 1500)
	});

};



$(document).ready(doMove);
$(document).on('page:load', ready);

