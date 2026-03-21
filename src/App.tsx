import { useState, useRef } from 'react';
import './App.css';
import './styles/game.css';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { QuestionScreen } from './screens/QuestionScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import type { Level, LevelStatus, Question } from './types';

const questionsBank: Question[] = [
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
    difficulty: 'beginner',
    category: 'Fundamentals',
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
    difficulty: 'beginner',
    category: 'Heuristics',
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
    difficulty: 'intermediate',
    category: 'Principles',
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
    difficulty: 'intermediate',
    category: 'Interaction',
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
    difficulty: 'advanced',
    category: 'Accessibility',
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
    difficulty: 'advanced',
    category: 'Psychology',
    explanation: "The peak-end rule: people judge an experience largely based on how they felt at its most intense point and at its end, rather than the total average."
  },
  {
    id: 7,
    question: "Which of the following is NOT a common method for conducting user research?",
    options: ["Surveys", "A/B testing", "Card sorting", "Heatmaps"],
    answerIndex: 1,
    difficulty: 'beginner',
    category: 'User Research',
    explanation: "A/B testing is empirical testing of live variants — user research typically refers to generative/qualitative work like surveys or card sorting."
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
    difficulty: 'intermediate',
    category: 'Responsive Design',
    explanation: "Mobile-first design means starting the design process with the smallest screen in mind, ensuring the core functionality is prioritized."
  },
  {
    id: 9,
    question: "In UX writing, what does the term 'microcopy' refer to?",
    options: [
      "The main body of text on a webpage",
      "Short pieces of text that guide users through an interface",
      "Legal disclaimers and terms of service",
      "The font size used for body text"
    ],
    answerIndex: 1,
    difficulty: 'beginner',
    category: 'UX Writing',
    explanation: "Microcopy refers to the small bits of text that help users navigate an interface, such as button labels, error messages, and tooltips."
  },
  {
    id: 10,
    question: "What is a 'dark pattern' in UX design?",
    options: [
      "A design that uses dark colors to create a moody atmosphere",
      "A design that intentionally tricks users into doing something they might not want to do",
      "A design that is optimized for use in low-light environments",
      "A design that follows the latest trends in UI aesthetics"
    ],
    answerIndex: 1,
    difficulty: 'advanced',
    category: 'Ethics',
    explanation: "Dark patterns are deceptive design techniques used to manipulate users into actions they might not otherwise take."
  },
  {
    id: 11,
    question: "Which of the following is an example of a 'call to action' (CTA) in UX design?",
    options: [
      "A headline that describes the product",
      "A button that prompts users to take a specific action",
      "A navigation menu that links to different pages",
      "A footer that contains contact information"
    ],
    answerIndex: 1,
    difficulty: 'beginner',
    category: 'UI Elements',
    explanation: "A CTA is a button or link that encourages users to take a specific action, such as 'Sign Up', 'Buy Now', or 'Learn More'."
  },
  {
    id: 12,
    question: "What is 'Hick's Law' in UX design?",
    options: [
      "The time it takes to make a decision increases with the number of options",
      "Users prefer interfaces that follow a hierarchical structure",
      "The more features an app has, the more likely users are to use it",
      "Users are more likely to engage with content that is visually appealing"
    ],
    answerIndex: 0,
    difficulty: 'intermediate',
    category: 'Principles',
    explanation: "Hick's Law: decision time increases with the number of options. This is why keeping choices simple and limited matters."
  },
  {
    id: 13,
    question: "According to Gestalt principles, what term describes our tendency to group objects that are close together?",
    options: ["Similarity", "Continuity", "Closure", "Proximity"],
    answerIndex: 3,
    difficulty: 'intermediate',
    category: 'Principles',
    explanation: "Proximity is a Gestalt principle — we group objects that are close together as belonging to the same unit."
  },
  {
    id: 14,
    question: "Nielsen's research found that a small number of participants uncovers the majority of usability issues. What is that number?",
    options: ["3", "4", "5", "20"],
    answerIndex: 2,
    difficulty: 'intermediate',
    category: 'Research Methods',
    explanation: "Nielsen's research found that 5 participants are enough to uncover the majority of usability issues in a product."
  },
  {
    id: 15,
    question: "What is the 'Zeigarnik Effect' in user experience?",
    options: [
      "The tendency for users to remember completed tasks better than incomplete ones",
      "The tendency for users to prefer interfaces that are visually balanced",
      "The tendency for users to be more engaged with content that is interactive",
      "The tendency for users to remember uncompleted or interrupted tasks better than completed ones"
    ],
    answerIndex: 3,
    difficulty: 'advanced',
    category: 'Psychology',
    explanation: "The Zeigarnik Effect: people remember uncompleted or interrupted tasks better than completed ones — useful for driving re-engagement."
  },
  {
    id: 16,
    question: "Don Norman identified two 'gulfs' that explain where breakdowns in human-computer interaction occur. Which answer correctly names both?",
    options: [
      "Gulf of Execution and Gulf of Evaluation",
      "Gulf of Perception and Gulf of Action",
      "Gulf of Intention and Gulf of Feedback",
      "Gulf of Cognition and Gulf of Emotion"
    ],
    answerIndex: 0,
    difficulty: 'advanced',
    category: 'Principles',
    explanation: "Don Norman's two gulfs: Gulf of Execution (how to make the system do what you want) and Gulf of Evaluation (did it do what you wanted?)."
  }
];

const LEVEL_ORDER: Level[] = ['beginner', 'intermediate', 'advanced'];
type ScreenState = 'map' | 'game' | 'results';

export default function App() {
  const [screen, setScreen]               = useState<ScreenState>('map');
  const [level, setLevel]                 = useState<Level>('beginner');
  const [currentIndex, setCurrentIndex]   = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [history, setHistory]             = useState<boolean[]>([]);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [completedLevels, setCompletedLevels] = useState<Record<Level, boolean>>({
    beginner: false,
    intermediate: false,
    advanced: false,
  });

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const filteredQuestions = questionsBank.filter(q => q.difficulty === level);

  const getLevelStatus = (l: Level): LevelStatus => {
    if (completedLevels[l]) return 'done';
    const idx = LEVEL_ORDER.indexOf(l);
    if (idx === 0) return 'active';
    if (completedLevels[LEVEL_ORDER[idx - 1]]) return 'active';
    return 'locked';
  };

  const startGame = (chosenLevel: Level) => {
    setLevel(chosenLevel);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setHistory([]);
    setElapsedSeconds(0);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setElapsedSeconds(s => s + 1), 1000);
    setScreen('game');
  };

  const handleAnswer = (index: number, isCorrect: boolean) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setHistory(prev => [...prev, isCorrect]);
  };

  const handleNext = () => {
    if (currentIndex === filteredQuestions.length - 1) {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
      const finalScore = history.filter(Boolean).length;
      const passed = finalScore / filteredQuestions.length >= 0.6;
      if (passed) setCompletedLevels(prev => ({ ...prev, [level]: true }));
      setScreen('results');
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const handleBack = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    setScreen('map');
    setHistory([]);
    setCurrentIndex(0);
    setSelectedAnswer(null);
  };

  const score = history.filter(Boolean).length;

  return (
    <div className="app-root">
      {screen === 'map' && (
        <WelcomeScreen
          getLevelStatus={getLevelStatus}
          questionsBank={questionsBank}
          onStart={startGame}
        />
      )}
      {screen === 'game' && (
        <QuestionScreen
          questions={filteredQuestions}
          currentIndex={currentIndex}
          selectedAnswer={selectedAnswer}
          level={level}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {screen === 'results' && (
        <ResultsScreen
          score={score}
          total={filteredQuestions.length}
          questions={filteredQuestions}
          history={history}
          level={level}
          elapsedSeconds={elapsedSeconds}
          onPlayAgain={() => setScreen('map')}
        />
      )}
    </div>
  );
}
