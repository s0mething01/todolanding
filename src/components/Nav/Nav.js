import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Logo from '../../assets/logo/logo-white.inline.svg';
import Hamburger from '../../assets/svg/hamburger.inline.svg';

import handleHideNav from './handleHideNav';
import handleShowNav from './handleShowNav';
import handleAnimateNavOnScroll from './handleAnimateNavOnScroll';

const Nav = ({ theme }) => {
  const [isNavActive, setNavActivity] = useState(false);
  const nav = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    handleAnimateNavOnScroll(nav.current, theme.colors.secondaryWithOpacity);
  }, []);

  const handleToogleNav = () => {
    if (window.innerWidth > 540) return;

    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } });

    if (isNavActive) handleHideNav(tl, nav);
    else handleShowNav(tl, nav, theme);

    setNavActivity(!isNavActive);
  };

  return (
    <NavContainer className={isNavActive ? 'active' : null} ref={nav}>
      <div className="navHeading">
        <AnchorLink to="/#header">
          <Logo className="logo" />
        </AnchorLink>
        <Hamburger className="hamburger" onClick={handleToogleNav} />
      </div>
      <ul className={isNavActive ? 'active' : null}>
        <li>
          <button onClick={handleToogleNav}>
            <AnchorLink to="/#header">Start</AnchorLink>
          </button>
        </li>
        <li>
          <button onClick={handleToogleNav}>
            <AnchorLink to="/#pricing">Pricing</AnchorLink>
          </button>
        </li>
        <li>
          <button onClick={handleToogleNav}>
            <AnchorLink to="/#footer">Kontakt</AnchorLink>
          </button>
        </li>
        <li className="special">
          <a href="https://todofamilyapp.netlify.app" target="_blank" rel="noopener noreferrer">
            Aplikacja
          </a>
        </li>
      </ul>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: transparent;
  .navHeading {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 4rem;
    @media (max-width: 540px) {
      padding: 2rem 2.6rem;
    }
  }
  @media (max-width: 540px) {
    z-index: 999;
  }
  svg.logo {
    height: 3.5rem;
    width: auto;
    @media (max-width: 540px) {
      height: 4.2rem;
    }
  }
  svg.hamburger {
    display: none;
    fill: ${({ theme }) => theme.colors.alphaBlue};
    height: 5rem;
    width: auto;
    cursor: pointer;
    @media (max-width: 540px) {
      display: block;
      height: 4.2rem;
    }
  }
  li {
    font-size: ${({ theme }) => theme.font.M};
    button {
      background-color: transparent;
      border: none;
    }
    a {
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      padding: 1rem 1.5rem;
      font-size: ${({ theme }) => theme.font.M};
      cursor: pointer;
    }
    &.special a {
      background-color: ${({ theme }) => theme.colors.tetriary};
      padding: 0.8rem 5rem;
      margin-left: 1.5rem;
      border-radius: ${({ theme }) => theme.borderRadius};
      font-weight: ${({ theme }) => theme.font.bold};
    }
  }
  ul {
    display: flex;
    align-items: center;
    padding: 2rem 4rem;
    width: 100%;
    justify-content: flex-end;
    @media (max-width: 540px) {
      position: absolute;
      bottom: 0;
      top: 100%;
      display: none;
      width: 100%;
      left: 0;
      height: 100vh;
      flex-direction: column;
      transition: transform 0.3s ease;
      z-index: 100;
      padding: 5rem 2rem 4rem;
      justify-content: flex-start;
      li {
        margin: 2rem 0;
      }
      li a {
        font-size: 3rem;
        padding: 2rem 3rem;
        &.special a {
          margin: 2rem 0 3rem;
        }
      }
      /* &.active {
        transform: translateY(100%);
        background-color: ${({ theme }) => theme.colors.secondary};
      } */
    }
  }
`;

export default Nav;
