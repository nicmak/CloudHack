import React from 'react';
import { Line } from 'rc-progress';

class ProgressChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           percent: props.percent 
        };
    }
    render() {
        return (<Line percent={this.state.percent} strokeWidth="4" strokeColor="#283255"/>)
    }
}

export default ProgressChart;
