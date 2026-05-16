import { Breadcrumbs } from "@/components/breadcrumbs";
import DailySection from "@/components/campaign/daily-section";
import FamilySection from "@/components/campaign/fammily-section";
import FeatureFamilySection from "@/components/campaign/feature-section";
import { HeroBanner } from "@/components/campaign/hero-banner";
import OptionDailySection from "@/components/campaign/option-daily";
import OptionRecommend from "@/components/campaign/option-recommend";
import OptionFamilySection from "@/components/campaign/option-section";
import PickupSection from "@/components/campaign/pickup-section";
import SectionBudget from "@/components/campaign/section-budget";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-[#181513]">
            <SiteHeader />

            <div>
                <Breadcrumbs
                    items={[
                        "メガネのOWNDAYS トップ",
                        "ニュース",
                        "みんなメガネ割",
                    ]}
                />

                <main>
                    <div className="lg:px-18">
                        <HeroBanner />
                        <PickupSection />
                    </div>
                    <FamilySection />
                    <OptionFamilySection />
                    <FeatureFamilySection />
                    <DailySection />
                    <OptionDailySection />
                    <SectionBudget />
                    <OptionRecommend />
                </main>
            </div>
        </div>
    );
}
