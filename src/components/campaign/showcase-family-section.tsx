import ShowcaseItem from "../items/showcase-item";

export default function ShowcaseFamilySection() {
    const itemGlasses = [
        {
            name: "AU2101E-3A C3 カーキ",
            frame: "AIR",
            image: "AU2101E-3A_C3.svg",
            type: "GLASSES",
            price: 11000,
            id: 1,
        },
        {
            name: "SUN2107N-4S C1 ブラック",
            frame: "SUN",
            image: "SUN2107N-4S_C1.svg",
            type: "SUNGLASSES",
            price: 8000,
            id: 2,
        },
        {
            name: "JU2037N-4S C3 クリアブルー",
            frame: "Junni",
            image: "JU2037N-4S_C3.svg",
            type: "KIDS GLASSES",
            price: 7000,
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
