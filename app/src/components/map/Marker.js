import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import marker from 'assets/marker.svg';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);
  background-image: url(${marker});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;

  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

const Marker = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Wrapper alt={props.text} {...(props.onClick ? { onClick: props.onClick } : {})} />
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
