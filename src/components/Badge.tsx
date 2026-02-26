
type BadgeProps = {
    label: string;
    type?: 'info' | 'beginner' | 'intermediate' | 'advanced';
};

export function Badge({ label, type = 'info' }: BadgeProps) {
    return (
        <span className={`badge badge-${type}`}>
            {label}
        </span>
    );
}
