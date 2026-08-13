import { Helmet } from "react-helmet-async";
import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const AcademicCollaborationSection = lazy(() => import("@/components/AcademicCollaborationSection"));
const CourseGrid = lazy(() => import("@/components/CourseGrid"));
// AboutSection moved to dedicated About page
const WhyUsSection = lazy(() => import("@/components/WhyUsSection"));
const VideoShowcaseSection = lazy(() => import("@/components/VideoShowcaseSection"));
const CareerSupportSection = lazy(() => import("@/components/CareerSupportSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
// FAQSection moved to dedicated FAQ page
const PartnersCarousel = lazy(() => import("@/components/PartnersCarousel"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const MobileEnquiryButton = lazy(() => import("@/components/MobileEnquiryButton"));

const Index = () => {
  const [loadBelowFold, setLoadBelowFold] = useState(false);

  useEffect(() => {
    const triggerLoad = () => setLoadBelowFold(true);
    let handle: number;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      handle = (window as any).requestIdleCallback(triggerLoad, { timeout: 1500 });
    } else {
      handle = window.setTimeout(triggerLoad, 1200);
    }

    return () => {
      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(handle);
      } else {
        window.clearTimeout(handle);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Design Engine Saket | Animation, VFX, Design & UI/UX Courses in Delhi</title>
        <meta
          name="description"
          content="Top-rated animation, VFX, graphic design and UI/UX training institute in Saket, South Delhi."
        />
        <meta
          name="twitter:title"
          content="Design Engine Saket | Animation, VFX, Design & UI/UX Courses in Delhi"
        />
        <meta
          name="twitter:description"
          content="Learn animation, VFX, graphic design, UI/UX and AI-powered creative skills at Design Engine Saket, South Delhi."
        />
      </Helmet>

      <div className="min-h-screen bg-[#030306] text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />

          {loadBelowFold ? (
            <Suspense fallback={<div className="min-h-[320px]" />}>
              <AcademicCollaborationSection />
              <CourseGrid />
              {/* About moved to its own /about page */}
              <section id="why-us">
                <WhyUsSection />
              </section>
              <VideoShowcaseSection />
              <CareerSupportSection />
              <TestimonialsSection />
              {/* FAQ moved to its own /faq page */}
              <section id="partners">
                <PartnersCarousel />
              </section>
              <ContactSection />
              <Footer />
              <MobileEnquiryButton />
            </Suspense>
          ) : (
            <div className="bg-[#030306]">
              <div className="min-h-[320px]" />
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Index;
