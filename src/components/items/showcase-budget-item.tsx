"use client";

import { GlassesType } from "@/types/item-glasses";
import RoundedBtn from "../button/roundedbtn";

import Image from "next/image";

interface Props {
    items: GlassesType[];
}

export default function ShowcaseBudgetItem(props: Readonly<Props>) {
    const { items } = props;
    const mapTypeWithImage = (type: string) => {
        if (type === "KIDS") {
            return "kids.svg";
        } else if (type === "AUDIO") {
            return "audio.svg";
        } else {
            return undefined;
        }
    };
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
            {items.map((item, index) => {
                const iconType = mapTypeWithImage(item.type);
                return (
                    <div
                        key={`${item.name}_${index}`}
                        className="flex flex-col w-full max-w-90 justify-center items-center"
                    >
                        <div className="flex flex-col justify-center items-center relative">
                            {iconType && (
                                <Image
                                    className="h-auto w-22.5 absolute top-0 right-0"
                                    src={`/assets/${mapTypeWithImage(item.type)}`}
                                    alt={item.image}
                                    width={1}
                                    height={1}
                                    priority
                                />
                            )}

                            <Image
                                className="h-full w-full"
                                src={`/assets/${item.image}`}
                                alt={item.image}
                                width={1}
                                height={1}
                                priority
                            />
                            <div className="text-2xl font-bold absolute -bottom-12 text-center flex flex-col gap-2">
                                <div>
                                    <p className="text-[18px] font-semibold">
                                        {item.frame}
                                    </p>
                                    <p className="text-[14px] font-medium">
                                        {item.name}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        ¥{Number(item.price).toLocaleString()}{" "}
                                        <span className="text-sm font-medium">
                                            税込
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-4 px-8 pt-18">
                            <div className="flex-1">
                                <RoundedBtn
                                    title="ONLINE STORE"
                                    className="px-12 py-5 w-full"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
