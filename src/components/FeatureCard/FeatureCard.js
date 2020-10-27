import React from 'react';
import styled from 'styled-components';

import getGradient from 'utils/getGradient';

import Logo from 'assets/logo/logoSmall.inline.svg';
import LogoDark from 'assets/logo/logoSmallDark.inline.svg';

const FeatureCard = ({ children, isDark }) => {
  return (
    <CardWrapper isDark={isDark}>
      {isDark ? <LogoDark /> : <Logo />}
      {children}
    </CardWrapper>
  );
};

export default FeatureCard;

const CardWrapper = styled.article`
  background-image: ${({ isDark, theme }) => getGradient(theme, isDark ? 'secondary' : 'primary')};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 0 0 1rem ${({ theme }) => theme.colors.alphaBlue};
  width: 28%;
  text-align: center;
  padding: 3rem 2rem;
  h4 {
    font-size: 2.7rem;
    margin: 2rem 0;
  }
  p {
    font-size: ${({ theme }) => theme.font.XS};
    line-height: 2.5rem;
  }
  svg {
    width: 5rem;
    height: auto;
  }
`;
