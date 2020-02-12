import React from 'react';
import styled from 'styled-components';
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
  justify-content: space-between;
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
`;

const Sidebar = () => (
  <StyledWrapper>
    <StyledLogo />
  </StyledWrapper>
);

export default Sidebar;
