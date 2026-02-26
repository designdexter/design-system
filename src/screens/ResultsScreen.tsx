import { Button } from '../stories/Button';
import { ResultBreakdown } from '../components/ResultBreakdown';
import type { QuestionProps } from '../components/QuestionCard';

type ResultsScreenProps = {
    score: number;
    total: number;
    questions: QuestionProps[];
    history: boolean[]; // array of booleans indicating correct/wrong answers
    onPlayAgain: () => void;
    onRestartSameLevel: () => void;
};

export function ResultsScreen({
    score,
    total,
    questions,
    history,
    onPlayAgain,
    onRestartSameLevel
}: ResultsScreenProps) {
    const percentage = score / total;

    let performanceMessage = 'Keep practising! 💪';
    if (percentage === 1) performanceMessage = 'Perfect score! 🎉';
    else if (percentage >= 0.8) performanceMessage = 'Excellent work! 🌟';
    else if (percentage >= 0.5) performanceMessage = 'Nice work! 👍';

    // Calculate category breakdown
    const categoryStats: Record<string, { correct: number; total: number }> = {};

    questions.forEach((q, index) => {
        if (!categoryStats[q.category]) {
            categoryStats[q.category] = { correct: 0, total: 0 };
        }
        categoryStats[q.category].total += 1;
        if (history[index]) {
            categoryStats[q.category].correct += 1;
        }
    });

    return (
        <div className="game-wrapper">
            <main className="results-card" role="main">
                <div className="score-summary">You scored {score} / {total}</div>
                <h2 className="performance-message">{performanceMessage}</h2>

                <ResultBreakdown categories={categoryStats} />

                <div className="results-actions">
                    <Button label="Restart same level" severity="secondary" onClick={onRestartSameLevel} />
                    <Button label="Play again" severity="primary" onClick={onPlayAgain} />
                </div>
            </main>
        </div>
    );
}
