
$('.modal-button').click(function() {
	var itemId = $(this).data('itemindex')   // gets index of item from data attribute in clickable element
	activeItem = itemObjects[itemId]         // set variable 'activeItem' to selected object


	$('.modal-title').html(activeItem['degpos']['spanish'])    // set modal title
    $("#deg-pos-title").html(degPosTitle(activeItem['category']))
    $("#deg-pos-content").html(activeItem['degpos']['spanish'])
    $("#mod-date-title").html(modDateTitle(activeItem['category']))
    $("#date-cont").html()
	$("#inst-title").html('Institución')


	$("#inst-cont").empty() // empty Institution section from previous click

	var institution = activeItem['institution']

	// Fills in Institution section
	if (Array.isArray(institution['name'])) {      // if name of institution is an Array
		var instName  = institution['name']        
		var instPlace = institution['place']       
		var instUrl   = institution['img_url']
		$("#inst-title").html('Instituciones')

		for(var i=0; i < institution['name'].length ; i++){
    		instHTML(instName[i], instPlace[i], instUrl[i]);
		}
		$(".single-inst").removeClass('hcenter').addClass('fleft')

	} else {
			instHTML(institution['name'], institution['place'], institution['img_url'])
	};

})

function instHTML (name, place, url) {
	var single    = $("<div>", {"class": "single-inst hcenter"});
	var instImg   = $("<img>", {src: url, "class": "inst-img"});
	var instDesc  = $("<h5>", {"class": "descriptions inst-desc"});
	var nameSpan  = $("<span>", {"class": ""}).html(function() {return name }) 
	var placeSpan = $("<span>", {"style": "font-size:80%;"}).html(function(){return place})
	var br	      = $("<br>")
	$("#inst-cont").append(single.append(instImg, instDesc.append(nameSpan, br, placeSpan)))
}

function degPosTitle(itemCategory) {
	if (itemCategory == 'education') { return 'Diploma' } else {return 'Cargo' }
}

function modDateTitle(itemCategory) {
	if (itemCategory == 'education') { return 'Fecha de Grado' } else {return 'Tiempo de Duración' }
}


// abreviations and variable names
// pos-deg = position or degree
// inst = institution
// cont = container