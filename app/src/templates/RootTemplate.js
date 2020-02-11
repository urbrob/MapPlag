import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from 'components/Sidebar';

const StyledWrapper = styled.div`
  padding-left: 150px;
`;

const RootTemplate = ({ children }) => (
  <StyledWrapper>
    <Sidebar />
    {children}
  </StyledWrapper>
);

RootTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default RootTemplate;
