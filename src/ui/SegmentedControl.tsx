type SegmentedControlButtonProps<T> = {
  label: string;
  value: T;
  isSelected: boolean;
  onSelect: (value: T) => void;
  color: string;
};

function SegmentedControlButton<T>({
  label,
  value,
  isSelected,
  onSelect,
  color,
}: SegmentedControlButtonProps<T>): JSX.Element {
  const backgroundColor = isSelected ? color : 'transparent';
  const textColor = isSelected ? '#ffffff' : color;

  return (
    <button
      type="button"
      onClick={() => {
        onSelect(value);
      }}
      style={{
        flex: 1,
        padding: '8px',
        backgroundColor,
        color: textColor,
        border: 'none',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'background-color 0.2s',
      }}
    >
      {label}
    </button>
  );
}

type SegmentedControlProps<T> = {
  options: { label: string; value: T }[];
  selectedValue: T;
  onChange: (selectedValue: T) => void;
  color: string;
};

function SegmentedControl<T>({
  options,
  selectedValue,
  onChange,
  color,
}: SegmentedControlProps<T>): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        border: `1px solid ${color}`,
      }}
    >
      {options.map(({ label, value }) => (
        <SegmentedControlButton
          key={String(value)}
          label={label}
          value={value}
          isSelected={value === selectedValue}
          onSelect={onChange}
          color={color}
        />
      ))}
    </div>
  );
}

export default SegmentedControl;
