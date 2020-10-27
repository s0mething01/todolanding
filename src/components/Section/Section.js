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
  margin: ${({ isFooter }) => (isFooter ? '25px 0 0 0' : '25px 0 125px')};
  & > div {
    max-width: 120rem;
    margin: 0 auto;
    padding: 2.5rem 0;
    @media (min-width: 3600px) {
      max-width: 2000px;
    }
  }
  .logo {
    position: absolute;
    bottom: 20px;
    right: 30px;
    height: 40px;
    width: auto;
  }
`;
