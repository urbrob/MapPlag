import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { SizeBreakpoints } from 'theme/SizeBreakpoints';
import PlagueMapLogo from 'assets/PlagueMapLogo.png';

const StyledWrapper = styled.nav`
  @media ${SizeBreakpoints.desktop} {
    position: fixed;
    left: 0;
    top: 0;
    padding: 25px 0;
    width: 150px;
    height: 100vh;
    background-color: #ffd829;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${SizeBreakpoints.mobile} {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 10%;
    background-color: #ffd829;
    display: flex;
    align-items: center;
    z-index: 1052;
  }
`;

const StyledLogo = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background-image: url(${PlagueMapLogo});
  background-repeat: no-repeat;
  background-color: #ffd829;
  background-position: 50% 50%;
  background-size: 100%;
  border: none;
  margin: 0 0 30px;

  @media ${SizeBreakpoints.mobile} {
    width: 50px;
    height: 50px;
    margin: auto 10px;
  }
`;

const StyledSelect = styled(Select)`
  width: 90%;

  @media ${SizeBreakpoints.mobile} {
    width: 80%;
  }
`;

class Sidebar extends Component {
  state = {
    options: [],
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateState();
    }
  }

  updateState = () => {
    if (typeof this.props.plague !== 'undefined') {
      this.setState({
        options: Object.keys(this.props.plague).map(x => ({
          label: x,
          value: this.props.plague[x],
        })),
      });
    }
  };

  render() {
    return (
      <StyledWrapper>
        <StyledLogo />
        <StyledSelect
          options={this.state.options}
          label="Select..."
          onChange={this.props.setData}
        />
      </StyledWrapper>
    );
  }
}

export default Sidebar;
