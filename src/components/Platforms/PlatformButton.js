import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button/Button';

const PlatfromButton = ({ children, icon, link }) => {
  return (
    <PlatfromButtonWarpper>
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
    span {
      font-size: 2.1rem;
      font-weight: ${({ theme }) => theme.font.bold};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
