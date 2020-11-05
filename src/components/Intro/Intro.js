import React from 'react';
// import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
// import gsap from 'gsap';

import Section from 'components/Section/Section';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';

const Intro = () => {
  // const section = useRef(null);

  // useEffect(() => {
  //   const sectionEl = section.current;

  //   gsap.set(sectionEl, { opacity: 0, y: -200 });
  //   gsap.to(sectionEl, { opacity: 1, y: 0, delay: 0.3, duration: 0.6 });
  // }, []);

  return (
    <Section>
      {/* <IntroWrapper ref={section}> */}
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
  opacity: 0;
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
