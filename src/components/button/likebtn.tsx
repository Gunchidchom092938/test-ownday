// components/button/LikeButton.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
    isActive?: boolean;
    onClick?: () => void;
    className?: string;
}

export default function LikeBtn({
    isActive = false,
    onClick,
    className = "",
}: Readonly<Props>) {
    const [isHover, setIsHover] = useState(false);

    const src = isActive
        ? "/assets/Like-Active.svg"
        : isHover
          ? "/assets/Like-Hover.svg"
          : "/assets/Like.svg";

    return (
        <button
            type="button"
            onClick={onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`shrink-0 transition-transform hover:scale-110 active:scale-95 cursor-pointer ${className} p-4.5`}
        >
            <Image
                src={src}
                alt="like"
                width={28}
                height={28}
                priority
            />
        </button>
    );
}
