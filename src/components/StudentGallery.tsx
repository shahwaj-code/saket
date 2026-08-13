import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Play, X, Filter, CheckCircle, Sparkles, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

// Real student works from Design Engine
const studentWorks = [
  // ... (keep all studentWorks data as-is)
];

const categories = ["All", "VFX", "UI/UX", "AI Art", "Motion Graphics"];

interface WorkCardProps {
  work: typeof studentWorks[0];
  index: number;
}

const WorkCard = ({ work, index }: WorkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      className="relative group overflow-hidden rounded-2xl cursor-default break-inside-avoid mb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Placement Verified Badge */}
      {work.placementVerified && !work.featured && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ffc107]/30 text-black text-xs font-medium backdrop-blur-sm border border-[#ffc107]/20">
          <CheckCircle className="w-3 h-3 text-[#ffc107]" />
          Placed
        </div>
      )}

      {/* Image */}
      <div className="aspect-video overflow-hidden rounded-2xl">
        <motion.img
          src={work.image}
          alt={work.title}
          loading="lazy"
          decoding="async"
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
        className="absolute inset-0 bg-gradient-to-t from-[#030306] via-[#030306]/90 to-transparent flex flex-col justify-end p-5"
      >
        <motion.div
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Category Badge */}
          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ffc107] mb-2">
            <Sparkles className="w-3 h-3 text-[#ffc107]" />
            {work.category}
          </span>
          
          <h3 className="text-lg font-bold mb-1 text-white">{work.title}</h3>
          
          <div className="flex items-center gap-2 mb-3">
            <p className="text-muted-foreground">by {work.student}</p>
            {work.company && (
              <>
                <span className="text-muted-foreground">•</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#ffc107]/20 text-black font-medium border border-[#ffc107]/20">
                  @ {work.company}
                </span>
              </>
            )}
          </div>
          
          {/* Tools */}
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
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-r from-[#ffc107] to-[#ffb300] flex items-center justify-center shadow-[0_0_10px_rgba(255,193,7,0.5)] border border-transparent hover:border-[#ffc107]/50 transition-colors duration-300"
        >
          {work.type === "video" ? (
            <Play className="w-4 h-4 text-black ml-0.5" />
          ) : (
            <ExternalLink className="w-4 h-4 text-black" />
          )}
        </motion.button>
      </motion.div>

      {/* Glow border */}
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
const Lightbox = ({ work, onClose }: { work: typeof studentWorks[0]; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#030306]/95 backdrop-blur-xl p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-3xl bg-[#0a0a0f] border border-[#ffc107]/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#030306]/80 backdrop-blur-sm flex items-center justify-center hover:bg-[#030306]/90 border border-[#ffc107]/30"
        >
          <X className="w-5 h-5 text-[#ffc107]" />
        </button>

        {/* Image */}
        <img
          src={work.image}
          alt={work.title}
          className="w-full h-auto max-h-[60vh] object-contain bg-[#0a0a0f] rounded-t-3xl"
        />

        {/* Info Panel */}
        <div className="p-6 bg-[#0a0a0f]/80 backdrop-blur-sm border-t border-[#ffc107]/20">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#ffc107]/20 text-black text-sm font-medium border border-[#ffc107]/20">
                  {work.category}
                </span>
                {work.placementVerified && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#ffc107]/20 text-black text-sm font-medium border border-[#ffc107]/20">
                    <CheckCircle className="w-3.5 h-3.5 text-[#ffc107]" />
                    Placed at {work.company}
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-1 text-white">{work.title}</h2>
              <p className="text-muted-foreground">by {work.student} • {work.skill}</p>
            </div>
            <Link to={`/portfolio/${work.slug}`}>
              <Button className="bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-black border border-transparent hover:border-[#ffc107]/50 transition-colors duration-300">
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
                  className="px-3 py-1.5 rounded-full bg-[#030306]/50 text-sm font-medium border border-transparent hover:border-[#ffc107]/30 transition-colors duration-300"
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

  const filteredWorks = activeFilter === "All" 
    ? studentWorks 
    : studentWorks.filter(w => w.category === activeFilter);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#030306]">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0f]/50 mb-6 border border-[#ffc107]/30"
          >
            <Sparkles className="w-4 h-4 text-[#ffc107]" />
            <span className="text-sm font-medium text-[#ffc107]">Student Showcase</span>
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Creative <span className="text-[#ffc107]">Masterpieces</span>
          </h2>
          <p className="text-muted-foreground text-lg text-gray-300">
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
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-black shadow-[0_0_10px_rgba(255,193,7,0.5)] border-transparent"
                  : "bg-[#0a0a0f]/80 text-gray-300 hover:bg-[#0a0a0f] hover:text-[#ffc107] border border-[#ffc107]/20 hover:border-[#ffc107]/40"
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
            <Button className="bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-black border border-transparent hover:border-[#ffc107]/50 transition-colors duration-300" size="lg">
              View Full Portfolio Gallery
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button variant="outline" size="lg" className="border-[#ffc107]/30 hover:bg-[#ffc107]/10 text-[#ffc107]">
              Browse Job-Ready Portfolios
            </Button>
          </Link>
        </motion.div>
      </div>

    </section>
  );
};

export default StudentGallery;