import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';

const root = createRoot(document.getElementById('main-div'));

/*
type SomeInputProps = {
  enabled: boolean;
};
function SomeInput({ enabled }: SomeInputProps) {
  return (
    <div>
      <input type="text" disabled={!enabled} />
      <input type="submit" disabled={!enabled} />
      <p>Enabled: {enabled.toString()}</p>
    </div>
  );
}

type SomeInputList = {
  length: number;
};
function SomeInputList({ length }: SomeInputList) {
  return (
    <div>
      {[...Array(length).keys()].map(index => (
        <SomeInput key={length - index} enabled={enabled} />
      ))}
    </div>
  );
}

let enabled = true;
let length = 1;
setInterval(() => {
  root.render(
    <SomeInputList length={length} />
  );
  length = length + 1;
  enabled = !enabled;
}, 2000);
*/

/*
function Counter() {
  const [observedCounter, setCounter] = useState(0);
  return (
    <div>
      <p>{observedCounter}</p>
      <button onClick={() => setCounter(observedCounter + 1)}>inc</button>
      <button onClick={() => setCounter(observedCounter - 1)}>dec</button>
    </div>
  );
}

root.render(
  <div>
    <Counter />
    <Counter />
  </div>
);
*/

function AutoCounter() {
  const [observedCounter, setCounter] = useState(0);
  useEffect(() => {
    console.log("setInterval")
    setInterval(() => {
      setCounter(state => state + 1);
      console.log("setInterval callback")
    }, 1000);
  }, []);
  return (
    <div>
      <p>{observedCounter}</p>
    </div>
  );
}

root.render(
  <div>
    <AutoCounter />
    <AutoCounter />
  </div>
);
