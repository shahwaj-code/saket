import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Play, X, Filter, CheckCircle, Sparkles, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

// Real student works from Design Engine
const studentWorks = [
  {
    id: 1,
    slug: "3d-character-model",
    title: "3D Character Design",
    category: "VFX",
    skill: "3D Modeler",
    student: "Arjun Mehta",
    company: "Red Chillies",
    tools: ["Maya", "ZBrush", "Substance Painter"],
    type: "image",
    placementVerified: true,
    featured: true,
    image: "https://design-engine.io/img_bank/student_work1.webp",
  },
  {
    id: 2,
    slug: "product-visualization",
    title: "Product Visualization",
    category: "VFX",
    skill: "3D Artist",
    student: "Priya Singh",
    company: "DNEG",
    tools: ["Cinema 4D", "Octane", "Photoshop"],
    type: "image",
    placementVerified: true,
    featured: false,
    image: "https://design-engine.io/img_bank/student_work2.webp",
  },
  {
    id: 3,
    slug: "brand-identity",
    title: "Brand Identity System",
    category: "UI/UX",
    skill: "UI Designer",
    student: "Rahul Kumar",
    company: "Flipkart",
    tools: ["Figma", "Illustrator", "Photoshop"],
    type: "image",
    placementVerified: true,
    featured: true,
    image: "https://design-engine.io/img_bank/student_work3.webp",
  },
  {
    id: 4,
    slug: "motion-reel",
    title: "Motion Graphics Reel",
    category: "Motion Graphics",
    skill: "Motion Designer",
    student: "Sneha Patel",
    company: "Red Chillies",
    tools: ["After Effects", "Cinema 4D", "Premiere"],
    type: "video",
    placementVerified: true,
    featured: false,
    image: "https://design-engine.io/img_bank/student_work5.webp",
  },
  {
    id: 5,
    slug: "environment-design",
    title: "Environment Art",
    category: "VFX",
    skill: "Environment Artist",
    student: "Vikram Sharma",
    company: "Ubisoft",
    tools: ["Unreal Engine", "Blender", "Substance"],
    type: "image",
    placementVerified: true,
    featured: true,
    image: "https://design-engine.io/img_bank/student_work6.webp",
  },
  {
    id: 6,
    slug: "ai-concept-art",
    title: "AI Concept Art",
    category: "AI Art",
    skill: "AI Artist",
    student: "Ananya Gupta",
    company: "",
    tools: ["Midjourney", "Stable Diffusion", "Photoshop"],
    type: "image",
    placementVerified: false,
    featured: false,
    image: "https://design-engine.io/img_bank/student_work7.webp",
  },
  {
    id: 7,
    slug: "game-assets",
    title: "Game Asset Design",
    category: "VFX",
    skill: "Game Artist",
    student: "Karan Verma",
    company: "EA Games",
    tools: ["Maya", "Substance", "Unreal Engine"],
    type: "image",
    placementVerified: true,
    featured: false,
    image: "https://design-engine.io/img_bank/student_work8.webp",
  },
  {
    id: 8,
    slug: "social-media-design",
    title: "Social Media Campaign",
    category: "UI/UX",
    skill: "Graphic Designer",
    student: "Neha Agarwal",
    company: "",
    tools: ["Photoshop", "Illustrator", "Figma"],
    type: "image",
    placementVerified: false,
    featured: false,
    image: "https://design-engine.io/img_bank/student_work9.webp",
  },
  {
    id: 9,
    slug: "vfx-compositing",
    title: "VFX Compositing",
    category: "VFX",
    skill: "VFX Compositor",
    student: "Amit Patel",
    company: "Prime Focus",
    tools: ["Nuke", "After Effects", "Houdini"],
    type: "video",
    placementVerified: true,
    featured: true,
    image: "https://design-engine.io/img_bank/student_work10.webp",
  },
  {
    id: 10,
    slug: "architectural-viz",
    title: "Architectural Visualization",
    category: "VFX",
    skill: "Arch Viz Artist",
    student: "Riya Sharma",
    company: "Foster + Partners",
    tools: ["3ds Max", "V-Ray", "Photoshop"],
    type: "image",
    placementVerified: true,
    featured: false,
    image: "https://design-engine.io/img_bank/student_work11.webp",
  },
];
const categories = ["All", "VFX", "UI/UX", "AI Art", "Motion Graphics"];

interface WorkCardProps {
  work: typeof studentWorks[0];
  index: number;
  onClick: () => void;
}

const WorkCard = ({ work, index, onClick }: WorkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid mb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Featured Badge */}
      {work.featured && (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-neon-orange to-neon-pink text-white text-xs font-bold shadow-neon"
        >
          <Award className="w-3 h-3" />
          Featured
        </motion.div>
      )}

      {/* Placement Verified Badge */}
      {work.placementVerified && !work.featured && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neon-green/90 text-white text-xs font-medium backdrop-blur-sm border border-[#ffc107]/30">
          <CheckCircle className="w-3 h-3 text-[#ffc107]" />
          Placed
        </div>
      )}

      {/* Image with Zoom Effect */}
      <div className="aspect-auto overflow-hidden rounded-2xl">
        <motion.img
          src={work.image}
          alt={work.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.15 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Glass Overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent flex flex-col justify-end p-5"
      >
        <motion.div
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Category Badge */}
          <span className="inline-flex items-center gap-1 text-xs font-bold text-neon-cyan mb-2">
            <Sparkles className="w-3 h-3 text-[#ffc107]" />
            {work.category}
          </span>
          
          <h3 className="text-lg font-bold mb-1 text-white">{work.title}</h3>
          
          <div className="flex items-center gap-2 mb-3">
            <p className="text-sm text-muted-foreground">by {work.student}</p>
            {work.company && (
              <>
                <span className="text-muted-foreground">•</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-neon-purple/20 text-neon-purple font-medium border border-[#ffc107]/20">
                  @ {work.company}
                </span>
              </>
            )}
          </div>
          
          {/* Tools Used */}
          <div className="flex flex-wrap gap-1">
            {work.tools.slice(0, 3).map((tool, i) => (
              <span
                key={i}
                className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/80 backdrop-blur-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.button
          initial={false}
          animate={{ 
            scale: isHovered ? 1 : 0.8,
            opacity: isHovered ? 1 : 0 
          }}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan flex items-center justify-center shadow-neon border border-transparent hover:border-[#ffc107]/50 transition-colors duration-300"
        >
          {work.type === "video" ? (
            <Play className="w-4 h-4 text-white ml-0.5" />
          ) : (
            <ExternalLink className="w-4 h-4 text-white" />
          )}
        </motion.button>
      </motion.div>

      {/* Glow border on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ 
          boxShadow: isHovered 
            ? "0 0 30px rgba(255, 193, 7, 0.4), inset 0 0 0 1px rgba(255, 193, 7, 0.3)" 
            : "0 0 0 rgba(255, 193, 7, 0), inset 0 0 0 0px rgba(255, 193, 7, 0)"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// Lightbox Component
const Lightbox = ({ 
  work, 
  onClose 
}: { 
  work: typeof studentWorks[0]; 
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-3xl glass-card border border-[#ffc107]/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors border border-[#ffc107]/30"
        >
          <X className="w-5 h-5 text-[#ffc107]" />
        </button>

        {/* Image */}
        <img
          src={work.image}
          alt={work.title}
          className="w-full h-auto max-h-[60vh] object-contain bg-muted rounded-t-3xl"
        />

        {/* Info Panel */}
        <div className="p-6 bg-card/80 backdrop-blur-sm border-t border-[#ffc107]/20">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 text-neon-cyan text-sm font-medium border border-[#ffc107]/20">
                  {work.category}
                </span>
                {work.placementVerified && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-neon-green/20 text-neon-green text-sm font-medium border border-[#ffc107]/20">
                    <CheckCircle className="w-3.5 h-3.5 text-[#ffc107]" />
                    Placed at {work.company}
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-1">{work.title}</h2>
              <p className="text-muted-foreground">by {work.student} • {work.skill}</p>
            </div>
            <Link to={`/portfolio/${work.slug}`}>
              <Button className="neon-button text-white border border-transparent hover:border-[#ffc107]/50 transition-colors duration-300">
                View Full Case Study
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Tools */}
          <div className="mt-4 pt-4 border-t border-[#ffc107]/20">
            <p className="text-sm text-muted-foreground mb-2">Tools Used:</p>
            <div className="flex flex-wrap gap-2">
              {work.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full bg-secondary text-sm font-medium border border-transparent hover:border-[#ffc107]/30 transition-colors duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StudentGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedWork, setSelectedWork] = useState<typeof studentWorks[0] | null>(null);

  const filteredWorks = activeFilter === "All" 
    ? studentWorks 
    : studentWorks.filter(w => w.category === activeFilter);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-neon-purple/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-neon-cyan/15 rounded-full blur-3xl"
      />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border border-[#ffc107]/30"
          >
            <Sparkles className="w-4 h-4 text-[#ffc107]" />
            <span className="text-sm font-medium gradient-text">Student Showcase</span>
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Creative <span className="gradient-text">Masterpieces</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore stunning work from our alumni—3D renders, UI designs, 
            motion graphics, and AI-generated art. All industry-ready! 🚀
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-10 flex-wrap"
        >
          <Filter className="w-4 h-4 text-[#ffc107] mr-2 hidden sm:block" />
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-neon border-transparent"
                  : "bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-foreground border-[#ffc107]/20 hover:border-[#ffc107]/40"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          <AnimatePresence>
            {filteredWorks.map((work, index) => (
              <WorkCard 
                key={work.id} 
                work={work} 
                index={index}
                onClick={() => setSelectedWork(work)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/portfolio">
            <Button className="neon-button text-white border border-transparent hover:border-[#ffc107]/50 transition-colors duration-300" size="lg">
              View Full Portfolio Gallery
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button variant="outline" size="lg" className="border-[#ffc107]/30 hover:bg-[#ffc107]/10">
              Browse Job-Ready Portfolios
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedWork && (
          <Lightbox work={selectedWork} onClose={() => setSelectedWork(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default StudentGallery;