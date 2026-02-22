import './card.css';
import { Button } from './Button';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Card subtitle shown below the title */
  subtitle?: string;
  /** Body text content */
  content?: string;
  /** Show the top image banner */
  showHeader?: boolean;
  /** URL for the header image */
  headerImage?: string;
  /** Show the subtitle */
  showSubtitle?: boolean;
  /** Show the footer with action buttons */
  showFooter?: boolean;
  /** Label for the primary action button */
  primaryAction?: string;
  /** Label for the secondary action button */
  secondaryAction?: string;
  /** Handler for primary action */
  onPrimaryAction?: () => void;
  /** Handler for secondary action */
  onSecondaryAction?: () => void;
}

export const Card = ({
  title = 'Card Header',
  subtitle = 'Card Subheader',
  content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
  showHeader = true,
  headerImage = 'https://primefaces.org/cdn/primereact/images/usercard.png',
  showSubtitle = true,
  showFooter = true,
  primaryAction = 'Save',
  secondaryAction = 'Cancel',
  onPrimaryAction,
  onSecondaryAction,
}: CardProps) => {
  return (
    <div className="card">
      {showHeader && (
        <img
          className="card__header-image"
          src={headerImage}
          alt="Card header"
        />
      )}

      <div className="card__content">
        <p className="card__title">{title}</p>

        {showSubtitle && (
          <p className="card__subtitle">{subtitle}</p>
        )}

        <p className="card__body">{content}</p>

        {showFooter && (
          <div className="card__footer">
            <Button
              label={primaryAction}
              severity="primary"
              iconLeft
              onClick={onPrimaryAction}
            />
            <Button
              label={secondaryAction}
              severity="secondary"
              iconLeft
              onClick={onSecondaryAction}
            />
          </div>
        )}
      </div>
    </div>
  );
};