import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'help', 'danger'],
    },
    text:      { control: 'boolean' },
    outlined:  { control: 'boolean' },
    link:      { control: 'boolean' },
    raised:    { control: 'boolean' },
    rounded:   { control: 'boolean' },
    iconLeft:  { control: 'boolean' },
    iconRight: { control: 'boolean' },
    iconOnly:  { control: 'boolean' },
    disabled:  { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Severity variants ──
export const Primary: Story = {
  args: { label: 'Button', severity: 'primary' },
};

export const Secondary: Story = {
  args: { label: 'Button', severity: 'secondary' },
};

export const Success: Story = {
  args: { label: 'Button', severity: 'success' },
};

export const Info: Story = {
  args: { label: 'Button', severity: 'info' },
};

export const Warning: Story = {
  args: { label: 'Button', severity: 'warning' },
};

export const Help: Story = {
  args: { label: 'Button', severity: 'help' },
};

export const Danger: Story = {
  args: { label: 'Button', severity: 'danger' },
};

// ── Style variants ──
export const Outlined: Story = {
  args: { label: 'Button', severity: 'primary', outlined: true },
};

export const Text: Story = {
  args: { label: 'Button', severity: 'primary', text: true },
};

export const Link: Story = {
  args: { label: 'Button', link: true },
};

export const Raised: Story = {
  args: { label: 'Button', severity: 'primary', raised: true },
};

export const Rounded: Story = {
  args: { label: 'Button', severity: 'primary', rounded: true },
};

// ── Icon variants ──
export const WithIconLeft: Story = {
  args: { label: 'Button', severity: 'primary', iconLeft: true },
};

export const WithIconRight: Story = {
  args: { label: 'Button', severity: 'primary', iconRight: true },
};

export const IconOnly: Story = {
  args: { severity: 'primary', iconOnly: true },
};

// ── States ──
export const Disabled: Story = {
  args: { label: 'Button', severity: 'primary', disabled: true },
};