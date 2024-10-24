import React, { ChangeEvent } from 'react';

type TextareaProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function Textarea({
  id,
  label,
  value,
  onChange,
}: TextareaProps): React.JSX.Element {
  const FOCUS_BORDER_COLOR = '#3b82f6';
  const HOVER_BORDER_COLOR = '#9ca3af';
  const BASE_BORDER_COLOR = '#d1d5db';
  const BASE_BACKGROUND_COLOR = '#f9fafb';
  const FOCUS_BACKGROUND_COLOR = '#fff';
  const BASE_BOX_SHADOW = 'none';
  const FOCUS_BOX_SHADOW = '0 0 0 2px rgba(59, 130, 246, 0.2)';
  const BASE_TEXT_COLOR = '#374151';
  const LABEL_COLOR = '#111827';

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    onChange(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label
        htmlFor={id}
        style={{ fontWeight: 500, fontSize: '14px', color: LABEL_COLOR }}
      >
        {label}
      </label>
      <textarea
        rows={20}
        id={id}
        value={value}
        onChange={handleChange}
        onFocus={(event) => {
          event.currentTarget.style.borderColor = FOCUS_BORDER_COLOR;
          event.currentTarget.style.boxShadow = FOCUS_BOX_SHADOW;
          event.currentTarget.style.backgroundColor = FOCUS_BACKGROUND_COLOR;
        }}
        onBlur={(event) => {
          event.currentTarget.style.borderColor = BASE_BORDER_COLOR;
          event.currentTarget.style.boxShadow = BASE_BOX_SHADOW;
          event.currentTarget.style.backgroundColor = BASE_BACKGROUND_COLOR;
        }}
        onMouseEnter={(event) => {
          event.currentTarget.style.borderColor = HOVER_BORDER_COLOR;
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.borderColor = BASE_BORDER_COLOR;
        }}
        style={{
          padding: '12px',
          borderRadius: '6px',
          border: `1px solid ${BASE_BORDER_COLOR}`,
          backgroundColor: BASE_BACKGROUND_COLOR,
          fontFamily: 'inherit',
          fontSize: '16px',
          lineHeight: 1.5,
          color: BASE_TEXT_COLOR,
          resize: 'vertical',
          outline: 'none',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        }}
      />
    </div>
  );
}

export default Textarea;
