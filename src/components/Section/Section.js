import React from 'react';
import styled from 'styled-components';

import Logo from 'assets/logo/logo-white.inline.svg';
import getGradient from 'utils/getGradient';

const Section = ({ children, bgcolor, isLogo, isFooter, id }) => {
  return (
    <SectionWrapper bgcolor={bgcolor} isFooter={isFooter} id={id}>
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
    @media (max-width: 768px) {
      max-width: ${({ isFooter }) => (isFooter ? '90%' : '95rem')};
    }
    @media (max-width: 540px) {
      max-width: 90%;
    }
  }
  .logo {
    position: absolute;
    bottom: 2rem;
    right: 3rem;
    height: 4rem;
    width: auto;
  }
`;
