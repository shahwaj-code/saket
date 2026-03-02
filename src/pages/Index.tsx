import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseGrid from "@/components/CourseGrid";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import CareerSupportSection from "@/components/CareerSupportSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import PartnersCarousel from "@/components/PartnersCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileEnquiryButton from "@/components/MobileEnquiryButton";
import AIChatWidget from "@/components/AIChatWidget";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Design Engine | Master Animation & Design for the Indian Industry</title>
        <meta 
          name="description" 
          content="India's premier Animation & Design Academy. Learn Adobe Creative Suite, VFX, Motion Graphics & UI/UX from industry experts. 95% placement rate with top studios." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-[#030306] text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <CourseGrid />
          <section id="about">
            <AboutSection />
          </section>
          <section id="why-us">
            <WhyUsSection />
          </section>
          <VideoShowcaseSection />
          <CareerSupportSection />
          <TestimonialsSection />
          <FAQSection />
          <section id="partners">
            <PartnersCarousel />
          </section>
          <ContactSection />
        </main>
        <Footer />
        <MobileEnquiryButton />
        <AIChatWidget />
      </div>
    </>
  );
};

export default Index;
