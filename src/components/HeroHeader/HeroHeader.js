import React from 'react';
import styled from 'styled-components';
import Blob from '../../assets/svg/blob-header.inline.svg';
import HeaderSvg from '../../assets/svg/headerAppPreview.inline.svg';

const HeroHeader = () => {
  return (
    <HeroHeaderWrapper>
      <section>
        <h1>
          Bring your family a time
          <br />
          that you had not got before.
        </h1>
        <p>With ToDo app you will dive into the world of done. App you will dive into the world of done. You will.</p>
      </section>
      <Blob className="blob" />
      <HeaderSvg className="headerSvg" />
    </HeroHeaderWrapper>
  );
};
export default HeroHeader;

const HeroHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 8rem;
  height: 800px;
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
  .blob {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 60%;
    height: auto;
    bottom: 0;
    @media (min-width: 1921px) {
      width: 55%;
    }
    /* @media (max-width: 1024px) {
      display: none;
    } */
  }
  .headerSvg {
    position: absolute;
    top: 14%;
    right: 6%;
    z-index: -1;
    width: 33%;
    height: auto;
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
  }
  section {
    padding: 20vh 0;
    max-width: 55rem;
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
