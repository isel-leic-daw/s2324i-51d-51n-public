import * as React from 'react';
import { useState } from 'react';

type NumberInputProps = {
  buttonLabel: string;  
  onChange: (value: number) => void;
};
export function NumberInput({ onChange, buttonLabel }: NumberInputProps) {
  const [error, setError] = useState<string | undefined>(undefined);
  const [value, setValue] = useState('');
  const [numberValue, setNumberValue] = useState<number | undefined>(undefined)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ev => {
    const newValue = ev.target.value;
    setValue(newValue);
    const newNumberValue = Number(ev.target.value);
    if (isNaN(newNumberValue)) {
      setError('value must be a number');
      setNumberValue(undefined)
      return;
    }
    if (newNumberValue <= 0) {
      setError('value greater than zero');
      setNumberValue(undefined)
      return;
    }
    setError(undefined)
    setNumberValue(newNumberValue)
  };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    onChange(numberValue);
  };
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick} disabled={numberValue === undefined}>{buttonLabel}</button>
      {error && <p>{error}</p>}
    </>
  );
}
