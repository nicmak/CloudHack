import React from 'react';
import { BarChart } from 'react-easy-chart';

class VerticalChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    
    render() {
        return (
            <BarChart 
            width={250}
            height={300}
            axisLabels={{x: 'Occupancy', y: 'Cost'}}
            axes
            data= {[
                {x: 'Owned', y: 900, color: '#283255'},
                {x: 'Rented', y: 1200, color: 'rgba(40,50,85,0.50)'},
            ]}
        />)
    }
}

export default VerticalChart;
