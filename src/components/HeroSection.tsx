import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Sparkles, Zap, Rocket, Play, Award, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import BrochureModal from "./BrochureModal";
import EnquiryModal from "./EnquiryModal";

const HeroSection = () => {
  const [showBrochure, setShowBrochure] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Deep dark base with premium grain */}
      <div className="absolute inset-0 bg-[#030306]" />
      
      {/* 3D Grid Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center top',
        }} />
      </div>
      
      {/* Animated gradient orbs - Electric Blue & Neon Purple */}
      <motion.div 
        style={{ y }}
        animate={{ 
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-neon-purple/30 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neon-cyan/25 rounded-full blur-[100px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, 40, 0],
          y: [0, -70, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-[#4361EE]/20 rounded-full blur-[80px]" 
      />

      {/* Cinematic Hero Background */}
      <motion.div 
        style={{ scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://design-engine.io/img_bank/girl.webp" 
          alt="Design Engine Creative Student"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Electric overlay */}
        <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-neon-purple/40 via-transparent to-neon-cyan/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030306] via-[#030306]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030306] via-[#030306]/60 to-transparent" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-neon-cyan"
          style={{
            left: `${5 + i * 5}%`,
            top: `${10 + (i % 7) * 12}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}

      <motion.div style={{ opacity }} className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Premium Badge with #ffc107 thin border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-[#ffc107]">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-4 h-4 text-neon-cyan" />
              </motion.div>
              <span className="text-sm font-medium text-white/90">
                India's Premier Animation & Design Academy
              </span>
              <Award className="w-4 h-4 text-neon-purple" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center mb-6 md:mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              <span className="text-white">Master the Art of</span>
              <br />
              <span className="bg-gradient-to-r from-neon-purple via-[#4361EE] to-neon-cyan bg-clip-text text-transparent">
                Animation & Design
              </span>
              <br />
              <span className="text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                for the Indian Industry
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-4"
          >
            Transform your creative passion into an industry-ready career. Learn from 
            professionals at <span className="text-neon-cyan font-medium">DNEG</span>, 
            <span className="text-neon-purple font-medium"> RED CHILLIES</span> & 
            <span className="text-[#4361EE] font-medium"> Prime Focus</span> veterans.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 mb-12 md:mb-16"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto min-w-[220px] bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold rounded-full text-lg py-6 shadow-neon hover:shadow-neon-lg transition-all duration-300"
                onClick={() => setShowEnquiry(true)}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto min-w-[200px] bg-white/5 backdrop-blur-sm border border-[#ffc107] hover:bg-white/10 hover:border-[#ffc107] font-semibold rounded-full text-lg py-6"
                onClick={() => setShowBrochure(true)}
              >
                <Play className="w-5 h-5 mr-2 text-neon-cyan" />
                Watch Showreel
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Grid with Glassmorphism and #ffc107 thin border */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {[
              { value: "1000+", label: "Industry Partners", icon: Briefcase, color: "from-neon-purple to-[#4361EE]" },
              { value: "100%*", label: "Internship Guarantee", icon: Award, color: "from-neon-cyan to-neon-green" },
              { value: "₹12L", label: "Highest Package", icon: Sparkles, color: "from-neon-orange to-neon-pink" },
              { value: "95%", label: "Placement Rate", icon: Users, color: "from-[#4361EE] to-neon-cyan" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                {/* Glassmorphic card with #ffc107 thin border */}
                <div className="relative p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-[#ffc107] overflow-hidden transition-all duration-300 group-hover:border-[#ffc107] group-hover:bg-white/[0.08]">
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative text-center">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 text-white/40 group-hover:text-white/60 transition-colors" />
                    <div className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-white/50">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      
      <BrochureModal isOpen={showBrochure} onClose={() => setShowBrochure(false)} />
      <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </section>
  );
};

export default HeroSection;