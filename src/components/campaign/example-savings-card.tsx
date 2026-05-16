function GlassesIcon({ small = false }: { small?: boolean }) {
    const size = small ? 88 : 116;

    return (
        <svg
            aria-hidden="true"
            width={size}
            height={small ? 32 : 42}
            viewBox="0 0 116 42"
            className="overflow-visible"
        >
            <g
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            >
                <circle
                    cx="23"
                    cy="24"
                    r="14"
                />
                <circle
                    cx="85"
                    cy="24"
                    r="14"
                />
                <path d="M9 24H2" />
                <path d="M99 24H114" />
                <path d="M37 24h10" />
                <path d="M61 24h10" />
                <path d="M47 24c2-7 8-7 11 0" />
            </g>
            <g
                stroke="currentColor"
                strokeLinecap="round"
            >
                <path d="M104 6c3 0 4 3 4 4" />
                <path d="M109 8c3 0 4 3 4 4" />
            </g>
        </svg>
    );
}

export function ExampleSavingsCard() {
    return (
        <section className="mx-auto w-full max-w-4xl rounded-[2rem] bg-white px-6 py-8 text-[#1d1a17] shadow-[0_20px_50px_rgba(80,12,12,0.12)] sm:px-10">
            <p className="text-center text-sm font-semibold tracking-[0.08em] text-[#24211e]">
                例えば「12,000円」と「10,000円」のメガネをセットで購入する場合
            </p>

            <div className="mt-7 flex flex-col items-center justify-between gap-8 lg:flex-row">
                <div className="flex items-end gap-4 text-[#c91d23]">
                    <div className="text-center">
                        <GlassesIcon />
                        <p className="mt-3 text-[1.9rem] font-black leading-none">
                            ¥12,000
                        </p>
                    </div>
                    <span className="pb-4 text-4xl font-light">+</span>
                    <div className="text-center">
                        <GlassesIcon />
                        <p className="mt-3 text-[1.9rem] font-black leading-none">
                            ¥10,000
                        </p>
                    </div>
                </div>

                <div className="hidden h-20 w-px bg-[#d8c9c6] lg:block" />

                <div className="text-center lg:text-left">
                    <p className="text-[1.9rem] font-bold tracking-tight text-[#181513]">
                        2本目半額で
                        <span className="mx-2 text-[3.1rem] font-black text-[#c91d23]">
                            ¥5,000
                        </span>
                        がお得に！
                    </p>
                    <p className="mt-3 text-sm text-[#645b56]">
                        ※ お値段が低い商品からの割引となります。
                    </p>
                </div>
            </div>
        </section>
    );
}
