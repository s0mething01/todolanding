import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import DatoContext from 'contexts/DatoContext';

import Section from 'components/Section/Section';
import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';

import PricingCard from './PricingCard';

const Pricing = () => {
  const { pricingheading, pricingparagraph, pricingcost } = useContext(DatoContext);

  const card = useRef(null);

  useEffect(() => {
    const sectionEl = card.current;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(sectionEl, { opacity: 0, x: 200 });
    gsap.to(sectionEl, {
      opacity: 1,
      x: 0,
      delay: 0.3,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top bottom',
      },
    });
  }, []);

  return (
    <Section id="pricing">
      <PricingWrapper>
        <div>
          <Heading>{pricingheading}</Heading>
          <Paragraph>{pricingparagraph}</Paragraph>
          <Button>Add reward</Button>
        </div>
        <PricingCard ref={card}>
          Tylko
          <span>{pricingcost}</span>
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
  overflow: hidden;
  @media (max-width: 540px) {
    flex-direction: column;
  }
  div:first-child {
    flex-grow: 1;
    max-width: 50rem;
    @media (max-width: 540px) {
      order: 2;
      display: flex;
      flex-direction: column;
    }
  }
  p {
    margin: 2rem 0;
  }

  @media (max-width: 540px) {
    button {
      margin: 0 auto;
    }
  }
`;
