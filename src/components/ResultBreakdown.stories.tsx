import type { Meta, StoryObj } from '@storybook/react-vite';
import { BreakdownRow } from './BreakdownRow';
import '../styles/game.css';

const meta = {
    title: 'Game UI/BreakdownRow',
    component: BreakdownRow,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    argTypes: {
        question: { control: 'text' },
        isCorrect: { control: 'boolean' },
    },
} satisfies Meta<typeof BreakdownRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Correct: Story = {
    args: {
        question: "What does 'affordance' mean in UX design?",
        isCorrect: true,
    },
};

export const Incorrect: Story = {
    args: {
        question: "Which of Nielsen's 10 heuristics relates to error messages?",
        isCorrect: false,
    },
};
