"use client";

import { useState } from "react";
import { GlassesType } from "@/types/item-glasses";
import RoundedBtn from "../button/roundedbtn";

import Image from "next/image";
import LikeBtn from "../button/likebtn";

interface Props {
    items: GlassesType[];
}

export default function ShowcaseItem(props: Readonly<Props>) {
    const { items } = props;

    const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

    const toggleLike = (id: string) => {
        setLikedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {items.map((item, index) => {
                return (
                    <div
                        key={`${item.name}_${index}`}
                        className="flex flex-col w-full max-w-90 justify-center items-center"
                    >
                        <div className="flex items-center mb-5">
                            <p
                                className="text-white text-[13px] font-semibold rounded-[40px] text-center max-w-fit px-5 py-1.5"
                                style={{ background: "#468A59" }}
                            >
                                {item.type}
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center relative">
                            <div className="flex flex-col absolute -top-1 text-center">
                                <p className="text-[18px] font-semibold">
                                    {item.frame}
                                </p>
                                <p className="text-[14px] font-medium">
                                    {item.name}
                                </p>
                            </div>
                            <Image
                                className="h-full w-full"
                                src={`/assets/${item.image}`}
                                alt={item.image}
                                width={1}
                                height={1}
                                priority
                            />
                            <p className="text-2xl font-bold absolute bottom-0">
                                ¥{Number(item.price).toLocaleString()}{" "}
                                <span className="text-sm font-medium">
                                    税込
                                </span>
                            </p>
                        </div>

                        <div className="flex w-full items-center gap-4 px-8 pt-4">
                            <div className="flex-1">
                                <RoundedBtn
                                    title="ONLINE STORE"
                                    className="px-12 py-5 w-full"
                                />
                            </div>
                            <LikeBtn
                                isActive={likedIds.has(String(item.id))}
                                onClick={() => toggleLike(String(item.id))}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
