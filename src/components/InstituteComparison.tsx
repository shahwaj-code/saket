import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, X, Trophy, Star, Zap, Users, ChevronDown, ChevronUp, Sparkles, Target, Award, Rocket } from "lucide-react";

const comparisonData = [
  {
    feature: "Industry-Ready Curriculum",
    designEngine: true,
    otherInstitutes: "Outdated syllabus",
    icon: Zap,
    category: "education",
  },
  {
    feature: "Live Project Experience",
    designEngine: "10+ Projects",
    otherInstitutes: "2-3 Projects",
    icon: Trophy,
    category: "practical",
  },
  {
    feature: "Placement Rate",
    designEngine: "95%+",
    otherInstitutes: "40-60%",
    icon: Users,
    category: "career",
  },
  {
    feature: "Average Package",
    designEngine: "₹8.5 LPA",
    otherInstitutes: "₹3-4 LPA",
    icon: Star,
    category: "career",
  },
  {
    feature: "Highest Package",
    designEngine: "₹24 LPA",
    otherInstitutes: "₹8-10 LPA",
    icon: Trophy,
    category: "career",
  },
  {
    feature: "AI-Integrated Training",
    designEngine: true,
    otherInstitutes: false,
    icon: Sparkles,
    category: "education",
  },
  {
    feature: "1000+ Hiring Partners",
    designEngine: true,
    otherInstitutes: "Limited Network",
    icon: Users,
    category: "career",
  },
  {
    feature: "Personal Mentorship",
    designEngine: "1:8 Ratio",
    otherInstitutes: "1:30+ Ratio",
    icon: Target,
    category: "education",
  },
  {
    feature: "Industry Experts as Faculty",
    designEngine: true,
    otherInstitutes: "Mostly Academic",
    icon: Award,
    category: "education",
  },
  {
    feature: "Portfolio Building Support",
    designEngine: "Showreel Ready",
    otherInstitutes: "Basic Portfolio",
    icon: Rocket,
    category: "practical",
  },
];

const badges = [
  { icon: "🏆", text: "#1 in North India", color: "from-amber-500 to-orange-500" },
  { icon: "⭐", text: "4.9/5 Rating", color: "from-[#ffc107] to-amber-600" },
  { icon: "🎓", text: "10,000+ Alumni", color: "from-neon-cyan to-neon-green" },
  { icon: "💼", text: "1000+ Partners", color: "from-neon-pink to-neon-purple" },
];

const InstituteComparison = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setExpandedRows(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ffc107]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#ffc107]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.05, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#ffc107]/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-6 border border-[#ffc107]/30"
          >
            <span className="text-2xl">🔥</span>
            <span className="text-sm font-medium text-[#ffc107]">Why We're Different</span>
          </motion.div>
          
          <h2 className="display-medium mb-6">
            <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent">Design Engine</span>{" "}
            <span className="text-white">vs</span>{" "}
            <span className="text-white">Other Institutes</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why thousands of students choose us over traditional institutes. 
            No cap, we're built different fr fr 💯
          </p>
        </motion.div>

        {/* Comparison Table - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden border border-border/50">
            {/* Table Header - Enhanced */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffc107]/20 via-neon-pink/10 to-neon-cyan/20" />
              <div className="relative grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 md:p-6 border-b border-border/30">
                <div className="text-xs sm:text-sm font-medium text-muted-foreground flex items-center gap-1 sm:gap-2">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 hidden sm:block text-[#ffc107]" />
                  <span className="hidden sm:inline">Feature Comparison</span>
                  <span className="sm:hidden">Features</span>
                </div>
                <div className="text-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan shadow-neon"
                  >
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm">Design Engine</span>
                    <span className="text-sm sm:text-lg hidden sm:inline">🚀</span>
                  </motion.div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-muted/50 border border-border/50">
                    <span className="text-foreground/70 font-medium text-[10px] sm:text-xs md:text-sm">Others</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Body - Enhanced Rows */}
            <div className="divide-y divide-border/20">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`relative grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 md:p-6 transition-all duration-300 group cursor-pointer ${
                    hoveredRow === index ? 'bg-gradient-to-r from-[#ffc107]/10 via-transparent to-neon-cyan/10' : 'hover:bg-muted/20'
                  }`}
                  onClick={() => toggleRow(index)}
                >
                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ffc107] to-neon-cyan"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: hoveredRow === index ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Feature Name */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <motion.div 
                      className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#ffc107]/20 to-neon-cyan/20 flex items-center justify-center border border-[#ffc107]/30 shrink-0"
                      animate={{ 
                        scale: hoveredRow === index ? 1.1 : 1,
                        rotate: hoveredRow === index ? [0, -5, 5, 0] : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <row.icon className="w-3 h-3 sm:w-4 md:w-5 sm:h-4 md:h-5 text-[#ffc107]" />
                    </motion.div>
                    <span className="font-medium text-[11px] sm:text-xs md:text-sm lg:text-base group-hover:text-white transition-colors line-clamp-2">
                      {row.feature}
                    </span>
                  </div>

                  {/* Design Engine Value - Enhanced */}
                  <div className="flex items-center justify-center">
                    {typeof row.designEngine === "boolean" ? (
                      row.designEngine ? (
                        <motion.div 
                          className="w-7 h-7 sm:w-8 md:w-10 sm:h-8 md:h-10 rounded-full bg-gradient-to-r from-[#ffc107] to-amber-600 flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Check className="w-3 h-3 sm:w-4 md:w-5 sm:h-4 md:h-5 text-black" />
                        </motion.div>
                      ) : (
                        <div className="w-7 h-7 sm:w-8 md:w-10 sm:h-8 md:h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                          <X className="w-3 h-3 sm:w-4 md:w-5 sm:h-4 md:h-5 text-destructive" />
                        </div>
                      )
                    ) : (
                      <motion.span 
                        className="px-2 sm:px-3 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full bg-gradient-to-r from-[#ffc107]/30 to-amber-600/30 text-[10px] sm:text-xs md:text-sm font-bold text-white border border-[#ffc107]/50"
                        whileHover={{ scale: 1.05 }}
                      >
                        {row.designEngine}
                      </motion.span>
                    )}
                  </div>

                  {/* Other Institutes Value */}
                  <div className="flex items-center justify-center">
                    {typeof row.otherInstitutes === "boolean" ? (
                      row.otherInstitutes ? (
                        <div className="w-7 h-7 sm:w-8 md:w-10 sm:h-8 md:h-10 rounded-full bg-[#ffc107]/20 flex items-center justify-center">
                          <Check className="w-3 h-3 sm:w-4 md:w-5 sm:h-4 md:h-5 text-[#ffc107]" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 sm:w-8 md:w-10 sm:h-8 md:h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                          <X className="w-3 h-3 sm:w-4 md:w-5 sm:h-4 md:h-5 text-destructive" />
                        </div>
                      )
                    ) : (
                      <span className="px-2 sm:px-3 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full bg-muted/50 text-[10px] sm:text-xs md:text-sm text-muted-foreground border border-border/50 line-clamp-1">
                        {row.otherInstitutes}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA - Enhanced */}
            <div className="relative p-4 sm:p-6 md:p-8 border-t border-border/30 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ffc107]/10 via-neon-pink/5 to-neon-cyan/10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                <div className="text-center md:text-left">
                  <motion.p 
                    className="font-bold text-lg sm:text-xl md:text-2xl mb-0.5 sm:mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    Ready to level up? <span className="text-[#ffc107]">🎮</span>
                  </motion.p>
                  <p className="text-muted-foreground text-sm sm:text-base">Join the winning team, bestie</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 193, 7, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full font-bold text-black text-sm sm:text-base md:text-lg bg-gradient-to-r from-[#ffc107] to-amber-600 hover:from-[#ffc107] hover:to-amber-500 transition-all shadow-lg hover:shadow-[#ffc107]/30"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Start Your Journey"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    Start Your Journey 🚀
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-16"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${badge.color} rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity`} />
              <div className="relative flex items-center gap-3 px-6 py-3 rounded-full glass-card border border-border/50 group-hover:border-white/30 transition-colors">
                <span className="text-2xl">{badge.icon}</span>
                <span className="font-bold text-sm">{badge.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InstituteComparison;