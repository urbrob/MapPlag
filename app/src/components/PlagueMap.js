import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from 'apiKey';

class PlagueMap extends Component {
  state = {
    key: API_KEY,
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
    },
    center: { lat: 52.239243, lng: 20.995126 },
    zoom: 11,
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.state.key }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          heatmapLibrary
          heatmap={this.state.data}
        />
      </div>
    );
  }
}

export default PlagueMap;
