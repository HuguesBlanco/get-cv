import React, { useState } from 'react';
import { UiColors } from './uiTypes';

type ButtonProps = {
  onClick: () => void;
  colors: UiColors;
  children: string;
};

function Button({ onClick, colors, children }: ButtonProps): React.JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const getBackgroundColor = (): string => {
    if (isFocused || isHovered) return colors.BLACK;
    return colors.SECONDARY;
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      style={{
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        color: colors.WHITE,
        backgroundColor: getBackgroundColor(),
        border: 'none',
        borderRadius: '0.1rem',
        cursor: 'pointer',
        outline: 'none',
        transition: 'background-color 0.3s',
      }}
    >
      {children}
    </button>
  );
}

export default Button;
