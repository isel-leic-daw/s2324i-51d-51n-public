import * as React from 'react';

type State =
  | { type: 'init'; inputText: '' }
  | { type: 'valid'; inputText: string; value: number }
  | { type: 'error'; inputText: string; error: string };

type Action = { newValue: string };

function reducer(state: State, action: Action): State {
  const newNumberValue = Number(action.newValue);
  if (isNaN(newNumberValue)) {
    return {
      type: 'error',
      inputText: action.newValue,
      error: 'value must be a number',
    };
  }
  if (newNumberValue <= 0) {
    return {
      type: 'error',
      inputText: action.newValue,
      error: 'value must be greater than zero',
    };
  }
  return {
    type: 'valid',
    inputText: action.newValue,
    value: newNumberValue,
  };
}

type NumberInputProps = {
  buttonLabel: string;
  onChange: (value: number) => void;
};
export function NumberInput({ onChange, buttonLabel }: NumberInputProps) {
  const [state, dispatch] = React.useReducer(reducer, { type: 'init', inputText: '' });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ev => {
    dispatch({newValue: ev.target.value})
  };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    switch(state.type) {
      case 'init':
      case 'error':
        console.log("Invalid state");
        break;
      case 'valid':
        onChange(state.value)
        break;    
    }
  };
  return (
    <>
      <input type="text" value={state.inputText} onChange={handleChange} />
      <button onClick={handleClick} disabled={state.type !== 'valid'}>
        {buttonLabel}
      </button>
      {state.type === 'error' && <p>{state.error}</p>}
    </>
  );
}
