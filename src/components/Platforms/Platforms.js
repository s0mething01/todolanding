import React from 'react';
import styled from 'styled-components';

import Section from 'components/Section/Section';
import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';

import AndroidSvg from 'assets/icons/AndroidSvg.inline.svg';
import AppleSvg from 'assets/icons/AppleSvg.inline.svg';
import WebSvg from 'assets/icons/WebSvg.inline.svg';

import PlatformButton from './PlatfromButton';

const Platforms = () => {
  return (
    <Section bgcolor="secondary" isLogo>
      <PlatformsWarpper>
        <Heading isWhite>
          Dostępna na każdym urządzeniu,
          <br /> telefony, tablety czy komputery
        </Heading>
        <Paragraph isWhite>
          With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house
          chores. house chores.With ToDo app you will dive into e worof done house chores.
        </Paragraph>
        <div>
          <PlatformButton link="" icon={<WebSvg />}>
            Web Browser
          </PlatformButton>
          <PlatformButton link="" icon={<AndroidSvg />}>
            Google Store
          </PlatformButton>
          <PlatformButton link="" icon={<AppleSvg />}>
            App store
          </PlatformButton>
        </div>
      </PlatformsWarpper>
    </Section>
  );
};

export default Platforms;

const PlatformsWarpper = styled.div`
  margin: 50px 0;
  p {
    margin: 30px 0;
    max-width: 810px;
  }
  div {
    display: flex;
  }
`;
