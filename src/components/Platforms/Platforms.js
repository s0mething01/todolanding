import React, { useContext } from 'react';
import styled from 'styled-components';

import DatoContext from 'contexts/DatoContext';

import Section from 'components/Section/Section';
import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';

import AndroidSvg from 'assets/icons/AndroidSvg.inline.svg';
import AppleSvg from 'assets/icons/AppleSvg.inline.svg';
import WebSvg from 'assets/icons/WebSvg.inline.svg';

import PlatformButton from './PlatformButton';

const Platforms = () => {
  const { platformheading, platformsparagraph, googlestore, appstore } = useContext(DatoContext);
  return (
    <Section bgcolor="secondary" isLogo>
      <PlatformsWarpper>
        <Heading isWhite>{platformheading}</Heading>
        <Paragraph isWhite>{platformsparagraph}</Paragraph>
        <div>
          <PlatformButton link="www.todofamily.com" icon={<WebSvg />}>
            Web Browser
          </PlatformButton>
          <PlatformButton link={googlestore} icon={<AndroidSvg />}>
            Google Store
          </PlatformButton>
          <PlatformButton link={appstore} icon={<AppleSvg />}>
            App store
          </PlatformButton>
        </div>
      </PlatformsWarpper>
    </Section>
  );
};

export default Platforms;

const PlatformsWarpper = styled.div`
  margin: 5rem 0;
  p {
    margin: 3rem 0;
    max-width: 81rem;
  }
  div {
    display: flex;
    @media (max-width: 540px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
