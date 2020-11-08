import React, { useContext } from 'react';
import styled from 'styled-components';

import DatoContext from 'contexts/DatoContext';

import Section from 'components/Section/Section';
import Heading from 'components/Heading/Heading';
import FeatureCard from 'components/FeatureCard/FeatureCard';

const Knowledge = () => {
  const { knowledgeheading, knowledgeheading1, knowledgeparagraph1, knowledgeheading2, knowledgeparagraph2, knowledgeheading3, knowledgeparagraph3 } = useContext(DatoContext);
  return (
    <Section>
      <KnowledgeWrapper>
        <Heading isCentered>{knowledgeheading}</Heading>
        <section className="cardWrapper">
          <FeatureCard isDark cardDaley={0.3}>
            <h4>{knowledgeheading1}</h4>
            <p>{knowledgeparagraph1}</p>
          </FeatureCard>
          <FeatureCard isDark cardDaley={0.6}>
            <h4>{knowledgeheading2}</h4>
            <p>{knowledgeparagraph2}</p>
          </FeatureCard>
          <FeatureCard isDark cardDaley={0.9}>
            <h4>{knowledgeheading3}</h4>
            <p>{knowledgeparagraph3}</p>
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
