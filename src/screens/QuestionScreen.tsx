import { AnswerOption } from '../components/AnswerOption';
import { Button } from '../stories/Button';
import type { Level, Question } from '../types';

type QuestionScreenProps = {
  questions: Question[];
  currentIndex: number;
  selectedAnswer: number | null;
  level: Level;
  onAnswer: (index: number, isCorrect: boolean) => void;
  onNext: () => void;
  onBack: () => void;
};

const LEVEL_LABELS: Record<Level, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

export function QuestionScreen({
  questions,
  currentIndex,
  selectedAnswer,
  level,
  onAnswer,
  onNext,
  onBack,
}: QuestionScreenProps) {
  const current = questions[currentIndex];
  if (!current) return null;

  const total = questions.length;
  const questionNumber = currentIndex + 1;
  const isAnswered = selectedAnswer !== null;
  const progress = (questionNumber / total) * 100;
  const isLast = currentIndex === total - 1;

  const getOptionStatus = (i: number) => {
    if (!isAnswered) return 'default';
    if (i === current.answerIndex) return 'correct';
    if (i === selectedAnswer) return 'incorrect';
    return 'default';
  };

  return (
    <div className="screen-game">
      {/* Top bar */}
      <div className="topbar">
        <button className="topbar-back" onClick={onBack} aria-label="Back">←</button>
        <span className="topbar-counter">{questionNumber} / {total}</span>
        <div className="topbar-score">⚡</div>
      </div>

      {/* Progress bar */}
      <div className="q-progress-track">
        <div className="q-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Difficulty badge */}
      <div className="q-badge-row">
        <span className={`difficulty-badge difficulty-badge--${level}`}>
          {LEVEL_LABELS[level]}
        </span>
      </div>

      {/* Question box */}
      <div className="q-box-wrapper">
        <div className="q-box">
          <p className="q-box-label">Q{questionNumber}.</p>
          <p className="q-box-text">{current.question}</p>
        </div>
      </div>

      {/* Answer options */}
      <div className="q-answers">
        {current.options.map((opt, i) => (
          <AnswerOption
            key={i}
            index={i}
            label={opt}
            status={getOptionStatus(i)}
            disabled={isAnswered}
            onClick={() => onAnswer(i, i === current.answerIndex)}
          />
        ))}
      </div>

      <div className="q-spacer" />

      {/* Next button — always visible, disabled until answered */}
      <div className="q-footer">
        <Button
          label={isLast ? 'View Results' : 'Next Question →'}
          severity="primary"
          rounded
          disabled={!isAnswered}
          onClick={onNext}
        />
      </div>
    </div>
  );
}
