var feature;

var projection = d3.geo.azimuthal()
    .scale(zoom)
    .origin([-71.03, 42.37])
    .mode("orthographic")
    .translate([380, 450]);

var circle = d3.geo.greatCircle()
    .origin(projection.origin());

var scale = {
    orthographic: 380,
    stereographic: 380,
    gnomonic: 380,
    equidistant: 380 / Math.PI * 2,
    equalarea: 380 / Math.SQRT2
};

var path = d3.geo.path()
    .projection(projection);


var svg = d3.select("#globe").append("svg:svg")
    .attr("width", 800)
    .attr("height", 800)
    .on("dblclick", dblclick)
    .on("mousedown", mousedown);

var g = svg.append("g");

d3.json("simplified.geojson", function(collection) {

            g.append("g")
                .attr("id", "countries")
            g.append("g")
                .selectAll("path")
                .data(collection.features)
                .enter().append("svg:path")
                .attr("d", clip)
                .attr("id", function(d) {
                    return d.properties.ISO3;
                })
                .attr("fill", function(d) {
                    return d.properties.FILL;
                }) //change color and make clickable if data on this country exists
                .on("mouseover", pathOver)
                .on("mouseout", pathOut)
                .on("dblclick", dblclick)
                .on("mousewheel.zoom", null)
                .on("click", click);

            feature = svg.selectAll("path");

            feature.append("svg:title")
                .text(function(d) {
                    return d.properties.NAME;
                });

            //here is where I want to be able to click a country name in the div and have the globe rotate to that country:

            $('.represented').click(function() {
                var countryabbrev = $(this).attr('id');
                getCentroid(d3.select("#" + countryabbrev));
                //projection.origin(projection.invert(#path.centroid(#CAN)));
                projection.origin(getCentroid(d3.select("#" + countryabbrev)));
                refresh(1500);
                //showPerson(countryabbrev)
            });

            function getCentroid(selection) {
                // get the DOM element from a D3 selection
                // you could also use "this" inside .each()
                var element = selection.node(),
                    // use the native SVG interface to get the bounding box
                    bbox = element.getBBox();
                // return the center of the bounding box
                return [bbox.x + bbox.width / 2, bbox.y + bbox.height / 2];
            }
          }