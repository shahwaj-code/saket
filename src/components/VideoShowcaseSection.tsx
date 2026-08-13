import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, ExternalLink, Award, User, Sparkles, Maximize2, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import ResponsiveImage from "./ResponsiveImage";
import { allStudentWork } from "@/data/studentWork";

const StudentWorkShowcase = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const displayedWork = allStudentWork.slice(0, 9);
  const selectedWork = selectedIndex !== null ? displayedWork[selectedIndex] : null;
  const selectedImages = selectedWork ? selectedWork.images ?? [selectedWork.image] : [];

  useEffect(() => {
    if (selectedIndex !== null) {
      setSelectedSlide(0);
    }
  }, [selectedIndex]);

  const handlePrev = () => {
    if (!selectedWork) return;
    setSelectedSlide((prev) =>
      selectedImages.length > 0
        ? prev === 0
          ? selectedImages.length - 1
          : prev - 1
        : 0,
    );
  };

  const handleNext = () => {
    if (!selectedWork) return;
    setSelectedSlide((prev) =>
      selectedImages.length > 0
        ? prev === selectedImages.length - 1
          ? 0
          : prev + 1
        : 0,
    );
  };

  return (
    <section id="showcase" className="py-16 md:py-20 relative overflow-hidden min-h-screen sm:min-h-0">
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
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#ffb300]/10 rounded-full blur-[90px]"
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#030306] via-[#030306]/80 to-transparent" />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#ffc107]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-[#ffc107] mb-4 md:mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#ffc107]" />
            </motion.div>
            <span className="text-xs md:text-sm font-medium text-white/90">Student Work</span>
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="text-white">Production-Ready </span>
            <span className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent">
              Portfolios
            </span>
          </h2>
          <p className="text-white/60 text-sm md:text-lg px-4">
            Explore exceptional work from our students now working at top studios worldwide
          </p>
        </motion.div>

        {/* Image Grid - More gap and padding on mobile for better spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {displayedWork.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedIndex(index)}
              className="group relative cursor-pointer"
            >
              {/* Card - Larger aspect ratio for mobile to increase height */}
              <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-[#ffc107]/10 transition-all duration-500 group-hover:border-[#ffc107]/30 group-hover:shadow-[0_0_30px_rgba(255,193,7,0.2)]">
                {/* Image - Taller aspect ratio on mobile for more height */}
                <div className="relative aspect-[4/3] md:aspect-video overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredId === item.id ? 1.05 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay - appears on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: hoveredId === item.id ? 1 : 0.8, opacity: hoveredId === item.id ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] rounded-full p-3 shadow-lg"
                    >
                      <Maximize2 className="w-5 h-5 text-black" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Info - More padding on mobile */}
                <div className="p-4 md:p-3">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 line-clamp-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {item.title}
                  </h3>
                  <div className="flex items-center text-sm">
                    <div className="flex items-center gap-2 text-white/60">
                      <User className="w-3 h-3 md:w-4 md:h-4 text-[#ffc107]" />
                      <span className="text-xs md:text-sm">{item.student}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More/Less Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:mt-8"
        >
          <Link to="/student-work">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#ffc107] to-[#ffb300] hover:from-[#ffb300] hover:to-[#ffc107] text-black font-semibold rounded-full px-6 md:px-8 py-5 md:py-6 group transition-all duration-300 text-sm md:text-base"
            >
              View All Work
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-all" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-[#030306] border border-[#ffc107]/20 max-h-screen sm:max-h-[85vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 p-1.5 sm:p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors border border-[#ffc107]/30 hover:border-[#ffc107]/50"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc107]" />
              </button>

              {/* Image Display */}
                <div className="relative">
                <ResponsiveImage
                  src={selectedImages[selectedSlide]}
                  alt={selectedWork.title}
                  sizes="100vw"
                  className="w-full h-auto max-h-[60vh] sm:max-h-[85vh] object-contain"
                />

                {/* Mobile: show title & credits below image instead of overlay */}
                <div className="sm:hidden p-4 bg-transparent text-left">
                  <div className="mb-1">
                    <h3 className="text-base font-bold text-white truncate">{selectedWork.title}</h3>
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>by {selectedWork.student}</span>
                    <span>{selectedSlide + 1} / {selectedImages.length}</span>
                  </div>
                </div>

                {selectedImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="absolute left-2 sm:left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/90"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="absolute right-2 sm:right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/90"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Image Info Overlay */}
                <div className="hidden sm:block absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg sm:text-2xl font-bold text-white truncate">{selectedWork.title}</h3>
                    <span className="text-sm text-white/60">
                      {selectedSlide + 1} / {selectedImages.length}
                    </span>
                  </div>
                  <p className="text-white/60">by {selectedWork.student}</p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffc107] to-[#ffd54f] to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StudentWorkShowcase;