import React, { Component } from 'react';
import './App.css';
import ReactMap from './MyMapComponent';
import Radio from '@tds/core-radio';
import Box from '@tds/core-box';
import Text from '@tds/core-text';
import { Marker } from "react-google-maps"

const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBQh7wSDWnhc7DvtEMtAZKdgs-Idfjg4pA'
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addressResults: [],
      year: "2006"
    };
    this.setChoice = this.setChoice.bind(this);
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

  setChoice(e) {
    console.log('event', e.target.value);
    this.setState({year: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="logo-container">
            <img src="logo.png" alt="Team Carp logo" />
          </div>
          <div className="heading" >
            <h1>Greater Vancouver - Housing patterns</h1>
            <hr className="horizontal" />
            <p>2006-2016</p>
          </div>
        </div>
        <div className="left-panel">
          <div className="padder">
            <h3>Housing patterns</h3>
            <p>Radios to go here 2006 and 2016</p>
            <Box tag="fieldset" between={2}>
              <legend>
                <Text bold size="medium">
                  View the data for:
                </Text>
              </legend>
              <Radio
                label="2006"
                name="years"
                value="2006"
                checked={this.state.year === '2006'}
                onChange={this.setChoice}
              />
              <Radio
                label="2016"
                name="years"
                value="2016"
                checked={this.state.year === '2016'}
                onChange={this.setChoice}
              />
            </Box>
          </div>
        </div>
        <div className="right-panel">
          <div className="padder">
            <div className="map-container">
              <ReactMap renderMarkers={this.makeMarkers} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
