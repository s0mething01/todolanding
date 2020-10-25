import React from 'react';
import styled from 'styled-components';

const AdventagesCard = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default AdventagesCard;

const CardWrapper = styled.article`
  width: 28%;
  position: relative;
  padding: 40px 0;
  margin: 30px 0;
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
    letter-spacing: -0.5px;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    font-weight: ${({ theme }) => theme.font.light};
  }
  svg {
    position: absolute;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;
