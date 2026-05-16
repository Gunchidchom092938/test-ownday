import LandingBtn from "../button/landingbtn";
import { textStrokeStyle } from "@/utils/text-stroke-style";
import SpeechBox from "../speeachbox";

function PickupSection() {
    return (
        <div className="flex flex-col lg:gap-28 gap-15 mb-10 px-4 lg:px-0">
            <div className="flex lg:flex-row flex-col justify-center lg:gap-40 gap-8">
                <div className="shrink-0 flex flex-col self-center">
                    <h2
                        className="font-black text-6xl tracking-wider text-[#B8181E]"
                        style={textStrokeStyle}
                    >
                        PICK UP
                    </h2>
                    <p className="text-[21px] mt-2 font-bold lg:text-start text-center">
                        おすすめアイテム
                    </p>
                </div>

                <div className="flex flex-row  gap-4">
                    <LandingBtn title="目的から選ぶ" />
                    <LandingBtn title="予算から選ぶ" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-10 ">
                <SpeechBox
                    title="PURPOSE"
                    size="sm"
                    className="w-full max-w-32"
                />
                <p
                    className="text-[40px]"
                    style={{
                        fontFamily: "Mizolet",
                    }}
                >
                    目的から選ぶ
                </p>
            </div>
        </div>
    );
}

export default PickupSection;
