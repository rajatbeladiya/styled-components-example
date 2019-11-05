import React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import Header from './layouts/Header';
import GlobalStyle from './Global';
import { Button, Card } from './elements';

const theme = {
  colors: {
    primary: '#E54B4B',
    secondary: '#DBDE61'
  }
}

const themeTwo = {
  colors: {
    primary: '#524763',
    secondary: '#82D8D8'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <GlobalStyle />
        <main
          css={`
            background: red;
            h2{
              font-size: 100px;
            }
          `}
        >
          <Button>Say Hello</Button>
          <ThemeProvider theme={themeTwo}>
            <Card>
              <h2>Card Heading</h2>
              <Card.Button as="a">Say Hello</Card.Button>
              <Card.Button modifiers="cancel">Say Hello</Card.Button>
            </Card>
          </ThemeProvider>
          {/* <Button modifiers="cancel">Say Hello</Button>
        <Button modifiers="small">Say Hello</Button>
      <Button modifiers={["small", "cancel"]}>Don't Say hello</Button> */}
        </main>
      </div >
    </ThemeProvider>
  );
}

export default App;
