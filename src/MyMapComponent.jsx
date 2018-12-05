import { withScriptjs, withGoogleMap, GoogleMap, Marker, KmlLayer } from "react-google-maps"
import React from 'react';
// {true && <Marker position={{ lat: 49.2832844, lng : -123.1248047 }}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 49.2832844, lng : -123.1248047}}
  >
  <KmlLayer
    url="http://wroms.whiterockcity.ca/opendata/GIS/Data/Spatial/Other/KML/GVRD.kmz"
    options={{ preserveViewport: true }}
    onClick={() => console.log('shit')}
    onMouseEnter={() => console.log('hover shit')}
   />
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