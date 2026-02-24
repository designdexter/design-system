import './App.css';
import { Button } from './stories/Button';

// ── Question Bank ──────────────────────────────────────────────
const questions = [
  {
    id: 1,
    question: "What does 'affordance' mean in UX design?",
    options: [
      "A visual hint that suggests how an element works",
      "The time it takes a page to load",
      "A type of usability testing method",
      "The spacing between UI elements"
    ],
    answer: 0,
    difficulty: "beginner",
    category: "Fundamentals",
    explanation: "An affordance is a design property that signals how an object should be used — like a button that looks pressable."
  },
  {
    id: 2,
    question: "Which of Nielsen's 10 heuristics does an error message that explains what went wrong relate to?",
    options: [
      "Visibility of system status",
      "Error prevention",
      "Help users recognize, diagnose and recover from errors",
      "Consistency and standards"
    ],
    answer: 2,
    difficulty: "beginner",
    category: "Heuristics",
    explanation: "Heuristic #9 is about helping users understand what went wrong and how to fix it — not just showing a generic error."
  },
  {
    id: 3,
    question: "Fitts's Law states that the time to reach a target depends on which two factors?",
    options: [
      "Color and contrast of the target",
      "Distance to and size of the target",
      "User's age and experience level",
      "Screen resolution and pixel density"
    ],
    answer: 1,
    difficulty: "intermediate",
    category: "Design Principles",
    explanation: "Fitts's Law: the further away and smaller a target is, the longer it takes to click. This is why primary CTAs should be large and easy to reach."
  },
  {
    id: 4,
    question: "What is the primary purpose of a 'progressive disclosure' pattern?",
    options: [
      "To animate content onto the screen gradually",
      "To hide complexity and reveal details only when needed",
      "To show a loading progress bar to users",
      "To display content based on user location"
    ],
    answer: 1,
    difficulty: "intermediate",
    category: "Interaction Patterns",
    explanation: "Progressive disclosure reduces cognitive load by showing only what's necessary upfront, revealing more detail as the user needs it."
  },
  {
    id: 5,
    question: "In accessibility, what does WCAG 2.1 Level AA require for text contrast ratio?",
    options: [
      "At least 2:1 for normal text",
      "At least 3:1 for all text",
      "At least 4.5:1 for normal text",
      "At least 7:1 for all text"
    ],
    answer: 2,
    difficulty: "advanced",
    category: "Accessibility",
    explanation: "WCAG 2.1 AA requires a minimum 4.5:1 contrast ratio for normal text and 3:1 for large text (18pt+ or 14pt+ bold)."
  }
];

// ── Types ──────────────────────────────────────────────────────
type Screen = 'welcome' | 'game' | 'results';
type Level = 'beginner' | 'intermediate' | 'advanced';

// ── App ────────────────────────────────────────────────────────
import { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [level, setLevel] = useState<Level>('beginner');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  // Filter questions by chosen level
  const filtered = questions.filter(q => q.difficulty === level);
  const current = filtered[currentIndex];
  const isLast = currentIndex === filtered.length - 1;

  function startGame(chosenLevel: Level) {
    setLevel(chosenLevel);
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setScreen('game');
  }

  function handleAnswer(index: number) {
    if (selected !== null) return; // already answered
    setSelected(index);
    if (index === current.answer) {
      setScore(s => s + 1);
    }
  }

  function handleNext() {
    if (isLast) {
      setScreen('results');
    } else {
      setCurrentIndex(i => i + 1);
      setSelected(null);
    }
  }

  function restart() {
    setScreen('welcome');
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
  }

  // ── Welcome Screen
  if (screen === 'welcome') {
    return (
      <div className="game-wrapper">
        <div className="welcome-card">
          <h1>UX Trivia</h1>
          <p>Test your UX, UI and interaction design knowledge. Pick your level to begin.</p>
          <div className="level-buttons">
            <Button label="Beginner" severity="primary" onClick={() => startGame('beginner')} />
            <Button label="Intermediate" severity="info" onClick={() => startGame('intermediate')} />
            <Button label="Advanced" severity="help" onClick={() => startGame('advanced')} />
          </div>
        </div>
      </div>
    );
  }

  // ── Results Screen
  if (screen === 'results') {
    return (
      <div className="game-wrapper">
        <div className="results-card">
          <div className="score-display">{score}/{filtered.length}</div>
          <h2>{score === filtered.length ? 'Perfect score! 🎉' : score >= filtered.length / 2 ? 'Nice work! 👍' : 'Keep practising! 💪'}</h2>
          <p>You answered {score} out of {filtered.length} questions correctly on {level} level.</p>
          <Button label="Play Again" severity="primary" onClick={restart} />
        </div>
      </div>
    );
  }

  // ── Game Screen
  return (
    <div className="game-wrapper">
      <div className="question-card">
        <div className="question-meta">
          <span>{current.category} · {current.difficulty}</span>
          <span>Question {currentIndex + 1} of {filtered.length}</span>
        </div>

        <p className="question-text">{current.question}</p>

        <div className="answer-buttons">
          {current.options.map((option, i) => {
            let className = 'answer-btn';
            if (selected !== null) {
              if (i === current.answer) className += ' correct';
              else if (i === selected) className += ' wrong';
            }
            return (
              <button
                key={i}
                className={className}
                onClick={() => handleAnswer(i)}
                disabled={selected !== null}
              >
                {option}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="explanation">
            💡 {current.explanation}
          </div>
        )}

        {selected !== null && (
          <Button
            label={isLast ? 'See Results' : 'Next Question'}
            severity="primary"
            onClick={handleNext}
          />
        )}
      </div>
    </div>
  );
}