import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import getGradient from 'utils/getGradient';

import Logo from 'assets/logo/logoSmall.inline.svg';
import LogoDark from 'assets/logo/logoSmallDark.inline.svg';

const FeatureCard = ({ children, isDark, cardDaley }) => {
  const card = useRef(null);

  useEffect(() => {
    const sectionEl = card.current;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(sectionEl, { opacity: 0, y: -40 });
    gsap.to(sectionEl, {
      opacity: 1,
      delay: cardDaley,
      y: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top bottom',
      },
    });
  }, []);

  return (
    <CardWrapper isDark={isDark} ref={card}>
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
    @media (max-width: 540px) {
      font-size: ${({ theme }) => theme.font.L};
    }
  }
  p {
    font-size: ${({ theme }) => theme.font.XS};
    line-height: 2.5rem;
    @media (max-width: 540px) {
      font-size: ${({ theme }) => theme.font.M};
      line-height: ${({ theme }) => theme.font.lineHeightM};
    }
  }
  svg {
    width: 5rem;
    height: auto;
  }
  @media (max-width: 540px) {
    width: 90%;
    max-width: 240px;
    margin-bottom: 8rem;
    margin-right: auto;
    margin-left: auto;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
