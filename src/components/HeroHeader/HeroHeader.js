import React from 'react';
import styled from 'styled-components';
import Blob from '../../assets/svg/blob-header.inline.svg';
import HeaderSvg from '../../assets/svg/headerAppPreview.inline.svg';

const HeroHeader = () => {
  return (
    <HeroHeaderWrapper>
      <section>
        <h1>Bring your family a time that you had not got before.</h1>
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
    padding: 40px 80px;
    .blob {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        width: 55%;
        height: auto;
    }
    .headerSvg {
        position: absolute;
        top: 18%;
        right: 5%;
        z-index: -1;
        width: 28%;
        height: auto;
    }
    section {
        padding: 20vh 0;
        max-width: 490px;
        h1 {
            color: ${({ theme }) => theme.colors.secondary};
            font-size: 4.1rem;
            letter-spacing: -1.5px;
            word-spacing: 4px;
            font-weight: ${({ theme }) => theme.font.bold};
        }
        p {
            color: ${({ theme }) => theme.colors.primary};
            font-size: 1.9rem;
            margin-top: 30px;
            font-weight: 400;
            letter-spacing: .5px;
            /* font-weight: ${({ theme }) => theme.font.bold}; */
        }
    }
`;
