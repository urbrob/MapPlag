import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import PlagueMap from 'components/PlagueMap';

const Root = () => (
  <>
    <GlobalStyle />
    <h1>Here will be the map</h1>
    <PlagueMap />
  </>
);

export default Root;
