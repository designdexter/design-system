import { QuestionCard, type QuestionProps } from '../components/QuestionCard';

type QuestionScreenProps = {
    questions: QuestionProps[];
    currentIndex: number;
    onAnswer: (index: number, isCorrect: boolean) => void;
    onNext: () => void;
    selectedAnswer: number | null;
};

export function QuestionScreen({
    questions,
    currentIndex,
    onAnswer,
    onNext,
    selectedAnswer
}: QuestionScreenProps) {
    const current = questions[currentIndex];

    if (!current) return null;

    return (
        <div className="game-wrapper">
            <main role="main" aria-label="Question Form">
                <QuestionCard
                    currentQuestion={currentIndex + 1}
                    totalQuestions={questions.length}
                    question={current}
                    onAnswer={onAnswer}
                    onNext={onNext}
                    selectedAnswer={selectedAnswer}
                />
            </main>
        </div>
    );
}
