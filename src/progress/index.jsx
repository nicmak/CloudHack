import React from 'react';
import { BarChart} from 'react-easy-chart';
import { Line } from 'rc-progress';

class VerticalChart extends React.Component {
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

export default VerticalChart;
