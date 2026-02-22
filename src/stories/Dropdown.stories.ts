import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Dropdown } from './Dropdown';

const countries = [
  { label: 'Afghanistan', value: 'af' },
  { label: 'Albania',     value: 'al' },
  { label: 'Algeria',     value: 'dz' },
  { label: 'American Samoa', value: 'as' },
  { label: 'Andorra',    value: 'ad' },
  { label: 'Angola',     value: 'ao' },
  { label: 'Australia',  value: 'au' },
  { label: 'Brazil',     value: 'br' },
  { label: 'Canada',     value: 'ca' },
  { label: 'China',      value: 'cn' },
  { label: 'Egypt',      value: 'eg' },
  { label: 'France',     value: 'fr' },
  { label: 'Germany',    value: 'de' },
  { label: 'India',      value: 'in' },
  { label: 'Japan',      value: 'jp' },
];

const groupedCities = [
  { label: 'Berlin',    value: 'berlin',    group: 'Germany' },
  { label: 'Frankfurt', value: 'frankfurt', group: 'Germany' },
  { label: 'Hamburg',   value: 'hamburg',   group: 'Germany' },
  { label: 'Munich',    value: 'munich',    group: 'Germany' },
  { label: 'Madrid',    value: 'madrid',    group: 'Spain' },
  { label: 'Barcelona', value: 'barcelona', group: 'Spain' },
  { label: 'Seville',   value: 'seville',   group: 'Spain' },
  { label: 'Paris',     value: 'paris',     group: 'France' },
  { label: 'Lyon',      value: 'lyon',      group: 'France' },
  { label: 'Marseille', value: 'marseille', group: 'France' },
];

const flagCountries = [
  { label: 'Australia',     value: 'au', flag: '🇦🇺' },
  { label: 'Brazil',        value: 'br', flag: '🇧🇷' },
  { label: 'China',         value: 'cn', flag: '🇨🇳' },
  { label: 'Egypt',         value: 'eg', flag: '🇪🇬' },
  { label: 'France',        value: 'fr', flag: '🇫🇷' },
  { label: 'Germany',       value: 'de', flag: '🇩🇪' },
  { label: 'India',         value: 'in', flag: '🇮🇳' },
  { label: 'Japan',         value: 'jp', flag: '🇯🇵' },
  { label: 'United States', value: 'us', flag: '🇺🇸' },
];

const meta = {
  title: 'Design System/Dropdown',
  component: Dropdown,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    editable:   { control: 'boolean' },
    filter:     { control: 'boolean' },
    showClear:  { control: 'boolean' },
    floatLabel: { control: 'boolean' },
    placeholder:{ control: 'text' },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: 'Select a Country',
    options: countries,
  },
};

export const Editable: Story = {
  args: {
    placeholder: 'Select a Country',
    options: countries,
    editable: true,
  },
};

export const Group: Story = {
  args: {
    placeholder: 'Select a City',
    options: groupedCities,
  },
};

export const Advanced: Story = {
  args: {
    placeholder: 'Select a Country',
    options: flagCountries,
    filter: true,
    showClear: true,
  },
};

export const WithFloatLabel: Story = {
  args: {
    placeholder: 'Country',
    options: countries,
    floatLabel: true,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Select a Country',
    options: flagCountries,
    value: 'al',
    showClear: true,
  },
};