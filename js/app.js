var dataset = [];

for (var i = 0; i < 40; i ++) {
    var newNumber = Math.round(Math.random() * 200);
    dataset.push(newNumber);
}

var svgWidth = 1400;
var svgHeight = 600;
var svgPadding = 20;

//Create SVG element
var svg = d3.select("body")
      .append("svg")
      .attr("fill", "#333")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

//svg.selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append("rect")
//   .attr("x", function(d, i) {
//      return i * (svgWidth / dataset.length);
//   })
//   .attr("y", function(d){
//      return svgHeight - d;
//    })
//   .attr("fill", "#ff33cc")
//   .attr("width", barWidth - barPadding)
//   .attr("height", function(d){
//      return d * 10;
//  });
//
//svg.selectAll("text")
//    .data(dataset)
//    .enter()
//    .append("text")
//    .text(function(d) {
//      return d;
//    })
//    .attr("x", function(d, i){
//      return i * (svgWidth / dataset.length) + 5;
//    })
//    .attr("font-size", "14px")
//    .attr("fill", "white")
//    .attr("y", function(d){
//      return svgHeight - (d * 1) + 15;
//    });



var multiDimensionalArray = [];
var numDataPoints = 70;
var xRange = Math.random() * 2000;
var yRange = Math.random() * 2000;
for (var i = 0; i < numDataPoints; i++) {
    var newNumber1 = Math.round(Math.random() * xRange);
    var newNumber2 = Math.round(Math.random() * yRange);
    multiDimensionalArray.push([newNumber1, newNumber2]);
}



var xScale = d3.scale.linear()
          .domain([0, d3.max(multiDimensionalArray, function(d) { return d[0]; })])
          .range([svgWidth - svgPadding, svgPadding]);

var yScale = d3.scale.linear()
          .domain([0, d3.max(multiDimensionalArray, function(d) { return d[1]; })])
          .range([svgHeight - svgPadding, svgPadding]);

var rScale = d3.scale.linear()
              .domain([0, d3.max(multiDimensionalArray, function(d) {
                return d[1];
              })])
              .range([2,5]);


svg.selectAll("circle")
          .data(multiDimensionalArray)
          .enter()
          .append("circle")
          .attr("cx", function(d) {
            return xScale(d[0]);
          })
          .attr("cy", function(d) {
            return yScale(d[1]);
          })
          .attr("r", function(d) {
            return rScale(d[0]);
          });

svg.selectAll("text")
    .data(multiDimensionalArray)
    .enter()
    .append("text")
    .text(function(d) {
      return d[0] + "," + d[1];
    })
    .attr("font-size", "11px")
    .attr("fill", "red")
    .attr("x", function(d) {
      return xScale(d[0]);
    })
    .attr("y", function(d) {
      return yScale(d[1]) ;
    });




