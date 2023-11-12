import * as React from 'react';
import { useState } from 'react';

type CounterProps = {
  label: string;
  sum: number;
  onChange: (newValue: number) => void;
};
export function Counter({ label, sum, onChange }: CounterProps) {
  const [observedCounter, setCounter] = useState(0);
  return (
    <div>
      <h2>
        {label} and sum is {sum}
      </h2>
      <p>{observedCounter}</p>
      <button
        onClick={() => {
          setCounter(observedCounter + 1);
          onChange(observedCounter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(observedCounter - 1);
          onChange(observedCounter - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
