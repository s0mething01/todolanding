import React, { useContext } from 'react';
import styled from 'styled-components';

import DatoContext from 'contexts/DatoContext';

import Section from 'components/Section/Section';
import Heading from 'components/Heading/Heading';
import Step from './Step';

const StepSection = () => {
  const { stepsheading, step1content, stepcontent2, stepcontent3, stepcontent4, stepcontent5 } = useContext(DatoContext);
  return (
    <Section>
      <Heading isCentered>{stepsheading}</Heading>
      <StepContainer>
        <Step number={1}>{step1content}</Step>
        <Step number={2}>{stepcontent2}</Step>
        <Step number={3}>{stepcontent3}</Step>
        <Step number={4}>{stepcontent4}</Step>
        <Step number={5} isLast>
          {stepcontent5}
        </Step>
      </StepContainer>
    </Section>
  );
};

export default StepSection;

const StepContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
`;
