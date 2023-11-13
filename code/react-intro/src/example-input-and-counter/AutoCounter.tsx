import * as React from 'react';
import { useState, useEffect } from 'react';

type AutoCounterProps = {
  label: string;
  period: number;
};
export function AutoCounter({ label, period }: AutoCounterProps) {
  if(period <= 0) {
    throw new Error("period must be positive")
  }
  const [observedCounter, setCounter] = useState(0);
  useEffect(()=> {
    const iid = setInterval(
      () => setCounter(prevState => prevState + 1),
      period
    )
    return () => {
      clearInterval(iid)
    }
  },[period])
  return (
    <div>
      <h2>
        {label}
      </h2>
      <p>{observedCounter}</p>
    </div>
  );
}
