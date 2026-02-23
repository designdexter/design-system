import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Panel } from './Panel';

const meta = {
  title: 'Design System/Panel',
  component: Panel,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    toggleable:        { control: 'boolean' },
    defaultCollapsed:  { control: 'boolean' },
    header:            { control: 'text' },
    content:           { control: 'text' },
  },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    header: 'Panel Header',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
};

export const Toggleable: Story = {
  args: {
    header: 'Click to collapse',
    content: 'This panel can be toggled open and closed by clicking the header.',
    toggleable: true,
  },
};

export const StartCollapsed: Story = {
  args: {
    header: 'Collapsed by default',
    content: 'This panel starts in the collapsed state.',
    toggleable: true,
    defaultCollapsed: true,
  },
};