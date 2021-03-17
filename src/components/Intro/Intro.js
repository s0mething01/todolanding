import React, { useContext } from 'react';
import styled from 'styled-components';

import DatoContext from 'contexts/DatoContext';

import Section from 'components/Section/Section';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';

const Intro = () => {
  const { introheading, introparagraph } = useContext(DatoContext);
  return (
    <Section>
      <IntroWrapper>
        <Heading isCentered>{introheading}</Heading>
        <Paragraph isCentered>{introparagraph}</Paragraph>
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
    max-width: 65rem;
    margin: 0 auto;
  }
  p {
    margin: 2rem auto;
  }
  button {
  }
`;
