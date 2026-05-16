"use client";

type ArrowPosition = "top" | "center" | "bottom";

interface Props {
    arrowPosition?: ArrowPosition;
    isShowBorder?: boolean;
    arrowRotate?: number;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    isShowCardBorder?: boolean;
}

const ARROW_ALIGN_MAP: Record<ArrowPosition, string> = {
    top: "items-start",
    center: "items-center",
    bottom: "items-end",
};

export default function LandingCard({
    isShowCardBorder = true,
    isShowBorder = true,
    arrowRotate = 90,
    arrowPosition = "center",
    onClick,
    className = "",
    children,
}: Readonly<Props>) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                cursor-pointer
                ${isShowCardBorder ? "border-2" : "border-0"}
                group relative w-full
                bg-white hover:bg-gray-100
                rounded-2xl
                ${isShowCardBorder ? "shadow-[0_6px_0_0_#000] hover:shadow-[0_2px_0_0_#000]" : ""}
                ${isShowCardBorder ? "hover:translate-y-1" : ""}
                transition-all duration-150
                px-8 py-6
                flex ${ARROW_ALIGN_MAP[arrowPosition]}
                ${className}
            `}
        >
            <span className="flex-1 ">{children}</span>

            {isShowBorder && (
                <span
                    aria-hidden
                    className="h-full w-0.5 bg-black mr-4 ml-12 "
                />
            )}

            <span
                className="
                lg:flex
                    hidden items-center justify-center
                    w-10 h-10 rounded-full
                    bg-black group-hover:bg-green-800
                    transition-colors duration-150
                "
            >
                <ArrowIcon rotate={arrowRotate} />
            </span>
        </button>
    );
}

function ArrowIcon({ rotate }: { rotate: number }) {
    return (
        <svg
            width="16"
            height="16"
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
