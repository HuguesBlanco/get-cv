import React, { ChangeEvent, useState } from 'react';
import { UiColors } from './uiTypes';

type TextInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  colors: UiColors;
};

function TextInput({
  id,
  label,
  value,
  onChange,
  colors,
}: TextInputProps): React.JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  const [isFocus, setIsFocus] = useState(false);

  const isInputEmpty = value.length === 0;

  const labelColor = isFocus ? colors.Primary : colors.GreyRegular;
  const textColor = isFocus ? colors.Black : colors.GreyDark;
  const lineColor = isFocus
    ? colors.Primary
    : isInputEmpty
      ? colors.GreyLight
      : colors.GreyRegular;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
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
