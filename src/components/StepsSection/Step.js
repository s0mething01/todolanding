import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';

import StepsSectionIcon from 'assets/icons/stepSectionIcon.inline.svg';
import StepsSectionIconLast from 'assets/icons/stepSectionLastIcon.inline.svg';

const Step = ({ children, number, isLast }) => {
  const stepHeading = useRef(null);
  const stepParagraph = useRef(null);

  useEffect(() => {
    const sectionEl1 = stepHeading.current;
    const sectionEl2 = stepParagraph.current;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set([sectionEl1, sectionEl2], { opacity: 0, y: -20 });
    gsap.to([sectionEl1, sectionEl2], {
      opacity: 1,
      y: 0,
      delay: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: sectionEl1,
        start: 'top bottom',
      },
    });
  }, []);

  return (
    <StepWrapper>
      <Heading ref={stepHeading}>Krok {number}</Heading>
      <Paragraph ref={stepParagraph}>{children}</Paragraph>
      {isLast ? <StepsSectionIconLast /> : <StepsSectionIcon />}
    </StepWrapper>
  );
};

export default Step;

const StepWrapper = styled.article`
    flex-basis: 50%;
    padding: 3.5rem 0;
    position: relative;
    @media (max-width: 540px) {
      flex-basis: 100%;
    }
    svg {
      position: absolute;
      top: 50%;
      width: 3rem;
      height: auto;
      @media (max-width: 540px) {
        width: 4.7rem;
        top: 35%;
      }
    }
    p {
      margin-top: 1rem;
      @media (max-width: 540px) {
        max-height: 40px;
      }
    }
  }
  &:nth-child(even) {
    transform: translateY(50%);
    padding-left: 5rem;
    @media (max-width: 540px) {
      transform: translateY(0);
      padding-left: 8rem;
      padding-right: 2rem;
    }
    svg {
      left: 0;
      transform: translateX(-50%);
      @media (max-width: 540px) {
        transform: translateX(0);
      }
    }
    p {
      @media (max-width: 540px) {
        text-align: left;
      }
    }
    h2 {
      @media (max-width: 540px) {
        text-align: left;
      }
    }
  }
  &:nth-child(odd) {
    padding-right: 5rem;
    @media (max-width: 540px) {
      padding-left: 8rem;
      padding-right: 2rem;
    }
    p {
      text-align: right;
      @media (max-width: 540px) {
        text-align: left;
      }
    }
    h2 {
      text-align: right;
      @media (max-width: 540px) {
        text-align: left;
      }
    }
    svg {
      right: 0;
      transform: translateX(50%);
      @media (max-width: 540px) {
        left: 0;
        right: auto;
        transform: translateX(0);
      }
      &:hover {
        fill: #32424423;
        cursor: pointer;
      }
    }
`;
