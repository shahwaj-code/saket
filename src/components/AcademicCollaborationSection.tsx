import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Zap,
  BookOpen,
  Shield,
  Star,
  Sparkles,
} from "lucide-react";
import collaborationLogo from "@/assets/lingyas_university_logo/lingyas-logo.webp.webp";

const trustPoints = [
  { icon: Shield, title: "UGC Recognized", description: "UGC recognized programs for valid national job placements" },
  { icon: Award, title: "NAAC A+", description: "Premium education standard assured by NAAC A+ Council" },
  { icon: Zap, title: "Industry-Oriented", description: "Syllabus aligned with top Delhi NCR production studios" },
  { icon: BookOpen, title: "Practical Training", description: "Rigorous studio experience with live portfolio projects" },
];

const AcademicCollaborationSection = () => {
  return (
    <section id="collaboration" className="relative py-12 md:py-16 lg:py-24 bg-[#030306] overflow-hidden">
      {/* Gold glow backgrounds */}
      <div className="absolute top-20 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#ffc107]/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-20 right-0 w-[300px] h-[300px] md:w-96 md:h-96 bg-[#ffc107]/8 blur-3xl rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ffc107]/30 bg-[#ffc107]/10 px-4 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffc107]" />
            <span className="text-xs sm:text-sm font-semibold text-[#ffc107] uppercase tracking-widest">
              Delhi NCR Partnership
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Studio & Industry Collaboration
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed">
            Partnering with Lingaya's Vidyapeeth to deliver elite multimedia courses in Delhi with academic excellence
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center mb-12 md:mb-16">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Description Cards */}
            <motion.div
              className="p-5 sm:p-6 md:p-8 rounded-2xl bg-[#0a0a0f] border border-[#ffc107]/20 hover:border-[#ffc107]/50 transition-all duration-300 group text-left"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 193, 7, 0.2)" }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-[#ffc107] transition">
                Industry-Academic Partnership
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Design Engine Delhi collaborates with Lingaya's Vidyapeeth to provide university-recognized AVGC programs. This strategic tie-up ensures Delhi NCR students receive accredited degree credentials alongside production-level skills.
              </p>
            </motion.div>

            <motion.div
              className="p-5 sm:p-6 md:p-8 rounded-2xl bg-[#0a0a0f] border border-[#ffc107]/20 hover:border-[#ffc107]/50 transition-all duration-300 group text-left"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 193, 7, 0.2)" }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-[#ffc107] transition">
                Dual Certification Advantage
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Our Delhi curriculum combines intensive studio training with UGC-backed learning. Creative aspirants gain studio-ready skills, local agency exposure, and valid academic degrees—creating hybrid design professionals ready for top tech hubs.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Logo Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <motion.div
              className="relative w-full max-w-xl rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border-2 border-[#ffc107]/40 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a15] p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_24px_70px_rgba(255,193,7,0.16)] hover:shadow-[0_30px_90px_rgba(255,193,7,0.25)] transition-all duration-300"
              whileHover={{ scale: 1.03, borderColor: "rgba(255, 193, 7, 0.8)" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffc107]/20 to-[#ffc107]/5 border border-[#ffc107]/30 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8"
              >
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffc107]" />
                <span className="text-[10px] sm:text-xs font-bold text-[#ffc107] uppercase tracking-widest">In Collaboration With</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-[20px] sm:rounded-[24px] md:rounded-[28px] border border-[#ffc107]/20 bg-gradient-to-br from-[#0a0a0f] to-[#11121a] p-6 sm:p-8 md:p-10 flex items-center justify-center"
              >
                <img
                  src={collaborationLogo}
                  alt="Lingaya's Vidyapeeth logo"
                  className="max-h-40 sm:max-h-52 md:max-h-60 lg:max-h-80 w-auto object-contain drop-shadow-[0_0_30px_rgba(255,193,7,0.4)] transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="text-center py-8 sm:py-10 md:py-12">
                          <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffc107] mb-3 sm:mb-4">LINGAYA'S</div>
                          <div class="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">VIDYAPEETH</div>
                          <div class="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6">(Deemed to be University)</div>
                          <div class="mt-3 sm:mt-4 h-1 w-16 sm:w-20 mx-auto bg-gradient-to-r from-[#ffc107]/50 to-[#ffc107] rounded-full"></div>
                        </div>
                      `;
                    }
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl border border-[#ffc107]/20 bg-gradient-to-br from-[#11121a] to-[#0a0a0f] py-6 sm:py-7 md:py-8 px-4 sm:px-5 md:px-6 text-center"
              >
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">Lingaya's Vidyapeeth</p>
                <p className="text-xs sm:text-sm text-[#ffc107] uppercase tracking-[0.16em] sm:tracking-[0.2em] md:tracking-[0.24em] mb-2">Top NAAC A+ University</p>
                <div className="mx-auto mt-3 sm:mt-4 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-[#ffc107]/70 to-[#ffc107]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Points Grid - Fixed alignment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6"
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + index * 0.1 }}
              className="p-4 sm:p-5 md:p-6 rounded-2xl bg-[#0a0a0f] border border-[#ffc107]/20 hover:border-[#ffc107] transition-all duration-300 group text-left"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 193, 7, 0.2)" }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-[#ffc107]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#ffc107]/20">
                <point.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#ffc107]" />
              </div>
              <h3 className="font-bold text-white mb-1.5 sm:mb-2 group-hover:text-[#ffc107] transition text-sm sm:text-base md:text-lg">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicCollaborationSection;