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
  margin-top: 50px;
  article {
    flex-basis: 50%;
    padding: 35px 0;
    position: relative;
    svg {
      position: absolute;
      top: 50%;
    }
    p {
      margin-top: 10px;
    }
  }
  article:nth-child(even) {
    transform: translateY(50%);
    padding-left: 50px;
    svg {
      left: 0;
      transform: translateX(-50%);
    }
  }
  article:nth-child(odd) {
    padding-right: 50px;
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
