import React, { ChangeEvent } from 'react';

type TextInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (newValue: string) => void;
};

function TextInput({
  id,
  label,
  value,
  onChange,
}: TextInputProps): React.JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default TextInput;
