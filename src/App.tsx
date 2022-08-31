import styled from 'styled-components';
import { useState } from 'react';

const AppWrapper = styled.div`
  width: 95%;
  max-width: 650px;
  margin: 100px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #f47736;
  color: #E6D5F4;
  font-size: 40px;
`;

const Heading = styled.h2`
  font-size: 40px;
`;

const Output = styled.div`
font-size: 40px;
  
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  background: #FD9965;
  padding: 20px;
`;

const Button = styled.button`
  background: #7425B2;
  color: white;
  padding: 20px 25px;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  &:hover, &:active, &:focus {
    background: #959C00;
  }
`

const FieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  background: #FD9965;
  padding: 20px;
  margin-top: -20px;
  color: white;
`
const Input = styled.input`
  color: #7425B2;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
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
        <label htmlFor="amount">Amount:</label>
        <Input type="text" name="amount" value={amount} onChange={updateAmount} data-cy="input"/>
      </FieldWrapper>
    </AppWrapper>
  );
}

export default App;
