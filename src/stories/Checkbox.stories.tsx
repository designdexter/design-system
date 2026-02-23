import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    defaultChecked: { control: 'boolean' },
    disabled:       { control: 'boolean' },
    label:          { control: 'text' },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Label' },
};

export const Checked: Story = {
  args: { label: 'Label', defaultChecked: true },
};

export const Disabled: Story = {
  args: { label: 'Label', disabled: true },
};

export const CheckedDisabled: Story = {
  args: { label: 'Label', defaultChecked: true, disabled: true },
};

/** Multiple checkboxes — matches the Figma demo section */
export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox label="New York" defaultChecked />
      <Checkbox label="San Francisco" />
      <Checkbox label="Los Angeles" />
      <Checkbox label="Chicago" />
    </div>
  ),
};