import React, { useContext } from 'react';
import styled from 'styled-components';

import DatoContext from 'contexts/DatoContext';

import Section from 'components/Section/Section';

import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';

const AdditionalInfo = () => {
  const { additionalinfoheading, additionalinfoparagraph } = useContext(DatoContext);
  return (
    <Section bgcolor="primary" isLogo>
      <AdditionsInfoWrapper>
        <Heading isWhite>{additionalinfoheading}</Heading>
        <Paragraph isWhite>{additionalinfoparagraph}</Paragraph>
        <Button>Add reward</Button>
      </AdditionsInfoWrapper>
    </Section>
  );
};

export default AdditionalInfo;

const AdditionsInfoWrapper = styled.div`
  margin: 5rem 0;
  p {
    margin: 3rem 0;
    max-width: 100rem;
  }
`;
