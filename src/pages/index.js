import React from 'react';
import HeroHeader from 'components/HeroHeader/HeroHeader';
import Intro from 'components/Intro/Intro';
import Adventages from 'components/Adventages/Adventages';
import Pricing from 'components/Pricing/Pricing';

const IndexPage = () => (
  <>
    <HeroHeader />
    <Intro />
    <Adventages />
    <Pricing />
  </>
);

export default IndexPage;
