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
  box-shadow: 0px 0px 0px 10px ${({ theme }) => theme.colors.alphaBlue};
  width: 28%;
  text-align: center;
  padding: 30px 20px;
  h4 {
    font-size: 2.7rem;
    margin: 20px 0;
  }
  p {
    font-size: ${({ theme }) => theme.font.XS};
    line-height: 25px;
  }
  svg {
    width: 50px;
  }
`;
