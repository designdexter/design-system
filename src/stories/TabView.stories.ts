import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TabView } from './TabView';

const meta = {
  title: 'Design System/TabView',
  component: TabView,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    defaultActiveIndex: { control: 'number' },
  },
  args: { onTabChange: fn() },
} satisfies Meta<typeof TabView>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultTabs = [
  {
    header: 'Header I',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    header: 'Header II',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
  },
  {
    header: 'Header III',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
  },
];

export const Basic: Story = {
  args: { tabs: defaultTabs },
};

export const SecondTabActive: Story = {
  args: { tabs: defaultTabs, defaultActiveIndex: 1 },
};

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      { header: 'Header I',   content: 'Content for tab one.' },
      { header: 'Disabled',   content: 'You cannot reach this tab.', disabled: true },
      { header: 'Header III', content: 'Content for tab three.' },
    ],
  },
};

export const TwoTabs: Story = {
  args: {
    tabs: [
      { header: 'Overview',  content: 'This is the overview section with a summary of the content.' },
      { header: 'Details',   content: 'Here you can find all the detailed information.' },
    ],
  },
};