import * as React from 'react';
import { NumberInput } from './NumberInputUsingReducer';
import { AutoCounter } from './AutoCounter';
export function App() {
  const [period, setPeriod] = React.useState(1000);
  const handleChange = (value: number) => {
    setPeriod(value);
  };
  return (
    <div>
      <NumberInput onChange={handleChange} buttonLabel='Change period'/>
      <AutoCounter label="The counter" period={period} />
    </div>
  );
}
