import { motion } from "framer-motion";
import { Cpu, Wand2, Boxes, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const aiTools = [
  {
    name: "Midjourney",
    description: "Generate stunning visuals and concept art in seconds",
    icon: Wand2,
    color: "from-blue-500 to-purple-500",
  },
  {
    name: "Stable Diffusion",
    description: "Open-source AI for unlimited creative possibilities",
    icon: Boxes,
    color: "from-orange-500 to-pink-500",
  },
  {
    name: "Unreal Engine 5",
    description: "Real-time 3D and virtual production workflows",
    icon: Zap,
    color: "from-green-500 to-teal-500",
  },
  {
    name: "ComfyUI & RunwayML",
    description: "Advanced AI pipelines for professional creators",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
  },
];

const benefits = [
  "Hands-on projects with real AI tools",
  "Industry-certified curriculum",
  "Access to premium AI subscriptions",
  "Portfolio-ready AI-generated work",
  "1-on-1 mentorship sessions",
  "Job-ready in 3-6 months",
];

const AIEdgeSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-apple-blue font-medium mb-4">The AI Edge</p>
            <h2 className="display-medium mb-6">
              Learn with cutting-edge AI tools
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We don't just teach design—we integrate cutting-edge AI tools into 
              every course. Graduate with skills traditional institutes can't provide.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-apple-green/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-apple-green" />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="apple" size="lg">
              Download AI Curriculum
            </Button>
          </motion.div>

          {/* Right Content - AI Tools Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {aiTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="apple-card p-6 text-center group"
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIEdgeSection;
