import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import PlagueMapLogo from 'assets/PlagueMapLogo.png';

const StyledWrapper = styled.nav`
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
`;

const StyledSelect = styled(Select)`
  width: 90%;
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
