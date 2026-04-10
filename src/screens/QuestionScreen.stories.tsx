import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { QuestionScreen } from './QuestionScreen';
import type { Level, Question } from '../types';
import '../styles/game.css';

const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Which UX principle states that users spend most of their time on other sites, so they expect your site to work the same way?',
    options: ["Jakob's Law", "Fitts's Law", 'Hick\'s Law', 'Miller\'s Law'],
    answerIndex: 0,
    difficulty: 'beginner',
    category: 'Principles',
    explanation: 'Jakob\'s Law states that users prefer your site to work the same way as all other sites they already know.',
  },
  {
    id: 2,
    question: 'What does "affordance" mean in UX design?',
    options: ['The cost of a product', 'A visual cue that suggests how an object should be used', 'The speed of an interaction', 'A colour contrast ratio'],
    answerIndex: 1,
    difficulty: 'beginner',
    category: 'Vocabulary',
    explanation: 'An affordance is a property of an object that suggests how it should be used.',
  },
];

const meta = {
  title: 'Screens/QuestionScreen',
  component: QuestionScreen,
  parameters: { layout: 'fullscreen' },
  args: {
    questions: SAMPLE_QUESTIONS,
    level: 'beginner' as Level,
    onAnswer: fn(),
    onNext: fn(),
    onBack: fn(),
  },
} satisfies Meta<typeof QuestionScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unanswered: Story = {
  args: {
    currentIndex: 0,
    selectedAnswer: null,
  },
};

export const CorrectAnswer: Story = {
  args: {
    currentIndex: 0,
    selectedAnswer: 0,
  },
};

export const IncorrectAnswer: Story = {
  args: {
    currentIndex: 0,
    selectedAnswer: 2,
  },
};

export const LastQuestion: Story = {
  args: {
    currentIndex: 1,
    selectedAnswer: null,
  },
};

export const IntermediateLevel: Story = {
  args: {
    currentIndex: 0,
    selectedAnswer: null,
    level: 'intermediate' as Level,
  },
};

export const AdvancedLevel: Story = {
  args: {
    currentIndex: 0,
    selectedAnswer: null,
    level: 'advanced' as Level,
  },
};
