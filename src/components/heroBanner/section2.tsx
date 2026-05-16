import Image from "next/image";
import Glasses1 from "../glassage1";
import { textStrokeStyle } from "@/utils/text-stroke-style";

export default function Section2() {
    const NOTE_ITEMS = [
        "対象商品がなくなり次第終了です。",
        "表示価格が低額の商品からの割引です。",
        "2本目以降すべてのメガネ・サングラスが表示価格より半額となります。",
        "6,000円(税込)以上のOWNDAYSオリジナルメガネ・サングラスが対象です。",
        "オプションレンズ・セール商品・コラボ商品・レンズ交換・雑貨・修理等は対象外です。",
        "他の割引との併用はできません。",
        "本キャンペーンは予告なく変更・終了させていただく場合がございます。",
    ];

    return (
        <div
            id="hero_section_2"
            className="w-full lg:px-45  pt-10 lg:pt-0 flex flex-col gap-10"
        >
            <div className="flex flex-col items-center text-center md:mt-17">
                <Image
                    className="h-full w-full lg:max-w-95.25 px-20 lg:px-0 lg:pb-12.75"
                    src="/assets/hero-section-2.svg"
                    alt="section-2-hero-banner"
                    width={1}
                    height={1}
                    priority
                />

                <div className="flex flex-col lg:gap-4  text-lg pt-10 lg:pt-0">
                    <p className="font-bold text-white">まとめ買いがオトク！</p>
                    <span className="font-bold  text-white ">
                        家族・友達や恋人、自分買いでも複数本購入で、
                        <span className="font-bold text-xl text-white bg-[#005D31] pl-1">
                            2本目以降半額。
                        </span>
                    </span>
                </div>
            </div>

            <div className="bg-white rounded-[30px] w-full">
                <div className="lg:px-16   py-10 text-center flex flex-col gap-8">
                    <div className="font-bold text-lg lg:flex justify-center px-8 lg:px-0">
                        <p>例えば</p>
                        <p className="">
                            「12,000円」と「10,000円」のメガネをセットで購入する場合
                        </p>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
                        <div className="lg:border-r-3 lg:border-b-0 border-b-3 border-[#B8181E] px-4 flex relative gap-2">
                            <div
                                className="absolute top-1/2 -translate-y-1/2 hidden lg:flex"
                                style={{
                                    right: "-9px",
                                    width: 0,
                                    height: 0,
                                    borderTop: "9px solid transparent",
                                    borderBottom: "9px solid transparent",
                                    borderLeft: "9px solid #B8181E",
                                }}
                            />

                            <div
                                className="absolute top-1/2 -translate-y-1/2 hidden lg:flex "
                                style={{
                                    right: "-4.5px",
                                    width: 0,
                                    height: 0,
                                    borderTop: "4.5px solid transparent",
                                    borderBottom: "4.5px solid transparent",
                                    borderLeft: "4.5px solid #FFFFFF",
                                }}
                            />
                            <Glasses1
                                price="12000"
                                color="#B8181E"
                            />
                            <span className="flex text-5xl text-[#B8181E]">
                                +
                            </span>
                            <Glasses1
                                price="12000"
                                color="#B8181E"
                                impressiveIcon
                            />

                            <div
                                className="absolute left-1/2 -translate-x-1/2 lg:hidden"
                                style={{
                                    bottom: "-9px",
                                    width: 0,
                                    height: 0,
                                    borderLeft: "9px solid transparent",
                                    borderRight: "9px solid transparent",
                                    borderTop: "9px solid #B8181E",
                                }}
                            />

                            <div
                                className="absolute left-1/2 -translate-x-1/2 lg:hidden"
                                style={{
                                    bottom: "-4.5px",
                                    width: 0,
                                    height: 0,
                                    borderLeft: "4.5px solid transparent",
                                    borderRight: "4.5px solid transparent",
                                    borderTop: "4.5px solid #FFFFFF",
                                }}
                            />
                        </div>
                        <div>
                            <div className="flex lg:flex-row flex-col items-center">
                                <span className="font-bold text-2xl">
                                    2本目半額で
                                </span>
                                <div className="flex gap-1 lg:flex-row items-end">
                                    <span className="text-4xl font-bold text-[#B8181E]">
                                        ¥5,000
                                    </span>
                                    <span className="text-[#B8181E] font-bold text-2xl">
                                        がお得に！
                                    </span>
                                </div>
                            </div>
                            <p className="font-bold text-[14px]">
                                ※お値段が低い商品からの割引となります。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-white text-center font-semibold text-lg">
                この機会に、みんなで一緒にメガネを購入しよう！
            </p>

            <div className="bg-white rounded-[30px] w-full mb-14 lg:mb-0">
                <div className="lg:px-16 px-4 lg:py-14.5 py-5 flex lg:flex-row flex-col lg:gap-16  gap-4 items-start">
                    <div className="shrink-0  flex flex-col self-center">
                        <p
                            className="font-black text-6xl tracking-wider text-[#B8181E]"
                            style={textStrokeStyle}
                        >
                            NOTE
                        </p>
                        <p className="text-[21px] mt-2 font-bold text-center lg:text-start">
                            注意事項
                        </p>
                    </div>

                    <ul className="flex-1 space-y-2 text-[14px] font-bold leading-relaxed">
                        {NOTE_ITEMS.map((item, i) => (
                            <li
                                key={i}
                                className="flex"
                            >
                                <span className="mr-1 shrink-0">・</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
