import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { LevelNode } from './LevelNode';
import '../styles/game.css';

const meta = {
    title: 'Game UI/LevelNode',
    component: LevelNode,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: 'select',
            options: ['done', 'active', 'locked'],
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof LevelNode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Done: Story = {
    args: { status: 'done' },
};

export const Active: Story = {
    args: { status: 'active' },
};

export const Locked: Story = {
    args: { status: 'locked' },
};
