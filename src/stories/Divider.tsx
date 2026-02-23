import './divider.css';

export type DividerAlign = 'left' | 'center' | 'right';
export type DividerLayout = 'horizontal' | 'vertical';
export type DividerType = 'solid' | 'dashed' | 'dotted';

export interface DividerProps {
  /** Text label shown inside the divider */
  label?: string;
  /** Position of the label */
  align?: DividerAlign;
  /** Direction of the divider */
  layout?: DividerLayout;
  /** Line style */
  type?: DividerType;
}

export const Divider = ({
  label,
  align = 'center',
  layout = 'horizontal',
  type = 'solid',
}: DividerProps) => {
  const classes = [
    'divider',
    `divider--${layout}`,
    `divider--${type}`,
    label && `divider--align-${align}`,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="separator">
      {label && <span className="divider__label">{label}</span>}
    </div>
  );
};