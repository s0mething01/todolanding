import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo/logo-white.inline.svg';

const Nav = () => {
  return (
    <NavContainer>
      <Logo />

      <ul>
        <li>Start</li>
        <li>O ToDO</li>
        <li>Kontakt</li>
        <li className="special">Aplikacja</li>
      </ul>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;
  position: fixed;
  top: 0;
  width: 100%;
  svg {
    height: 40px;
    width: auto;
  }
  ul {
    display: flex;
    align-items: center;
    li {
      padding: 10px 30px;
      font-size: ${({ theme }) => theme.font.M};
      cursor: pointer;
      &.special {
        background-color: ${({ theme }) => theme.colors.tetriary};
        padding: 12px 60px;
        margin-left: 30px;
        border-radius: ${({ theme }) => theme.borderRadius};
        font-weight: ${({ theme }) => theme.font.bold};
      }
    }
  }
`;

export default Nav;
