import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from 'react';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 49.2832844, lng : -123.1248047}}
  >
    {true && <Marker position={{ lat: -34.397, lng: 150.644 }}
    /> }
  </GoogleMap>
))

class ReactMap extends React.Component {
  render() {
    return (
      <MyMapComponent
        renderMarkers={this.props.renderMarkers}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBQh7wSDWnhc7DvtEMtAZKdgs-Idfjg4pA"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

export default ReactMap;