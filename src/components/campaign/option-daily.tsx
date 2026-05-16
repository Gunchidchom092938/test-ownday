import LandingCard from "../cards/landingcard";
import SpeechBox from "../speeachbox";

export default function OptionDailySection() {
    return (
        <div className="bg-[#C79F62] lg:px-16  lg:py-22.5 py-10">
            <div className="px-5 flex flex-col lg:gap-22.5 gap-10">
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
                    className="flex flex-col w-full gap-4"
                    style={{ fontFamily: "Mizolet" }}
                >
                    <LandingCard arrowRotate={0}>
                        <div className="text-start">
                            <div className="flex flex-col gap-3">
                                <p className="text-[18px]">調光レンズ</p>
                                <p className="text-[13px] font-bold">
                                    紫外線によってレンズカラーが変化！日差しが強くなる季節も、1本2役で荷物にならず持ち運びも便利。
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
                                <p className="text-[18px]">
                                    ニュアンスカラーレンズ
                                </p>
                                <p className="text-[13px] font-bold">
                                    メガネをかけるだけで、目元を明るく、健康的な印象に！オフの日はもちろん忙しい朝のメイク代わりやコーデのアクセントに最適。
                                </p>
                            </div>
                            <p className="text-[18px] font-bold pt-2">
                                + ¥4,000
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
