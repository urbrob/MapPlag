import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Sidebar from 'components/Sidebar';
import PlagueMap from 'components/PlagueMap';
import { REMOTE_HOST } from 'config';
import { SizeBreakpoints } from 'theme/SizeBreakpoints';

const StyledWrapper = styled.div`
  @media ${SizeBreakpoints.desktop} {
    padding-left: 150px;
  }
  @media ${SizeBreakpoints.mobile} {
    margin-top: 15%;
  }
`;

class RootMapComponent extends Component {
  state = {
    plague: [],
    data: [],
  };

  componentDidMount = () => {
    this.featchPlagye();
  };

  featchPlagye = () => {
    axios
      .get(`${REMOTE_HOST}/api/plague/`, { headers: { 'Content-Type': 'application/json' } })
      .then(response => {
        const data = [];
        Object.keys(response.data).map(x => data.push(...response.data[x]));
        this.setState({ plague: response.data, data });
      });
  };

  setData = data => {
    this.setState({ data: data.value });
  };

  render() {
    return (
      <StyledWrapper>
        <Sidebar plague={this.state.plague} setData={this.setData} />
        <PlagueMap data={this.state.data} />
      </StyledWrapper>
    );
  }
}

export default RootMapComponent;
