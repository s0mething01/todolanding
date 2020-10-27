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
  margin-right: 40px;
  padding: 12px 30px;
  min-width: 200px;
  width: 250px;
  @media (min-width: 1921px) {
    width: 260px;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  svg {
    height: 40px;
    width: auto;
  }
  div {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    text-align: left;
    padding: 0 10px;
    font-weight: ${({ theme }) => theme.font.light};
    color: ${({ theme }) => theme.colors.alphaBlue};
    span {
      font-size: 2.1rem;
      font-weight: ${({ theme }) => theme.font.bold};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
