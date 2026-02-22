import { useState } from 'react';
import './input.css';

// ── Search icon ──────────────────────────────────────────────
const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// ── Chevron down icon ────────────────────────────────────────
const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export type InputIconType = 'search' | 'chevron';

export interface InputTextProps {
  /** Input value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Label — floats above when focused/filled when floatLabel is true */
  label?: string;
  /** Animate the label to float above the input on focus/fill */
  floatLabel?: boolean;
  /** Show icon on the left */
  iconLeft?: boolean;
  /** Show icon on the right */
  iconRight?: boolean;
  /** Which icon to render */
  icon?: InputIconType;
  /** Helper text shown below the input */
  helpText?: string;
  /** Mark the field as invalid */
  invalid?: boolean;
  /** Error message shown when invalid */
  errorMessage?: string;
  /** Use the filled background style */
  filled?: boolean;
  /** Disable the input */
  disabled?: boolean;
  /** Change handler */
  onChange?: (value: string) => void;
}

export const InputText = ({
  value: controlledValue,
  placeholder = 'Placeholder',
  label,
  floatLabel = false,
  iconLeft = false,
  iconRight = false,
  icon = 'search',
  helpText,
  invalid = false,
  errorMessage = 'Username is not available.',
  filled = false,
  disabled = false,
  onChange,
}: InputTextProps) => {
  const [internalValue, setInternalValue] = useState('');
  const value = controlledValue ?? internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e.target.value);
  };

  const Icon = icon === 'search' ? SearchIcon : ChevronIcon;

  const inputClasses = [
    'input',
    filled    && 'input--filled',
    invalid   && 'input--invalid',
    iconLeft  && 'input--icon-left',
    iconRight && 'input--icon-right',
  ].filter(Boolean).join(' ');

  const inputEl = (
    <input
      className={inputClasses}
      type="text"
      value={value}
      placeholder={floatLabel ? ' ' : placeholder}
      disabled={disabled}
      onChange={handleChange}
    />
  );

  return (
    <div className="input-wrapper">
      {/* Non-float label */}
      {label && !floatLabel && (
        <span className="input-help" style={{ color: 'var(--input-color)', fontWeight: 'var(--font-weight-bold)' }}>
          {label}
        </span>
      )}

      <div className="input-field">
        {floatLabel ? (
          <div className="input-float" style={{ width: '100%' }}>
            {iconLeft && <span className="input-icon input-icon--left"><Icon /></span>}
            {inputEl}
            {label && <label className="input-float-label">{label}</label>}
            {iconRight && <span className="input-icon input-icon--right"><Icon /></span>}
          </div>
        ) : (
          <>
            {iconLeft  && <span className="input-icon input-icon--left"><Icon /></span>}
            {inputEl}
            {iconRight && <span className="input-icon input-icon--right"><Icon /></span>}
          </>
        )}
      </div>

      {helpText && !invalid && (
        <span className="input-help">{helpText}</span>
      )}
      {invalid && (
        <span className="input-error">{errorMessage}</span>
      )}
    </div>
  );
};