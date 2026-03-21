import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { AnswerOption } from './AnswerOption';
import '../styles/game.css';

const meta = {
    title: 'Game UI/AnswerOption',
    component: AnswerOption,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    argTypes: {
        index: { control: { type: 'number', min: 0, max: 3 } },
        label: { control: 'text' },
        status: {
            control: 'select',
            options: ['default', 'selected', 'correct', 'incorrect'],
        },
        disabled: { control: 'boolean' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof AnswerOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        index: 0,
        label: 'A visual hint that suggests how an element works',
        status: 'default',
    },
};

export const Selected: Story = {
    args: {
        index: 1,
        label: 'A visual hint that suggests how an element works',
        status: 'selected',
    },
};

export const Correct: Story = {
    args: {
        index: 0,
        label: 'A visual hint that suggests how an element works',
        status: 'correct',
    },
};

export const Incorrect: Story = {
    args: {
        index: 2,
        label: 'The time it takes a page to load',
        status: 'incorrect',
    },
};

export const Disabled: Story = {
    args: {
        index: 3,
        label: 'A visual hint that suggests how an element works',
        status: 'default',
        disabled: true,
    },
};
