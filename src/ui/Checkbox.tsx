import React, { ChangeEvent, useState } from 'react';
import { UiColors } from './uiTypes';

type CheckboxProps = {
  id: string;
  label: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  colors: UiColors;
};

function Checkbox({
  id,
  label,
  isChecked,
  onChange,
  colors,
}: CheckboxProps): React.JSX.Element {
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
    if (isChecked) return colors.PRIMARY;
    return colors.GREY_LIGHT;
  };

  const backgroundColor = isChecked ? colors.PRIMARY : 'transparent';

  return (
    <label
      htmlFor={id}
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div
        style={{
          position: 'relative',
          marginRight: '0.5rem',
          width: '1.2rem',
          height: '1.2rem',
        }}
      >
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.checked);
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={{
            position: 'absolute',
            opacity: 0,
            width: '100%',
            height: '100%',
            margin: 0,
            cursor: 'pointer',
          }}
        />
        <span
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            border: `2px solid ${getBorderColor()}`,
            borderRadius: '0.1rem',
            backgroundColor: backgroundColor,
            transition: 'border-color 0.3s, background-color 0.3s',
            boxSizing: 'border-box',
          }}
        >
          {isChecked && (
            <svg
              viewBox="0 0 24 24"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '1rem',
                height: '1rem',
                fill: colors.WHITE,
              }}
            >
              <path d="M20.285 6.708l-11.67 11.67-4.95-4.95 1.415-1.414 3.535 3.535 10.255-10.255z" />
            </svg>
          )}
        </span>
      </div>
      <span
        style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: getLabelColor(),
          transition: 'color 0.3s',
        }}
      >
        {label}
      </span>
    </label>
  );
}

export default Checkbox;
