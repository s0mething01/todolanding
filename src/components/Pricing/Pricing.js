import React from 'react';
import styled from 'styled-components';

import Section from 'components/Section/Section';
import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';

import PricingCard from './PricingCard';

const Pricing = () => {
  return (
    <Section>
      <PricingWrapper>
        <div>
          <Heading>
            Ciężki temat, czyli <br />
            dlaczego to musi kosztować
          </Heading>
          <Paragraph>
            With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house
            chores.
          </Paragraph>
          <Button>Add reward</Button>
        </div>
        <PricingCard>
          Tylko
          <span>8zł</span>
          /miesiąc
        </PricingCard>
      </PricingWrapper>
    </Section>
  );
};

export default Pricing;

const PricingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div:first-child {
    flex-grow: 1;
    max-width: 50rem;
  }
  p {
    margin: 2rem 0;
  }
`;
