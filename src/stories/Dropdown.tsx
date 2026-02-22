import { useState, useRef, useEffect } from 'react';
import './dropdown.css';

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const SearchIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export interface DropdownOption {
  /** Display text */
  label: string;
  /** Option value */
  value: string;
  /** Group this option belongs to (for grouped variant) */
  group?: string;
  /** Optional flag emoji or prefix icon */
  flag?: string;
}

export interface DropdownProps {
  /** List of options */
  options?: DropdownOption[];
  /** Currently selected value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Allow typing to filter options inside the trigger */
  editable?: boolean;
  /** Show a search box inside the panel */
  filter?: boolean;
  /** Show a clear button when a value is selected */
  showClear?: boolean;
  /** Float the placeholder as a label on select */
  floatLabel?: boolean;
  /** Change handler */
  onChange?: (value: string) => void;
}

export const Dropdown = ({
  options = [],
  value: controlledValue,
  placeholder = 'Select a Country',
  editable = false,
  filter = false,
  showClear = false,
  floatLabel = false,
  onChange,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState('');
  const [filterText, setFilterText] = useState('');
  const [editText, setEditText] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLInputElement>(null);

  const value = controlledValue ?? internalValue;
  const selectedOption = options.find(o => o.value === value);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        setFilterText('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Focus filter input when panel opens
  useEffect(() => {
    if (open && filter) {
      setTimeout(() => filterRef.current?.focus(), 0);
    }
    if (!open) setFilterText('');
  }, [open, filter]);

  const handleSelect = (opt: DropdownOption) => {
    setInternalValue(opt.value);
    setEditText(opt.label);
    setOpen(false);
    setFilterText('');
    onChange?.(opt.value);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInternalValue('');
    setEditText('');
    onChange?.('');
  };

  // Build grouped structure
  const filteredOptions = options.filter(o =>
    o.label.toLowerCase().includes(filterText.toLowerCase())
  );

  const groups = filteredOptions.reduce<Record<string, DropdownOption[]>>((acc, opt) => {
    const key = opt.group ?? '__ungrouped__';
    if (!acc[key]) acc[key] = [];
    acc[key].push(opt);
    return acc;
  }, {});

  const isGrouped = options.some(o => o.group);
  const hasValue = !!value;

  const wrapperClass = [
    'dropdown',
    floatLabel && 'dropdown--float',
    open && 'dropdown--open',
    hasValue && 'dropdown--has-value',
  ].filter(Boolean).join(' ');

  const triggerClass = [
    'dropdown__trigger',
    open && 'dropdown__trigger--open',
    !hasValue && !editText && 'dropdown__trigger--placeholder',
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClass} ref={wrapperRef}>
      {/* Float label */}
      {floatLabel && (
        <span className="dropdown__float-label">{placeholder}</span>
      )}

      {/* Trigger */}
      <button
        type="button"
        className={triggerClass}
        onClick={() => setOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {editable ? (
          <input
            className="dropdown__trigger-input"
            value={editText}
            placeholder={floatLabel ? '' : placeholder}
            onChange={e => {
              setEditText(e.target.value);
              setFilterText(e.target.value);
              if (!open) setOpen(true);
            }}
            onClick={e => e.stopPropagation()}
          />
        ) : (
          <span>
            {selectedOption
              ? `${selectedOption.flag ? selectedOption.flag + ' ' : ''}${selectedOption.label}`
              : (floatLabel ? '' : placeholder)}
          </span>
        )}

        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {showClear && hasValue && (
            <button className="dropdown__clear" onClick={handleClear} aria-label="Clear">
              <XIcon />
            </button>
          )}
          <span className={`dropdown__chevron ${open ? 'dropdown__chevron--open' : ''}`}>
            <ChevronIcon />
          </span>
        </span>
      </button>

      {/* Panel */}
      {open && (
        <div className="dropdown__panel" role="listbox">
          {filter && (
            <div className="dropdown__filter">
              <div className="dropdown__filter-wrapper">
                <input
                  ref={filterRef}
                  className="dropdown__filter-input"
                  value={filterText}
                  onChange={e => setFilterText(e.target.value)}
                  placeholder=""
                  aria-label="Filter options"
                />
                <span className="dropdown__filter-icon"><SearchIcon /></span>
              </div>
            </div>
          )}

          <ul className="dropdown__list">
            {isGrouped
              ? Object.entries(groups).map(([group, items]) => (
                  <li key={group}>
                    {group !== '__ungrouped__' && (
                      <div className="dropdown__group-label">
                        {items[0]?.flag && <span>{items[0].flag}</span>}
                        {group}
                      </div>
                    )}
                    {items.map(opt => (
                      <div
                        key={opt.value}
                        className={`dropdown__item ${opt.value === value ? 'dropdown__item--selected' : ''}`}
                        role="option"
                        aria-selected={opt.value === value}
                        onClick={() => handleSelect(opt)}
                      >
                        {opt.flag && <span>{opt.flag}</span>}
                        {opt.label}
                      </div>
                    ))}
                  </li>
                ))
              : filteredOptions.map(opt => (
                  <div
                    key={opt.value}
                    className={`dropdown__item ${opt.value === value ? 'dropdown__item--selected' : ''}`}
                    role="option"
                    aria-selected={opt.value === value}
                    onClick={() => handleSelect(opt)}
                  >
                    {opt.flag && <span>{opt.flag}</span>}
                    {opt.label}
                  </div>
                ))
            }
          </ul>
        </div>
      )}
    </div>
  );
};