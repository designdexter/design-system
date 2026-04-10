import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { WelcomeScreen } from './WelcomeScreen';
import type { Level, LevelStatus } from '../types';
import '../styles/game.css';

const SAMPLE_QUESTIONS = [
  { id: 1, question: 'What does UX stand for?', options: ['User Experience', 'User Execution', 'Unique Experience', 'Universal Experience'], answerIndex: 0, difficulty: 'beginner' as Level, category: 'Basics', explanation: '' },
  { id: 2, question: 'What is a wireframe?', options: ['A colour palette', 'A low-fidelity layout sketch', 'A finished design', 'A prototype'], answerIndex: 1, difficulty: 'beginner' as Level, category: 'Basics', explanation: '' },
  { id: 3, question: 'What is a mental model?', options: ['A mood board', 'A user\'s internal understanding of a system', 'A sitemap', 'A heuristic'], answerIndex: 1, difficulty: 'intermediate' as Level, category: 'Psychology', explanation: '' },
  { id: 4, question: 'What is Fitts\'s Law?', options: ['Time to read', 'Time to reach a target', 'Number of errors', 'Visual hierarchy rule'], answerIndex: 1, difficulty: 'advanced' as Level, category: 'Principles', explanation: '' },
];

const meta = {
  title: 'Screens/WelcomeScreen',
  component: WelcomeScreen,
  parameters: { layout: 'fullscreen' },
  args: {
    questionsBank: SAMPLE_QUESTIONS,
    onStart: fn(),
  },
} satisfies Meta<typeof WelcomeScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllActive: Story = {
  args: {
    getLevelStatus: () => 'active' as LevelStatus,
  },
};

export const FreshStart: Story = {
  args: {
    getLevelStatus: (level: Level): LevelStatus => {
      if (level === 'beginner') return 'active';
      return 'locked';
    },
  },
};

export const BeginnerDone: Story = {
  args: {
    getLevelStatus: (level: Level): LevelStatus => {
      if (level === 'beginner') return 'done';
      if (level === 'intermediate') return 'active';
      return 'locked';
    },
  },
};

export const AllDone: Story = {
  args: {
    getLevelStatus: () => 'done' as LevelStatus,
  },
};
