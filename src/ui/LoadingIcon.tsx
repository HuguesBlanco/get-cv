import React from 'react';
import { UiColors } from './uiTypes';

type LoadingIconProps = {
  colors: UiColors;
};

function LoadingIcon({ colors }: LoadingIconProps): React.JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: `0.6rem`,
      }}
    >
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          style={{
            width: `1rem`,
            height: `1rem`,
            borderRadius: '50%',
            backgroundColor: colors.PRIMARY,
            animation: `dotPulse 0.8s ease-in-out ${String(index * 0.2)}s infinite`,
          }}
        />
      ))}
      <style>
        {`
          @keyframes dotPulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default LoadingIcon;
