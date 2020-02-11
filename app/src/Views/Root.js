import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import PlagueMap from 'components/PlagueMap';
import RootTemplate from 'templates/RootTemplate';

const Root = () => (
  <>
    <GlobalStyle />
    <RootTemplate>
      <PlagueMap />
    </RootTemplate>
  </>
);

export default Root;
