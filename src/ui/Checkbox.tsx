import React from 'react';

type CheckboxProps = {
  id: string;
  label: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
};

function Checkbox({
  id,
  label,
  isChecked,
  onChange,
}: CheckboxProps): React.JSX.Element {
  const handleCheckboxChange = (): void => {
    onChange(!isChecked);
  };

  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  );
}

export default Checkbox;
