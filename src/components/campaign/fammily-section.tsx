import Image from "next/image";
import CircleTag from "../circle-tag";
import ShowcaseFamilySection from "./showcase-family-section";

export default function FamilySection() {
    return (
        <div className="bg-[#ffffff]">
            <div className="bg-[#7ABC8C] md:rounded-t-[220px] rounded-t-[80px] md:px-41  px-4 md:pt-60 pt-30 pb-32 flex flex-col gap-20">
                <div className="flex md:flex-row flex-col">
                    <div className="w-full relative justify-center items-center flex">
                        <div className="w-full z-10 flex justify-center">
                            <Image
                                className="h-auto w-full max-w-96"
                                src="/assets/family.svg"
                                alt="family"
                                width={1}
                                height={1}
                                priority
                            />
                        </div>
                        <p className="md:text-[146px] text-[87px]  font-black absolute top-[-25%] z-0 text-[#FFFFFF] ">
                            FAMILY
                        </p>
                    </div>
                    <div className="flex flex-col gap-7 lg:px-20 px-4 justify-center items-center pt-8 lg:p-0">
                        <div
                            className="flex flex-col gap-4 items-center lg:items-start"
                            style={{
                                fontFamily: "Mizolet",
                            }}
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-1 lg:items-start lg:px-0 px-8">
                                <div className="flex lg:text-[22px] text-[20px]">
                                    <p className=" text-black  ">
                                        小さなお子様がいる家
                                    </p>
                                    <p className="hidden lg:block">庭でも</p>
                                </div>
                                <div className="flex pl-2">
                                    <span className="lg:hidden">庭でも</span>
                                    <CircleTag>安</CircleTag>
                                    <CircleTag>心</CircleTag>
                                </div>
                            </div>

                            <div className="bg-white text-black lg:text-[36px] text-[27px]  px-3 w-fit">
                                軽くて丈夫なフレーム
                            </div>
                            <p className="text-[14px] font-medium leading-relaxed text-black">
                                小さな子供がいるご家庭には、軽量で丈夫な樹脂素材のフレームが最適！行楽シーズンにあわせて家族でまとめて新調してみては？傷防止やUVカットの機能が搭載されたオプションレンズもおすすめ。
                            </p>
                        </div>
                    </div>
                </div>
                <ShowcaseFamilySection />
            </div>
        </div>
    );
}
