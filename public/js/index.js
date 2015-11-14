

var ready = function() {

	$(document).ready(function() {
		$('[data-toggle="tooltip"]').tooltip({
			delay: { "show": 200, "hide": 100 }
		})
	  	$(".square").on("click", function() {
	  		$(this).tooltip('hide')
	  		$(".square").removeClass("selected")
	  			$(this).addClass("selected")

	  		if ($(this).attr("id") == "sq1") {
	  			$("#response").html("Good Choice!")
	  		} else if ($(this).attr("id") == "sq2") {
	  			$("#response").html("I hope they have Mint")
	  		} else {
	  			$("#response").html("Proceed at your own Risk")
	  		} 
	    })

	  	$("#title").on("click", function() {
	  		$(".square").removeClass("selected")
	  		$("#response").html(" ")
	    })

	}); 
};


$(document).ready(ready);
$(document).on('page:load', ready);

