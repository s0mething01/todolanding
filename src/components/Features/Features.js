import React, { useContext } from 'react';
import styled from 'styled-components';

import DatoContext from 'contexts/DatoContext';

import Section from 'components/Section/Section';
import Heading from 'components/Heading/Heading';
import FeatureCard from 'components/FeatureCard/FeatureCard';

const Features = () => {
  const { featuresheading, featureheader1, featureparagraph1, featureheader2, featureparagraph2, featureheader3, featureparagraph3 } = useContext(DatoContext);
  return (
    <Section>
      <FeaturesWrapper>
        <Heading isCentered>{featuresheading}</Heading>
        <section className="cardWrapper">
          <FeatureCard cardDaley={0.3}>
            <h4>{featureheader1}</h4>
            <p>{featureparagraph1}</p>
          </FeatureCard>
          <FeatureCard cardDaley={0.6}>
            <h4>{featureheader2}</h4>
            <p>{featureparagraph2}</p>
          </FeatureCard>
          <FeatureCard cardDaley={0.9}>
            <h4>{featureheader3}</h4>
            <p>{featureparagraph3}</p>
          </FeatureCard>
        </section>
      </FeaturesWrapper>
    </Section>
  );
};

export default Features;

const FeaturesWrapper = styled.div`
  h2 {
    max-width: 60rem;
    margin: 0 auto;
  }
  .cardWrapper {
    display: flex;
    justify-content: space-between;
    max-width: 100rem;
    margin: 5rem auto;
    @media (max-width: 540px) {
      flex-direction: column;
    }
  }
`;
