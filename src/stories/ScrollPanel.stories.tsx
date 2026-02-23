import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollPanel } from './ScrollPanel';

const meta = {
  title: 'Design System/ScrollPanel',
  component: ScrollPanel,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'custom-bar', 'both'] },
    height:  { control: 'number' },
    content: { control: 'text' },
  },
} satisfies Meta<typeof ScrollPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: 'default' },
};

export const CustomBar: Story = {
  args: { variant: 'custom-bar' },
};

export const VerticalAndHorizontal: Story = {
  args: { variant: 'both' },
};

/** All three variants side by side — matches the Figma demo section */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 14 }}>
      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: 'var(--font-family)', fontSize: 12, color: '#6B7280', marginBottom: 8 }}>Default</p>
        <ScrollPanel variant="default" />
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: 'var(--font-family)', fontSize: 12, color: '#6B7280', marginBottom: 8 }}>Custom Bar</p>
        <ScrollPanel variant="custom-bar" />
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: 'var(--font-family)', fontSize: 12, color: '#6B7280', marginBottom: 8 }}>Vertical &amp; Horizontal</p>
        <ScrollPanel variant="both" />
      </div>
    </div>
  ),
};