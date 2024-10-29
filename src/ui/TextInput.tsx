import React, { ChangeEvent, useState } from 'react';

type TextInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  color: string;
};

function TextInput({
  id,
  label,
  value,
  onChange,
  color,
}: TextInputProps): React.JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  const [isFocus, setIsFocus] = useState(false);

  const isInputEmpty = value.length === 0;

  const GREY_LIGHT = '#eeeeee';
  const GREY_REGULAR = '#999999';
  const GREY_DARK = '#555555';
  const BLACK = '#000000';

  const labelColor = isFocus ? color : GREY_REGULAR;
  const textColor = isFocus ? BLACK : GREY_DARK;
  const lineColor = isFocus ? color : isInputEmpty ? GREY_LIGHT : GREY_REGULAR;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '4rem',
        transition: 'color 0.3s',
      }}
    >
      <label
        htmlFor={id}
        style={{
          color: labelColor,
          fontSize: '1rem',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          marginBottom: '0.2rem',
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
        style={{
          fontSize: '1rem',
          color: textColor,
          outline: 'none',
          padding: '0.4rem 0',
          border: 'none',
          borderBottom: `2px solid ${lineColor}`,
          transition: 'border-color 0.3s',
          width: '100%',
          textOverflow: 'ellipsis',
        }}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
      />
    </div>
  );
}

export default TextInput;
