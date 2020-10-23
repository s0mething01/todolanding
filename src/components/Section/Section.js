import React from 'react';
import styled from 'styled-components';

const Section = ({ children, bgcolor }) => {
  return <SectionWrapper bgcolor={bgcolor}>{children}</SectionWrapper>;
};

export default Section;

const SectionWrapper = styled.section`
  background-color: ${({ bgcolor }) => bgcolor};
  max-width: 1024px;
  margin: 50px auto;
`;
