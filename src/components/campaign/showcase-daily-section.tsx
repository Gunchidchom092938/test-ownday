import ShowcaseItem from "../items/showcase-item";

export default function ShowcaseDailySection() {
    const itemGlasses = [
        {
            name: "JD1045Z-4A C2 ゴールド",
            frame: "John Dillinger",
            image: "JD1045Z-4A_C2.svg",
            type: "GLASSES",
            price: 20000,
            id: 1,
        },
        {
            name: "FC2035V-4A C2 ブラウン",
            frame: "ESSENTIAL",
            image: "FC2035V-4A_C2.svg",
            type: "GLASSES",
            price: 8000,
            id: 2,
        },
        {
            name: "GB1043G-4A C1 マットブラウン",
            frame: "Graph Belle",
            image: "GB1043G-4A_C1.svg",
            type: "GLASSES",
            price: 10000,
            id: 3,
        },
    ];
    return (
        <div className="bg-white py-9 rounded-[20px] flex justify-center">
            <div>
                <ShowcaseItem items={itemGlasses} />
            </div>
        </div>
    );
}
