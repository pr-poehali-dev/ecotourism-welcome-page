import HeroSection from "@/components/HeroSection";
import ProgramDescription from "@/components/ProgramDescription";
import FeatureCards from "@/components/FeatureCards";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProgramDescription />
      <FeatureCards />
      <CallToAction />
    </div>
  );
};

export default Index;
