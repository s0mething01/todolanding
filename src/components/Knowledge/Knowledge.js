import React from 'react';
import styled from 'styled-components';

import Section from 'components/Section/Section';
import Heading from 'components/Heading/Heading';
import FeatureCard from 'components/FeatureCard/FeatureCard';

const Knowledge = () => {
  return (
    <Section>
      <KnowledgeWrapper>
        <Heading isCentered>Czego dzieci mogą się nauczyć korzystając z ToDo.</Heading>
        <section className="cardWrapper">
          <FeatureCard>
            <h4>Obowiązkowość</h4>
            <p>With ToDo app you will dive into the world of done house chores.With ToDo app yl dive into the world of done house chores.</p>
          </FeatureCard>
          <FeatureCard>
            <h4>Obowiązkowość</h4>
            <p>With ToDo app you will dive into the world of done house chores.With ToDo app yl dive into the world of done house chores.</p>
          </FeatureCard>
          <FeatureCard>
            <h4>Obowiązkowość</h4>
            <p>With ToDo app you will dive into the world of done house chores.With ToDo app yl dive into the world of done house chores.</p>
          </FeatureCard>
        </section>
      </KnowledgeWrapper>
    </Section>
  );
};

export default Knowledge;

const KnowledgeWrapper = styled.div`
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
