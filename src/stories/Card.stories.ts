import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Card } from './Card';

const meta = {
  title: 'Design System/Card',
  component: Card,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    showHeader:      { control: 'boolean' },
    showSubtitle:    { control: 'boolean' },
    showFooter:      { control: 'boolean' },
    headerImage:     { control: 'text' },
    title:           { control: 'text' },
    subtitle:        { control: 'text' },
    content:         { control: 'text' },
    primaryAction:   { control: 'text' },
    secondaryAction: { control: 'text' },
  },
  args: {
    onPrimaryAction: fn(),
    onSecondaryAction: fn(),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    showHeader: true,
  },
};

export const NoImage: Story = {
  args: {
    showHeader: false,
  },
};

export const NoSubtitle: Story = {
  args: {
    showSubtitle: false,
  },
};

export const NoFooter: Story = {
  args: {
    showFooter: false,
  },
};

export const Simple: Story = {
  args: {
    showHeader: false,
    showSubtitle: false,
    showFooter: false,
  },
};