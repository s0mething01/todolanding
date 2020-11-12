import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import getGradient from 'utils/getGradient';

import Button from 'components/Button/Button';

import Blob from 'assets/svg/blob-header.inline.svg';
import HeaderSvg from 'assets/svg/headerAppPreview2.inline.svg';

const SuccesPage = () => {
  const hero = useRef(null);

  useEffect(() => {
    const svg = hero.current.children[2];
    gsap.set(svg, { opacity: 0 });
    gsap.to(svg, { opacity: 1, duration: 1, ease: 'power1.inOut', delay: 0.1 });
  }, []);

  return (
    <HeroHeaderWrapper id="header" ref={hero}>
      <section>
        <h1>Wygląda na to, że wysłałeś do nas pytanie.</h1>
        <p>Postaramy się odpowiedzieć tak szybko jak to tylko możliwe. Jeżeli jednak z jakiegoś powodu nie odpowiemy, napisz do nas na facebooku!</p>
        <a href="/">
          <Button>Strona główna</Button>
        </a>
      </section>
      <Blob className="blob" />
      <HeaderSvg className="headerSvg" />
      <div className="blobMobile" />
    </HeroHeaderWrapper>
  );
};
export default SuccesPage;

const HeroHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 8rem;
  height: 800px;
  margin-bottom: 8rem;
  a {
    margin-top: 3rem;
    display: block;
  }
  @media (min-width: 1921px) {
    height: 700px;
  }
  @media (min-width: 2300px) {
    height: 920px;
  }
  @media (min-width: 2700px) {
    height: 1100px;
  }
  @media (min-width: 3200px) {
    height: 1400px;
  }
  @media (max-width: 1800px) {
    height: 650px;
  }
  @media (max-width: 1600px) {
    height: 600px;
  }
  @media (max-width: 1400px) {
    height: 550px;
  }
  @media (max-width: 1200px) {
    height: 500px;
  }
  @media (max-width: 1100px) {
    height: 440px;
  }
  @media (max-width: 1024px) {
    height: 420px;
  }
  @media (max-width: 950px) {
    height: 360px;
  }
  @media (max-width: 830px) {
    height: 320px;
  }
  @media (max-width: 768px) {
    height: 290px;
    padding: 4rem 3rem;
  }
  @media (max-width: 670px) {
    height: 260px;
  }
  @media (max-width: 600px) {
    height: 250px;
  }
  @media (max-width: 540px) {
    height: 790px;
    justify-content: flex-end;
  }
  @media (max-width: 450px) {
    height: 720px;
  }
  @media (max-width: 400px) {
    height: 700px;
  }
  @media (max-width: 350px) {
    height: 675px;
  }
  .blob {
    position: absolute;
    opacity: 1;
    top: 0;
    right: 0;
    z-index: -1;
    width: 60%;
    height: auto;
    bottom: 0;
    @media (min-width: 1921px) {
      width: 55%;
    }
    @media (max-width: 540px) {
      display: none;
    }
  }
  .blobMobile {
    display: none;
    position: absolute;
    z-index: -2;
    @media (max-width: 540px) {
      display: block;
      background-image: ${({ theme }) => getGradient(theme, 'reversePrimary')};
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 400px;
      z-index: -2;
      &:after {
        content: '';
        background-color: ${({ theme }) => theme.colors.alphaBlue};
        width: 100%;
        height: 22px;
        position: absolute;
        bottom: -22px;
        left: 0;
      }
      &:before {
        content: '';
        background-color: ${({ theme }) => theme.colors.alphaBlue2};
        width: 100%;
        height: 22px;
        position: absolute;
        bottom: -44px;
        left: 0;
      }
    }
    @media (max-width: 500px) {
      height: 380px;
    }
    @media (max-width: 450px) {
      height: 350px;
    }
    @media (max-width: 400px) {
      height: 320px;
    }
    @media (max-width: 360px) {
      height: 315px;
    }
    @media (max-width: 350px) {
      height: 290px;
    }
  }
  .headerSvg {
    position: absolute;
    top: 14%;
    right: 6%;
    z-index: -1;
    width: 33%;
    height: auto;
    opacity: 0;
    @media (min-width: 1921px) {
      top: 16%;
      right: 5%;
      width: 30%;
    }
    @media (max-width: 1400px) {
      top: 12%;
    }
    @media (max-width: 1200px) {
      top: 10%;
    }
    @media (max-width: 1024px) {
      top: 10%;
    }
    @media (max-width: 1200px) {
      top: 8%;
    }
    @media (max-width: 850px) {
      top: 7%;
    }
    @media (max-width: 768px) {
      top: 5.5%;
    }
    @media (max-width: 540px) {
      width: 90%;
      top: 32rem;
      right: 50%;
      transform: translate(50%, -50%);
    }
    @media (max-width: 450px) {
      top: 190px;
    }
    @media (max-width: 400px) {
      top: 180px;
    }
    @media (max-width: 350px) {
      top: 155px;
    }
  }
  section {
    padding: 20vh 0;
    max-width: 55rem;
    /* opacity: 0; */
    @media (max-width: 540px) {
      padding: 0 0 3vh 0;
    }
    h1 {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: ${({ theme }) => theme.font.XL};
      letter-spacing: -0.15rem;
      word-spacing: 0.4rem;
      font-weight: ${({ theme }) => theme.font.bold};
    }
    p {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.font.M};
      margin-top: 3rem;
      font-weight: 400;
      letter-spacing: 0.05rem;
      line-height: ${({ theme }) => theme.font.lineHeightM};
    }
  }
`;
