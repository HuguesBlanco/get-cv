import React from 'react';

type CheckboxProps = {
  label: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
};

function Checkbox({
  label,
  isChecked,
  onChange,
}: CheckboxProps): React.JSX.Element {
  const handleCheckboxChange = (): void => {
    onChange(!isChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  );
}

export default Checkbox;
