import Section2 from "../heroBanner/section2";
import Section1 from "../heroBanner/section1";

export function HeroBanner() {
    return (
        <section className="bg-[#ffffff]  lg:pt-12.5 p-4 lg:pb-40 pb-20">
            <div className="rounded-xl border-2 border-[#151515] bg-[#B8181E] pt-12.5 px-5 lg:px-15 lg:py-21.5 flex flex-col justify-center items-center">
                <Section1 />
                <Section2 />
            </div>
        </section>
    );
}
