import './App.css';
import './styles/game.css';
import { useState } from 'react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { QuestionScreen } from './screens/QuestionScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import type { QuestionProps } from './components/QuestionCard';

// ── Question Bank ──────────────────────────────────────────────
const questionsBank = [
  {
    id: 1,
    question: "What does 'affordance' mean in UX design?",
    options: [
      "A visual hint that suggests how an element works",
      "The time it takes a page to load",
      "A type of usability testing method",
      "The spacing between UI elements"
    ],
    answerIndex: 0,
    difficulty: "beginner" as const,
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
    answerIndex: 2,
    difficulty: "beginner" as const,
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
    answerIndex: 1,
    difficulty: "intermediate" as const,
    category: "Principles",
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
    answerIndex: 1,
    difficulty: "intermediate" as const,
    category: "Interaction",
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
    answerIndex: 2,
    difficulty: "advanced" as const,
    category: "Accessibility",
    explanation: "WCAG 2.1 AA requires a minimum 4.5:1 contrast ratio for normal text and 3:1 for large text (18pt+ or 14pt+ bold)."
  },
  {
    id: 6,
    question: "What is the 'peak-end rule' in user experience?",
    options: [
      "Users remember the most recent interaction and the overall average experience",
      "Users judge an experience based on its most intense point and its end",
      "Users prefer experiences that have a clear beginning, middle, and end",
      "Users are more likely to return to an experience if it ends on a positive note"
    ],
    answerIndex: 1,
    difficulty: "advanced" as const,
    category: "Psychology",
    explanation: "The peak-end rule suggests that people judge an experience largely based on how they felt at its most intense point and at its end, rather than the total average."
  },
  {
    id: 7,
    question: "Which of the following is NOT a common method for conducting user research?",
    options: ["Surveys", "A/B testing", "Card sorting", "Heatmaps"],
    answerIndex: 1,
    difficulty: "beginner" as const,
    category: "User Research",
    explanation: "A/B testing is empirical testing of live components, but typically user research refers to generative/qualitative work like surveys or card sorting."
  },
  {
    id: 8,
    question: "What is the main goal of 'mobile-first' design?",
    options: [
      "To create a separate mobile app for users",
      "To design for the smallest screen first and then scale up",
      "To prioritize touch interactions over mouse interactions",
      "To use mobile design patterns on desktop interfaces"
    ],
    answerIndex: 1,
    difficulty: "intermediate" as const,
    category: "Responsive Design",
    explanation: "Mobile-first design means starting the design process with the smallest screen in mind, ensuring the core functionality is prioritized."
  }
];

type ScreenState = 'welcome' | 'game' | 'results';
type Level = 'beginner' | 'intermediate' | 'advanced';

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('welcome');
  const [level, setLevel] = useState<Level>('beginner');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // Array to track if each question was answered correctly
  const [history, setHistory] = useState<boolean[]>([]);

  const filteredQuestions: QuestionProps[] = questionsBank.filter(
    (q) => q.difficulty === level
  );

  const startGame = (chosenLevel: Level) => {
    setLevel(chosenLevel);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setHistory([]);
    setScreen('game');
  };

  const handleAnswer = (index: number, isCorrect: boolean) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setHistory((prev) => [...prev, isCorrect]);
  };

  const handleNext = () => {
    if (currentIndex === filteredQuestions.length - 1) {
      setScreen('results');
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const score = history.filter(Boolean).length;

  return (
    <div className="app-container">
      {screen === 'welcome' && (
        <WelcomeScreen onStart={startGame} />
      )}

      {screen === 'game' && (
        <QuestionScreen
          questions={filteredQuestions}
          currentIndex={currentIndex}
          onAnswer={handleAnswer}
          onNext={handleNext}
          selectedAnswer={selectedAnswer}
        />
      )}

      {screen === 'results' && (
        <ResultsScreen
          score={score}
          total={filteredQuestions.length}
          questions={filteredQuestions}
          history={history}
          onPlayAgain={() => setScreen('welcome')}
          onRestartSameLevel={() => startGame(level)}
        />
      )}
    </div>
  );
}