import Image from "next/image";
import React from "react";

function Section1() {
    return (
        <div
            id="hero_section_1"
            className="flex flex-col lg:flex lg:flex-row lg:px-[18.5px] gap-6 lg:gap-32"
        >
            <div className="flex justify-center items-center px-8 w-full md:max-w-[349.48px]">
                <Image
                    src="/assets/date-layout.svg"
                    alt="Campaign date layout"
                    width={349.48}
                    height={411.9}
                    priority
                />
            </div>
            <div className="w-full">
                <Image
                    className="h-full w-full"
                    src="/assets/main-persons.svg"
                    alt="Main campaign characters"
                    width={592}
                    height={520}
                    priority
                />
            </div>
        </div>
    );
}

export default Section1;
