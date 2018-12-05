import React, { Component } from 'react';
import './App.css';
import ReactMap from './MyMapComponent';
import Radio from '@tds/core-radio';
import Box from '@tds/core-box';
import Text from '@tds/core-text';
import { Marker } from "react-google-maps"
import ProgressChart from "./progress";
import VerticalChart from './barchart';

const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBQh7wSDWnhc7DvtEMtAZKdgs-Idfjg4pA'
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addressResults: [],
      year: "2006",
      activeClick: 'oneYear'
    };
    this.setChoice = this.setChoice.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(activeClick) {
    console.log('activeClick', activeClick);
    this.setState({activeClick: activeClick});
  }

  setChoice(e) {
    console.log('event', e.target.value);
    this.setState({year: e.target.value});
  }

  render() {
    console.log('activeClick', this.state.activeClick);
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
            <div className="tabs">
              <div value="oneYear" className={`tab-label one-year-label ${this.state.activeClick}`} onClick={() => this.handleClick("oneYear")}><p>One year</p></div>
              <div value="trends" className={`tab-label trends-label ${this.state.activeClick}`} onClick={() => this.handleClick("trends")}><p>Trends</p></div>
            </div>
            <h3>Housing patterns</h3>
            <p>Select a year to see a dataset:</p>
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
            {this.state.activeClick === "oneYear" && (
            <div>
              {this.state.year === "2006" && 
                (<div className="data-panel">
                <Box between={3}>
                  <Text bold size="medium">Median household income</Text>
                  <Text bold size="large">100,000k</Text>
                  <Text bold size="medium">Segmentation by types</Text>
                  <ProgressChart percent="60"/>
                  <Text bold size="medium">Median price</Text>
                  <VerticalChart />
                </Box>
              </div>)
              }
              {this.state.year === "2016" && 
              (<div className="data-panel">
                <Box between={3}>
                  <Text bold size="medium">Median household income</Text>
                  <Text bold size="large">100,000k</Text>
                  <Text bold size="medium">Segmentation by types</Text>
                  <ProgressChart percent="60"/>
                  <Text bold size="medium">Median price</Text>
                  <VerticalChart />
                </Box>
              </div>)}
            </div>)
            }
            {this.state.activeClick === "trends" && (
              <div className="data-panel">
                <Box between={3}>
                  <Text bold size="medium">Median household income</Text>
                  <Text bold size="large">100,000k</Text>
                  <Text bold size="medium">Segmentation by types</Text>
                  <ProgressChart percent="60"/>
                  <Text bold size="medium">Median price</Text>
                  <VerticalChart />
                </Box>
              </div>
              )
            }
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
