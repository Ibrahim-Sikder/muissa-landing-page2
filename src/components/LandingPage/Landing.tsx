import Benefits from "./Benefits";
import FinalCTA from "./FinalCTA";
import InvestmentSection from "./InvestmentSection";
import LandingHero from "./LandingHero";
import ServiceCategories from "./LandingService";
import ComparionSection from "./ResultSection";
import Testimonials from "./Testimonial";
import VideoSection from "./VideoSection";
import WhyChooseUs from "./WhyChooseUs";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#00305C] text-white">
      <main className="container mx-auto px-4">
        <LandingHero />
        <VideoSection />
        <Benefits />
        <ServiceCategories />
        <InvestmentSection />
        <WhyChooseUs />
        <ComparionSection />
        <Testimonials />
        <FinalCTA />
      </main>

    </div>
  )
}

