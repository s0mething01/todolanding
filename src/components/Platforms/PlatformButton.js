import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from 'components/Button/Button';

const PlatfromButton = ({ children, icon, link }) => {
  const button = useRef(null);

  useEffect(() => {
    const sectionEl = button.current;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(sectionEl, { opacity: 0 });
    gsap.to(sectionEl, {
      opacity: 1,
      delay: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top bottom',
      },
    });
  }, []);

  return (
    <PlatfromButtonWarpper ref={button}>
      <a href={link}>
        {icon}
        <div>
          dostępna na
          <span>{children}</span>
        </div>
      </a>
    </PlatfromButtonWarpper>
  );
};

export default PlatfromButton;

const PlatfromButtonWarpper = styled(Button)`
  margin-right: 4rem;
  padding: 1.2rem 3rem;
  min-width: 20rem;
  width: 25rem;
  @media (max-width: 540px) {
    margin-bottom: 2rem;
    margin-right: 0;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  svg {
    height: 4rem;
    width: auto;
  }
  div {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    text-align: left;
    padding: 0 1rem;
    font-weight: ${({ theme }) => theme.font.light};
    color: ${({ theme }) => theme.colors.alphaBlue};
    @media (max-width: 540px) {
      align-items: left;
    }
    span {
      font-size: 2.1rem;
      font-weight: ${({ theme }) => theme.font.bold};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
