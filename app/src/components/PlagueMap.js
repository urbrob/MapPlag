import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'components/map/Marker';
import AutoComplete from 'components/map/AutoComplete';
import { API_KEY } from 'apiKey';

class PlagueMap extends Component {
  state = {
    data: {
      positions: [],
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
    zoom: 5,
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateState();
    }
  }

  updateState = () => {
    if (typeof this.props.data !== 'undefined') {
      this.setState({
        data: { positions: this.props.data, options: { opacity: this.props.data.length / 5 } },
        center: this.props.data[0],
      });
    }
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
            center={this.state.center}
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
