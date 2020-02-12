import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'components/map/Marker';
import AutoComplete from 'components/map/AutoComplete';
import { API_KEY } from 'apiKey';

class PlagueMap extends Component {
  state = {
    data: {
      positions: [
        { lat: 52.230948, lng: 21.015608 },
        { lat: 52.230948, lng: 21.015608 },
        { lat: 52.230948, lng: 21.015608 },
        { lat: 52.230947, lng: 21.015608 },
        { lat: 52.230947, lng: 21.015608 },
        { lat: 52.230947, lng: 21.015608 },
        { lat: 52.230948, lng: 21.015608 },
        { lat: 52.230948, lng: 21.015608 },
        { lat: 52.230948, lng: 21.015608 },
        { lat: 52.230947, lng: 21.015608 },
        { lat: 52.230947, lng: 21.015608 },
        { lat: 52.230947, lng: 21.015608 },
        { lat: 52.230527, lng: 21.013516 },
        { lat: 52.232834, lng: 21.015265 },
        { lat: 52.232834, lng: 21.015265 },
        { lat: 52.234553, lng: 21.016268 },
        { lat: 52.237165, lng: 21.018735 },
        { lat: 52.249449, lng: 21.01438 },
        { lat: 52.231368, lng: 21.00319 },
        { lat: 52.239245, lng: 20.995126 },
        { lat: 52.239245, lng: 20.995126 },
        { lat: 52.239245, lng: 20.995126 },
        { lat: 52.239243, lng: 20.995126 },
        { lat: 52.239243, lng: 20.995126 },
        { lat: 52.239243, lng: 20.995126 },
        { lat: 52.239243, lng: 20.995126 },
      ],
      options: {
        radius: 20,
        opacity: 5,
      },
    },
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    places: [],
    center: { lat: 52.239243, lng: 20.995126 },
    zoom: 11,
  };

  apiHasLoaded = (map, maps) => {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    });
  };

  addPlace = place => {
    this.setState({ places: [place] });
  };

  render() {
    return (
      <>
        {this.state.mapApiLoaded && (
          <AutoComplete
            map={this.state.mapInstance}
            mapApi={this.state.mapApi}
            addplace={this.addPlace}
          />
        )}
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: API_KEY, libraries: ['visualization', 'places', 'geometry'] }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
            heatmap={this.state.data}
            onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
          >
            {this.state.places
              ? this.state.places.map(place => (
                  <Marker
                    key={place.id}
                    text={place.name}
                    lat={place.geometry.location.lat()}
                    lng={place.geometry.location.lng()}
                  />
                ))
              : null}
          </GoogleMapReact>
        </div>
      </>
    );
  }
}

export default PlagueMap;
