import { useState } from 'react';
import './panel.css';

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export interface PanelProps {
  /** Panel header text */
  header?: string;
  /** Panel body text */
  content?: string;
  /** Allow the panel to be toggled open/closed */
  toggleable?: boolean;
  /** Start in the collapsed state (only when toggleable) */
  defaultCollapsed?: boolean;
}

export const Panel = ({
  header = 'Panel Header',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  toggleable = false,
  defaultCollapsed = false,
}: PanelProps) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const headerClasses = [
    'panel__header',
    toggleable && 'panel__header--toggleable',
  ].filter(Boolean).join(' ');

  return (
    <div className="panel">
      <div
        className={headerClasses}
        onClick={toggleable ? () => setCollapsed(prev => !prev) : undefined}
      >
        <span className="panel__title">{header}</span>
        {toggleable && (
          <span className={`panel__chevron ${collapsed ? 'panel__chevron--collapsed' : ''}`}>
            <ChevronIcon />
          </span>
        )}
      </div>

      {!collapsed && (
        <div className="panel__content">
          <p className="panel__body">{content}</p>
        </div>
      )}
    </div>
  );
};