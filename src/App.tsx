import styled from 'styled-components';
import { useState } from 'react';

const AppWrapper = styled.div`
  width: 98%;
  max-width: 700px;
  margin: 100 auto;
`;

const Heading = styled.h2`
  font-size: 25px;
`;

const Count = styled.div`
  background: purple;
`;

const ButtonWrapper = styled.div`
  background: gray;
`;

const Button = styled.button`
  background: green;
  color: white;
`


function App() {
  return (
    <AppWrapper>
      <Heading>Counter with inputs, Typescript, SC & Cypress</Heading>
      <Count></Count>
      <ButtonWrapper>
        <Button>-</Button>
        <Button>+</Button>
        <Button>reset</Button>
      </ButtonWrapper>
    </AppWrapper>
  );
}

export default App;
