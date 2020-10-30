import React, { useContext } from 'react';
import styled from 'styled-components';

import DatoContext from 'contexts/DatoContext';

import RulesCardSvg from 'assets/svg/RulesCard.inline.svg';
import HappinessCardSvg from 'assets/svg/HappinessCard.inline.svg';
import TimeCardSvg from 'assets/svg/TimeCard.inline.svg';

import Section from 'components/Section/Section';
import AdventagesCard from './AdventagesCard';

const Adventages = () => {
  const { adventageheading1, adventageparagraph1, adventageheading2, adventageparagraph2, adventageheading3, adventageparagraph3 } = useContext(DatoContext);

  const data = [
    {
      title: adventageheading1,
      text: adventageparagraph1,
      icon: <RulesCardSvg />,
    },
    {
      title: adventageheading2,
      text: adventageparagraph2,
      icon: <TimeCardSvg />,
    },
    {
      title: adventageheading3,
      text: adventageparagraph3,
      icon: <HappinessCardSvg />,
    },
  ];

  return (
    <Section bgcolor="primary" isLogo>
      <CardWrapper>
        {data.map(({ title, text, icon }) => (
          <AdventagesCard key={title}>
            <h5>{title}</h5>
            <p>{text}</p>
            {icon}
          </AdventagesCard>
        ))}
      </CardWrapper>
    </Section>
  );
};

export default Adventages;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
