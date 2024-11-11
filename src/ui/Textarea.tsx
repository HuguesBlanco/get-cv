import React, { ChangeEvent, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { UiColors } from './uiTypes';

type TextareaProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  colors: UiColors;
};

function Textarea({
  id,
  label,
  value,
  onChange,
  colors,
}: TextareaProps): React.JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getLabelColor = (): string => {
    if (isFocused) return colors.PRIMARY;
    if (isHovered) return colors.BLACK;
    return colors.GREY_REGULAR;
  };

  const getBorderColor = (): string => {
    if (isFocused) return colors.PRIMARY;
    if (isHovered) return colors.BLACK;
    return colors.GREY_LIGHT;
  };

  const getTextColor = (): string => {
    if (isFocused || isHovered) return colors.BLACK;
    return colors.GREY_DARK;
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
          fontWeight: 600,
          fontSize: '1rem',
          color: getLabelColor(),
          transition: 'color 0.3s',
        }}
      >
        {label}
      </label>
      <TextareaAutosize
        id={id}
        value={value}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          onChange(event.target.value);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        minRows={1}
        style={{
          padding: '1.4rem 0 0.4rem 0',
          borderRadius: '0.1rem',
          border: 'none',
          borderBottom: `2px solid ${getBorderColor()}`,
          fontFamily: 'Source Code Pro',
          fontSize: '1rem',
          lineHeight: 1.5,
          color: getTextColor(),
          outline: 'none',
          resize: 'none', // Prevent manual resizing
          overflow: 'hidden',
          transition: 'border-color 0.3s, color 0.3s',
          width: '100%',
          boxSizing: 'border-box',
          backgroundColor: colors.WHITE,
        }}
      />
    </div>
  );
}

export default Textarea;
