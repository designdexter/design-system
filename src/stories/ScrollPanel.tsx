import './scrollpanel.css';

export type ScrollPanelVariant = 'default' | 'custom-bar' | 'both';

export interface ScrollPanelProps {
  /** Scrollable text content */
  content?: string;
  /**
   * default     — vertical scroll, subtle gray thumb
   * custom-bar  — vertical scroll, primary-blue thumb
   * both        — vertical + horizontal scroll
   */
  variant?: ScrollPanelVariant;
  /** Height of the panel in px */
  height?: number;
}

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.';

export const ScrollPanel = ({
  content = LOREM,
  variant = 'default',
  height = 214,
}: ScrollPanelProps) => {
  const panelClass = [
    'scrollpanel',
    `scrollpanel--${variant}`,
  ].join(' ');

  const contentClass = [
    'scrollpanel__content',
    variant === 'both' && 'scrollpanel__content--wide',
  ].filter(Boolean).join(' ');

  return (
    <div className={panelClass} style={{ height }}>
      <div className={contentClass}>
        <p className="scrollpanel__text">{content}</p>
      </div>
    </div>
  );
};