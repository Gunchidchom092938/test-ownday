"use client";

interface Props {
    title: string;
    onClick?: () => void;
    className?: string;
    arrowRotate?: number;
    isShowArrow?: boolean;
}

export default function RoundedBtn({
    title,
    onClick,
    className = "",
    arrowRotate = 0,
    isShowArrow = false,
}: Readonly<Props>) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                cursor-pointer
                border-2 border-black
                group relative w-full
                bg-white hover:bg-gray-100
                rounded-full
                shadow-[0_6px_0_0_#000] hover:shadow-[0_2px_0_0_#000]
                hover:translate-y-1
                transition-all duration-150
                flex items-center
                ${isShowArrow && "pl-6 pr-2"} py-2
                font-semibold text-[14px]
                ${className}
            `}
        >
            <span className="flex-1 text-center">{title}</span>
            {isShowArrow && (
                <span
                    className="
                    flex items-center justify-center shrink-0
                    w-9 h-9 rounded-full
                    bg-black group-hover:bg-green-800
                    transition-colors duration-150
                "
                >
                    <ArrowIcon rotate={arrowRotate} />
                </span>
            )}
        </button>
    );
}

function ArrowIcon({ rotate }: { rotate: number }) {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                transform: `rotate(${rotate}deg)`,
                transition: "transform 150ms",
            }}
        >
            <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
