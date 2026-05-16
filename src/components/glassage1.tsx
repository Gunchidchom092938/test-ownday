interface Props {
    price?: string;
    color?: string;
    impressiveIcon?: boolean | false;
}

export default function Glasses1(props: Readonly<Props>) {
    const { price, color, impressiveIcon } = props;
    return (
        <div
            className="w-full max-w-32.5 flex flex-col justify-center items-center text-center "
            style={{ color }}
        >
            <div
                className="relative w-full max-w-[114.2px]"
                style={{ height: "40px" }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: "currentColor",
                        maskImage: "url(/assets/glasses1.svg)",
                        WebkitMaskImage: "url(/assets/glasses1.svg)",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                    }}
                />
                {impressiveIcon && (
                    <div
                        className="absolute"
                        style={{
                            top: "-6px",
                            right: "-4px",
                            width: "14px",
                            height: "14px",
                            backgroundColor: "currentColor",
                            maskImage: "url(/assets/impressive-icon.svg)",
                            WebkitMaskImage: "url(/assets/impressive-icon.svg)",
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                            aspectRatio: 1 / 1,
                        }}
                    />
                )}
            </div>

            {price && (
                <p className="font-bold text-2xl">
                    ¥{Number(price).toLocaleString()}
                </p>
            )}
        </div>
    );
}
