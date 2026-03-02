import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play, X, ExternalLink, Award, User, Briefcase, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const studentReels = [
  {
    id: 1,
    title: "3D Character Animation Reel",
    student: "Arjun Mehta",
    category: "Animation",
    thumbnail: "https://design-engine.io/img_bank/student_work1.webp",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:45",
    featured: true,
  },
  {
    id: 2,
    title: "VFX Compositing Showreel",
    student: "Sneha Patel",
    category: "VFX",
    thumbnail: "https://design-engine.io/img_bank/student_work5.webp",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:12",
    featured: true,
  },
  {
    id: 3,
    title: "Motion Graphics Portfolio",
    student: "Rahul Kumar",
    category: "Motion Graphics",
    thumbnail: "https://design-engine.io/img_bank/student_work3.webp",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:30",
    featured: false,
  },
  {
    id: 4,
    title: "Game Environment Art",
    student: "Priya Singh",
    category: "Game Design",
    thumbnail: "https://design-engine.io/img_bank/student_work6.webp",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "4:00",
    featured: true,
  },
  {
    id: 5,
    title: "UI/UX Design Showcase",
    student: "Vikram Sharma",
    category: "UI/UX",
    thumbnail: "https://design-engine.io/img_bank/student_work9.webp",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "1:55",
    featured: false,
  },
  {
    id: 6,
    title: "Architectural Visualization",
    student: "Ananya Gupta",
    category: "VFX",
    thumbnail: "https://design-engine.io/img_bank/student_work11.webp",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:45",
    featured: false,
  },
];

const VideoShowcaseSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<typeof studentReels[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="showcase" className="py-20 md:py-32 relative overflow-hidden">
      {/* Premium dark background */}
      <div className="absolute inset-0 bg-[#030306]" />
      
      {/* Gradient orbs with amber accent */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-neon-purple/15 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-[80px]"
      />
      {/* Amber glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffc107]/5 rounded-full blur-[120px]"
      />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-[#ffc107]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#ffc107]" />
            <span className="text-sm font-medium text-white/80">Student Work</span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="text-white">Animation </span>
            <span className="bg-gradient-to-r from-[#ffc107] via-[#ffc107] to-[#ffc107] bg-clip-text text-transparent">Showreels</span>
          </h2>
          <p className="text-white/50 text-lg">
            Watch industry-ready work from our students now working at top studios worldwide
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {studentReels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(reel.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedVideo(reel)}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-500 group-hover:border-[#ffc107]/30">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredId === reel.id ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030306] via-black/20 to-transparent" />
                  
                  {/* Play Button */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ opacity: hoveredId === reel.id ? 1 : 0.7 }}
                  >
                    <motion.div
                      animate={{ scale: hoveredId === reel.id ? 1.1 : 1 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan flex items-center justify-center shadow-neon border border-transparent hover:border-[#ffc107]/50 transition-colors duration-300"
                    >
                      <Play className="w-6 h-6 text-[#ffc107] ml-1" fill="#ffc107" />
                    </motion.div>
                  </motion.div>

                  {/* Featured Badge */}
                  {reel.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ffc107] text-black text-xs font-bold border border-[#ffc107]/50">
                      <Award className="w-3 h-3 text-black" />
                      Featured
                    </div>
                  )}

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-xs text-white font-medium border border-[#ffc107]/20">
                    {reel.duration}
                  </div>

                  {/* Category */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs text-[#ffc107] font-medium border border-[#ffc107]/20">
                    {reel.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {reel.title}
                  </h3>
                  <div className="flex items-center text-sm">
                    <div className="flex items-center gap-2 text-white/50">
                      <User className="w-4 h-4 text-[#ffc107]" />
                      {reel.student}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/portfolio">
            <Button 
              size="lg"
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#ffc107]/30 text-white font-semibold rounded-full px-8 group transition-all duration-300"
            >
              View Full Portfolio
              <ExternalLink className="w-4 h-4 ml-2 text-[#ffc107] group-hover:translate-x-1 transition-all" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black border border-[#ffc107]/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-transparent hover:border-[#ffc107]/30"
              >
                <X className="w-6 h-6 text-[#ffc107]" />
              </button>

              {/* Video Player Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-20 h-20 text-[#ffc107] mx-auto mb-4" fill="#ffc107" />
                  <p className="text-white/50 text-lg">{selectedVideo.title}</p>
                  <p className="text-white/30">by {selectedVideo.student}</p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffc107] to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoShowcaseSection;