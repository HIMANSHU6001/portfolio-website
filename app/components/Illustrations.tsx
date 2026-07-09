type SvgProps = {
    className?: string;
    size?: number;
};

type ColorProps = SvgProps & {
    fill?: string;
    color?: string;
};

const INK = "#1C1917";

export function Cloud({ className = "", fill = "#FFFFFF", size = 100 }: ColorProps) {
    return (
        <svg viewBox="0 0 120 60" width={size} className={className} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 45 Q6 45 6 32 Q6 20 20 20 Q22 8 38 8 Q54 8 58 20 Q64 14 74 16 Q88 18 90 30 Q104 30 104 42 Q104 52 90 52 L22 52 Q20 52 20 45 Z"
                fill={fill}
                stroke={INK}
                strokeWidth="3"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function Star({ className = "", fill = "#FDE68A", size = 60 }: ColorProps) {
    return (
        <svg viewBox="0 0 40 40" width={size} className={className} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 2 C20 14 20 14 38 20 C20 26 20 26 20 38 C20 26 20 26 2 20 C20 14 20 14 20 2 Z"
                fill={fill}
                stroke={INK}
                strokeWidth="2.5"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function Squiggle({ className = "", color = INK, size = 80 }: ColorProps) {
    return (
        <svg viewBox="0 0 100 20" width={size} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10 Q10 0 20 10 T40 10 T60 10 T80 10 T98 10" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}

export function Sun({ className = "", size = 100 }: SvgProps) {
    return (
        <svg viewBox="0 0 100 100" width={size} className={className} xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="22" fill="#FDE68A" stroke={INK} strokeWidth="3" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <line
                    key={deg}
                    x1="50"
                    y1="12"
                    x2="50"
                    y2="20"
                    stroke={INK}
                    strokeWidth="3"
                    strokeLinecap="round"
                    transform={`rotate(${deg} 50 50)`}
                />
            ))}
        </svg>
    );
}

export function CoffeeCup({ className = "", size = 100 }: SvgProps) {
    return (
        <svg viewBox="0 0 100 100" width={size} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M20 82 Q20 92 30 92 L62 92 Q72 92 72 82 L72 40 L20 40 Z" fill="#F7C6D9" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <rect x="20" y="34" width="52" height="10" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
            <path d="M72 50 Q86 50 86 62 Q86 74 72 74" fill="none" stroke={INK} strokeWidth="3" />
            <path d="M34 22 Q30 16 34 10 Q38 4 34 -2" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" transform="translate(0 12)" />
            <path d="M48 22 Q44 16 48 10 Q52 4 48 -2" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" transform="translate(0 8)" />
        </svg>
    );
}

export function Plant({ className = "", size = 90 }: SvgProps) {
    return (
        <svg viewBox="0 0 80 100" width={size} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M40 60 Q10 40 18 20 Q30 30 40 55" fill="#B8E6C6" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M40 60 Q70 40 62 20 Q50 30 40 55" fill="#7FC69C" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M40 62 L40 30" stroke={INK} strokeWidth="2" fill="none" />
            <path d="M22 68 L58 68 L54 92 Q54 96 50 96 L30 96 Q26 96 26 92 Z" fill="#F7C6D9" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        </svg>
    );
}

export function RocketLaunch({ className = "", size = 120 }: SvgProps) {
    return (
        <svg viewBox="0 0 100 120" width={size} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M50 6 Q70 30 70 60 L70 78 L30 78 L30 60 Q30 30 50 6 Z" fill="#FFFFFF" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <circle cx="50" cy="46" r="8" fill="#B8E6C6" stroke={INK} strokeWidth="3" />
            <path d="M30 60 L14 74 L28 74 L30 78 Z" fill="#F7C6D9" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M70 60 L86 74 L72 74 L70 78 Z" fill="#F7C6D9" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M40 78 Q50 108 60 78" fill="#FDE68A" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        </svg>
    );
}

export function Avatar({ className = "", size = 240 }: SvgProps) {
    return (
        <svg viewBox="0 0 200 200" width={size} className={className} xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="94" fill="#F7C6D9" stroke={INK} strokeWidth="4" />
            <path d="M40 190 Q40 140 100 140 Q160 140 160 190" fill="#B8E6C6" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
            <rect x="88" y="118" width="24" height="24" fill="#FDD9B5" stroke={INK} strokeWidth="4" />
            <ellipse cx="100" cy="90" rx="40" ry="42" fill="#FDD9B5" stroke={INK} strokeWidth="4" />
            <path d="M60 82 Q56 44 100 44 Q144 44 140 82 Q132 66 100 66 Q78 66 60 82 Z" fill="#1C1917" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
            <circle cx="86" cy="92" r="3.5" fill={INK} />
            <circle cx="114" cy="92" r="3.5" fill={INK} />
            <circle cx="78" cy="104" r="5" fill="#E89AB6" opacity="0.7" />
            <circle cx="122" cy="104" r="5" fill="#E89AB6" opacity="0.7" />
            <path d="M88 112 Q100 122 112 112" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="86" cy="92" r="10" fill="none" stroke={INK} strokeWidth="3" />
            <circle cx="114" cy="92" r="10" fill="none" stroke={INK} strokeWidth="3" />
            <line x1="96" y1="92" x2="104" y2="92" stroke={INK} strokeWidth="3" />
        </svg>
    );
}

export function ProjectThumb({ variant = "app", className = "" }: SvgProps & { variant?: "app" | "api" | "ai" | "ecom" | "dash" | "cli" }) {
    const bgs = {
        app: "#B8E6C6",
        api: "#F7C6D9",
        ai: "#FDE68A",
        ecom: "#C4E4FF",
        dash: "#FFD6A5",
        cli: "#E5D4FF",
    } as const;

    const bg = bgs[variant] ?? bgs.app;

    return (
        <svg viewBox="0 0 300 180" className={className} xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="300" height="180" fill={bg} />
            <rect x="24" y="24" width="252" height="132" rx="10" fill="#FFF6E9" stroke={INK} strokeWidth="3" />
            <circle cx="40" cy="40" r="4" fill="#F7C6D9" stroke={INK} strokeWidth="2" />
            <circle cx="54" cy="40" r="4" fill="#FDE68A" stroke={INK} strokeWidth="2" />
            <circle cx="68" cy="40" r="4" fill="#B8E6C6" stroke={INK} strokeWidth="2" />
            <rect x="40" y="60" width="120" height="10" rx="4" fill={INK} />
            <rect x="40" y="78" width="200" height="6" rx="3" fill="#1C1917" opacity="0.4" />
            <rect x="40" y="90" width="180" height="6" rx="3" fill="#1C1917" opacity="0.4" />
            <rect x="40" y="110" width="72" height="28" rx="14" fill="#F7C6D9" stroke={INK} strokeWidth="3" />
            <rect x="122" y="110" width="72" height="28" rx="14" fill="#B8E6C6" stroke={INK} strokeWidth="3" />
        </svg>
    );
}

export function ArrowRight({ size = 20, className = "" }: SvgProps) {
    return (
        <svg viewBox="0 0 24 24" width={size} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12h14M13 6l7 6-7 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}