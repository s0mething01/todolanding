import React from 'react';
import styled from 'styled-components';

import Logo from 'assets/logo/logo-white.inline.svg';
import getGradient from 'utils/getGradient';

const Section = ({ children, bgcolor, isLogo, isFooter }) => {
  return (
    <SectionWrapper bgcolor={bgcolor} isFooter={isFooter}>
      <div>
        {children}
        {isLogo && <Logo className="logo" />}
      </div>
    </SectionWrapper>
  );
};

export default Section;

const SectionWrapper = styled.section`
  background-image: ${({ bgcolor, theme }) => getGradient(theme, bgcolor)};
  position: relative;
  margin: ${({ isFooter }) => (isFooter ? '2.5rem 0 0 0' : '2.5rem 0 12.5rem')};
  & > div {
    max-width: 120rem;
    margin: 0 auto;
    padding: 2.5rem 0;
  }
  .logo {
    position: absolute;
    bottom: 2rem;
    right: 3rem;
    height: 4rem;
    width: auto;
  }
`;
