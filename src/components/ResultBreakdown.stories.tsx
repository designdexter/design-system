import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResultBreakdown } from './ResultBreakdown';

const meta = {
    title: 'Game UI/ResultBreakdown',
    component: ResultBreakdown,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    argTypes: {
        categories: { control: 'object' },
    },
} satisfies Meta<typeof ResultBreakdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        categories: {
            'Fundamentals': { correct: 2, total: 2 },
            'Interaction Patterns': { correct: 1, total: 3 },
            'Psychology': { correct: 0, total: 2 },
            'Accessibility': { correct: 1, total: 1 },
        },
    },
};

export const Perfect: Story = {
    args: {
        categories: {
            'Fundamentals': { correct: 2, total: 2 },
            'Interaction Patterns': { correct: 3, total: 3 },
            'Psychology': { correct: 2, total: 2 },
            'Accessibility': { correct: 1, total: 1 },
        },
    },
};
