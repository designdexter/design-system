import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ToggleButton } from './ToggleButton';

const meta = {
  title: 'Design System/ToggleButton',
  component: ToggleButton,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    label:     { control: 'text' },
    defaultOn: { control: 'boolean' },
    disabled:  { control: 'boolean' },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};

export const Active: Story = {
  args: { defaultOn: true },
};

export const WithLabel: Story = {
  args: { label: 'Primary' },
};

export const ActiveWithLabel: Story = {
  args: { label: 'Primary', defaultOn: true },
};

export const Disabled: Story = {
  args: { label: 'Primary', disabled: true },
};

export const DisabledActive: Story = {
  args: { label: 'Primary', defaultOn: true, disabled: true },
};

/** All states side by side — matches Figma demo section */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <ToggleButton />
        <ToggleButton defaultOn />
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <ToggleButton label="Primary" />
        <ToggleButton label="Primary" defaultOn />
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <ToggleButton label="Primary" disabled />
        <ToggleButton label="Primary" defaultOn disabled />
      </div>
    </div>
  ),
};