import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
    title: 'Game UI/Badge',
    component: Badge,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        type: {
            control: 'select',
            options: ['info', 'beginner', 'intermediate', 'advanced'],
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
    args: {
        label: 'Fundamentals',
        type: 'info',
    },
};

export const Beginner: Story = {
    args: {
        label: 'beginner',
        type: 'beginner',
    },
};

export const Intermediate: Story = {
    args: {
        label: 'intermediate',
        type: 'intermediate',
    },
};

export const Advanced: Story = {
    args: {
        label: 'advanced',
        type: 'advanced',
    },
};
