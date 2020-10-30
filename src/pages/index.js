import React from 'react';
import { graphql } from 'gatsby';

import HeroHeader from 'components/HeroHeader/HeroHeader';
import Intro from 'components/Intro/Intro';
import Adventages from 'components/Adventages/Adventages';
import Pricing from 'components/Pricing/Pricing';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Knowledge from 'components/Knowledge/Knowledge';
import Features from 'components/Features/Features';
import Platforms from 'components/Platforms/Platforms';
import StepSection from 'components/StepsSection/StepSection';

import DatoContext from 'contexts/DatoContext';

const IndexPage = ({ data }) => {
  const value = data.allDatoCmsPagecontent.edges[0].node;
  return (
    <>
      <DatoContext.Provider value={value}>
        <HeroHeader />
        <Intro />
        <Adventages />
        <Pricing />
        <Platforms />
        <StepSection />
        <AdditionalInfo />
        <Knowledge />
        <Features />
      </DatoContext.Provider>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query PageQuery {
    allDatoCmsPagecontent {
      edges {
        node {
          additionalinfoheading
          additionalinfoparagraph
          adventageheading1
          adventageheading2
          adventageheading3
          adventageparagraph1
          adventageparagraph2
          adventageparagraph3
          featureheader1
          featureheader2
          featureheader3
          featureparagraph1
          featureparagraph2
          featureparagraph3
          featuresheading
          heroheading
          heroparagraph
          introheading
          introparagraph
          knowledgeheading1
          knowledgeheading
          knowledgeheading2
          knowledgeheading3
          knowledgeparagraph1
          knowledgeparagraph2
          knowledgeparagraph3
          platformheading
          platformsparagraph
          pricingcost
          pricingheading
          pricingparagraph
          step1content
          stepcontent2
          stepcontent3
          stepcontent4
          stepcontent5
          stepsheading
        }
      }
    }
  }
`;
