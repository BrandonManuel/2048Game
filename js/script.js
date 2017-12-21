// global variables / attributes
var svg = d3.select('svg');
var svgWidth = +svg.attr('width');
var svgHeight = +svg.attr('height');
/**
    gridSize variable sets gridSize x gridSize as the size of the game board
    (number of squares is gridSize x gridSize)
    TODO: allow user to choose this within some reasonable range
**/
var gridSize = 4;
/**
    spacing is how far apart vertical lines are from each other
    and horizontal lines are from each other
**/
var spacing = svgWidth / gridSize;

/**
    translate svg by some x and y if desired
**/
var svgTranslateX = 0;
var svgTranslateY = 0;
svg.attr('transform', 'translate('+ svgTranslateX + ',' + svgTranslateY + ')');

var lineGroup = svg.append('g')
    .attr('class', 'gridLines');

// horizontal grid lines
for (var i = 1; i < gridSize; i++) {
    lineGroup.append('line')
        .attr('x1', svgTranslateX)
        .attr('y1', svgTranslateY + spacing * i)
        .attr('x2', svgTranslateX + svgWidth)
        .attr('y2', svgTranslateY + spacing * i)
        .attr('stroke-width', 1)
        .attr('stroke', 'black');    
}

// vertical grid lines
for (var i = 1; i < gridSize; i++) {
    lineGroup.append('line')
        .attr('x1', svgTranslateX + spacing * i)
        .attr('y1', svgTranslateY)
        .attr('x2', svgTranslateX + spacing * i)
        .attr('y2', svgTranslateY + svgHeight)
        .attr('stroke-width', 1)
        .attr('stroke', 'black');    
}
