import React, { useState } from 'react';
import { UiColors } from './uiTypes';

type SegmentedControlButtonProps<T> = {
  label: string;
  value: T;
  isSelected: boolean;
  onSelect: (value: T) => void;
  colors: UiColors;
  isFirst: boolean;
  isLast: boolean;
};

function SegmentedControlButton<T>({
  label,
  value,
  isSelected,
  onSelect,
  colors,
  isFirst,
  isLast,
}: SegmentedControlButtonProps<T>): React.JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const getTextColor = (): string => {
    if (isFocused || isHovered || isSelected) return colors.WHITE;
    return colors.GREY_DARK;
  };

  const getBorderColor = (): string => {
    if (isFocused || isHovered) return colors.BLACK;
    if (isSelected) return colors.PRIMARY;
    return colors.GREY_LIGHT;
  };

  const getBackgroundColor = (): string => {
    if (isFocused || isHovered) return colors.BLACK;
    if (isSelected) return colors.PRIMARY;
    return colors.WHITE;
  };

  return (
    <button
      type="button"
      onClick={() => {
        onSelect(value);
      }}
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
        flex: 1,
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        color: getTextColor(),
        textAlign: 'center',
        backgroundColor: getBackgroundColor(),
        border: `1px solid ${getBorderColor()}`,
        borderLeftWidth: isFirst ? '1px' : '0px',
        borderRightWidth: isLast ? '1px' : '0px',
        borderRadius: isFirst
          ? '0.1rem 0 0 0.1rem'
          : isLast
            ? '0 0.1rem 0.1rem 0'
            : '0',
        cursor: isSelected ? 'default' : 'pointer',
        outline: 'none',
        transition: 'background-color 0.3s, color 0.3s, border 0.3s',
      }}
    >
      {label}
    </button>
  );
}

type SegmentedControlProps<T> = {
  id: string;
  label: string;
  options: { label: string; value: T }[];
  selectedValue: T;
  onChange: (selectedValue: T) => void;
  colors: UiColors;
};

function SegmentedControl<T>({
  id,
  label,
  options,
  selectedValue,
  onChange,
  colors,
}: SegmentedControlProps<T>): React.JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getLabelColor = (): string => {
    if (isFocused) return colors.PRIMARY;
    if (isHovered) return colors.BLACK;
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
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
    >
      <label
        htmlFor={id}
        style={{
          color: getLabelColor(),
          fontSize: '1rem',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          marginBottom: '0.5rem',
          transition: 'color 0.3s',
        }}
      >
        {label}
      </label>
      <div
        id={id}
        style={{
          display: 'flex',
        }}
      >
        {options.map(({ label, value }, index) => {
          const isFirstButton = index === 0;
          const isLastButton = index === options.length - 1;

          const isBuuttonSelected = value === selectedValue;

          return (
            <SegmentedControlButton
              key={String(value)}
              label={label}
              value={value}
              isSelected={isBuuttonSelected}
              onSelect={onChange}
              colors={colors}
              isFirst={isFirstButton}
              isLast={isLastButton}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SegmentedControl;
