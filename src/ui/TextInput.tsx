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
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isInputEmpty = value.length === 0;

  const getLabelColor = (): string => {
    if (isFocused) return colors.PRIMARY;
    if (isHovered) return colors.BLACK;
    return colors.GREY_REGULAR;
  };

  const getTextColor = (): string => {
    if (isFocused) return colors.BLACK;
    if (isHovered) return colors.BLACK;
    return colors.GREY_DARK;
  };

  const getLineColor = (): string => {
    if (isFocused) return colors.PRIMARY;
    if (isHovered) return colors.BLACK;
    if (isInputEmpty) return colors.GREY_LIGHT;
    return colors.GREY_REGULAR;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        transition: 'color 0.3s',
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <label
        htmlFor={id}
        style={{
          color: getLabelColor(),
          fontSize: '1rem',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          marginBottom: '0.2rem',
          transition: 'color 0.3s',
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>): void => {
          onChange(event.target.value);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        style={{
          fontSize: '1rem',
          color: getTextColor(),
          outline: 'none',
          padding: '0.4rem 0',
          border: 'none',
          borderBottom: `2px solid ${getLineColor()}`,
          transition: 'border-color 0.3s, color 0.3s',
          width: '100%',
          textOverflow: 'ellipsis',
        }}
      />
    </div>
  );
}

export default TextInput;
