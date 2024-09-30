import React, { ChangeEvent } from 'react';

type TextInputProps = {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
};

function TextInput({
  label,
  value,
  onChange,
}: TextInputProps): React.JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>
        {label}
        <input type="text" value={value} onChange={handleChange} />
      </label>
    </div>
  );
}

export default TextInput;
