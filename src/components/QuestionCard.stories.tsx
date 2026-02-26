import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { QuestionCard } from './QuestionCard';

const meta = {
    title: 'Game UI/QuestionCard',
    component: QuestionCard,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    argTypes: {
        currentQuestion: { control: 'number' },
        totalQuestions: { control: 'number' },
        question: { control: 'object' },
        selectedAnswer: { control: 'number' },
    },
    args: { onAnswer: fn(), onNext: fn() },
} satisfies Meta<typeof QuestionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleQuestion = {
    category: 'Fundamentals',
    difficulty: 'beginner' as const,
    question: "What does 'affordance' mean in UX design?",
    options: [
        "A visual hint that suggests how an element works",
        "The time it takes a page to load",
        "A type of usability testing method",
        "The spacing between UI elements"
    ],
    answerIndex: 0,
    explanation: "An affordance is a design property that signals how an object should be used — like a button that looks pressable.",
};

export const Unanswered: Story = {
    args: {
        currentQuestion: 1,
        totalQuestions: 10,
        question: sampleQuestion,
        selectedAnswer: null,
    },
};

export const CorrectlyAnswered: Story = {
    args: {
        currentQuestion: 1,
        totalQuestions: 10,
        question: sampleQuestion,
        selectedAnswer: 0,
    },
};


export const IncorrectlyAnswered: Story = {
    args: {
        currentQuestion: 1,
        totalQuestions: 10,
        question: sampleQuestion,
        selectedAnswer: 1,
    },
};
