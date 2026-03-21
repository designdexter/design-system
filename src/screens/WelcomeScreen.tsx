import { useState, useEffect } from 'react';
import { LevelNode } from '../components/LevelNode';
import { Button } from '../stories/Button';
import type { Level, LevelStatus, Question } from '../types';

type WelcomeScreenProps = {
  getLevelStatus: (level: Level) => LevelStatus;
  questionsBank: Question[];
  onStart: (level: Level) => void;
};

const LEVELS: { key: Level; label: string }[] = [
  { key: 'beginner',     label: 'Beginner'     },
  { key: 'intermediate', label: 'Intermediate' },
  { key: 'advanced',     label: 'Advanced'     },
];

function getFirstActive(getLevelStatus: (l: Level) => LevelStatus): Level {
  return LEVELS.find(l => getLevelStatus(l.key) === 'active')?.key ?? 'beginner';
}

export function WelcomeScreen({ getLevelStatus, questionsBank, onStart }: WelcomeScreenProps) {
  const [selectedLevel, setSelectedLevel] = useState<Level>(() => getFirstActive(getLevelStatus));

  useEffect(() => {
    setSelectedLevel(getFirstActive(getLevelStatus));
  }, [getLevelStatus]);

  const selectedStatus = getLevelStatus(selectedLevel);
  const count = questionsBank.filter(q => q.difficulty === selectedLevel).length;
  const estMins = Math.ceil(count * 0.6);

  const handleNodeClick = (level: Level) => {
    if (getLevelStatus(level) !== 'locked') setSelectedLevel(level);
  };

  const levelLabel = LEVELS.find(l => l.key === selectedLevel)!.label;

  return (
    <div className="screen-map">
      {/* Top bar */}
      <div className="topbar">
        <div className="topbar-back" aria-label="Back">←</div>
        <div className="topbar-score">0 ⚡</div>
      </div>

      {/* Level header card */}
      <div className="map-level-card">
        <span className="map-level-label">UX TRIVIA</span>
        <span className="map-level-title">Test Your Knowledge</span>
      </div>

      {/* Path map */}
      <div className="path-map">

        {/* Beginner — label left, node right */}
        <div className="path-row path-row--left">
          <div className="path-label">
            <span className="path-label-name"
              style={{ opacity: getLevelStatus('beginner') === 'locked' ? 0.4 : 1 }}>
              Beginner
            </span>
            <span className="path-label-count">
              {questionsBank.filter(q => q.difficulty === 'beginner').length} questions
            </span>
          </div>
          <LevelNode
            status={getLevelStatus('beginner')}
            onClick={() => handleNodeClick('beginner')}
          />
          <div className="path-spacer" />
        </div>

        {/* Intermediate — node left, label right */}
        <div className="path-row path-row--right">
          <div className="path-spacer" />
          <LevelNode
            status={getLevelStatus('intermediate')}
            onClick={() => handleNodeClick('intermediate')}
          />
          <div className="path-label">
            <span className="path-label-name"
              style={{ opacity: getLevelStatus('intermediate') === 'locked' ? 0.4 : 1 }}>
              Intermediate
            </span>
            <span className="path-label-count">
              {questionsBank.filter(q => q.difficulty === 'intermediate').length} questions
            </span>
          </div>
        </div>

        {/* Advanced — label left, node right */}
        <div className="path-row path-row--left">
          <div className="path-label">
            <span className="path-label-name"
              style={{ opacity: getLevelStatus('advanced') === 'locked' ? 0.4 : 1 }}>
              Advanced
            </span>
            <span className="path-label-count">
              {questionsBank.filter(q => q.difficulty === 'advanced').length} questions
            </span>
          </div>
          <LevelNode
            status={getLevelStatus('advanced')}
            onClick={() => handleNodeClick('advanced')}
          />
          <div className="path-spacer" />
        </div>
      </div>

      {/* Bottom sheet */}
      <div className="bottom-sheet">
        <div className="bottom-sheet-handle" />
        <p className="bottom-sheet-title">{levelLabel}</p>
        <p className="bottom-sheet-meta">{count} questions · ~{estMins} mins</p>
        {selectedStatus === 'locked' ? (
          <p className="bottom-sheet-locked">Complete the previous level to unlock</p>
        ) : (
          <Button
            label={selectedStatus === 'done' ? 'Play Again' : 'Start'}
            severity="primary"
            rounded
            onClick={() => onStart(selectedLevel)}
          />
        )}
      </div>
    </div>
  );
}
