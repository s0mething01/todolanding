import React, { useContext } from 'react';
import styled from 'styled-components';

import DatoContext from 'contexts/DatoContext';

import Section from 'components/Section/Section';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';

import StepsSectionIcon from 'assets/icons/stepSectionIcon.inline.svg';
import StepsSectionIconLast from 'assets/icons/stepSectionLastIcon.inline.svg';

const StepSection = () => {
  const { stepsheading, step1content, stepcontent2, stepcontent3, stepcontent4, stepcontent5 } = useContext(DatoContext);
  return (
    <Section>
      <Heading isCentered>{stepsheading}</Heading>
      <StepContainer>
        <article>
          <Heading>Krok 1</Heading>
          <Paragraph>{step1content}</Paragraph>
          <StepsSectionIcon />
        </article>
        <article>
          <Heading>Krok 2</Heading>
          <Paragraph>{stepcontent2}</Paragraph>
          <StepsSectionIcon />
        </article>
        <article>
          <Heading>Krok 3</Heading>
          <Paragraph>{stepcontent3}</Paragraph>
          <StepsSectionIcon />
        </article>
        <article>
          <Heading>Krok 4</Heading>
          <Paragraph>{stepcontent4}</Paragraph>
          <StepsSectionIcon />
        </article>
        <article>
          <Heading>Krok 5</Heading>
          <Paragraph>{stepcontent5}</Paragraph>
          <StepsSectionIconLast />
        </article>
      </StepContainer>
    </Section>
  );
};

export default StepSection;

const StepContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  article {
    flex-basis: 50%;
    padding: 3.5rem 0;
    position: relative;
    @media (max-width: 540px) {
      flex-basis: 100%;
    }
    svg {
      position: absolute;
      top: 50%;
      width: 3rem;
      height: auto;
      @media (max-width: 540px) {
        width: 4.7rem;
        top: 35%;
      }
    }
    p {
      margin-top: 1rem;
    }
  }
  article:nth-child(even) {
    transform: translateY(50%);
    padding-left: 5rem;
    @media (max-width: 540px) {
      transform: translateY(0);
      padding-left: 8rem;
      padding-right: 2rem;
    }
    svg {
      left: 0;
      transform: translateX(-50%);
      @media (max-width: 540px) {
        transform: translateX(0);
      }
    }
    p {
      @media (max-width: 540px) {
        text-align: left;
      }
    }
    h2 {
      @media (max-width: 540px) {
        text-align: left;
      }
    }
  }
  article:nth-child(odd) {
    padding-right: 5rem;
    @media (max-width: 540px) {
      padding-left: 8rem;
      padding-right: 2rem;
    }
    p {
      text-align: right;
      @media (max-width: 540px) {
        text-align: left;
      }
    }
    h2 {
      text-align: right;
      @media (max-width: 540px) {
        text-align: left;
      }
    }
    svg {
      right: 0;
      transform: translateX(50%);
      @media (max-width: 540px) {
        left: 0;
        right: auto;
        transform: translateX(0);
      }
      &:hover {
        fill: #32424423;
        cursor: pointer;
      }
    }
  }
`;
