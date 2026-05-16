import { textStrokeStyle } from "@/utils/text-stroke-style";
import LandingCard from "../cards/landingcard";

export default function OptionRecommend() {
    const lensOptions = [
        {
            id: 1,
            title: "超極薄レンズ",
            description:
                "「より薄く」「より軽く」を実現した世界最高屈折のプレミアムレンズ。目の大きさなどに影響する歪みを極限まで抑えることができます。",
            price: 12000,
        },
        {
            id: 2,
            title: "PCレンズ",
            description:
                "スマホ・パソコンなど電子機器から出るブルーライトから眼を守るレンズ。度無しクリアの場合は、追加料金なしでお作りいただけます。",
            price: 4000,
        },
        {
            id: 3,
            title: "カラーレンズ",
            description:
                "お好みのフレームと組み合わせることでファッション性を楽しんだり、サングラスとして使用したりできるレンズです。",
            price: 4000,
        },
        {
            id: 4,
            title: "調光レンズ",
            description:
                "紫外線によってレンズカラーが変化！日差しが強くなる季節も、1本2役で荷物にならず持ち運びも便利。",
            price: 6000,
        },
        {
            id: 5,
            title: "くもり止めコート",
            description:
                "表面に特殊なコーティングを施すことで、レンズを曇りにくくしクリアな視界を保ちます。マスクとメガネを併用される方ににおすすめ。",
            price: 4000,
        },
        {
            id: 6,
            title: "傷防止コート",
            description:
                "「レンズの傷が気になる方」におすすめ！ブルーライトカット機能を搭載した、傷に強い特殊コーティング。",
            price: 6000,
        },
    ];
    return (
        <div className="pb-40 bg-white">
            <div className="bg-[#F4F4F4] pb-20 w-full relative">
                <div className="lg:px-20 px-8 flex flex-col items-center gap-10 relative z-20">
                    <div className="text-center">
                        <h2
                            className="font-black text-6xl tracking-wider text-[#B8181E]"
                            style={textStrokeStyle}
                        >
                            OPTION
                        </h2>
                        <p className="text-[21px] mt-2 font-bold">
                            おすすめオプションレンズ
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full max-w-6xl">
                        {lensOptions.map((item) => (
                            <LandingCard
                                key={item.id}
                                arrowRotate={45}
                                isShowBorder={false}
                                arrowPosition="bottom"
                            >
                                <div className="text-start flex flex-col h-full">
                                    <div className="flex flex-col gap-3 flex-1">
                                        <p className="text-[18px] font-bold">
                                            {item.title}
                                        </p>
                                        <p className="text-[13px] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    <p className="text-[18px] font-bold pt-4">
                                        + ¥{Number(item.price).toLocaleString()}{" "}
                                        <span className="text-[13px] font-medium">
                                            税込
                                        </span>
                                    </p>
                                </div>
                            </LandingCard>
                        ))}
                    </div>
                </div>
                <div className="bg-white py-4  absolute top-0 right-0 w-full z-10" />
            </div>
        </div>
    );
}
