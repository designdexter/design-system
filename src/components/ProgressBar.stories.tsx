import type { Meta, StoryObj } from '@storybook/react-vite';
import '../styles/game.css';

type ProgressBarProps = {
    current: number;
    total: number;
};

function ProgressBar({ current, total }: ProgressBarProps) {
    const percent = Math.round((current / total) * 100);
    return (
        <div style={{ width: '100%', maxWidth: 360 }}>
            <div className="q-progress-track">
                <div className="q-progress-fill" style={{ width: `${percent}%` }} />
            </div>
        </div>
    );
}

const meta = {
    title: 'Game UI/ProgressBar',
    component: ProgressBar,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    argTypes: {
        current: { control: { type: 'number', min: 0 } },
        total: { control: { type: 'number', min: 1 } },
    },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Start: Story = {
    args: { current: 1, total: 10 },
};

export const Halfway: Story = {
    args: { current: 5, total: 10 },
};

export const AlmostDone: Story = {
    args: { current: 9, total: 10 },
};

export const Complete: Story = {
    args: { current: 10, total: 10 },
};
