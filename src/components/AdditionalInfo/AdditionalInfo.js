import React from 'react';
import styled from 'styled-components';

import Section from 'components/Section/Section';

import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';

const AdditionalInfo = () => {
  return (
    <Section bgcolor="primary" isLogo>
      <AdditionsInfoWrapper>
        <Heading isWhite>
          Bring your family a time
          <br />
          that you had not got before.
        </Heading>
        <Paragraph isWhite>
          With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house
          chores.With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done
          house chores.
        </Paragraph>
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
