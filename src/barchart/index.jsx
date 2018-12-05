import React from 'react';
import { BarChart } from 'react-easy-chart';
// import { Line } from 'rc-progress';

class ProgressChart extends React.Component {
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

export default ProgressChart;
