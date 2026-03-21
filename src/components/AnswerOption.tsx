const LETTERS = ['A', 'B', 'C', 'D'];

type AnswerOptionStatus = 'default' | 'selected' | 'correct' | 'incorrect';

type AnswerOptionProps = {
  index: number;
  label: string;
  status: AnswerOptionStatus;
  disabled?: boolean;
  onClick: () => void;
};

export function AnswerOption({ index, label, status, disabled, onClick }: AnswerOptionProps) {
  return (
    <button
      className={`answer-option answer-option--${status}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <span className="answer-option-letter">{LETTERS[index]}.</span>
      <span className="answer-option-text">{label}</span>
      {(status === 'selected' || status === 'correct') && (
        <span className="answer-option-icon answer-option-icon--check">✓</span>
      )}
      {status === 'incorrect' && (
        <span className="answer-option-icon answer-option-icon--cross">✗</span>
      )}
    </button>
  );
}
