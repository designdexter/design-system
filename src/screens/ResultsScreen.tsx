import html2canvas from 'html2canvas';
import { Button } from '../stories/Button';
import { BreakdownRow } from '../components/BreakdownRow';
import type { Level, Question } from '../types';

type ResultsScreenProps = {
  score: number;
  total: number;
  questions: Question[];
  history: boolean[];
  level: Level;
  elapsedSeconds: number;
  onPlayAgain: () => void;
};

const LEVEL_LABELS: Record<Level, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function ResultsScreen({
  score,
  total,
  questions,
  history,
  level,
  elapsedSeconds,
  onPlayAgain,
}: ResultsScreenProps) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = percentage >= 60;

  const performanceMessage =
    percentage === 100 ? 'Perfect score! 🎉' :
    percentage >= 80   ? 'Excellent work! 🌟' :
    percentage >= 60   ? 'Great job! 👏' :
                         'Keep practising! 💪';

  const handleShare = async () => {
    const el = document.getElementById('share-card');
    if (!el) return;
    try {
      const canvas = await html2canvas(el, { useCORS: true, scale: 2 });
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], 'ux-trivia-results.png', { type: 'image/png' });
        if (navigator.share && navigator.canShare?.({ files: [file] })) {
          await navigator.share({
            title: 'UX Trivia Results',
            text: `I scored ${score}/${total} (${percentage}%) on UX Trivia! 🎉`,
            files: [file],
          });
        } else {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'ux-trivia-results.png';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
      }, 'image/png');
    } catch (err) {
      console.error('Share failed:', err);
    }
  };

  return (
    <div className="screen-results">
      {/* Shareable hero card */}
      <div id="share-card" className="results-hero">
        {/* Decorative dots */}
        <div className="results-dot" style={{ width: 20, height: 20, top: 30, left: 40 }} />
        <div className="results-dot" style={{ width: 14, height: 14, top: 20, left: 120 }} />
        <div className="results-dot" style={{ width: 24, height: 24, top: 40, left: 200 }} />
        <div className="results-dot" style={{ width: 16, height: 16, top: 25, right: 60 }} />
        <div className="results-dot" style={{ width: 12, height: 12, top: 60, right: 30 }} />
        <div className="results-dot" style={{ width: 10, height: 10, top: 80, left: 60 }} />

        {/* Trophy */}
        <div className="results-trophy-ring">
          <span className="results-trophy-emoji">🏆</span>
        </div>

        <p className="results-performance">{performanceMessage}</p>
        <p className="results-score">{score} / {total}</p>
        <p className="results-subtitle">{LEVEL_LABELS[level]} · {percentage}% correct</p>

        {!passed && (
          <p className="results-fail-note">You need 60% to unlock the next level</p>
        )}
      </div>

      {/* Stats row */}
      <div className="results-stats">
        <div className="stat-card">
          <span className="stat-icon">🎯</span>
          <span className="stat-value">{percentage}%</span>
          <span className="stat-label">Accuracy</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">⏱️</span>
          <span className="stat-value">{formatTime(elapsedSeconds)}</span>
          <span className="stat-label">Time</span>
        </div>
      </div>

      {/* Question breakdown */}
      <div className="results-breakdown">
        <p className="results-breakdown-title">Question Breakdown</p>
        {questions.map((q, i) => (
          <BreakdownRow
            key={q.id}
            question={q.question}
            isCorrect={history[i] ?? false}
          />
        ))}
      </div>

      {/* Actions */}
      <div className="results-actions">
        <Button label="Share Results" severity="primary" outlined rounded onClick={handleShare} />
        <Button label="Play Again" severity="primary" rounded onClick={onPlayAgain} />
      </div>
    </div>
  );
}
