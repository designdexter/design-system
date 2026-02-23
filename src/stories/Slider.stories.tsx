import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Slider, RangeSlider } from './Slider';

const meta = {
  title: 'Design System/Slider',
  component: Slider,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    min:          { control: 'number' },
    max:          { control: 'number' },
    step:         { control: 'number' },
    defaultValue: { control: 'number' },
    showInput:    { control: 'boolean' },
    orientation:  { control: 'select', options: ['horizontal', 'vertical'] },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { defaultValue: 28 },
};

export const WithInput: Story = {
  args: { defaultValue: 28, showInput: true },
};

export const WithStep: Story = {
  args: { defaultValue: 90, step: 10 },
};

export const Vertical: Story = {
  args: { defaultValue: 20, orientation: 'vertical' },
};

/** Two-handle range slider */
export const Range: Story = {
  render: () => <RangeSlider defaultLow={0} defaultHigh={28} />,
};

/** All variants side by side — matches Figma demo section */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 320 }}>
      <div>
        <p style={{ fontFamily: 'var(--font-family)', fontSize: 12, color: '#6B7280', marginBottom: 8 }}>Basic</p>
        <Slider defaultValue={28} />
      </div>
      <div>
        <p style={{ fontFamily: 'var(--font-family)', fontSize: 12, color: '#6B7280', marginBottom: 8 }}>Input: 28</p>
        <Slider defaultValue={28} showInput />
      </div>
      <div>
        <p style={{ fontFamily: 'var(--font-family)', fontSize: 12, color: '#6B7280', marginBottom: 8 }}>Step: 10</p>
        <Slider defaultValue={90} step={10} />
      </div>
      <div>
        <p style={{ fontFamily: 'var(--font-family)', fontSize: 12, color: '#6B7280', marginBottom: 8 }}>Range: 0 – 28</p>
        <RangeSlider defaultLow={0} defaultHigh={28} />
      </div>
      <div>
        <p style={{ fontFamily: 'var(--font-family)', fontSize: 12, color: '#6B7280', marginBottom: 8 }}>Vertical</p>
        <Slider defaultValue={20} orientation="vertical" />
      </div>
    </div>
  ),
};