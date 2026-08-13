import { ArrowRight, Zap, Rocket, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lazy, Suspense, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const BrochureModal = lazy(() => import("./BrochureModal"));
const EnquiryModal = lazy(() => import("./EnquiryModal"));

const HeroSection = () => {
  const [showBrochure, setShowBrochure] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const isMobile = useIsMobile();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const shouldAnimate = !isMobile && !prefersReducedMotion;

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-[#030306]" />

      {/* 3D Grid */}
      <div className="absolute inset-0 opacity-15 hidden sm:block">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,193,7,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,193,7,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "perspective(500px) rotateX(60deg)",
          }}
        />
      </div>

      {shouldAnimate ? (
        <>
          {/* Animated Orbs (CSS-based for better LCP) */}
          <div className="orb orb-1 absolute pointer-events-none" aria-hidden="true" />

          <div className="orb orb-2 absolute pointer-events-none" aria-hidden="true" />

          <div className="orb orb-3 absolute pointer-events-none hidden sm:block" aria-hidden="true" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-[#ffc107]/30 via-transparent to-[#ffd54f]/20" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030306] via-[#030306]/80 to-transparent" aria-hidden="true" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#030306] via-[#09090d] to-[#171717]" aria-hidden="true" />
          <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-[#ffc107]/30 via-transparent to-[#ffd54f]/20" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030306] via-[#030306]/80 to-transparent" aria-hidden="true" />
        </>
      )}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center space-y-8 sm:space-y-10">

          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-[#ffc107]">
              <Zap className="w-4 h-4 text-[#ffc107]" />
              <span className="text-xs sm:text-sm font-medium text-white/90">
                Delhi's Premier Animation & Design Academy
              </span>
              <Award className="w-4 h-4 text-[#ffd54f]" />
            </div>
          </div>

          {/* Heading - Responsive line breaks for mobile */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight px-2"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <span className="text-white block whitespace-normal">
              Master Animation, VFX
              <span className="hidden sm:inline"> &amp; </span>
              <br className="block sm:hidden" />
              <span className="sm:hidden">&amp; </span>
              UI/UX
            </span>
            <span className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent block mt-2 sm:mt-3">
              at Delhi's Top AVGC Institute
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            Launch a high-paying creative career in Delhi NCR. Build a production-ready portfolio under veterans from <span className="text-[#ffc107] font-medium">DNEG</span>,<span className="text-[#ffd54f] font-medium"> Red Chillies</span> &<span className="text-[#ffb300] font-medium"> Prime Focus</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
            <Button
              className="w-full sm:w-[260px] md:w-[280px] bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold rounded-full text-sm sm:text-base md:text-lg py-5 px-6 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap inline-flex items-center justify-center gap-2"
              onClick={() => setShowEnquiry(true)}
            >
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" strokeWidth={3} />
              <span>Book Free Demo Class</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" strokeWidth={3} />
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-[260px] md:w-[280px] bg-white/5 backdrop-blur-sm border border-[#ffc107] hover:bg-white/10 hover:border-[#ffc107] font-bold rounded-full text-sm sm:text-base md:text-lg py-5 px-6 text-white whitespace-nowrap inline-flex items-center justify-center gap-2"
              onClick={() => setShowBrochure(true)}
            >
              <Download className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-[#ffc107]" />
              <span>Download Brochure</span>
            </Button>
          </div>

          {/* Attribution Box */}
          <div className="mt-12 sm:mt-20 md:mt-40 lg:mt-48 px-4">
            <div className="max-w-2xl mx-auto border-2 border-[#ffc107] rounded-lg px-6 sm:px-8 py-5 sm:py-6 bg-white/5 backdrop-blur-sm">
              <p className="text-sm sm:text-base md:text-lg text-white/80 italic font-light leading-relaxed">
                Designed by Design Engine students using Gen-AI tools under the mentorship of top AVGC industry faculty.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Modals */}
      {showBrochure && (
        <Suspense fallback={null}>
          <BrochureModal
            isOpen={showBrochure}
            onClose={() => setShowBrochure(false)}
          />
        </Suspense>
      )}

      {showEnquiry && (
        <Suspense fallback={null}>
          <EnquiryModal
            isOpen={showEnquiry}
            onClose={() => setShowEnquiry(false)}
          />
        </Suspense>
      )}
    </section>
  );
};

export default HeroSection;