import React from 'react';
import styled from 'styled-components';

import RulesCardSvg from 'assets/svg/RulesCard.inline.svg';
import HappinessCardSvg from 'assets/svg/HappinessCard.inline.svg';
import TimeCardSvg from 'assets/svg/TimeCard.inline.svg';

import Section from 'components/Section/Section';
import AdventagesCard from './AdventagesCard';

const data = [
  {
    title: 'Twoje zasady',
    text:
      'With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house chores.',
    icon: <RulesCardSvg />,
  },
  {
    title: 'Twój czas',
    text:
      'With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house chores.',
    icon: <TimeCardSvg />,
  },
  {
    title: 'Twoje szczęście',
    text:
      'With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house chores.With ToDo app you will dive into the world of done house chores.',
    icon: <HappinessCardSvg />,
  },
];

const Adventages = () => {
  return (
    <Section bgcolor="primary">
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
`;
