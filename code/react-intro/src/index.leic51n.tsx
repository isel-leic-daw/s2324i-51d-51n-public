import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';

const root = createRoot(document.getElementById('main-div'));

type Model = {
  enabled: boolean;
  counter: number;
};

const model: Model = {
  enabled: true,
  counter: 0,
};

type MyFormComponentProps = {
  model: Model;
};
function MyFormComponent(props: MyFormComponentProps) {
  const [observedCounter, setCounter] = useState(0);
  const [observerState, setState] = useState(0);
  return (
    <div>
      <p>The counter is {observedCounter}</p>
      <p>The state is {observerState}</p>
      <input type="text" disabled={!props.model.enabled} />
      <button
        onClick={() => {
          setCounter(observedCounter + 1);
          setState(observerState + 2);
        }}
        disabled={!props.model.enabled}
      >
        Click me {props.model.counter}
      </button>
    </div>
  );
}

type AutoCounterProps = {
  label: string;
};

function AutoCounter({ label }: AutoCounterProps) {
  const [observedCounter, setCounter] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 2000);
    return () => {
        clearInterval(id)
    }
  }, []);

  return (
    <div>
      <h2>{label}</h2>
      <p>Counter is {observedCounter}</p>
    </div>
  );
}

root.render(
  <div>
    <AutoCounter label="My auto counter" />
    <AutoCounter label="My auto counter" />
    <MyFormComponent model={model} />
  </div>
);
