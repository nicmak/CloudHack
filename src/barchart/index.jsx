import React from 'react';
import { BarChart, LineChart } from 'react-easy-chart';





class VerticalChart extends React.Component {
    render() {
    return (<BarChart data= {[
        {town: 'Macondo', pop: 24},
        {town: 'Wonderland', pop: 47},
        {town: 'Oz', pop: 66},
        {town: 'Gondor', pop: 17}
       ]}
    />)
    }
}

module.exports = { VerticalChart };

// const width = 500;
// const height = 200;
// const textWidth = 115;
// const textGutter = 10;
// const barMargin = 5;

// const popThreshold = 50; // not needed?

// const xScale  = d3.scaleLinear()
//     .domain([0, 100])
//     .range([textWidth, width-textWidth]);

// const yScale = d3.scaleLinear()
//     .domain([0, ])
