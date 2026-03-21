import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BackButton } from './BackButton';
import '../styles/game.css';

const meta = {
    title: 'Game UI/BackButton',
    component: BackButton,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
