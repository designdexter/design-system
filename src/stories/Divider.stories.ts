import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta = {
  title: 'Design System/Divider',
  component: Divider,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    align:  { control: 'select', options: ['left', 'center', 'right'] },
    layout: { control: 'select', options: ['horizontal', 'vertical'] },
    type:   { control: 'select', options: ['solid', 'dashed', 'dotted'] },
    label:  { control: 'text' },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithLabel: Story = {
  args: { label: 'OR' },
};

export const LabelLeft: Story = {
  args: { label: 'Left', align: 'left' },
};

export const LabelRight: Story = {
  args: { label: 'Right', align: 'right' },
};

export const Dashed: Story = {
  args: { type: 'dashed' },
};

export const Dotted: Story = {
  args: { type: 'dotted' },
};

export const DashedWithLabel: Story = {
  args: { label: 'Section', type: 'dashed', align: 'left' },
};