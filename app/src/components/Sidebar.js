import React from 'react';
import styled from 'styled-components';

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

const Sidebar = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default Sidebar;
