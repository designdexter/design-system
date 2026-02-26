
type ResultBreakdownProps = {
    categories: Record<string, { correct: number; total: number }>;
};

export function ResultBreakdown({ categories }: ResultBreakdownProps) {
    return (
        <div className="breakdown-container">
            <h3>Category Breakdown</h3>
            {Object.entries(categories).map(([category, stats]) => {
                const isWeak = stats.correct / stats.total <= 0.5;
                return (
                    <div key={category} className={`breakdown-item ${isWeak ? 'weak' : ''}`}>
                        <span className="breakdown-item-label">
                            {category}
                            {isWeak && <span className="weak-label">(Needs practice)</span>}
                        </span>
                        <span className="breakdown-item-score">{stats.correct}/{stats.total}</span>
                    </div>
                );
            })}
        </div>
    );
}
