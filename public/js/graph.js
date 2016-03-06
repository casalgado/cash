var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
	
var x = d3.scale.ordinal() // Learned about ordinal scales
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear() // Learned about linear scales
	.range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10, "%");

var chart = d3.select(".chart")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
  .append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	 
	d3.tsv("/js/data1.tsv", type, function(error, data) { // learned how to reference data on tsv
		x.domain(data.map(function(d) { return d.letter; }));
	  	y.domain([0, d3.max(data, function(d) { return d.value; })]);

	  	chart.append("g")
	    	.attr("class", "x axis")
	    	.attr("transform", "translate(0," + height + ")")
	    	.call(xAxis);

	    chart.append("g")
	      	.attr("class", "y axis")
	      	.call(yAxis)
	      .append("text")
	    	.attr("transform", "rotate(-90)")
	    	.attr("y", 6)
	    	.attr("dy", ".71em")
	    	.style("text-anchor", "end")
	    	.text("Frequency");

	  	chart.selectAll(".bar")
	      .data(data)
	    .enter().append("rect") 
	      .attr("class", "bar")
	      .attr("x", function(d) { return x(d.letter); })
	      .attr("y", function(d) { return y(d.value); })
	      .attr("height", "0px")
	      .attr("width", x.rangeBand())
	      .attr('transform', "translate(0,0)") // need work making them bottom up
	      .transition()
	      .ease('linear', 1, .3)
  		  .attr("height", function(d) { return height - y(d.value); })
  		  .duration(1000)
  		  .attr('transform', 'translate(0, 0)')
  		  .delay(function(d, i) { return i  * 100; })
  		  ;
	});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}
