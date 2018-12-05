import React from 'react';
import { BarChart } from 'react-easy-chart';

class ProgressChart extends React.Component {
    render() {
        return (
            <BarChart data= {[
                {x: 'Macondo', y: 24, color: '#283255'},
                {x: 'Wonderland', y: 47, color: '#283255'},
            ]}
        />)
    }
}

export default ProgressChart;
