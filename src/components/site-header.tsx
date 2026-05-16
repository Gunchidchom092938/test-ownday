"use client";

import { useState } from "react";

const navItems = [
    "商品検索",
    "ブランド",
    "レンズ",
    "OWNDAYSについて",
    "店舗検索",
];

// ─── Icons ───
function PersonIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
            />
            <circle
                cx="12"
                cy="10"
                r="3"
            />
            <path d="M6.5 19a6 6 0 0 1 11 0" />
        </svg>
    );
}

function SearchIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle
                cx="11"
                cy="11"
                r="7"
            />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}

function HeartIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    );
}

function BagIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function MenuIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line
                x1="3"
                y1="7"
                x2="21"
                y2="7"
            />
            <line
                x1="3"
                y1="17"
                x2="21"
                y2="17"
            />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
            />
            <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
            />
        </svg>
    );
}

export function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="border-b border-gray-200 bg-white">
                {/* ─── Desktop Layout (lg+) ─── */}
                <div className="mx-auto hidden lg:flex items-center justify-between px-8 py-8">
                    <div className="flex items-center gap-12">
                        <a
                            href="#"
                            className="text-[22px] leading-none tracking-[0.35em] text-black font-medium"
                        >
                            OWNDAYS
                        </a>

                        <nav className="flex items-center gap-4 text-[13px] text-black">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="transition-opacity hover:opacity-60"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="flex items-center gap-5 text-black">
                        <a
                            href="#"
                            className="flex items-center gap-2 text-[13px] hover:opacity-60 transition-opacity"
                        >
                            <PersonIcon />
                            <span>0pt（円相当）</span>
                        </a>

                        <a
                            href="#"
                            className="hover:opacity-60 transition-opacity"
                            aria-label="検索"
                        >
                            <SearchIcon />
                        </a>

                        <a
                            href="#"
                            className="hover:opacity-60 transition-opacity"
                            aria-label="お気に入り"
                        >
                            <HeartIcon />
                        </a>

                        <a
                            href="#"
                            className="relative hover:opacity-60 transition-opacity"
                            aria-label="カート"
                        >
                            <BagIcon />
                            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
                                4
                            </span>
                        </a>
                    </div>
                </div>

                {/* ─── Mobile Layout (< lg) ─── */}
                <div className="lg:hidden relative flex items-center justify-between px-4 py-4">
                    {/* ซ้าย: cart + search */}
                    <div className="flex items-center gap-3 text-black">
                        <a
                            href="#"
                            className="relative hover:opacity-60 transition-opacity"
                            aria-label="カート"
                        >
                            <BagIcon />
                            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
                                0
                            </span>
                        </a>
                        <a
                            href="#"
                            className="hover:opacity-60 transition-opacity"
                            aria-label="検索"
                        >
                            <SearchIcon />
                        </a>
                    </div>

                    {/* กลาง: logo (absolute center) */}
                    <a
                        href="#"
                        className="absolute left-1/2 -translate-x-1/2 text-[16px] tracking-[0.3em] text-black font-medium"
                    >
                        OWNDAYS
                    </a>

                    {/* ขวา: phone + menu */}
                    <div className="flex items-center gap-3 text-black">
                        <a
                            href="tel:+81000000000"
                            className="hover:opacity-60 transition-opacity"
                            aria-label="電話"
                        >
                            <PhoneIcon />
                        </a>
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(true)}
                            className="hover:opacity-60 transition-opacity cursor-pointer"
                            aria-label="メニュー"
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </header>

            {/* ─── Mobile Drawer ─── */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <div
                        className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Drawer header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                            <span className="text-[18px] tracking-[0.3em] font-medium">
                                MENU
                            </span>
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(false)}
                                className="hover:opacity-60 transition-opacity cursor-pointer"
                                aria-label="閉じる"
                            >
                                <CloseIcon />
                            </button>
                        </div>

                        {/* Account section */}
                        <a
                            href="#"
                            className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            <PersonIcon />
                            <span className="text-[13px]">0pt（円相当）</span>
                        </a>

                        {/* Nav items */}
                        <nav className="flex flex-col flex-1">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="px-6 py-4 border-b border-gray-200 text-[14px] hover:bg-gray-50 transition-colors"
                                >
                                    {item}
                                </a>
                            ))}

                            <a
                                href="#"
                                className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 text-[14px] hover:bg-gray-50 transition-colors"
                            >
                                <HeartIcon />
                                <span>お気に入り</span>
                            </a>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
