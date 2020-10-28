import React from 'react';
import styled from 'styled-components';

import Section from 'components/Section/Section';
import PlatformButton from 'components/Platforms/PlatformButton';
import ContactForm from 'components/ContactForm/ContactForm';

import AndroidSvg from 'assets/icons/AndroidSvg.inline.svg';
import AppleSvg from 'assets/icons/AppleSvg.inline.svg';
import Instagram from 'assets/icons/facebookIcon.inline.svg';
import Facebook from 'assets/icons/instagramIcon.inline.svg';

const Footer = () => {
  return (
    <Section bgcolor="primary" isLogo isFooter>
      <FooterWrapper>
        <section className="content">
          <div className="headingWrapper">
            <h3>Kim jesteśmy?</h3>
            <p>
              With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house
              chores.
            </p>
          </div>
          <div className="buttonsContainer">
            <div className="contactSection">
              <h3>Kontakt</h3>
              <a href="/">todo@gamil.com</a>
              <a href="/">ul. Długa 64-523 Warsaw</a>
              <a href="/">+48 324 324 534</a>
            </div>
            <div>
              <div className="buttonWrapper">
                <PlatformButton link="" icon={<AndroidSvg />}>
                  Google Store
                </PlatformButton>
                <SocialIcon href="/">
                  <Instagram />
                </SocialIcon>
              </div>
              <div className="buttonWrapper">
                <PlatformButton link="" icon={<AppleSvg />}>
                  App store
                </PlatformButton>
                <SocialIcon href="/">
                  <Facebook />
                </SocialIcon>
              </div>
            </div>
          </div>
        </section>
        <ContactForm />
        <h5>© 2020 Copyright Mikołaj Zienkowicz. All rights reserved.</h5>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  margin: 5rem 0 10rem;
  @media (max-width: 540px) {
    flex-direction: column;
  }
  .buttonsContainer {
    @media (max-width: 540px) {
      display: flex;
      flex-direction: column;
    }
  }
  & > h5 {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem;
    color: ${({ theme }) => theme.colors.alphaBlue};
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.font.light};
    opacity: 0.7;
    @media (max-width: 540px) {
      text-align: center;
      width: 100%;
      bottom: 8rem;
    }
  }
  & > section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 10rem;
    @media (max-width: 768px) {
      margin-right: 6rem;
    }
    @media (max-width: 540px) {
      margin-right: 0;
    }
    p {
      max-width: 50rem;
      margin: 2.5rem 0;
      font-size: ${({ theme }) => theme.font.S};
      line-height: 2.5rem;
      color: ${({ theme }) => theme.colors.white};
      @media (max-width: 540px) {
        font-size: ${({ theme }) => theme.font.M};
      }
    }
    h3 {
      font-size: 2.7rem;
      color: ${({ theme }) => theme.colors.white};
      @media (max-width: 540px) {
        font-size: ${({ theme }) => theme.font.L};
      }
    }
    & > div {
      display: flex;
      justify-content: space-between;
    }
    .buttonWrapper {
      display: flex;
      button {
        margin-right: 2rem;
      }
    }
    .headingWrapper {
      flex-direction: column;
      margin-bottom: 2.5rem;
    }
    .contactSection {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      a {
        color: white;
        font-size: ${({ theme }) => theme.font.S};
        margin-right: 3rem;
        @media (max-width: 540px) {
          font-size: ${({ theme }) => theme.font.M};
        }
      }
      @media (max-width: 540px) {
        height: 18rem;
        margin-bottom: 6rem;
      }
    }
    .buttonWrapper:first-of-type {
      margin-bottom: 2rem;
      @media (max-width: 540px) {
        margin-bottom: 0rem;
      }
    }
  }
  & > form {
    width: 50rem;
    flex-shrink: 0;
    @media (max-width: 768px) {
      width: 37%;
    }
    @media (max-width: 540px) {
      width: 100%;
      height: 45rem;
      margin: 5rem 0 3rem;
    }
  }
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, isDark }) => (isDark ? theme.color.tetriary : theme.colors.primary)};
  font-size: ${({ theme }) => theme.font.M};
  border: none;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: ${({ theme }) => theme.font.bold};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  cursor: pointer;
  svg {
    width: 4rem;
    height: 4rem;
  }
  @media (max-width: 540px) {
    margin-bottom: 2rem;
  }
`;
