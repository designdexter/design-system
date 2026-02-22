import type { Meta, StoryObj } from '@storybook/react-vite';
import './tokens.css';

// ── Color palette ──────────────────────────────────────────────
const severities = [
  { name: 'Primary',   base: '--color-primary',   hover: '--color-primary-hover',   active: '--color-primary-active' },
  { name: 'Secondary', base: '--color-secondary', hover: '--color-secondary-hover', active: '--color-secondary-active' },
  { name: 'Success',   base: '--color-success',   hover: '--color-success-hover',   active: '--color-success-active' },
  { name: 'Info',      base: '--color-info',      hover: '--color-info-hover',      active: '--color-info-active' },
  { name: 'Warning',   base: '--color-warning',   hover: '--color-warning-hover',   active: '--color-warning-active' },
  { name: 'Help',      base: '--color-help',      hover: '--color-help-hover',      active: '--color-help-active' },
  { name: 'Danger',    base: '--color-danger',    hover: '--color-danger-hover',    active: '--color-danger-active' },
];

const surfaces = [
  { name: 'Surface',        token: '--color-surface' },
  { name: 'Surface Hover',  token: '--color-surface-hover' },
  { name: 'Surface Active', token: '--color-surface-active' },
  { name: 'Text',           token: '--color-text' },
  { name: 'Text Secondary', token: '--color-text-secondary' },
  { name: 'Text Heading',   token: '--color-text-heading' },
  { name: 'Text White',     token: '--color-text-white' },
];

function resolveToken(token: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim();
}

function Swatch({ token, label }: { token: string; label: string }) {
  const value = resolveToken(token);
  const isDark = ['--color-text', '--color-text-heading', '--color-text-secondary'].includes(token);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 100 }}>
      <div style={{
        background: `var(${token})`,
        height: 56,
        borderRadius: 6,
        border: '1px solid #E5E7EB',
      }} />
      <span style={{ fontFamily: 'var(--font-family)', fontSize: 12, fontWeight: 600, color: '#374151' }}>{label}</span>
      <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#6B7280' }}>{value || token}</span>
    </div>
  );
}

// ── Typography scale ───────────────────────────────────────────
const typeScale = [
  { token: '--font-size-xs',   label: 'xs  — 10.5px', weight: 600,  sample: 'Badge / Label' },
  { token: '--font-size-sm',   label: 'sm  — 12px',   weight: 400,  sample: 'Caption text' },
  { token: '--font-size-base', label: 'base — 14px',  weight: 400,  sample: 'Body / Button text' },
  { token: '--font-size-lg',   label: 'lg  — 17.5px', weight: 400,  sample: 'Large body text' },
  { token: '--font-size-xl',   label: 'xl  — 21px',   weight: 700,  sample: 'Card title' },
];

// ── Shadows ────────────────────────────────────────────────────
const shadows = [
  { label: 'Card shadow',   token: '--shadow-card' },
  { label: 'Raised shadow', token: '--shadow-raised' },
  { label: 'Focus ring',    token: '--shadow-focus-ring' },
];

// ── Main component ─────────────────────────────────────────────
function TokensPage() {
  return (
    <div style={{ fontFamily: 'var(--font-family)', padding: 32, maxWidth: 960, display: 'flex', flexDirection: 'column', gap: 48 }}>

      {/* Colors — Severity */}
      <section>
        <h2 style={{ fontSize: 21, fontWeight: 700, color: '#4B5563', marginBottom: 24 }}>Severity Colors</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {severities.map(s => (
            <div key={s.name} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ width: 80, fontSize: 13, fontWeight: 600, color: '#374151', paddingTop: 6 }}>{s.name}</span>
              <Swatch token={s.base}   label="Base" />
              <Swatch token={s.hover}  label="Hover" />
              <Swatch token={s.active} label="Active" />
            </div>
          ))}
        </div>
      </section>

      {/* Colors — Surface & Text */}
      <section>
        <h2 style={{ fontSize: 21, fontWeight: 700, color: '#4B5563', marginBottom: 24 }}>Surface & Text Colors</h2>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {surfaces.map(s => <Swatch key={s.token} token={s.token} label={s.name} />)}
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 style={{ fontSize: 21, fontWeight: 700, color: '#4B5563', marginBottom: 24 }}>Typography — Inter</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {typeScale.map(t => (
            <div key={t.token} style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
              <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#6B7280', width: 120 }}>{t.label}</span>
              <span style={{ fontFamily: 'var(--font-family)', fontSize: `var(${t.token})`, fontWeight: t.weight, color: '#4B5563' }}>
                {t.sample}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Shadows */}
      <section>
        <h2 style={{ fontSize: 21, fontWeight: 700, color: '#4B5563', marginBottom: 24 }}>Shadows</h2>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {shadows.map(s => (
            <div key={s.token} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
              <div style={{
                width: 120,
                height: 80,
                borderRadius: 6,
                background: '#FFFFFF',
                boxShadow: `var(${s.token})`,
                border: '1px solid #F3F4F6',
              }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>{s.label}</span>
              <span style={{ fontFamily: 'monospace', fontSize: 10, color: '#6B7280' }}>{s.token}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

const meta = {
  title: 'Design System/Tokens',
  component: TokensPage,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof TokensPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};