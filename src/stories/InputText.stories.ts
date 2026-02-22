import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { InputText } from './InputText';

const meta = {
  title: 'Design System/InputText',
  component: InputText,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    icon:        { control: 'select', options: ['search', 'chevron'] },
    floatLabel:  { control: 'boolean' },
    iconLeft:    { control: 'boolean' },
    iconRight:   { control: 'boolean' },
    invalid:     { control: 'boolean' },
    filled:      { control: 'boolean' },
    disabled:    { control: 'boolean' },
    placeholder: { control: 'text' },
    label:       { control: 'text' },
    helpText:    { control: 'text' },
    errorMessage:{ control: 'text' },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { placeholder: 'Username' },
};

export const FloatLabel: Story = {
  args: { label: 'Username', floatLabel: true },
};

export const LeftIcon: Story = {
  args: { placeholder: 'Search', iconLeft: true, icon: 'search' },
};

export const RightIcon: Story = {
  args: { placeholder: 'Placeholder', iconRight: true, icon: 'chevron' },
};

export const HelpText: Story = {
  args: { placeholder: 'Placeholder', helpText: 'Helper Text' },
};

export const Invalid: Story = {
  args: {
    placeholder: 'Username',
    invalid: true,
    errorMessage: 'Username is not available.',
  },
};

export const InvalidWithFloatLabel: Story = {
  args: {
    label: 'Username',
    floatLabel: true,
    invalid: true,
    errorMessage: 'Username is not available.',
  },
};

export const Filled: Story = {
  args: { placeholder: 'Placeholder', filled: true },
};

export const Disabled: Story = {
  args: { placeholder: 'Disabled', disabled: true },
};