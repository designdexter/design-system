type ProgressBarProps = {
    current: number;
    total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
    const percentage = Math.round((current / total) * 100);

    return (
        <div
            className="progress-container"
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Question ${current} of ${total}`}
        >
            <div
                className="progress-fill"
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}
