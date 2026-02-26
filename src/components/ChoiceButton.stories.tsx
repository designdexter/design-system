import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ChoiceButton } from './ChoiceButton';

const meta = {
    title: 'Game UI/ChoiceButton',
    component: ChoiceButton,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        status: {
            control: 'select',
            options: ['default', 'selected', 'correct', 'wrong'],
        },
        disabled: { control: 'boolean' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof ChoiceButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'A visual hint that suggests how an element works',
        status: 'default',
    },
};

export const Selected: Story = {
    args: {
        label: 'A visual hint that suggests how an element works',
        status: 'selected',
    },
};

export const Correct: Story = {
    args: {
        label: 'A visual hint that suggests how an element works',
        status: 'correct',
    },
};

export const Wrong: Story = {
    args: {
        label: 'A visual hint that suggests how an element works',
        status: 'wrong',
    },
};

export const Disabled: Story = {
    args: {
        label: 'A visual hint that suggests how an element works',
        disabled: true,
    },
};
