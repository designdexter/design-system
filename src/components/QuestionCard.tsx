import { Badge } from './Badge';
import { ProgressBar } from './ProgressBar';
import { ChoiceButton } from './ChoiceButton';
import { Button } from '../stories/Button';

export type QuestionProps = {
    category: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
};

type QuestionCardProps = {
    currentQuestion: number;
    totalQuestions: number;
    question: QuestionProps;
    onAnswer: (index: number, isCorrect: boolean) => void;
    onNext: () => void;
    selectedAnswer: number | null;
};

export function QuestionCard({
    currentQuestion,
    totalQuestions,
    question,
    onAnswer,
    onNext,
    selectedAnswer
}: QuestionCardProps) {
    const isFinished = selectedAnswer !== null;
    const isCorrect = selectedAnswer === question.answerIndex;

    const handleSelect = (index: number) => {
        if (isFinished) return;
        onAnswer(index, index === question.answerIndex);
    };

    return (
        <div className="question-card-container">
            <div className="question-header">
                <div className="question-badges">
                    <Badge label={question.category} type="info" />
                    <Badge label={question.difficulty} type={question.difficulty} />
                </div>
                <div className="question-progress-text">
                    Question {currentQuestion} of {totalQuestions}
                </div>
            </div>

            <ProgressBar current={currentQuestion} total={totalQuestions} />

            <h2 className="question-text">{question.question}</h2>

            <div className="answer-list">
                {question.options.map((opt, index) => {
                    let status: 'default' | 'selected' | 'correct' | 'wrong' = 'default';

                    if (isFinished) {
                        if (index === question.answerIndex) {
                            status = 'correct';
                        } else if (index === selectedAnswer) {
                            status = 'wrong';
                        }
                    }

                    return (
                        <ChoiceButton
                            key={index}
                            label={opt}
                            onClick={() => handleSelect(index)}
                            status={status}
                            disabled={isFinished}
                        />
                    );
                })}
            </div>

            {isFinished && (
                <div className="feedback-explanation" role="alert" aria-live="polite">
                    <div className={`feedback-title ${isCorrect ? 'correct' : 'wrong'}`}>
                        {isCorrect ? 'Correct! Nice job.' : 'Not quite!'}
                    </div>
                    <p>{question.explanation}</p>
                </div>
            )}

            {isFinished && (
                <div className="action-footer">
                    <Button
                        label={currentQuestion === totalQuestions ? 'View Results' : 'Next Question'}
                        severity="primary"
                        onClick={onNext}
                    />
                </div>
            )}
        </div>
    );
}
