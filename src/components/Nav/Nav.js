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
  padding: 2rem 4rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  svg {
    height: 3.5rem;
    width: auto;
    /* @media (min-width: 1921px) {
      height: 35px;
    } */
  }
  ul {
    display: flex;
    align-items: center;
    li {
      padding: 1rem 1.5rem;
      font-size: ${({ theme }) => theme.font.M};
      cursor: pointer;
      &.special {
        background-color: ${({ theme }) => theme.colors.tetriary};
        padding: 0.8rem 5rem;
        margin-left: 1.5rem;
        border-radius: ${({ theme }) => theme.borderRadius};
        font-weight: ${({ theme }) => theme.font.bold};
      }
    }
  }
`;

export default Nav;
