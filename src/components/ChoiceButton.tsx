
type ChoiceButtonProps = {
    label: string;
    onClick: () => void;
    status?: 'default' | 'selected' | 'correct' | 'wrong';
    disabled?: boolean;
};

export function ChoiceButton({ label, onClick, status = 'default', disabled }: ChoiceButtonProps) {
    let className = 'choice-button';

    if (status !== 'default') {
        className += ` ${status}`;
    }

    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
            type="button"
            aria-pressed={status === 'selected' || status === 'correct'}
        >
            {label}
        </button>
    );
}
