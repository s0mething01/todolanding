import React from 'react';
import styled from 'styled-components';

import Section from 'components/Section/Section';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';

import StepsSectionIcon from 'assets/icons/stepSectionIcon.inline.svg';
import StepsSectionIconLast from 'assets/icons/stepSectionLastIcon.inline.svg';

const StepSection = () => {
  return (
    <Section>
      <Heading isCentered>
        Zarejestruj się już teraz i <br />w 5 krokach zacznij korzystać z aplikacji
      </Heading>
      <StepContainer>
        <article>
          <Heading>Krok 1</Heading>
          <Paragraph>With ToDo app you will dive into the world of done house chores.With ToDo app you will.</Paragraph>
          <StepsSectionIcon />
        </article>
        <article>
          <Heading>Krok 2</Heading>
          <Paragraph>With ToDo app you will dive into the world of done house chores.With ToDo app you will.</Paragraph>
          <StepsSectionIcon />
        </article>
        <article>
          <Heading>Krok 3</Heading>
          <Paragraph>With ToDo app you will dive into the world of done house chores.With ToDo app you will.</Paragraph>
          <StepsSectionIcon />
        </article>
        <article>
          <Heading>Krok 4</Heading>
          <Paragraph>With ToDo app you will dive into the world of done house chores.With ToDo app you will.</Paragraph>
          <StepsSectionIcon />
        </article>
        <article>
          <Heading>Krok 5</Heading>
          <Paragraph>With ToDo app you will dive into the world of done house chores.With ToDo app you will.</Paragraph>
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
    svg {
      position: absolute;
      top: 50%;
      width: 3rem;
      height: auto;
    }
    p {
      margin-top: 1rem;
    }
  }
  article:nth-child(even) {
    transform: translateY(50%);
    padding-left: 5rem;
    svg {
      left: 0;
      transform: translateX(-50%);
    }
  }
  article:nth-child(odd) {
    padding-right: 5rem;
    p {
      text-align: right;
    }
    h2 {
      text-align: right;
    }
    svg {
      right: 0;
      transform: translateX(50%);
      &:hover {
        fill: #32424423;
        cursor: pointer;
      }
    }
  }
`;
