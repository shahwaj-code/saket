import { motion } from "framer-motion";
import { 
  Briefcase, 
  Users, 
  FileCheck, 
  Building2, 
  GraduationCap, 
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Target
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

const careerFeatures = [
  {
    icon: FileCheck,
    title: "Portfolio Reviews",
    description: "Get your industry showreel evaluated by Delhi's elite design mentors every 60 days.",
    stats: "500+ Reviews/60 Days",
    color: "from-[#ffc107] to-[#ffb300]",
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    description: "Dedicated placement cell with direct connections to 1000+ hiring partners across India.",
    stats: "100%* Live Campus Drives",
    color: "from-[#ffd54f] to-[#ffc107]",
  },
  {
    icon: Users,
    title: "Mock Interviews",
    description: "Practice with local corporate HR managers and lead technical directors to ace actual studio rounds.",
    stats: "3 Rounds Prep",
    color: "from-[#ffb300] to-[#ffd54f]",
  },
  {
    icon: Building2,
    title: "Industry Internships",
    description: "Gain industry experience through structured paid apprenticeships at premium media firms during your batch.",
    stats: "6-Month Programs",
    color: "from-[#ffc107] to-[#ffd54f]",
  },
  
];

const placementPartners = [
  { name: "DNEG", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DNEG_Logo.svg/200px-DNEG_Logo.svg.png" },
  { name: "Red Chillies", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Technicolor_logo.svg/200px-Technicolor_logo.svg.png" },
  { name: "Prime Focus", logo: "https://www.primefocusworld.com/images/pfw-logo.png" },
  { name: "Framestore", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Framestore_logo.svg/200px-Framestore_logo.svg.png" },
  { name: "MPC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/MPC_logo.svg/200px-MPC_logo.svg.png" },
  { name: "Red Chillies VFX", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Red_Chillies_Entertainment_logo.svg/200px-Red_Chillies_Entertainment_logo.svg.png" },
];

const successMetrics = [
  { value: "₹12L", label: "Top Studio Offer", icon: Star },
  { value: "100%*", label: "Delhi Internship Aid", icon: Target },
  { value: "1000+", label: "Hiring Network", icon: Building2 },
  { value: "95%", label: "Placement Rate", icon: GraduationCap },
];

const CareerSupportSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <section id="careers" className="py-12 md:py-20 relative overflow-hidden">
      {/* Premium dark background */}
      <div className="absolute inset-0 bg-[#030306]" />
      
      {/* Golden Orbs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#ffc107]/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ffd54f]/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ffb300]/10 rounded-full blur-[100px]"
      />

      {/* 3D Grid Effect */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,193,7,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,193,7,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "perspective(500px) rotateX(60deg)"
          }}
        />
      </div>

      {/* Golden Gradient Overlay */}
      <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-[#ffc107]/20 via-transparent to-[#ffd54f]/10" />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-[#ffc107] mb-5"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="w-3.5 h-3.5 text-[#ffc107]" />
            </motion.div>
            <span className="text-xs font-medium text-white/90">Your Delhi Career Partner</span>
          </motion.div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Delhi Campus Placements
          </h2>
          <p className="text-white/60 text-sm md:text-lg px-4">
            We don't just teach—we launch AVGC careers. Our specialized local team connects you to Delhi NCR's top studios.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-12 md:mb-16"
        >
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="relative px-2 py-3 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-xl border border-[#ffc107]/10 text-center group hover:border-[#ffc107]/30 transition-all duration-300"
            >
              <metric.icon className="w-5 h-5 sm:w-8 sm:h-8 mx-auto mb-1.5 text-[#ffc107]" />

              <div className="text-base sm:text-2xl md:text-3xl font-bold mb-0.5 bg-gradient-to-r from-[#ffc107] to-[#ffb300] bg-clip-text text-transparent whitespace-nowrap">
                {metric.value}
              </div>

              <div className="text-[10px] sm:text-sm text-white/60 leading-tight">
                {metric.label}
              </div>
            </motion.div>
          ))} 
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {careerFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-4 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-[#ffc107]/10 overflow-hidden transition-all duration-500 group-hover:border-[#ffc107]/30 group-hover:bg-white/10 group-hover:shadow-[0_0_30px_rgba(255,193,7,0.15)]">
                {/* Gradient glow */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-5">
                  {/* Icon with gold gradient */}
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg border border-[#ffc107]/30`}>
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h3
                        className="text-base sm:text-lg md:text-xl font-semibold sm:font-bold text-white group-hover:text-[#ffc107] transition-colors"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {feature.title}
                      </h3>

                      <span className="self-start sm:self-auto px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-black whitespace-nowrap">
                        {feature.stats}
                      </span>
                    </div>

                    <p className="text-white/60 group-hover:text-white/80 transition-colors text-xs sm:text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What You Get */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-5 md:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#ffc107]/5 via-[#ffd54f]/5 to-[#ffb300]/5 border border-[#ffc107]/20 mb-12 md:mb-16 overflow-hidden"
        >
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffc107] to-[#ffd54f] to-transparent" />
          
          <h3 className="text-xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>
            What's Included in Career Support
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              "1-on-1 Studio Portfolio Review",
              "ATS-Friendly Resume Building",
              "LinkedIn Profile Optimization",
              "Studio Technical Interview Prep",
              "Corporate HR Mock Interviews",
              "Exclusive Job Portal Access",
              "Delhi NCR Studio Networking",
              "Design Engine Alumni Mentorship",
              "Lifetime Career Placement Aid",
              "Placement Alert Student App",
              "Creative Soft Skills Workshops",
              "Live Production House Masterclasses"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-white/80 hover:text-[#ffc107] transition-colors text-xs sm:text-sm"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc107] flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
  size="default"
  onClick={() => setShowEnquiry(true)}
  className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-semibold rounded-full px-4 py-2 text-sm shadow-md hover:shadow-[0_0_20px_rgba(255,193,7,0.4)] transition-all relative overflow-hidden group"
>
  {/* Gold shine effect */}
  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
  <Rocket className="w-3 h-3 mr-1 text-black" />
  Launch Your Creative Journey
  <ArrowRight className="w-3 h-3 ml-1 text-black group-hover:translate-x-1 transition-all" />
</Button>
        </motion.div>
      </div>

      <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </section>
  );
};

export default CareerSupportSection;