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
      "Every course integrates the latest AI tools into your workflow from day one.",
    color: "from-neon-purple to-neon-pink",
    stat: "10+ AI Tools",
  },
  {
    icon: GraduationCap,
    title: "Expert Mentors",
    description:
      "Learn from professionals with 10+ years experience at top studios.",
    color: "from-neon-cyan to-neon-purple",
    stat: "50+ Experts",
  },
  {
    icon: Briefcase,
    title: "Placement Support",
    description:
      "Dedicated career services with interview prep and portfolio reviews.",
    color: "from-neon-pink to-neon-orange",
    stat: "95% Placed",
  },
  {
    icon: Users,
    title: "Small Batches",
    description:
      "Maximum 15 students per batch for personalized attention.",
    color: "from-neon-green to-neon-cyan",
    stat: "1:8 Ratio",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description:
      "Industry-recognized certificates valued by top employers.",
    color: "from-neon-orange to-neon-pink",
    stat: "Global Certs",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description:
      "Online, offline, or hybrid modes to fit your schedule.",
    color: "from-neon-purple to-neon-cyan",
    stat: "3 Modes",
  },
];

/* ================= DIFFERENTIATORS ================= */

const differentiators = [
  { icon: Sparkles, text: "Live mentorship & interactive doubt sessions" },
  { icon: Target, text: "Real client projects for hands-on experience" },
  { icon: Rocket, text: "Lifetime access to course materials & updates" },
  { icon: Zap, text: "Dedicated placement cell with 200+ partners" },
  { icon: Star, text: "AI tools integrated across all courses" },
  {
    icon: Smartphone,
    text: "DE Student App – Access lessons, notes, exams, and certifications anytime, anywhere.",
  },
];

/* ================= COMPONENT ================= */

const WhyUsSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="container relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-6 border border-neon-cyan/30">
            <Sparkles className="w-4 h-4" style={{ color: "#ffc107" }} />
            <span className="text-neon-cyan font-medium">
              Why Choose Us
            </span>
          </span>

          <h2 className="display-medium mb-6 text-foreground">
            The <span className="gradient-text">Design Engine</span> Advantage
          </h2>

          <p className="text-xl text-foreground/80 leading-relaxed">
            We don't just teach skills—we transform careers with a proven approach.
          </p>
        </motion.div>

        {/* FEATURES GRID with #ffc107 icons and hover glow */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card p-6 rounded-3xl border border-border/50 transition-all duration-300 hover:shadow-[0_0_20px_#ffc107] hover:border-[#ffc107]/50">

                <div className="mb-5">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5`}
                  >
                    <div className="w-full h-full rounded-2xl bg-background/90 flex items-center justify-center">
                      {/* SAME SIZE FOR ALL ICONS - Set to #ffc107 */}
                      <feature.icon className="w-6 h-6" style={{ color: "#ffc107" }} />
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-3 text-foreground">
                  {feature.title}
                </h3>

                <p className="text-foreground/70 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DIFFERENTIATORS with #ffc107 icons */}
        <div className="max-w-4xl mx-auto glass-card p-8 rounded-3xl border border-border/50">
          <h3 className="text-3xl font-bold text-center mb-10">
            What Makes Us Different
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border/30 transition-all duration-300 hover:shadow-[0_0_15px_#ffc107] hover:border-[#ffc107]/30"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 flex items-center justify-center">
                  
                  {/* SAME SIZE FOR ALL ICONS INCLUDING SMARTPHONE - Set to #ffc107 */}
                  <item.icon className="w-12 h-5" style={{ color: "#ffc107" }} />

                </div>
                <span className="text-white font-medium">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Button
              className="neon-button text-white font-bold rounded-full px-10 py-6 text-lg"
              onClick={() => setShowEnquiry(true)}
            >
              <Rocket className="w-5 h-5 mr-2" style={{ color: "#ffc107" }} />
              Start Your Journey 🚀
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