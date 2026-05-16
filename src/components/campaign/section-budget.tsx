import LandingBtn from "../button/landingbtn";
import SpeechBox from "../speeachbox";
import ShowcaseBudget from "./showcase-budget";

export default function SectionBudget() {
    return (
        <div className="py-29 lg:px-18 px-4 flex flex-col">
            <div className="flex flex-col justify-center items-center gap-10 ">
                <SpeechBox
                    title="BUDGET"
                    size="sm"
                    className="w-full max-w-32"
                />
                <div className="flex flex-col text-center">
                    <p
                        className="text-[40px]"
                        style={{
                            fontFamily: "Mizolet",
                        }}
                    >
                        予算から選ぶ
                    </p>
                    <p className="text-[27px]">メガネ・サングラス</p>
                </div>

                <div className="flex gap-1 w-full">
                    <LandingBtn title="20,000円以上" />
                    <LandingBtn title="10,000円以上" />
                    <LandingBtn title="8,000円以上" />
                </div>
            </div>
            <div className="pt-22.5">
                <ShowcaseBudget />
            </div>
        </div>
    );
}
