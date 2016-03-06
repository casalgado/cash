

d3.select(".box").transition()
    .styleTween("background-color", function() { return d3.interpolate("blue", "red"); })
    .styleTween("height", function() { return d3.interpolate("10px", "618px"); })
    .duration(3000);

    
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());
