import Header from "../Header/Header";
import ApplyButton from "./ApplyButton";
import Benefits from "./Benefits";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import InvestmentSection from "./InvestmentSection";
import LandingHero from "./LandingHero";
import ServiceCategories from "./LandingService";
import ComparionSection from "./ResultSection";
import Testimonials from "./Testimonial";
import VideoSection from "./VideoSection";
import WhyChooseUs from "./WhyChooseUs";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#00305C]  text-white">
      <Header />
      <main className="container mx-auto px-4 pt-3 md:pt-0 ">
        <LandingHero />
        <VideoSection />
        <ApplyButton />
        <Benefits />
        <ServiceCategories />
        <InvestmentSection />
        <WhyChooseUs />
        <ComparionSection />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </main>

    </div>
  )
}

