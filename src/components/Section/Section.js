import React from 'react';
import styled from 'styled-components';

import Logo from 'assets/logo/logo-white.inline.svg';
import getGradient from 'utils/getGradient';

const Section = ({ children, bgcolor, isLogo }) => {
  return (
    <SectionWrapper bgcolor={bgcolor}>
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
  margin: 25px 0;
  & > div {
    max-width: 1024px;
    margin: 0 auto;
    padding: 25px 0;
  }
  .logo {
    position: absolute;
    bottom: 10px;
    right: 30px;
    height: 30px;
    width: auto;
  }
`;