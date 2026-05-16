import LandingCard from "../cards/landingcard";
import SpeechBox from "../speeachbox";

export default function OptionFamilySection() {
    return (
        <div className="bg-[#58AB6F] lg:px-16 px-4 lg:py-22.5 py-10">
            <div className="px-5 flex lg:flex-row flex-col lg:gap-22.5 gap-10">
                <div className="flex flex-col justify-center items-center">
                    <SpeechBox
                        size="sm"
                        title="OPTION"
                        textColor="#000000"
                    />
                    <p
                        className="pt-4 text-[30px] text-nowrap"
                        style={{ fontFamily: "Mizolet" }}
                    >
                        おすすめオプション
                    </p>
                </div>

                <div
                    className="flex lg:flex-row flex-col w-full gap-4"
                    style={{ fontFamily: "Mizolet" }}
                >
                    <LandingCard arrowRotate={0}>
                        <div className="text-start">
                            <div className="flex flex-col gap-3">
                                <p className="text-[18px]">傷防止コート</p>
                                <p className="text-[13px] font-bold">
                                    「レンズの傷が気になる方」におすすめ！ブルーライトカット機能を搭載した、傷に強い特殊コーティング。
                                </p>
                            </div>
                            <p className="text-[18px] font-bold pt-2">
                                + ¥6,000{" "}
                                <span className="text-[13px] font-medium">
                                    税込
                                </span>
                            </p>
                        </div>
                    </LandingCard>
                    <LandingCard arrowRotate={0}>
                        <div className="text-start">
                            <div className="flex flex-col gap-3">
                                <p className="text-[18px] text-nowrap">
                                    UV・PCダブルカットレンズ
                                </p>
                                <p className="text-[13px] font-bold">
                                    目と肌に影響を及ぼすUV-A・UV-Bと、パソコン・スマホ使用時に気になるブルーライトをカットします。
                                </p>
                            </div>
                            <p className="text-[18px] font-bold pt-2">
                                + ¥6,000{" "}
                                <span className="text-[13px] font-medium">
                                    税込
                                </span>
                            </p>
                        </div>
                    </LandingCard>
                </div>
            </div>
        </div>
    );
}
