import { GlassesType } from "@/types/item-glasses";
import ShowcaseBudgetItem from "../items/showcase-budget-item";

interface Props {
    items: GlassesType[];
}

export default function ShowcaseBudgetSection(props: Readonly<Props>) {
    const { items } = props;

    return (
        <div className="bg-white py-9 rounded-[20px] flex justify-center">
            <div>
                <ShowcaseBudgetItem items={items} />
            </div>
        </div>
    );
}
