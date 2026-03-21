import type { Meta, StoryObj } from '@storybook/react-vite';
import '../styles/game.css';

type DifficultyBadgeProps = {
    level: 'beginner' | 'intermediate' | 'advanced';
};

function DifficultyBadge({ level }: DifficultyBadgeProps) {
    const labels = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' };
    return (
        <span className={`difficulty-badge difficulty-badge--${level}`}>
            {labels[level]}
        </span>
    );
}

const meta = {
    title: 'Game UI/DifficultyBadge',
    component: DifficultyBadge,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        level: {
            control: 'select',
            options: ['beginner', 'intermediate', 'advanced'],
        },
    },
} satisfies Meta<typeof DifficultyBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Beginner: Story = {
    args: { level: 'beginner' },
};

export const Intermediate: Story = {
    args: { level: 'intermediate' },
};

export const Advanced: Story = {
    args: { level: 'advanced' },
};
