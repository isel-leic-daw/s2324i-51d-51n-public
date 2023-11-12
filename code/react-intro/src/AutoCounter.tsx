import * as React from 'react';
import { useState, useEffect } from 'react';

type AutoCounterProps = {
  label: string;
};
export function AutoCounter({ label }: AutoCounterProps) {
  const [observedCounter, setCounter] = useState(0);
  useEffect(()=> {
    setInterval(
      () => setCounter(prevState => prevState + 1),
      2000
    )
  },[])
  return (
    <div>
      <h2>
        {label}
      </h2>
      <p>{observedCounter}</p>
    </div>
  );
}
