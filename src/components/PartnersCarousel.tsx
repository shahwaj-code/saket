import { motion } from "framer-motion";
import { Building2, TrendingUp, Award, Users, Star, Sparkles } from "lucide-react";

// All Partner Companies (from your list)
const partnerCompanies = [
  { name: "Boult Audio" },
  { name: "Schmooze Media" },
  { name: "Oak & Stone Inc" },
  { name: "Whitelisted Estate" },
  { name: "Ambrosia Botanicals" },
  { name: "Charuvi Designs" },
  { name: "Future Vision" },
  { name: "Tiore Global" },
  { name: "Just Procure" },
  { name: "Ocean Techventures" },
  { name: "Myza Diamond Private Limited" },
  { name: "Trafurry" },
  { name: "Immersive Art Studio" },
  { name: "Whitelisted Estates" },
  { name: "Unstop" },
  { name: "Adda Education" },
  { name: "BE Digitech" },
  { name: "ECorp IT" },
  { name: "Turpinas Energy" },
  { name: "Narang Properties" },
  { name: "Social Codify" },
  { name: "The Prime Address" },
  { name: "Gushsquad" },
  { name: "Qwerty Brand" },
  { name: "Xponic Experiences Private Limited" },
  { name: "BeRaw Stories Production" },
  { name: "Mobisoft Labs" },
  { name: "RentOk" },
  { name: "Expand Wide" },
  { name: "Renticle" },
  { name: "Infyplus" },
];

// Split companies into two groups
const firstRowCompanies = partnerCompanies.slice(0, 16);
const secondRowCompanies = partnerCompanies.slice(16);

const PartnersCarousel = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#030306]">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-[#030306]" />

      {/* Animated Orbs - subtle */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[520px] h-[520px] bg-[#ffc107]/10 rounded-full blur-[70px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-[#ffd54f]/10 rounded-full blur-[60px] pointer-events-none"
      />

      {/* 3D Grid - subtle */}
      <div className="absolute inset-0 opacity-10 hidden sm:block">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,193,7,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,193,7,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "perspective(500px) rotateX(60deg)",
          }}
        />
      </div>

      {/* Gradient Overlay - subtle */}
      <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-[#ffc107]/20 via-transparent to-[#ffd54f]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030306] via-[#030306]/80 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-[#ffc107]/40 mb-6"
          >
            <Users className="w-4 h-4 text-[#ffc107]" />
            <span className="text-xs sm:text-sm font-light tracking-wider text-white/90">
              DELHI NCR RECRUITERS
            </span>
            <Sparkles className="w-4 h-4 text-[#ffd54f]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <span className="text-white">Studios Hiring </span>
            <span className="text-[#ffc107]">Our Talent</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto tracking-wide"
          >
            Top media houses partnering with us for elite Delhi design talent.
          </motion.p>
        </motion.div>

        {/* Stats Grid - Minimal */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { value: "95%", label: "95% Job Track Record", icon: TrendingUp },
            { value: "100%", label: "Studio Internship", icon: Award },
            { value: "₹12LPA", label: "Best Salary Offer", icon: Star },
            { value: "1000+", label: "Studio Network", icon: Building2 },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-[#ffc107]/30 hover:border-[#ffc107] rounded-xl p-4 text-center transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,193,7,0.4)]">
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-[#ffc107]/20 to-[#ffd54f]/20 p-0.5 border border-[#ffc107]/30">
                  <div className="w-full h-full rounded-lg bg-[#030306] flex items-center justify-center">
                    <stat.icon className="w-4 h-4 text-[#ffc107]" />
                  </div>
                </div>
                <div className="text-xl font-light tracking-wide text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-light tracking-wider text-white/60">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Section */}
        <div className="space-y-8 mt-12">
          {/* Decorative Header */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#ffc107]/50" />
            <span className="text-xs font-light tracking-widest text-white/50 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-[#ffc107]" />
              DELHI NCR RECRUITERS
              <Sparkles className="w-3 h-3 text-[#ffd54f]" />
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#ffb300]/50" />
          </div>

          {/* First Row - Left to Right */}
          <div className="relative">
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030306] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030306] to-transparent z-10" />

            {/* Carousel Container */}
            <div className="overflow-hidden py-2">
              <motion.div
                animate={{ x: [0, -4200] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 100,
                    ease: "linear",
                  },
                }}
                className="flex gap-5 items-center"
              >
                {/* Triple the companies for smooth loop */}
                {[...firstRowCompanies, ...firstRowCompanies, ...firstRowCompanies].map((company, index) => (
                  <div
                    key={`row1-${company.name}-${index}`}
                    className="flex-shrink-0"
                  >
                    <div className="px-7 py-4 rounded-lg bg-black/40 backdrop-blur-sm border-2 border-[#ffc107]/40 hover:border-[#ffc107] transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,193,7,0.35)]">
                      <span 
                        className="text-lg md:text-xl text-white font-light tracking-wide whitespace-nowrap"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {company.name}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative">
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030306] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030306] to-transparent z-10" />

            {/* Carousel Container */}
            <div className="overflow-hidden py-2">
              <motion.div
                animate={{ x: [-4200, 0] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 110,
                    ease: "linear",
                  },
                }}
                className="flex gap-5 items-center"
              >
                {/* Triple the companies for smooth loop */}
                {[...secondRowCompanies, ...secondRowCompanies, ...secondRowCompanies].map((company, index) => (
                  <div
                    key={`row2-${company.name}-${index}`}
                    className="flex-shrink-0"
                  >
                    <div className="px-7 py-4 rounded-lg bg-black/40 backdrop-blur-sm border-2 border-[#ffc107]/40 hover:border-[#ffc107] transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,193,7,0.35)]">
                      <span 
                        className="text-lg md:text-xl text-white font-light tracking-wide whitespace-nowrap"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {company.name}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Partner Count Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-[#ffc107]/40 hover:border-[#ffc107] transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,193,7,0.3)]">
              <Building2 className="w-4 h-4 text-[#ffc107]" />
              <span className="text-sm font-light tracking-wide text-white/80">
                <span className="font-normal text-[#ffc107]">1000+</span> INDUSTRY PARTNERS
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;