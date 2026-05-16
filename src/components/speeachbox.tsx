interface Props {
    title: string;
    onClick?: () => void;
    className?: string;
    size?: "sm" | "md" | "lg";
    textColor?: string;
}

const SIZE_CONFIG = {
    sm: {
        tail: {
            width: 28,
            height: 35,
            blackBottom: -25,
            blackRight: 20,
            whiteBottom: -16,
            whiteRight: 21.5,
        },
        whiteScale: 0.85,
        boxPadding: "px-8 py-2",
        fontSize: "text-lg",
    },
    md: {
        tail: {
            width: 40,
            height: 50,
            blackBottom: -36,
            blackRight: 60,
            whiteBottom: -28,
            whiteRight: 63,
        },
        whiteScale: 0.85,
        boxPadding: "px-12 py-4",
        fontSize: "text-2xl",
    },
    lg: {
        tail: {
            width: 52,
            height: 65,
            blackBottom: -47,
            blackRight: 80,
            whiteBottom: -37,
            whiteRight: 84,
        },
        whiteScale: 0.85,
        boxPadding: "px-16 py-6",
        fontSize: "text-3xl",
    },
};

export default function SpeechBox({
    title,
    className = "",
    size = "md",
    textColor,
}: Readonly<Props>) {
    const cfg = SIZE_CONFIG[size];
    const t = cfg.tail;

    return (
        <div className={`relative inline-block ${className}`}>
            <svg
                className="absolute"
                style={{
                    bottom: `${t.blackBottom}px`,
                    right: `${t.blackRight}px`,
                    zIndex: 1,
                }}
                width={t.width}
                height={t.height}
                viewBox="0 0 60 50"
            >
                <path
                    d="M 3 8 L 56 5 L 26 41 Q 16 50 10 40 Z"
                    fill="black"
                />
            </svg>

            <div
                className={`relative border-[3px] border-b-5 border-black bg-white rounded-2xl ${cfg.boxPadding} flex justify-center items-center`}
                style={{ zIndex: 2 }}
            >
                <span
                    className={`text-center ${cfg.fontSize} font-bold  tracking-wider`}
                    style={{
                        color: textColor || "#B8181E",
                    }}
                >
                    {title}
                </span>
            </div>

            <svg
                className="absolute"
                style={{
                    bottom: `${t.whiteBottom}px`,
                    right: `${t.whiteRight}px`,
                    zIndex: 3,
                }}
                width={t.width * cfg.whiteScale}
                height={t.height * cfg.whiteScale}
                viewBox="0 0 60 50"
            >
                <path
                    d="M 5 0 L 55 0 L 20 45 Q 16 50 14 45 Z"
                    fill="white"
                />
            </svg>
        </div>
    );
}
