import * as React from 'react';
import { createRoot } from 'react-dom/client';
//import { Counter } from './Counter';
import { AutoCounter } from './AutoCounter';

/*function App() {
  const [observedCounters, setCounters] = useState([0, 0]);
  const sum = observedCounters[0] + observedCounters[1];
  return (
    <div>
      <p>Sum is {sum}</p>
      <Counter 
        label="my first counter" 
         sum={sum} 
         onChange={newValue => setCounters([newValue, observedCounters[1]])} />
      <Counter
        label="my second counter"
        sum={sum}
        onChange={newValue => setCounters([observedCounters[0], newValue])}
      />
    </div>
  );
}*/

function App(){
    return (
        <div>
        <AutoCounter label="first counter" />
        <AutoCounter label="second counter" />
        </div>
    )
}

const root = createRoot(document.getElementById('main-div'));
root.render(<App />);
