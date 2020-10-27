import React from 'react';
import HeroHeader from 'components/HeroHeader/HeroHeader';
import Intro from 'components/Intro/Intro';
import Adventages from 'components/Adventages/Adventages';
import Pricing from 'components/Pricing/Pricing';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Knowledge from 'components/Knowledge/Knowledge';
import Features from 'components/Features/Features';
import Platforms from 'components/Platforms/Platforms';
import StepSection from 'components/StepsSection/StepSection';

const IndexPage = () => (
  <>
    <HeroHeader />
    <Intro />
    <Adventages />
    <Pricing />
    <Platforms />
    <StepSection />
    <AdditionalInfo />
    <Knowledge />
    <Features />
  </>
);

export default IndexPage;
