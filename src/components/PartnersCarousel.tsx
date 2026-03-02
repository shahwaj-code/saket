import { motion } from "framer-motion";
import { Building2, TrendingUp, Award, Users, Star, Sparkles } from "lucide-react";

// Hiring Partners from Design Engine
const hiringPartners = [
  { name: "Spyne", logo: "https://design-engine.io/img_bank/spyne_logo.webp" },
  { name: "Hindustan Times", logo: "https://design-engine.io/img_bank/hindustan.webp" },
  { name: "Blinkit", logo: "https://design-engine.io/img_bank/blinkit.webp" },
  { name: "Dropbox", logo: "https://design-engine.io/img_bank/dropbox.webp" },
  { name: "Shopify", logo: "https://design-engine.io/img_bank/shopifyy.webp" },
  { name: "GitHub", logo: "https://design-engine.io/img_bank/github_logo.webp" },
  { name: "Stripe", logo: "https://design-engine.io/img_bank/strip.webp" },
  { name: "Care Health", logo: "https://design-engine.io/img_bank/care_health_insurance.webp" },
  { name: "Mobisoft Labs", logo: "https://design-engine.io/img_bank/mobisoft_labs.webp" },
  { name: "29 Media", logo: "https://design-engine.io/img_bank/29_media.webp" },
  { name: "Ken Research", logo: "https://design-engine.io/img_bank/ken_reasearch.webp" },
  { name: "BE Digitech", logo: "https://design-engine.io/img_bank/be_digitech.webp" },
];

// Tech Giants & IT Partners
const techPartners = [
  { name: "Dell", logo: "https://design-engine.io/img_bank/Dell.webp" },
  { name: "HP", logo: "https://design-engine.io/img_bank/hp.webp" },
  { name: "Samsung", logo: "https://design-engine.io/img_bank/samsung.webp" },
  { name: "Sony", logo: "https://design-engine.io/img_bank/sony.webp" },
  { name: "Nvidia", logo: "https://design-engine.io/img_bank/nvidia.webp" },
  { name: "AMD", logo: "https://design-engine.io/img_bank/amd.webp" },
  { name: "Intel", logo: "https://design-engine.io/img_bank/intel.webp" },
  { name: "Deloitte", logo: "https://design-engine.io/img_bank/deloite.webp" },
  { name: "Accenture", logo: "https://design-engine.io/img_bank/accenturee.webp" },
  { name: "Infosys", logo: "https://design-engine.io/img_bank/infosys.webp" },
  { name: "TCS", logo: "https://design-engine.io/img_bank/tcs.webp" },
  { name: "Wipro", logo: "https://design-engine.io/img_bank/wipro.webp" },
  { name: "HCL", logo: "https://design-engine.io/img_bank/hcl.webp" },
  { name: "Capgemini", logo: "https://design-engine.io/img_bank/cap_gemeni.webp" },
  { name: "Tech Mahindra", logo: "https://design-engine.io/img_bank/tech_mahindra.webp" },
];

const stats = [
  { 
    value: "95%", 
    label: "Placement Rate", 
    icon: TrendingUp, 
    color: "from-neon-green to-neon-cyan",
    description: "of students placed within 3 months"
  },
  { 
    value: "100%*", 
    label: "Internship Guarantee", 
    icon: Award, 
    color: "from-neon-purple to-neon-pink",
    description: "industry-leading salaries"
  },
  { 
    value: "₹24 LPA", 
    label: "Highest Package", 
    icon: Star, 
    color: "from-neon-orange to-neon-pink",
    description: "top performer achievement"
  },
  { 
    value: "1000+", 
    label: "Hiring Partners", 
    icon: Building2, 
    color: "from-neon-cyan to-neon-purple",
    description: "companies recruiting from us"
  },
];

const PartnersCarousel = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Animated orbs */}
      <motion.div
        animate={{ 
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-neon-cyan/20 to-neon-green/20 rounded-full blur-3xl"
      />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border border-[#ffc107]/30"
          >
            <Users className="w-4 h-4 text-[#ffc107]" />
            <span className="text-sm font-medium gradient-text">1000+ Hiring Partners</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Alumni Work At{" "}
            <span className="gradient-text">Top Companies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From animation studios to tech giants, our students are making their mark everywhere 🚀
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <div className="glass-card p-6 text-center h-full relative overflow-hidden border border-transparent group-hover:border-[#ffc107]/50 transition-colors duration-300">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <motion.div 
                  className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} p-0.5`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#ffc107]" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="text-3xl md:text-4xl font-bold gradient-text mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Categories Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffc107]" />
            Hiring Partners & Tech Giants
            <Sparkles className="w-4 h-4 text-[#ffc107]" />
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-neon-cyan/30 to-transparent" />
        </motion.div>

        {/* First Carousel - Hiring Partners */}
        <div className="relative mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

          <div className="flex overflow-hidden py-4">
            <motion.div
              animate={{ x: [0, -1728] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex gap-6 items-center"
            >
              {[...hiringPartners, ...hiringPartners].map((partner, index) => (
                <motion.div
                  key={`hiring-${partner.name}-${index}`}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="flex-shrink-0 h-20 w-36 px-4 py-3 rounded-2xl glass-card flex items-center justify-center group cursor-pointer relative overflow-hidden border border-transparent hover:border-[#ffc107]/50 transition-colors duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/0 to-neon-cyan/0 group-hover:from-neon-purple/10 group-hover:to-neon-cyan/10 transition-all duration-300" />
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Second Carousel - Tech Giants (reverse direction) */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

          <div className="flex overflow-hidden py-4">
            <motion.div
              animate={{ x: [-2160, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
              className="flex gap-6 items-center"
            >
              {[...techPartners, ...techPartners].map((partner, index) => (
                <motion.div
                  key={`tech-${partner.name}-${index}`}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="flex-shrink-0 h-16 w-32 px-3 py-2 rounded-xl glass-card flex items-center justify-center group cursor-pointer relative overflow-hidden border border-transparent hover:border-[#ffc107]/50 transition-colors duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 to-neon-purple/0 group-hover:from-neon-cyan/10 group-hover:to-neon-purple/10 transition-all duration-300" />
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-10 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="glass-card p-6 md:p-8 text-center relative overflow-hidden border border-[#ffc107]/20">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-transparent to-neon-cyan/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full" />
            
            <div className="relative z-10">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg md:text-xl font-medium text-foreground mb-6 italic leading-relaxed">
                "Design Engine students stand out for their industry-ready skills and creative problem-solving abilities. 
                They're exactly what modern studios need."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan flex items-center justify-center text-white font-bold text-lg shadow-neon">
                  HR
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground">HR Director</div>
                  <div className="text-sm text-muted-foreground">Leading Animation Studio</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersCarousel;