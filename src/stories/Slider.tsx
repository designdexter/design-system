import { useState } from 'react';
import './slider.css';

export type SliderOrientation = 'horizontal' | 'vertical';

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  /** Initial value */
  defaultValue?: number;
  /** Show a numeric input field that syncs with the slider */
  showInput?: boolean;
  orientation?: SliderOrientation;
  onChange?: (value: number) => void;
}

export interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultLow?: number;
  defaultHigh?: number;
  onChange?: (range: [number, number]) => void;
}

export const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
  showInput = false,
  orientation = 'horizontal',
  onChange,
}: SliderProps) => {
  const [value, setValue] = useState(defaultValue);
  const fillPct = ((value - min) / (max - min)) * 100;
  const isVertical = orientation === 'vertical';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setValue(v);
    onChange?.(v);
  };

  return (
    <div className={`slider${isVertical ? ' slider--vertical' : ''}`}>
      {showInput && (
        <input
          type="number"
          className="slider__number-input"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={e => {
            const v = Math.min(max, Math.max(min, Number(e.target.value)));
            setValue(v);
            onChange?.(v);
          }}
        />
      )}
      <input
        type="range"
        className="slider__input"
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ '--fill-pct': `${fillPct}%` } as React.CSSProperties}
        onChange={handleChange}
      />
    </div>
  );
};

export const RangeSlider = ({
  min = 0,
  max = 100,
  step = 1,
  defaultLow = 0,
  defaultHigh = 50,
  onChange,
}: RangeSliderProps) => {
  const [low, setLow] = useState(defaultLow);
  const [high, setHigh] = useState(defaultHigh);

  const lowPct  = ((low  - min) / (max - min)) * 100;
  const highPct = ((high - min) / (max - min)) * 100;

  return (
    <div className="slider slider--range">
      <div className="slider__range-track">
        <div
          className="slider__range-fill"
          style={{ left: `${lowPct}%`, width: `${highPct - lowPct}%` }}
        />
      </div>
      <input
        type="range"
        className="slider__input slider__input--range"
        min={min}
        max={max}
        step={step}
        value={low}
        onChange={e => {
          const v = Math.min(Number(e.target.value), high - step);
          setLow(v);
          onChange?.([v, high]);
        }}
      />
      <input
        type="range"
        className="slider__input slider__input--range"
        min={min}
        max={max}
        step={step}
        value={high}
        onChange={e => {
          const v = Math.max(Number(e.target.value), low + step);
          setHigh(v);
          onChange?.([low, v]);
        }}
      />
    </div>
  );
};