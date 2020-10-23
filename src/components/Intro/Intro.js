import React from 'react';
import styled from 'styled-components';

import Section from 'components/Section/Section';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';

const Intro = () => {
  return (
    <Section>
      <IntroWrapper>
        <Heading isCentered>
          Czym jest aplikacja ToDo <br /> I dla kogo będzie się idealnie sprawdzać
        </Heading>
        <Paragraph isCentered>
          With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house
          chores.
        </Paragraph>
        <Button isCentered>Zobacz Aplikacje</Button>
      </IntroWrapper>
    </Section>
  );
};

export default Intro;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h2,
  p {
    max-width: 500px;
    margin: 0 auto;
  }
  p {
    margin: 20px auto;
  }
  button {
  }
`;
