import { useState } from 'react';
import './togglebutton.css';

export interface ToggleButtonProps {
  /** Optional text label */
  label?: string;
  /** Initial toggled state */
  defaultOn?: boolean;
  /** Disables the button */
  disabled?: boolean;
  /** Called when the toggle state changes */
  onChange?: (on: boolean) => void;
}

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2.5 7L5.5 10L11.5 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M3 3L11 11M11 3L3 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ToggleButton = ({
  label,
  defaultOn = false,
  disabled = false,
  onChange,
}: ToggleButtonProps) => {
  const [on, setOn] = useState(defaultOn);

  const handleClick = () => {
    const next = !on;
    setOn(next);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      className={[
        'togglebtn',
        on       && 'togglebtn--active',
        disabled && 'togglebtn--disabled',
      ].filter(Boolean).join(' ')}
      onClick={handleClick}
      disabled={disabled}
      aria-pressed={on}
    >
      <span className="togglebtn__icon">
        {on ? <CheckIcon /> : <CloseIcon />}
      </span>
      {label && <span className="togglebtn__label">{label}</span>}
    </button>
  );
};