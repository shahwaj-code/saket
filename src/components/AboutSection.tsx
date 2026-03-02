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
      "Every training module integrates cutting-edge Generative AI tools like Midjourney and Leonardo AI.",
  },
  {
    icon: Briefcase,
    title: "Internship & Placement",
    description:
      "1000+ hiring partners with complete placement assistance for all long-term career programs.",
  },
  {
    icon: Zap,
    title: "Portfolio Development",
    description:
      "Industry-standard portfolio support with regular reviews by experts to ensure professional readiness.",
  },
  {
    icon: GraduationCap,
    title: "Global Certifications",
    description:
      "Access to international credentials from Adobe, Autodesk, Google, and Meta beyond our certification.",
  },
  {
    icon: Smartphone,
    title: "DE Student App",
    description:
      "Access lessons, notes, exams, and certifications anytime, anywhere.",
  },
  {
    icon: MessageCircle,
    title: "Communication Masterclass",
    description:
      "Masterclasses in resume building, interviews, and soft-skills development.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-apple-purple/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-apple-blue font-medium mb-4">
              About Design Engine
            </p>

            <h2 className="display-medium mb-6">
              Redefining Creative Education with{" "}
              <span className="gradient-text">Generative AI</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              The Indian AVGC sector is entering a phase of explosive growth
              driven by rising digital consumption across OTT, gaming, and
              social platforms—accelerated further by the rapid adoption of{" "}
              <strong>Generative AI</strong>.
            </p>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              Design Engine solves the talent gap with a future-focused model
              that embeds generative AI courses at the core of every creative
              pathway. With campuses in Varanasi and Gurugram, we create hybrid
              creative technologists—professionals fluent in both artistic craft
              and digital innovation. As India moves toward a $26B AVGC
              ecosystem, the demand for skilled talent continues to outpace
              supply.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "100%*", label: "Internship Guarantee" },
                { value: "₹12 LPA", label: "Highest Package" },
                { value: "1000+", label: "Partners" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Value Cards with icons set to #ffc107 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="apple-card p-6 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-apple-blue/10 to-apple-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6" style={{ color: "#ffc107" }} />
                </div>

                <h3 className="font-semibold mb-2">{value.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
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