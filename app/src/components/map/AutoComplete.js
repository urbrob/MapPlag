import React, { Component } from 'react';
import styled from 'styled-components';
import { SizeBreakpoints } from 'theme/SizeBreakpoints';

const Wrapper = styled.div`
  position: absolute;
  z-index: 1051 !important;

  @media ${SizeBreakpoints.desktop} {
    margin: 10px;
  }
`;

const StyledInput = styled.input`
  padding: 15px 30px;
  font-size: 1.6rem;
  font-weight: 600;
  background-color: #e3e3e3;
  border: 1px solid #d4d2d2;
  border-radius: 50px;
  height: 40px;
  width: 200px;
  ::placeholder {
    letter-spacing: 1px;
    color: #919191;
  }

  @media ${SizeBreakpoints.mobile} {
    margin: 10% 10px;
    height: 35px;
    width: 80%;
  }
`;

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.clearSearchBox = this.clearSearchBox.bind(this);
  }

  componentDidMount({ map, mapApi } = this.props) {
    this.autoComplete = new mapApi.places.Autocomplete(this.searchInput);
    this.autoComplete.addListener('place_changed', this.onPlaceChanged);
    this.autoComplete.bindTo('bounds', map);
  }

  componentWillUnmount({ mapApi } = this.props) {
    mapApi.event.clearInstanceListeners(this.searchInput);
  }

  onPlaceChanged = ({ map, addplace } = this.props) => {
    const place = this.autoComplete.getPlace();

    if (!place.geometry) return;
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    addplace(place);
    this.searchInput.blur();
  };

  clearSearchBox() {
    this.searchInput.value = '';
  }

  render() {
    return (
      <Wrapper>
        <StyledInput
          ref={ref => {
            this.searchInput = ref;
          }}
          type="text"
          onFocus={this.clearSearchBox}
          placeholder="Enter a location"
        />
      </Wrapper>
    );
  }
}

export default AutoComplete;
