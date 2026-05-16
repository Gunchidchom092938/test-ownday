import Image from "next/image";
import LandingCard from "../cards/landingcard";
import SpeechBox from "../speeachbox";

export default function FeatureFamilySection() {
    return (
        <div className="bg-[#7ABC8C] lg:px-65 lg:py-22.5 pt-20 pb-15">
            <div className="px-5 flex gap-22.5 ">
                <div
                    className="flex w-full gap-4 relative "
                    style={{ fontFamily: "Mizolet" }}
                >
                    <div className="absolute top-[-12%] right-10">
                        <SpeechBox
                            title="CHECK"
                            size="sm"
                        />
                    </div>
                    <LandingCard
                        arrowRotate={0}
                        isShowBorder={false}
                        isShowCardBorder={false}
                    >
                        <div className="flex flex-col lg:px-10 items-center">
                            <div className="flex md:flex-row flex-col lg:justify-start justify-center items-center gap-10">
                                <Image
                                    className="h-full w-full max-w-70"
                                    src="/assets/isolated.svg"
                                    alt="isolated-banner"
                                    width={1}
                                    height={1}
                                    priority
                                />
                                <div
                                    className="text-start flex flex-col justify-center"
                                    style={{
                                        fontFamily: "Mizolet",
                                    }}
                                >
                                    <p className="lg:text-[22px] text-[15px]">
                                        お子さまの度数や保証書を
                                        <span className="bg-[#F8EF02]">
                                            一括管理！
                                        </span>
                                    </p>
                                    <p className="lg:text-[36px] text-[24px] ">
                                        親子で楽らくリンク機能
                                    </p>
                                </div>
                            </div>
                        </div>
                    </LandingCard>
                </div>
            </div>
        </div>
    );
}
