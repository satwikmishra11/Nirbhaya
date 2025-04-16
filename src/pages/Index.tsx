
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { BraceletShowcaseSection } from "@/components/home/BraceletShowcaseSection";
import { DemoSection } from "@/components/home/DemoSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <div className="container pb-12">
        <HeroSection />
        <FeaturesSection />
        <BraceletShowcaseSection />
        <DemoSection />
        <CTASection />
      </div>
    </Layout>
  );
};

export default Index;
