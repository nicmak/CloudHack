import React from 'react';
import { BarChart, LineChart } from 'react-easy-chart';
import { Line } from 'rc-progress';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           percent: props.percent 
        };
    }
    render() {
        return (<Line percent={this.state.percent} strokeWidth="10" strokeColor="#283255"/>)
    }
}

export default ProgressBar;

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
