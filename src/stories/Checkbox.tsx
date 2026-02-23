import { useState } from 'react';
import './checkbox.css';

export interface CheckboxProps {
  /** Label text displayed next to the checkbox */
  label?: string;
  /** Initial checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Disables the checkbox */
  disabled?: boolean;
  /** Called when the checked state changes */
  onChange?: (checked: boolean) => void;
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

export const Checkbox = ({
  label = 'Label',
  defaultChecked = false,
  disabled = false,
  onChange,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e.target.checked);
  };

  return (
    <label className={`checkbox${disabled ? ' checkbox--disabled' : ''}`}>
      <input
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className="checkbox__box">
        {checked && <CheckIcon />}
      </span>
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
};