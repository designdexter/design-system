import { useState } from 'react';
import './tabview.css';

export interface TabItem {
  /** Tab header label */
  header: string;
  /** Tab body content */
  content: string;
  /** Disable this tab */
  disabled?: boolean;
}

export interface TabViewProps {
  /** Array of tab definitions */
  tabs?: TabItem[];
  /** Initially active tab index */
  defaultActiveIndex?: number;
  /** Tab change handler */
  onTabChange?: (index: number) => void;
}

export const TabView = ({
  tabs = [],
  defaultActiveIndex = 0,
  onTabChange,
}: TabViewProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleTabClick = (index: number) => {
    if (tabs[index]?.disabled) return;
    setActiveIndex(index);
    onTabChange?.(index);
  };

  return (
    <div className="tabview">
      <ul className="tabview__nav" role="tablist">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          const tabClasses = [
            'tabview__tab',
            isActive   && 'tabview__tab--active',
            tab.disabled && 'tabview__tab--disabled',
          ].filter(Boolean).join(' ');

          return (
            <li key={index} className={tabClasses} role="presentation">
              <a
                className="tabview__tab-link"
                role="tab"
                aria-selected={isActive}
                aria-disabled={tab.disabled}
                onClick={() => handleTabClick(index)}
              >
                {tab.header}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="tabview__panels">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tabview__panel ${index === activeIndex ? 'tabview__panel--active' : ''}`}
            role="tabpanel"
            hidden={index !== activeIndex}
          >
            <p className="tabview__content">{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};