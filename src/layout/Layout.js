import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import Nav from 'components/Nav/Nav';

import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/theme';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Helmet lang="pl" title="ToDoFamilyApp" />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
