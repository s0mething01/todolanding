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
  height: 70vh;
  @media (min-width: 1921px) {
    height: 75vh;
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
  }
  .headerSvg {
    position: absolute;
    top: 14%;
    right: 6%;
    z-index: -1;
    width: 28%;
    height: auto;
    @media (min-width: 1921px) {
      top: 16%;
      right: 5%;
      width: 30%;
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
