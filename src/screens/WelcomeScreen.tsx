import { Button } from '../stories/Button';

type WelcomeScreenProps = {
    onStart: (difficulty: 'beginner' | 'intermediate' | 'advanced') => void;
};

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
    return (
        <div className="game-wrapper">
            <main className="welcome-card" role="main">
                <h1>UX Trivia</h1>
                <p>Test your UX, UI, and interaction design knowledge. Select a difficulty to begin.</p>

                <div className="level-buttons">
                    <div className="level-button-wrapper">
                        <Button
                            label="Beginner"
                            severity="primary"
                            onClick={() => onStart('beginner')}
                        />
                        <span className="level-meta">6 questions · ~3 mins</span>
                    </div>

                    <div className="level-button-wrapper">
                        <Button
                            label="Intermediate"
                            severity="info"
                            onClick={() => onStart('intermediate')}
                        />
                        <span className="level-meta">6 questions · ~4 mins</span>
                    </div>

                    <div className="level-button-wrapper">
                        <Button
                            label="Advanced"
                            severity="help"
                            onClick={() => onStart('advanced')}
                        />
                        <span className="level-meta">4 questions · ~3 mins</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
