import './button.css';

export type ButtonSeverity =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'help'
  | 'danger';

export interface ButtonProps {
  /** Text displayed inside the button */
  label?: string;
  /** Visual style of the button */
  severity?: ButtonSeverity;
  /** Render with no background or border, text colour only */
  text?: boolean;
  /** Render with a border and transparent background */
  outlined?: boolean;
  /** Render as a plain hyperlink */
  link?: boolean;
  /** Add a drop shadow */
  raised?: boolean;
  /** Fully rounded corners */
  rounded?: boolean;
  /** Show icon on the left side of the label */
  iconLeft?: boolean;
  /** Show icon on the right side of the label */
  iconRight?: boolean;
  /** Show only the icon, hide the label */
  iconOnly?: boolean;
  /** Disable the button */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}

/** Default icon — a simple checkmark SVG matching the Figma design */
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const Button = ({
  label = 'Button',
  severity = 'primary',
  text = false,
  outlined = false,
  link = false,
  raised = false,
  rounded = false,
  iconLeft = false,
  iconRight = false,
  iconOnly = false,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const classes = [
    'btn',
    `btn--${severity}`,
    text     && 'btn--text',
    outlined && 'btn--outlined',
    link     && 'btn--link',
    raised   && 'btn--raised',
    rounded  && 'btn--rounded',
    iconOnly && 'btn--icon-only',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {(iconLeft || iconOnly) && <CheckIcon />}
      {!iconOnly && label}
      {iconRight && !iconOnly && <CheckIcon />}
    </button>
  );
};