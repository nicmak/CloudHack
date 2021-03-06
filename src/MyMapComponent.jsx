import { withScriptjs, withGoogleMap, GoogleMap, Marker, KmlLayer } from "react-google-maps"
import React from 'react';
// {true && <Marker position={{ lat: 49.2832844, lng : -123.1248047 }}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 49.2832844, lng : -123.1248047}}
  >
  <KmlLayer
    url="https://raw.githubusercontent.com/nicmak/CloudHack/master/src/maps/burnaby.kml"
    options={{ preserveViewport: true }}
    onClick={() => props.city('Burnaby')}
    onMouseEnter={() => console.log('Burnaby Color Change')}
   />
  <KmlLayer
    url="https://raw.githubusercontent.com/nicmak/CloudHack/master/src/maps/n_van1.kml"
    options={{ preserveViewport: true }}
    onClick={() => props.city('North-Vancouver')}
    onMouseEnter={() => console.log('N Van Color Change')}
  />
  <KmlLayer
    url="https://raw.githubusercontent.com/nicmak/CloudHack/master/src/maps/n_van2.kml"
    options={{ preserveViewport: true }}
    onClick={() => props.city('North-Vancouver')}
    onMouseEnter={() => console.log('N Van 2 Color Change')}
   />
  <KmlLayer
    url="https://raw.githubusercontent.com/nicmak/CloudHack/master/src/maps/richmond.kml"
    options={{ preserveViewport: true }}
    onClick={() => props.city('Richmond')}
    onMouseEnter={() => console.log('Richmond Color Change')}
  />
  <KmlLayer
    url="https://raw.githubusercontent.com/nicmak/CloudHack/master/src/maps/vancouver.kml"
    options={{ preserveViewport: true }}
    onClick={() => props.city('Vancouver')}
    onMouseEnter={() => console.log('Vancouver Color Change')}
  />
  <KmlLayer
    url="https://raw.githubusercontent.com/nicmak/CloudHack/master/src/maps/w_vancouver.kml"
    options={{ preserveViewport: true }}
    onClick={() => props.city('West-Vancouver')}
    onMouseEnter={() => console.log('W Vancouver Color Change')}
  />
  </GoogleMap>
))

class ReactMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Vancouver"
    }
  }
  render() {
    return (
      <MyMapComponent
        renderMarkers={this.props.renderMarkers}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBQh7wSDWnhc7DvtEMtAZKdgs-Idfjg4pA"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        city={this.props.city}
      />
    )
  }
}

export default ReactMap;