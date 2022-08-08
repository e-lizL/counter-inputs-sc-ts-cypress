import styled from 'styled-components';
import { useState } from 'react';

const AppWrapper = styled.div`
  width: 98%;
  max-width: 700px;
  margin: 100px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Heading = styled.h2`
  font-size: 25px;
`;

const Output = styled.div`
  
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const Button = styled.button`
  background: green;
  color: white;
  padding: 8px 12px;
  border: 0;
  border-radius: 8px;
`

const FieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`


 
function App() {
  const [amount, setAmount] = useState(1)
  const [count, setCount] = useState(amount)

  let decrement = () => setCount(count => count - amount);
  let increment = () => setCount(count => count + amount);
  let reset = () => setCount(0);

  let updateAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  }

  return (
    <AppWrapper>
      <Heading>Counter with inputs, Typescript, SC & Cypress</Heading>
      <Output data-cy="output">{count}</Output>
      <ButtonWrapper>
        <Button onClick={decrement} data-cy="decrement">-</Button>
        <Button onClick={increment} data-cy="increment">+</Button>
        <Button onClick={reset} data-cy="reset">reset</Button>
      </ButtonWrapper>
      
      <FieldWrapper>
        <label htmlFor="amount">amount:</label>
        <input type="text" name="amount" value={amount} onChange={updateAmount} data-cy="input"/>
      </FieldWrapper>
    </AppWrapper>
  );
}

export default App;
