import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ResultsScreen } from './ResultsScreen';
import type { Level, Question } from '../types';
import '../styles/game.css';

const SAMPLE_QUESTIONS: Question[] = [
  { id: 1, question: 'What does UX stand for?', options: ['User Experience', 'User Execution', 'Unique Experience', 'Universal Experience'], answerIndex: 0, difficulty: 'beginner', category: 'Basics', explanation: '' },
  { id: 2, question: 'What is a wireframe?', options: ['A colour palette', 'A low-fidelity layout sketch', 'A finished design', 'A prototype'], answerIndex: 1, difficulty: 'beginner', category: 'Basics', explanation: '' },
  { id: 3, question: 'What does "affordance" mean?', options: ['The cost', 'A usage cue', 'The speed', 'A colour ratio'], answerIndex: 1, difficulty: 'beginner', category: 'Vocabulary', explanation: '' },
  { id: 4, question: 'What is Jakob\'s Law?', options: ['Users prefer familiar patterns', 'Fitts\'s Law variant', 'A colour rule', 'A layout grid'], answerIndex: 0, difficulty: 'beginner', category: 'Principles', explanation: '' },
  { id: 5, question: 'What is a mental model?', options: ['A mood board', 'User\'s internal understanding', 'A sitemap', 'A heuristic'], answerIndex: 1, difficulty: 'beginner', category: 'Psychology', explanation: '' },
];

const meta = {
  title: 'Screens/ResultsScreen',
  component: ResultsScreen,
  parameters: { layout: 'fullscreen' },
  args: {
    questions: SAMPLE_QUESTIONS,
    total: 5,
    level: 'beginner' as Level,
    elapsedSeconds: 142,
    onHome: fn(),
    onTryAgain: fn(),
    onStartNext: fn(),
  },
} satisfies Meta<typeof ResultsScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PerfectScore: Story = {
  args: {
    score: 5,
    history: [true, true, true, true, true],
  },
};

export const Passed: Story = {
  args: {
    score: 4,
    history: [true, true, true, true, false],
  },
};

export const JustPassed: Story = {
  args: {
    score: 3,
    history: [true, true, true, false, false],
  },
};

export const Failed: Story = {
  args: {
    score: 2,
    history: [true, true, false, false, false],
  },
};

export const IntermediateLevel: Story = {
  args: {
    score: 4,
    history: [true, true, true, true, false],
    level: 'intermediate' as Level,
    elapsedSeconds: 210,
  },
};

export const AdvancedLevel: Story = {
  args: {
    score: 5,
    history: [true, true, true, true, true],
    level: 'advanced' as Level,
    elapsedSeconds: 305,
  },
};
