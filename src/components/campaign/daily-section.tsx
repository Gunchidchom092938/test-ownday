import Image from "next/image";
import CircleTag from "../circle-tag";
import ShowcaseDailySection from "./showcase-daily-section";

export default function DailySection() {
    return (
        <div className="bg-[#7ABC8C]">
            <div className="bg-[#D4B688] md:rounded-t-[220px] rounded-t-[80px] lg:px-41  px-4 lg:pt-60 pt-30 lg:pb-32 pb-16 flex flex-col gap-20">
                <div className="flex md:flex-row flex-col">
                    <div className="w-full relative justify-center items-center flex">
                        <div className="w-full z-10 flex justify-center">
                            <Image
                                className="h-auto w-full max-w-96"
                                src="/assets/daily.svg"
                                alt="family"
                                width={1}
                                height={1}
                                priority
                            />
                        </div>
                        <p className="md:text-[146px] text-[87px]  font-black absolute top-[-25%] z-0 text-[#FFFFFF]">
                            DAILY
                        </p>
                    </div>
                    <div className="flex flex-col gap-7 max-w-md ">
                        <div
                            className="flex flex-col gap-4 items-center lg:items-start"
                            style={{
                                fontFamily: "Mizolet",
                            }}
                        >
                            <div className="flex items-center gap-1 justify-center lg:justify-start ">
                                <p className="text-base text-black text-[22px]">
                                    日常使いで
                                </p>
                                <CircleTag>大</CircleTag>
                                <CircleTag>活</CircleTag>
                                <CircleTag>躍</CircleTag>
                            </div>

                            <div className="bg-white text-black lg:text-[36px] text-[26px]  px-3 w-fit">
                                肌馴染みのいいフレーム
                            </div>
                        </div>

                        <p className="text-[14px] font-medium leading-relaxed text-black">
                            手元作業の多いオフィスワーク、スポーツ、ドライブなど、日常のシーンごとに複数のメガネを持っておくのもおすすめ。使用場面に適したメガネなら、目の負担を軽減し、より快適な視界を保つことができます。さらに、ファッションに合わせておしゃれを楽しんだり、仕事とプライベートの気持ちの切り替えをスムーズにする手助けに！
                        </p>
                    </div>
                </div>
                <ShowcaseDailySection />
            </div>
        </div>
    );
}
