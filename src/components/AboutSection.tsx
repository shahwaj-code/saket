import { motion } from "framer-motion";
import {
  Target,
  Zap,
  GraduationCap,
  Briefcase,
  Smartphone,
  MessageCircle,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Gen AI-Powered Learning",
    description:
      "Every single course module integrates advanced Gen-AI workflows using Midjourney, Stable Diffusion, and Firefly.",
  },
  {
    icon: Briefcase,
    title: "Internship & Placement",
    description:
      "Direct access to 1000+ hiring partners with complete on-campus recruitment drives in Delhi NCR.",
  },
  {
    icon: Zap,
    title: "Portfolio Development",
    description:
      "Develop a benchmark digital showreel with structured weekly feedback from active creative directors.",
  },
  {
    icon: GraduationCap,
    title: "Global Certifications",
    description:
      "Earn official global certifications from Adobe, Autodesk, and Figma alongside university-backed degrees.",
  },
  {
    icon: Smartphone,
    title: "DE Student App",
    description:
      "Review design lectures, industrial briefs, resources, and project mockups 24/7 via our app.",
  },
  {
    icon: MessageCircle,
    title: "Communication Masterclass",
    description:
      "Exclusive mock interviews, creative resume structuring, and soft-skills bootcamps for corporate success.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-12 md:py-16 lg:py-20 bg-[#030306] overflow-hidden"
    >
      {/* Gold glow background */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#ffc107]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#ffc107]/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="text-[#ffc107] font-semibold mb-3 md:mb-4 text-sm md:text-base">
              About Design Engine Delhi
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Leading Delhi's Creative AVGC Education Hub
            </h2>

            <p className="text-sm sm:text-base text-gray-400 mb-4 md:mb-6 leading-relaxed">
              The Delhi NCR media ecosystem is witnessing explosive growth across OTT production, game development, and digital agencies—rapidly accelerated today by the strategic integration of Generative AI pipelines.
            </p>

            <p className="text-sm sm:text-base text-gray-400 mb-8 md:mb-10 leading-relaxed">
              Design Engine Delhi bridges this industry talent gap with a future-ready model embedding advanced Gen-AI modules into every design stream. At our South Delhi campus, we build hybrid creative professionals fluent in elite artistic craft and digital tech.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {[
                { value: "100%*", label: "Delhi Internship Aid" },
                { value: "₹12 LPA", label: "Top Studio Offer" },
                { value: "1000+", label: "Hiring Network" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center px-2 py-2 sm:px-3 sm:py-3 md:p-4 rounded-xl sm:rounded-2xl bg-[#0a0a0f] border border-[#ffc107]/20 hover:border-[#ffc107] transition group"
                >
                  <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[#ffc107] mb-1 whitespace-nowrap">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 leading-tight group-hover:text-gray-300 transition">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Value Cards - Left aligned on all devices */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 sm:p-5 md:p-6 rounded-2xl bg-[#0a0a0f] border border-[#ffc107]/20 hover:border-[#ffc107] transition-all duration-300 group text-left"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-[#ffc107]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition">
                  <value.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#ffc107]" />
                </div>

                <h3 className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base md:text-lg">
                  {value.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;