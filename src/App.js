import React, { Component } from 'react';
import './App.css';
import ReactMap from './MyMapComponent';
import { Marker } from "react-google-maps"

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
        <ReactMap renderMarkers={this.makeMarkers} />
      </div>
    );
  }
}

export default App;
