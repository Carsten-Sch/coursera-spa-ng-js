var data = [
    [0.5, 3, 10, "EQ", "USD",1],
    [1, 3.44, 15, "FI", "USD",2],
    [5, 4, 15, "FI", "CHF",3],
    [1.7, 2, 20, "PE", "Europe",4],
    [2, 2.2, 17, "PE", "Asia",5],
    [4.5, 3, 10, "EQ", "BRA",6],
    [14, 0.44, 30, "FI", "EUR",7],
    [15, 4, 15, "FI", "CH",8],
    [2.7, 2, 20, "PE", "FRA",9],
    [21, 2.2, 17, "PE", "UK",10]
];

var data2 = [
    [5.5 , 3 , 5.5 , 2.5 , 3 , 4]
];

drawMChart = function(){
  var margin = {
          top: 20,
          right: 15,
          bottom: 60,
          left: 60
      },
      width = 460 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

  var x = d3.scale.linear()
      .domain([0, 10])
      .range([0, width]);

  var y = d3.scale.linear()
      .domain([0, d3.max(data, function(d) {
          return d[1];
      }) * 1.3])
      .range([height, 0]);



  var chart = d3.select('.content2')
      .append('svg:svg')
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom)
      .attr('class', 'chart')


  var main = chart.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'main')

  // draw the x axis
  var xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom');

  main.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .attr('class', 'main axis date')
      .call(xAxis);

  // draw the y axis
  var yAxis = d3.svg.axis()
      .scale(y)
      .orient('left');

  main.append('g')
      .attr('transform', 'translate(0,0)')
      .attr('class', 'main axis date')
      .call(yAxis);

  var g = main.append("svg:g");

  g.append("svg:ellipse")
    .attr("cx","10")
    .attr("cy","10")
    .attr("rx","125")
    .attr("ry","60")
    .style("fill-opacity", .2)
    .style("stroke", "red")
    .style("fill", "lightblue")
    .attr("transform", "rotate(-30, 300, -250)");
    // transform attributes rotate (angle minus counter clockwise, more moves down, minus moves right)


  g.selectAll("scatter-dots")
      .data(data2)
      .enter().append("svg:circle")
      .attr("cx", function(d, i) {
          return x(d[0]);
      })
      .attr("cy", function(d) {
          return y(d[1]);
      })
      .attr("r", 5)
      .style("fill", (78,127,186))
      .style("stroke", "red")
      .style("opacity", "0.8");

      g.selectAll("scatter-dots")
          .data(data2)
          .enter().append("svg:rect")
      .attr("x", function(d, i) {
          return x(d[2]);
      })
      .attr("y", function(d) {
          return y(d[3]);
      })
      .attr("width", 10)
      .attr("height", 10);

      g.selectAll("scatter-dots")
          .data(data2)
          .enter().append("svg:polygon")
      .style("fill", "yellow")
      .style("stroke", "blue")
      .style("stroke-width", "2")
      .attr("y", function(d) {
          return x(d[3]);
      })
      .attr("points", "110,130,115,120,120,130");


  };

drawChart = function(){
  var margin = {
          top: 20,
          right: 15,
          bottom: 60,
          left: 60
      },
      width = 460 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

  var x = d3.scale.linear()
      .domain([0, d3.max(data, function(d) {
          return d[0];
      })*1.3])
      .range([0, width]);

  var y = d3.scale.linear()
      .domain([0, d3.max(data, function(d) {
          return d[1];
      }) * 1.3])
      .range([height, 0]);

  d3.selectAll('svg').remove();

  var chart = d3.select('.content')
      .append('svg:svg')
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom)
      .attr('class', 'chart')


  var main = chart.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'main')

  // draw the x axis
  var xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom');

  main.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .attr('class', 'main axis date')
      .call(xAxis);

  // draw the y axis
  var yAxis = d3.svg.axis()
      .scale(y)
      .orient('left');

  main.append('g')
      .attr('transform', 'translate(0,0)')
      .attr('class', 'main axis date')
      .call(yAxis);

  var g = main.append("svg:g");

  // g.append("svg:ellipse")
  //   .attr("cx","10")
  //   .attr("cy","10")
  //   .attr("rx","125")
  //   .attr("ry","60")
  //   .style("fill-opacity", .2)
  //   .style("stroke", "red")
  //   .style("fill", "green")
  //   .attr("transform", "rotate(-30, 300, -250)");
  //   // transform attributes rotate (angle minus counter clockwise, more moves down, minus moves right)


  g.selectAll("scatter-dots")
      .data(data)
      .enter().append("svg:circle")
      .attr("cx", function(d, i) {
          return x(d[0]);
      })
      .attr("cy", function(d) {
          return y(d[1]);
      })
      .attr("r", function(d) {
          return d[2];
      })
      .style("fill", (78,127,186))
      .style("stroke", "red")
      .style("opacity", "0.8")
      .on("mouseout", function(d) {
          tooltip.style("display", "none");
      })
      .on("mouseenter", function(d) {
          tooltip.style("display", "inline");
          var xPosition = d3.mouse(this)[0];
          var yPosition = d3.mouse(this)[1];
          tooltip.attr("transform", "translate(" + ((d3.event.pageX)-60) + "," + (yPosition -10 ) + ")");
          tooltip.select("text").text(" " + d[3] + " ");
      })
      .on("mousemove", function(d) {
          var xPosition = d3.mouse(this)[0];
          var yPosition = d3.mouse(this)[1];
          tooltip.attr("transform", "translate(" + ((d3.event.pageX)-60) + "," + (yPosition -10 )+ ")");
          tooltip.select("text").text(" " + d[3] +"/" + d[4] +" ");
      })
      .on("click", function(d) {
          tooltip.style("display", "none");
          d3.select(this).style("fill", "orange");
          showInputs(d[0], d[1], d[2], d3.select(this),d,d[5]);
      });
      // Prep the tooltip bits, initial display is hidden
      var tooltip = d3.select("svg").append("g")
          .attr("class", "mytooltip")
          .style("display", "inline");

      tooltip.append("rect")
          .attr("width", 100)
          .attr("height", 20)
          .attr("fill", "#F0F0F0")
          .style("opacity", "0.5");

      tooltip.append("text")
          .attr("x", 50)
          .attr("dy", "1.2em")
          .style("text-anchor", "middle")
          .attr("font-size", "12px")
          .attr("font-weight", "bold");

      tooltip.style("display", "none");

};
drawChart();
drawMChart();




 //<ellipse fill="#FFF" cx="100" cy="100" rx="75" ry="40" transform="rotate(30,100,100)" stroke="#666"></ellipse>


showInputs = function(x, y, r, d3Object,myD,objId) {
    myScope = angular.element(document.getElementById('1234')).scope();

    myScope.xValue = x;
    myScope.yValue = y;
    myScope.rValue = r;

    if (myScope.d3Object != null && myScope.objId != objId) {
        myScope.d3Object.style("fill", (78,127,186));
        myScope.d3Object = null;
        myScope.objId=objId;

        console.log("x, y, r in new object clicked "+x+" "+y+" "+r);

    }
     else if (myScope.d3Object != null && myScope.objId == objId) {
        myScope.d3Object.style("fill", (78,127,186));
        myScope.d3Object = null;
        myScope.objId=null;
        myScope.xValue = 0;
        myScope.yValue = 0;
        myScope.rValue = 0;
        myScope.showInputFields=false;
        console.log("x, y, r values in old object clicked "+myScope.xValue+" "+myScope.yValue+" "+myScope.rValue);
    }


    myScope.d3Object = d3Object;
    myScope.myD=myD;
    myScope.showInputFields = true;
    angular.element(document.getElementById('1234')).scope().$apply();

};
