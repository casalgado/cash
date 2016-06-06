//code.stephenmorley.org
function Colour(){this.getIntegerRGB=function(){var a=this.getRGB();return{r:Math.round(a.r),g:Math.round(a.g),b:Math.round(a.b),a:a.a}};this.getPercentageRGB=function(){var a=this.getRGB();return{r:100*a.r/255,g:100*a.g/255,b:100*a.b/255,a:a.a}};this.getCSSHexadecimalRGB=function(){var a=this.getIntegerRGB(),h=a.r.toString(16),k=a.g.toString(16),a=a.b.toString(16);return"#"+(2==h.length?h:"0"+h)+(2==k.length?k:"0"+k)+(2==a.length?a:"0"+a)};this.getCSSIntegerRGB=function(){var a=this.getIntegerRGB();return"rgb("+a.r+","+a.g+","+a.b+")"};this.getCSSIntegerRGBA=function(){var a=this.getIntegerRGB();return"rgba("+a.r+","+a.g+","+a.b+","+a.a+")"};this.getCSSPercentageRGB=function(){var a=this.getPercentageRGB();return"rgb("+a.r+"%,"+a.g+"%,"+a.b+"%)"};this.getCSSPercentageRGBA=function(){var a=this.getPercentageRGB();return"rgba("+a.r+"%,"+a.g+"%,"+a.b+"%,"+a.a+")"};this.getCSSHSL=function(){var a=this.getHSL();return"hsl("+a.h+","+a.s+"%,"+a.l+"%)"};this.getCSSHSLA=function(){var a=this.getHSL();return"hsla("+a.h+","+a.s+"%,"+a.l+"%,"+a.a+")"};this.setNodeColour=function(a){a.style.color=this.getCSSHexadecimalRGB()};this.setNodeBackgroundColour=function(a){a.style.backgroundColor=this.getCSSHexadecimalRGB()}}RGBColour.prototype=new Colour;function RGBColour(a,h,k,n){function m(a,b){if(0==b)var d=0;else switch(a){case c.r:d=(c.g-c.b)/b*60;0>d&&(d+=360);break;case c.g:d=(c.b-c.r)/b*60+120;break;case c.b:d=(c.r-c.g)/b*60+240}return d}var l=void 0===n?1:Math.max(0,Math.min(1,n)),c={r:Math.max(0,Math.min(255,a)),g:Math.max(0,Math.min(255,h)),b:Math.max(0,Math.min(255,k))},b=null,d=null;this.getRGB=function(){return{r:c.r,g:c.g,b:c.b,a:l}};this.getHSV=function(){if(null==b){var a=Math.max(c.r,c.g,c.b),d=a-Math.min(c.r,c.g,c.b);b={h:m(a,d),s:0==a?0:100*d/a,v:a/2.55}}return{h:b.h,s:b.s,v:b.v,a:l}};this.getHSL=function(){if(null==d){var a=Math.max(c.r,c.g,c.b),b=a-Math.min(c.r,c.g,c.b),f=a/255-b/510;d={h:m(a,b),s:0==b?0:b/2.55/(.5>f?2*f:2-2*f),l:100*f}}return{h:d.h,s:d.s,l:d.l,a:l}}}HSVColour.prototype=new Colour;function HSVColour(a,h,k,n){var m=void 0===n?1:Math.max(0,Math.min(1,n)),l=(a%360+360)%360,c=Math.max(0,Math.min(100,h)),b=Math.max(0,Math.min(100,k)),d=null,e=null;this.getRGB=function(){if(null==d){if(0==c)var a=b,f=b,g=b;else{var e=l/60-Math.floor(l/60),h=b*(1-c/100),k=b*(1-c/100*e),e=b*(1-c/100*(1-e));switch(Math.floor(l/60)){case 0:a=b;f=e;g=h;break;case 1:a=k;f=b;g=h;break;case 2:a=h;f=b;g=e;break;case 3:a=h;f=k;g=b;break;case 4:a=e;f=h;g=b;break;case 5:a=b,f=h,g=k}}d={r:2.55*a,g:2.55*f,b:2.55*g}}return{r:d.r,g:d.g,b:d.b,a:m}};this.getHSV=function(){return{h:l,s:c,v:b,a:m}};this.getHSL=function(){if(null==e){var a=(2-c/100)*b/2;e={h:l,s:c*b/(50>a?2*a:200-2*a),l:a};isNaN(e.s)&&(e.s=0)}return{h:e.h,s:e.s,l:e.l,a:m}}}HSLColour.prototype=new Colour;function HSLColour(a,h,k,n){var m=void 0===n?1:Math.max(0,Math.min(1,n)),l=(a%360+360)%360,c=Math.max(0,Math.min(100,h)),b=Math.max(0,Math.min(100,k)),d=null,e=null;this.getRGB=function(){if(null==d)if(0==c)d={r:2.55*b,g:2.55*b,b:2.55*b};else{var e=50>b?b*(1+c/100):b+c-b*c/100,f=2*b-e;d={r:(a+120)/60%6,g:a/60,b:(a+240)/60%6};for(var g in d)d.hasOwnProperty(g)&&(d[g]=1>d[g]?f+(e-f)*d[g]:3>d[g]?e:4>d[g]?f+(e-f)*(4-d[g]):f,d[g]*=2.55)}return{r:d.r,g:d.g,b:d.b,a:m}};this.getHSV=function(){if(null==e){var a=c*(50>b?b:100-b)/100;e={h:l,s:200*a/(b+a),v:a+b};isNaN(e.s)&&(e.s=0)}return{h:e.h,s:e.s,v:e.v,a:m}};this.getHSL=function(){return{h:l,s:c,l:b,a:m}}};


// Create snap environment with background

  var s = Snap("#svg") // environment
  var image = s.image("images/roundworld.svg", 0, 0, 1170, 600) // background

// Global Variable Declarations

  // Size variables
  default_radius = 3
  default_color = "rgb(7, 116, 184)"

  // variable to change the filter_by_duration direction
  direction = true

  // Button Variables
  btn_height = 540

  // Set interval variable to be able to stop animation when default_button is clicked
  tIntervID = null

// Constructor for a Destination object from city data

var Destination = function(city, country, month, year, duration, latitude, longitude, notes) {
    this.city = city;
    this.country = country;
    this.month =  month;
    this.year =  year;
    this.duration =  duration;
    this.latitude  = parseInt(latitude);
    this.longitude = parseInt(longitude);
    this.notes = notes;
    this.artwork = s.circle(longitude, latitude, default_radius).attr({ fill: default_color })
};


// Create Destination objects using constructor and city data from external file. 
// Returns an array of objects.


  function createObjects(array){
    destinations = [];
    array.forEach(function(city){
      var a = new Destination(city[0], city[1], city[2], city[3], city[4], city[5], city[6])
      destinations.push(a)
    });
    return destinations
  }

// Draw Initial SVG's based on object array, returns an array SVG artworks.

  function drawCities(array){
    drawings = []
    array.forEach(function(destination){

      var bigCircle   = s.circle(destination.longitude, destination.latitude, default_radius)
                .attr({
                    fill: default_color
                })
      
      drawings.push(bigCircle)
    })
    return drawings
  }


// Next: Functions to change appearance of SVG artworks based on different events. 

// Sets the size and color of an svg element, to be used in the ForEach call. 

  function set_size(item, radius, animation){
    item.artwork.animate({r: radius}, animation)
  }

  function set_color(item, color, animation){
    item.artwork.animate({fill: color}, animation)
  }

// Displays svg artworks based on cities duration attribute.
// The function looks inefficient. There is room for improvement.

  function filter_by_duration(item, duration, radius, speed, direction){ 
    if (direction == true) {
      if (item.duration > duration) {
        item.artwork.animate({
          r: radius
        }, speed)
      } else {
        item.artwork.animate({
          r: "0.5"
        }, speed)
      };
    } else {
      if (item.duration < duration) {
        item.artwork.animate({
          r: default_radius
        }, speed)
      } else {
        item.artwork.animate({
          r: "0.5"
        }, speed)
      };
    }
  }

// Function to show size of svg artwork relative to duration attribute.



  function log_scale(number, limit, max){
    return Math.log2(number) * limit / max
  }

  function size_by_duration(item, animation){
    scaled = log_scale(item.duration, 15, 10)
    if (scaled == 0) { scaled = 1 } // dirty solution with room for improvement
    item.artwork.animate({
      r: scaled
    }, animation)
  }

  function heat_scale(number, limit, max){ // not yet implemented
    if (number > 100) {
      number = ((number/max) + 1) * 45
    }
    return (number/270) * limit
  }

  function color_by_duration(item, animation){
    var duration = item.duration
    var multiplier = Math.floor(duration / 100)
    var scale = Math.max(0, (duration - duration*multiplier))
    var result = scale > 0 ? scale :  Math.floor((multiplier/7 + 1) * 45);
    var scaled = ((result/80) * 210)
    var test = heat_scale(item.duration, 730, 210)
    color = new HSVColour(230 - scaled, 100, 100).getCSSIntegerRGB()
    item.artwork.animate({
      fill: color,
      r: 8
    }, animation)
  }


// Show size relative to time

  var show_by_time = function(array, year, month){
    // Traverse array to set starting radius
    array.map(function(item){
      if (year == 1986 & month == 3) {
        item.artwork.animate({
          r: "0.5"
        }, 500)
      }
    
    })
    // Traverse array and animate city that corresponds to both month and year. 
    array.map(function(item){
      if (item.year == year & item.month == month) {
        item.artwork.attr({
          r: "8"
        })
        .animate({
          r: "4"
        }, 500)
      }
    
    })
  }


// Let the fun begin.

// First, use Papaparse to load data from remote csv file
// All other functionality will be inside this function

Papa.parse("https://dl.dropboxusercontent.com/u/34948257/city_data.csv", {
  download: true,
  complete: function(results) {

  var destinations = createObjects(results.data)

  var black_font = { fontFamily: "Inconsolata", cursor: "pointer", fontSize: "12", fill: "black" }
  var light_font = { fontFamily: "Inconsolata", cursor: "pointer", fontSize: "12", fill: "lightgray" }


  s.text(170, 535, "SHOW CITIES VISITED FOR ").attr(black_font).attr("cursor", "-webkit-grab")
  



  // This button resets all changes and returns artworks to default state. 

  var reset_button    =   s.text(142, 479, "RESET ALL")
                  .attr(black_font)
                .click(function(){

                  // Reset Animation

                  if (tIntervID != null){clearInterval(tIntervID)}
                  time_button.attr({text: "START ANIMATION"})
                  month_text.attr({text: ""})
                  year_text.attr({text: ""})

                  // Reset filter button colors

                  filter_buttons.map(function(btn){
                    btn.artwork.attr("fill", "black")
                  })

                  // Reset city size and color

                  destinations.map(function(item){
                    set_size(item, default_radius, 500)
                    set_color(item, default_color, 500)
                    active_filter_button.attr({
                      width: 0
                    })
                  })

                  // Reset popup text

                  popup_text_1.attr({text: ""})
                popup_text_2.attr({text: ""})
                })


  // The following buttons are to filter cities by time.
  // The purpose is to show only cities that have been visited
  // fore "more" or "less" than a specific period of time.
  // The current active button will be determined by the use of a background.

  // There are 4 buttons of this type, to write DRY code, we first
  // need a constructor for these buttons:

  // Button Constructor

                   //how to allow infinte number of arguments or properties?
  var FilterButton = function(xcoord, ycoord, text_content, data1, data2, data3, data4){ 
    this.xcoord = xcoord;
    this.ycoord = ycoord;
    this.text_content = text_content;
    this.artwork = s.text(xcoord, ycoord, text_content).attr({
      fontFamily: "Inconsolata",
      fontSize:   "12",
      fill:       "black",
      cursor:     "pointer"
    })
    this.data1 = parseInt(data1)
    this.data2 = parseInt(data2)
    this.data3 = parseInt(data3)
    this.data4 = parseInt(data4)
  }

  // Data for each of the 4 buttons:

  filter_buttons_data = [
  //   0:x    1:y    2:text     3:time  4:radius 5:width of background
    ["385", "535", "1 WEEK"  ,"8"    ,"4"      ,"45"],
    ["435", "535", "2 WEEKS" ,"25"   ,"6"      ,"49"],
    ["485", "535", "4 MONTHS","120"  ,"8"      ,"55"],
    ["540", "535", "1 YEAR"  ,"365"  ,"8"      ,"43"]
  ]

  // Function to draw each button

  var draw_buttons = function(array){
    btns = []
    array.map(function(item){
      var btn = new FilterButton(item[0], item[1], item[2], item[3], item[4], item[5], item[6])
      btns.push(btn)
    })
    return btns
  }

  // Button Funciontality:

  // Background must be drawn first

  var active_filter_button    = s.rect(383, btn_height - 16, 0, 14)
                .attr({
                  fill: "black"
                })    

  // Draw other Buttons

  filter_buttons = draw_buttons(filter_buttons_data)

  // For each...

  filter_buttons.map(function(btn){

    // on click...

    btn.artwork.click(function(){

      // turn other buttons "inactive"
      filter_buttons.map(function(btn){
        btn.artwork.attr(light_font)
      })

      // move background to this to communicate "active" state
      active_filter_button.attr({
        x: btn.xcoord - 3,
        width: btn.data3
      })

      // filter destinations
      destinations.map(function(item){
        filter_by_duration(item, btn.data1, btn.data2, 500, direction)
      })
    })
  })

    

  // The next button toggles the "more than" - "less than" filter

  // again background must be drawn first.

  var filter_background    = s.rect(313, btn_height - 16, 63, 14)
                .attr({
                  fill: "black"
                })            

  var toggle_filter         = s.text(317, btn_height - 5, "MORE THAN")
                .attr(light_font)

                // for on click animation

                .mousedown(function(){ 
                      filter_background.attr({x: "314", y: btn_height - 15, width:"61", height:"12"})
                    })
                    .mouseup(function(){
                      filter_background.attr({x: "313", y: btn_height -16, width:"63", height:"14"})
                    })

                    // on click...

                .click(function(){

                  // reset radius of cities

                  destinations.map(function(item){
                      set_size(item, default_radius, 500)
                    })

                    // reset filter buttons text

                    filter_buttons.map(function(btn){
                      btn.artwork.attr(black_font)
                    })

                    // remove filter background 

                    active_filter_button.attr({
                      width: 0
                    })

                    // change text and filter direction

                    if (direction == false) {
                      filter_background.attr("fill", "black")
                      toggle_filter.attr({fill: "lightgray", text: "MORE THAN"})
                    } else {
                      filter_background.attr("fill", "white")
                      toggle_filter.attr({fill: "black", text: "LESS THAN"})
                    }
                    direction = !direction
                    
                  })

  

  // Next are buttons to change artwork appeareance based on duration of visit
        
  s.text(680, 535, "SHOW DURATION OF VISIT BY: ").attr(black_font).attr("cursor", "-webkit-grab")

  // Button to color cities based on duration of visit

  var color_button  =   s.text(855, 535, "COLOR")
                  .attr(black_font)
                  .attr("cursor", "pointer")
                .click(function(){
                  destinations.map(function(item){
                    color_by_duration(item, 500)
                  })
                })

  // Button to size cities based on duration of visit

  var size_button  =   s.text(910, 535, "SIZE")
                  .attr(black_font)
                  .attr("cursor", "pointer")
                .click(function(){
                  destinations.map(function(item){
                    size_by_duration(item, 500)
                  })
                })


  // The following button is to generate an animation of the visited cities.
  
  // To position in environment

  axpos = 583
  aypos = 565

  month_text = s.text(axpos-10, aypos, "").attr(black_font).attr("cursor", "-webkit-grab")
  year_text = s.text(axpos+50, aypos, "").attr(black_font).attr("cursor", "-webkit-grab")

  var time_button         =   s.text(axpos, aypos, "START ANIMATION")
                  .attr(black_font)
                .click(function(){
                  start_year = 1986
                  current_month = 2
                  show_by_time(destinations, 1986)
                  time_button.attr({text: ""})
                  tIntervID = setInterval(function(){
                    current_month = (current_month%12)+1 // this method could be better
                    if (start_year == 1989) {start_year += 10} 
                    if (current_month == 1) {start_year += 1}
                    show_by_time(destinations, start_year, current_month)
                    month_text.attr({text: "month: " + current_month})
                    year_text.attr({text: "year: " + start_year})
                    if (start_year >= 2017){ 
                      clearInterval(tIntervID)
                      time_button.attr({text: "START ANIMATION"})
                      month_text.attr({text: ""})
                      year_text.attr({text: ""})
                    }
                  } , 100 )
                  
                })


// Hover in and out functionality


  popup = s.rect(300,300,100,000)
  popup_text_1 = s.text(60,300).attr(black_font).attr("cursor", "-webkit-grab")
  popup_text_2 = s.text(60,315).attr(black_font).attr("cursor", "-webkit-grab")

  var hov_in = function(svg, destination){
    this.artwork.attr("cursor", "pointer")
      .animate({
        "fill-opacity": 0.5,
        stroke: "lightgray",
      },
      50
    )
    popup.attr({
      x: "100",
      y: "300",
      width: "50",
      height: "00",
    })
    popup_text_1.attr({
      text: "City: " + this.city + ", " + this.country
    })
    if (this.city == "Barranquilla"){
      popup_text_2.attr({
        text: "Hometown"
      })
    } else {
      popup_text_2.attr({
        text: "Duration of visit: " + this.duration + " days"
      })
    }
  }

  var hov_out = function(){
    this.animate({
        "fill-opacity": 1,
        stroke: "none"
      },
      50
    )
    popup.attr("height", "000")
  }



  destinations.map(function(item){
    item.artwork.hover(hov_in.bind(item), hov_out)
  })


  }
});

