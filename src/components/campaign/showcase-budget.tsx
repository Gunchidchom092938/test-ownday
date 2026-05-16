import { textStrokeStyle } from "@/utils/text-stroke-style";
import ShowcaseBudgetSection from "./showcase-budget-section";
import RoundedBtn from "../button/roundedbtn";

export default function ShowcaseBudget() {
    const itemGlasses = [
        {
            name: "SENICHI12 C2 ハバナ",
            frame: "千一作",
            image: "image.svg",
            type: "GLASSES",
            price: 20000,
            id: 1,
        },
        {
            name: "MR1007Y-0S C1 ブラック",
            frame: "marcus raw",
            image: "image (1).svg",
            type: "GLASSES",
            price: 20000,
            id: 2,
        },
        {
            name: "SENICHI30 C1 ブラック",
            frame: "千一作",
            image: "image (2).svg",
            type: "GLASSES",
            price: 22800,
            id: 3,
        },
        {
            name: "HW2006-3A C1 ブラック",
            frame: "OWNDAYS × HUAWEI Eyewear 2",
            image: "image (3).svg",
            type: "AUDIO",
            price: 37800,
            id: 4,
        },
        {
            name: "AF2007A-3S C1 ブラック",
            frame: "AIR",
            image: "image (5).svg",
            type: "GLASSES",
            price: 11000,
            id: 5,
        },
        {
            name: "GB1039B-3A C3 ゴールド",
            frame: "Graph Belle",
            image: "image (6).svg",
            type: "GLASSES",
            price: 10000,
            id: 6,
        },
        {
            name: "AU2091T-1A C2 ブラウンデミ",
            frame: "AIR",
            image: "image (7).svg",
            type: "GLASSES",
            price: 12000,
            id: 7,
        },
        {
            name: "OB2005N-4A C1 ブラック",
            frame: "SUN",
            image: "image (8).svg",
            type: "GLASSES",
            price: 13000,
            id: 8,
        },
        {
            name: "FC2024T-1S C2 ブラウンデミ",
            frame: "ESSENTIAL",
            image: "image (9).svg",
            type: "GLASSES",
            price: 8000,
            id: 9,
        },
        {
            name: "SUN2093T-2S C1 ブラウンデミ",
            frame: "SUN",
            image: "image (10).svg",
            type: "GLASSES",
            price: 6000,
            id: 10,
        },
        {
            name: "JU2038N-4S C3 クリアブルー",
            frame: "Junni",
            image: "image (11).svg",
            type: "KIDS",
            price: 7000,
            id: 11,
        },
        {
            name: "FC2036V-4A C1 ブラウン",
            frame: "ESSENTIAL",
            image: "image (12).svg",
            type: "GLASSES",
            price: 8000,
            id: 12,
        },
    ];

    const under10000 = itemGlasses.filter((item) => item.price < 10000);

    const under20000 = itemGlasses.filter(
        (item) => item.price >= 10000 && item.price < 20000,
    );

    const from20000 = itemGlasses.filter((item) => item.price >= 20000);

    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
                <div className="border-b-3 w-fit pb-7 relative">
                    <div
                        className="absolute left-1/2 -translate-x-1/2"
                        style={{
                            bottom: "-9px",
                            width: 0,
                            height: 0,
                            borderLeft: "9px solid transparent",
                            borderRight: "9px solid transparent",
                            borderTop: "9px solid #000000",
                        }}
                    />

                    <div
                        className="absolute left-1/2 -translate-x-1/2"
                        style={{
                            bottom: "-4.5px",
                            width: 0,
                            height: 0,
                            borderLeft: "4.5px solid transparent",
                            borderRight: "4.5px solid transparent",
                            borderTop: "4.5px solid #FFFFFF",
                        }}
                    />

                    <span
                        className="text-[32.67px] tracking-wider text-[#F2DC00]"
                        style={textStrokeStyle}
                    >
                        20,000円
                    </span>
                    <span className="text-[25px] pl-1">以上</span>
                </div>
                <ShowcaseBudgetSection items={from20000} />
                <RoundedBtn
                    className="max-w-78 mt-7.5"
                    title="20,000円以上の商品を見る"
                    isShowArrow
                />
            </div>

            <div className="flex flex-col justify-center items-center pt-20">
                <div className="border-b-3 w-fit pb-7 relative">
                    <div
                        className="absolute left-1/2 -translate-x-1/2"
                        style={{
                            bottom: "-9px",
                            width: 0,
                            height: 0,
                            borderLeft: "9px solid transparent",
                            borderRight: "9px solid transparent",
                            borderTop: "9px solid #000000",
                        }}
                    />

                    <div
                        className="absolute left-1/2 -translate-x-1/2"
                        style={{
                            bottom: "-4.5px",
                            width: 0,
                            height: 0,
                            borderLeft: "4.5px solid transparent",
                            borderRight: "4.5px solid transparent",
                            borderTop: "4.5px solid #FFFFFF",
                        }}
                    />

                    <span
                        className="text-[32.67px] tracking-wider text-[#F2DC00]"
                        style={textStrokeStyle}
                    >
                        10,000円
                    </span>
                    <span className="text-[25px] pl-1">台</span>
                </div>
                <ShowcaseBudgetSection items={under20000} />
                <RoundedBtn
                    className="max-w-78 mt-7.5"
                    title="10,000円台の商品を見る"
                    isShowArrow
                />
            </div>

            <div className="flex flex-col justify-center items-center pt-20">
                <div className="border-b-3 w-fit pb-7 relative">
                    <div
                        className="absolute left-1/2 -translate-x-1/2"
                        style={{
                            bottom: "-9px",
                            width: 0,
                            height: 0,
                            borderLeft: "9px solid transparent",
                            borderRight: "9px solid transparent",
                            borderTop: "9px solid #000000",
                        }}
                    />

                    <div
                        className="absolute left-1/2 -translate-x-1/2"
                        style={{
                            bottom: "-4.5px",
                            width: 0,
                            height: 0,
                            borderLeft: "4.5px solid transparent",
                            borderRight: "4.5px solid transparent",
                            borderTop: "4.5px solid #FFFFFF",
                        }}
                    />

                    <span
                        className="text-[32.67px] tracking-wider text-[#F2DC00]"
                        style={textStrokeStyle}
                    >
                        8,000円
                    </span>
                    <span className="text-[25px] pl-1">以下</span>
                </div>
                <ShowcaseBudgetSection items={under10000} />
                <RoundedBtn
                    className="max-w-78 mt-7.5"
                    title="8,000円以下の商品を見る"
                    isShowArrow
                />
            </div>
        </div>
    );
}
