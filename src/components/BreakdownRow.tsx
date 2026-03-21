type BreakdownRowProps = {
  question: string;
  isCorrect: boolean;
};

export function BreakdownRow({ question, isCorrect }: BreakdownRowProps) {
  return (
    <div className={`breakdown-row breakdown-row--${isCorrect ? 'correct' : 'incorrect'}`}>
      <div className="breakdown-row-accent" />
      <div className="breakdown-row-content">
        <span className="breakdown-row-text">{question}</span>
        <span className="breakdown-row-icon">{isCorrect ? '✅' : '❌'}</span>
      </div>
    </div>
  );
}
