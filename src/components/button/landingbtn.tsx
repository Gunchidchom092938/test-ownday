"use client";

interface Props {
    title: string;
    isShowBorder?: boolean;
    arrowRotate?: number;
    onClick?: () => void;
    className?: string;
}

export default function LandingBtn({
    title,
    isShowBorder = true,
    arrowRotate = 90,
    onClick,
    className = "",
}: Readonly<Props>) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                cursor-pointer
                border-2 w-full 
                bg-white hover:bg-gray-100
                rounded-2xl
                shadow-[0_6px_0_0_#000] hover:shadow-[0_2px_0_0_#000]
                hover:translate-y-1
                transition-all duration-150
                px-6 py-6
                flex items-center font-semibold
                ${className}
            `}
        >
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <span className=" text-center text-base  text-black text-[18px]">
                    {title}
                </span>

                {isShowBorder && (
                    <span
                        aria-hidden
                        className="h-12 w-0.5 bg-black ml-6 mr-2 lg:flex hidden"
                    />
                )}

                <span
                    className="
                    flex items-center justify-center
                    w-10 h-10 rounded-full
                    bg-black group-hover:bg-green-800
                    transition-colors duration-150
                "
                >
                    <ArrowIcon rotate={arrowRotate} />
                </span>
            </div>
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
