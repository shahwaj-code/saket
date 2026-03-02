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
    description: "Get your portfolio reviewed by industry experts from DNEG, Technicolor, and Prime Focus.",
    stats: "500+ Reviews/Month",
    color: "from-neon-purple to-[#4361EE]",
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    description: "Dedicated placement cell with direct connections to 1000+ hiring partners across India.",
    stats: "95% Placement Rate",
    color: "from-neon-cyan to-neon-green",
  },
  {
    icon: Users,
    title: "Mock Interviews",
    description: "Practice with HR professionals and technical experts to ace your interviews.",
    stats: "3 Rounds Prep",
    color: "from-[#4361EE] to-neon-cyan",
  },
  {
    icon: Building2,
    title: "Industry Internships",
    description: "Get hands-on experience with paid internships at top studios during your course.",
    stats: "6-Month Programs",
    color: "from-neon-orange to-neon-pink",
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
  { value: "₹12L", label: "Highest Package", icon: Star },
  { value: "100%*", label: "Internship Guarantee", icon: Target },
  { value: "1000+", label: "Hiring Partners", icon: Building2 },
  { value: "95%", label: "Placement Rate", icon: GraduationCap },
];

const CareerSupportSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <section id="careers" className="py-20 md:py-32 relative overflow-hidden">
      {/* Premium dark background */}
      <div className="absolute inset-0 bg-[#030306]" />
      
      {/* Gradient mesh with amber glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-cyan/15 rounded-full blur-[100px]" />
        {/* Amber glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ffc107]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6"
          >
            <Rocket className="w-4 h-4 text-[#ffc107]" />
            <span className="text-sm font-medium text-white/80">Your Career Partner</span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="text-white">Career </span>
            <span className="bg-gradient-to-r from-[#ffc107] via-[#ffc107] to-[#ffc107] bg-clip-text text-transparent">Support</span>
            <span className="text-white"> & Placement</span>
          </h2>
          <p className="text-white/50 text-lg">
            We don't just teach—we launch careers. Our dedicated team ensures you land your dream job.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-center group hover:border-white/20 transition-all"
            >
              <metric.icon className="w-8 h-8 mx-auto mb-3 text-[#ffc107]" />
              <div className="text-3xl md:text-4xl font-bold mb-1">
                <span className="bg-gradient-to-r from-white to-[#ffc107] bg-clip-text text-transparent">{metric.value}</span>
              </div>
              <div className="text-sm text-white/50">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {careerFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-6 md:p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.05]">
                {/* Gradient glow */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative flex items-start gap-5">
                  {/* Icon with amber color */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-[#ffc107]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{feature.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-[#ffc107] text-black`}>
                        {feature.stats}
                      </span>
                    </div>
                    <p className="text-white/50">{feature.description}</p>
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
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 border border-white/10 mb-16 overflow-hidden"
        >
          {/* Amber accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffc107] to-transparent" />
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>
            What's Included in Career Support
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "1-on-1 Portfolio Review Sessions",
              "Resume & Cover Letter Building",
              "LinkedIn Profile Optimization",
              "Technical Interview Preparation",
              "HR Round Mock Interviews",
              "Job Portal Access (1000+ Companies)",
              "Industry Networking Events",
              "Alumni Mentorship Program",
              "Lifetime Career Support",
              "DE Student App\nAccess lessons, notes, exams, and certifications anytime, anywhere.",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-white/70"
              >
                <CheckCircle className="w-5 h-5 text-[#ffc107] flex-shrink-0" />
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
            size="lg"
            onClick={() => setShowEnquiry(true)}
            className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold rounded-full px-8 shadow-neon hover:shadow-neon-lg transition-all relative overflow-hidden group"
          >
            {/* Amber shine effect */}
            <div className="absolute inset-0 bg-[#ffc107] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <Rocket className="w-5 h-5 mr-2 text-[#ffc107]" />
            Start Your Career Journey
            <ArrowRight className="w-5 h-5 ml-2 text-[#ffc107] group-hover:translate-x-1 transition-all" />
          </Button>
        </motion.div>
      </div>

      <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </section>
  );
};

export default CareerSupportSection;