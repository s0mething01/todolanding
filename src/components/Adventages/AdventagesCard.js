import React from 'react';
// import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AdventagesCard = ({ children }) => {
  // const AdventagesCard = ({ children, delay }) => {

  // const card = useRef(null);

  // useEffect(() => {
  //   const sectionEl = card.current;
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.set(sectionEl, { opacity: 0, y: -50 });
  //   gsap.to(sectionEl, {
  //     opacity: 1,
  //     y: 0,
  //     delay,
  //     duration: 0.6,
  //     scrollTrigger: {
  //       trigger: sectionEl,
  //       start: '-400%',
  //       end: '-50%',
  //     },
  //   });
  // }, []);
  // return <CardWrapper ref={card}>{children}</CardWrapper>;
  return <CardWrapper>{children}</CardWrapper>;
};

export default AdventagesCard;

const CardWrapper = styled.article`
  width: 28%;
  position: relative;
  padding: 4rem 0;
  margin: 3rem 0;
  /* opacity: 0; */
  @media (max-width: 540px) {
    width: 90%;
    max-width: 40rem;
  }
  h5 {
    font-size: ${({ theme }) => theme.font.L};
    color: ${({ theme }) => theme.colors.white};
    z-index: 2;
    position: relative;
    font-weight: ${({ theme }) => theme.font.bold};
  }
  p {
    font-size: ${({ theme }) => theme.font.S};
    color: ${({ theme }) => theme.colors.white};
    line-height: ${({ theme }) => theme.font.lineHeightS};
    letter-spacing: -0.05rem;
    z-index: 2;
    position: relative;
    margin-top: 2rem;
    font-weight: ${({ theme }) => theme.font.light};
  }
  svg {
    position: absolute;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: auto;
  }
`;
