import type { LevelStatus } from '../types';

type LevelNodeProps = {
  status: LevelStatus;
  onClick?: () => void;
};

export function LevelNode({ status, onClick }: LevelNodeProps) {
  const isClickable = status !== 'locked';

  const icon =
    status === 'done'   ? '✓' :
    status === 'active' ? '●' : '🔒';

  return (
    <div
      className={`level-node level-node--${status}`}
      onClick={isClickable ? onClick : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => e.key === 'Enter' && onClick?.() : undefined}
    >
      <div className="level-node-orb">{icon}</div>
      <div className="level-node-platform" />
    </div>
  );
}
