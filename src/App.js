import React, { Component } from 'react';
import './App.css';
import ReactMap from './MyMapComponent';
import { Marker } from "react-google-maps"
import { VerticalChart } from "./barchart";

const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBQh7wSDWnhc7DvtEMtAZKdgs-Idfjg4pA'
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addressResults: [] 
    }
  }

  testClient = () => {
    googleMapsClient.geocode({
      address: '1600 Amphitheatre Parkway, Mountain View, CA'
    }, function(err, response) {
      if (!err) {
        const { results } = response.json
        console.log(response.json.results);
        this.setState({ addressResults: results})
      }
    });
  }

  makeMarkers = () => {
    return this.state.addressResults.map((address) => {
      const latLong = address.geometry.location
      return (
        <Marker position={latLong} />
      )
    })
  }

  componentDidMount() {
    // this.testClient();
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="logo-container">
            <img src="logo.svg" alt="Team Carp logo" />
          </div>
          <div className="heading" ><h1>Greater Vancouver housing stats</h1></div>
        </div>
        <div className="left-panel">
          <div>
            <VerticalChart/>
          </div>
          <h3>Housing patterns</h3>
          <p>Radios to go here 2006 and 2016</p>
        </div>
        <div className="right-panel">
          <div className="map-container">
            <ReactMap renderMarkers={this.makeMarkers} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
