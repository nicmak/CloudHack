import React from 'react';
import { BarChart } from 'react-easy-chart';

class VerticalChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           owned: props.owned,
           rented: props.rented
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
                {x: 'Owned', y: this.state.owned, color: '#283255'},
                {x: 'Rented', y: this.state.rented, color: 'rgba(40,50,85,0.50)'},
            ]}
        />)
    }
}

export default VerticalChart;