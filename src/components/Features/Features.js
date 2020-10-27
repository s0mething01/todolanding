import React from 'react';
import styled from 'styled-components';

import Section from 'components/Section/Section';
import Heading from 'components/Heading/Heading';
import FeatureCard from 'components/FeatureCard/FeatureCard';

const Features = () => {
  return (
    <Section>
      <FeaturesWrapper>
        <Heading isCentered>Funkcjonalności ToDo, przez które życie w domu będzie przyjemniejsze.</Heading>
        <section className="cardWrapper">
          <FeatureCard isDark>
            <h4>Obowiązkowość</h4>
            <p>With ToDo app you will dive into the world of done house chores.With ToDo app yl dive into the world of done house chores.</p>
          </FeatureCard>
          <FeatureCard isDark>
            <h4>Obowiązkowość</h4>
            <p>With ToDo app you will dive into the world of done house chores.With ToDo app yl dive into the world of done house chores.</p>
          </FeatureCard>
          <FeatureCard isDark>
            <h4>Obowiązkowość</h4>
            <p>With ToDo app you will dive into the world of done house chores.With ToDo app yl dive into the world of done house chores.</p>
          </FeatureCard>
        </section>
      </FeaturesWrapper>
    </Section>
  );
};

export default Features;

const FeaturesWrapper = styled.div`
  h2 {
    max-width: 600px;
    margin: 0 auto;
  }
  .cardWrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 50px auto;
  }
`;
