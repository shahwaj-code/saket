import { motion } from "framer-motion";
import { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Cpu,
  Users,
  Award,
  Clock,
  Sparkles,
  Target,
  Rocket,
  Zap,
  Star,
  Smartphone,
} from "lucide-react";

import { Button } from "./ui/button";
import EnquiryModal from "./EnquiryModal";

/* ================= FEATURES ================= */

const features = [
  {
    icon: Cpu,
    title: "AI-First Curriculum",
    description:
      "Every single module injects premium Gen-AI workflows into your core design pipeline.",
    stat: "25+ AI Tools",
  },
  {
    icon: GraduationCap,
    title: "Expert Mentors",
    description:
      "Learn from media industry veterans with 10+ years of active studio experience.",
    stat: "Top Delhi Faculty",
  },
  {
    icon: Briefcase,
    title: "Placement Support",
    description:
      "Specialized Delhi placement cell offering intensive corporate interview preparation.",
    stat: "100%* Placement Assistance",
  },
  {
    icon: Users,
    title: "Small Batches",
    description:
      "Maximum 15 seats per batch ensuring premium one-on-one mentor attention.",
    stat: "1:15 Elite Ratio",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description:
      "UGC & university-recognized credentials valued by top media employers.",
    stat: "Global Degrees",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description:
      "Classroom, studio-based, or hybrid modes tailored for Delhi NCR aspirants.",
    stat: "South Delhi Hub",
  },
];

/* ================= DIFFERENTIATORS ================= */

const differentiators = [
  { icon: Sparkles, text: "One-on-one studio mentorship & weekly offline doubt sessions" },
  { icon: Target, text: "Live commercial agency briefs for studio-level experience." },
  { icon: Rocket, text: "Lifetime access to core design modules & global resources" },
  { icon: Zap, text: "Delhi-NCR placement cell hosting weekly corporate recruitment drives" },
  { icon: Star, text: "Gen-AI software production pipelines integrated across all streams" },
  { icon: Smartphone, text: "Smart LMS Student App" },
];

/* ================= COMPONENT ================= */

const WhyUsSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <section id="why-us" className="relative py-12 md:py-16 lg:py-20 bg-[#030306] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#ffc107]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#ffc107]/5 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#ffc107]/30 mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffc107]" />
            <span className="text-[#ffc107] font-medium text-sm sm:text-base">Why Choose Us</span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            The <span className="text-[#ffc107]">Delhi Campus</span> Advantage
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed px-4">
            We don't just teach design—we launch elite AVGC careers with a proven studio approach.
          </p>
        </motion.div>

        {/* FEATURES GRID - Fixed equal size boxes with left alignment */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-16 md:mb-20 auto-rows-fr">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="h-full p-4 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl bg-[#0a0a0f] border border-[#ffc107]/20 transition-all duration-300 hover:border-[#ffc107] hover:shadow-[0_0_25px_rgba(255,193,7,0.25)] flex flex-col text-left">
                
                {/* ICON - Left aligned */}
                <div className="mb-3 sm:mb-4 md:mb-5 flex-shrink-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-[#0F3D35] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#FCC007]" />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="font-bold text-base sm:text-lg md:text-xl text-white mb-1.5 sm:mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed flex-grow">
                  {feature.description}
                </p>

                {/* STAT - Always at bottom */}
                <span className="text-[#ffc107] text-xs sm:text-sm font-semibold mt-auto pt-2 block">
                  {feature.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DIFFERENTIATORS - Fixed equal size boxes with left alignment */}
        <div className="max-w-4xl mx-auto p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#0a0a0f] border border-[#ffc107]/20">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-10">
            The Design Engine Edge
          </h3>

          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 auto-rows-fr">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="h-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl md:rounded-2xl bg-[#030306] border border-[#ffc107]/20 transition-all duration-300 hover:border-[#ffc107] hover:shadow-[0_0_15px_rgba(255,193,7,0.25)]">
                  
                  {/* ICON - Left aligned, fixed size */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-[#0F3D35] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#FCC007]" />
                  </div>

                  {/* TEXT - Left aligned with proper wrapping */}
                  <span className="text-white text-xs sm:text-sm md:text-base font-medium flex-1 leading-relaxed">
                    {item.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <Button
              className="flex items-center justify-center gap-2 mx-auto w-full sm:w-auto min-w-[200px] sm:min-w-[220px] px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold rounded-full text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setShowEnquiry(true)}
            >
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
              Join Delhi Campus 🚀
            </Button>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={showEnquiry}
        onClose={() => setShowEnquiry(false)}
      />
    </section>
  );
};

export default WhyUsSection;