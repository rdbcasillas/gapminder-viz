/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 2 - Gapminder Clone
*/

d3.json("data/data.json").then(function(data){

    const w = 800;
    const h = 800;

    const svg = d3.select("#chart-area")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    // margin convention
    const margin = { left: 20, right: 20, top: 20, bottom: 20 };

    const innerWidth = w - margin.left - margin.right
    const innerHeight = h - margin.top - margin.bottom

    const g = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");




                
})
