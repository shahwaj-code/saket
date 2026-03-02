import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Play, Pause, Star, Quote, ChevronLeft, ChevronRight, Film, Clapperboard, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "3D Artist at Framestore",
    company: "Framestore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: 5,
    quote: "The AI curriculum completely transformed my workflow. I went from a junior designer to landing a role at one of the world's top VFX studios in just 8 months.",
    salary: "₹18 LPA",
    course: "VFX & Animation",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Senior UI/UX Designer at Google",
    company: "Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: 5,
    quote: "CreativeTech's hands-on approach to teaching Figma and AI tools gave me an edge that no other institute could. The placement support was exceptional.",
    salary: "₹24 LPA",
    course: "UI/UX Design",
  },
  {
    id: 3,
    name: "Rahul Kumar",
    role: "Motion Designer at Netflix",
    company: "Netflix",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: 5,
    quote: "Learning motion graphics with AI integration opened doors I never knew existed. The instructors are industry veterans who truly care about your success.",
    salary: "₹16 LPA",
    course: "Motion Graphics",
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "AI Art Director at Adobe",
    company: "Adobe",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: 5,
    quote: "The generative AI course was ahead of its time. I was creating with Midjourney and Stable Diffusion before most designers even heard of them.",
    salary: "₹22 LPA",
    course: "Generative AI",
  },
];

// Video Testimonial Card with playable video
const VideoTestimonialCard = ({ 
  testimonial, 
  onPlayVideo 
}: { 
  testimonial: typeof testimonials[0];
  onPlayVideo: (url: string, name: string) => void;
}) => {
  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={() => onPlayVideo(testimonial.videoUrl, testimonial.name)}
    >
      {/* Thumbnail */}
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-full h-full object-cover"
      />
      
      {/* Film strip overlay - Animation Institute feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      
      {/* Film reel decorations */}
      <div className="absolute top-4 left-4 flex items-center gap-2 text-white/60">
        <Film className="w-4 h-4" />
        <span className="text-xs font-medium tracking-wider">STUDENT REEL</span>
      </div>
      
      {/* Play Button with film reel animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors border border-white/30"
          whileHover={{ scale: 1.1 }}
          animate={{ 
            boxShadow: ["0 0 0 0 rgba(255,255,255,0.4)", "0 0 0 20px rgba(255,255,255,0)", "0 0 0 0 rgba(255,255,255,0.4)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Play className="w-6 h-6 text-white ml-1" fill="white" />
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Course badge with clapperboard icon */}
        <div className="flex items-center gap-2 mb-3">
          <Clapperboard className="w-3.5 h-3.5 text-[#ffc107]" />
          <span className="text-xs font-semibold text-[#ffc107] tracking-wide">{testimonial.course}</span>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-0.5 mb-2">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-[#ffc107] text-[#ffc107]" />
          ))}
        </div>
        
        <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
        <p className="text-sm text-white/70">{testimonial.role}</p>
        
        {/* Salary badge */}
        <div className="mt-3 inline-flex px-3 py-1 rounded-full bg-[#ffc107]/10 border border-[#ffc107]/30">
          <span className="text-xs font-semibold text-[#ffc107]">{testimonial.salary}</span>
        </div>
      </div>
      
      {/* Film frame corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-lg" />
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoModal, setVideoModal] = useState<{ url: string; name: string } | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openVideoModal = (url: string, name: string) => {
    setVideoModal({ url, name });
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Cinematic film grain overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none cinematic-grain" />
      
      {/* Film strip decoration on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-12 hidden lg:flex flex-col justify-center gap-4 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-8 h-6 bg-foreground rounded-sm mx-auto" />
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-12 hidden lg:flex flex-col justify-center gap-4 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-8 h-6 bg-foreground rounded-sm mx-auto" />
        ))}
      </div>
      
      <div className="container relative z-10">
        {/* Section Header with animation feel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clapperboard className="w-5 h-5 text-[#ffc107]" />
            <p className="text-[#ffc107] font-medium tracking-wider uppercase">Student Reels</p>
            <Clapperboard className="w-5 h-5 text-[#ffc107]" />
          </div>
          <h2 className="display-medium mb-6">
            Watch their <span className="text-gradient">success stories</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real video testimonials from alumni who transformed their creative careers 
            with our industry-focused programs.
          </p>
        </motion.div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <VideoTestimonialCard 
                testimonial={testimonial} 
                onPlayVideo={openVideoModal}
              />
            </motion.div>
          ))}
        </div>

        {/* Featured Quote Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="apple-card p-8 md:p-12 relative overflow-hidden border border-[#ffc107]/20">
            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-[#ffc107]/20" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed italic">
                  "{testimonials[activeIndex].quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#ffc107]/30"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-[#ffc107]/30 hover:bg-[#ffc107]/10"
              >
                <ChevronLeft className="w-5 h-5 text-[#ffc107]" />
              </Button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-[#ffc107] w-8' 
                        : 'bg-muted-foreground/30 hover:bg-[#ffc107]/50 w-2'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-[#ffc107]/30 hover:bg-[#ffc107]/10"
              >
                <ChevronRight className="w-5 h-5 text-[#ffc107]" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!videoModal} onOpenChange={() => setVideoModal(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-0 overflow-hidden">
          <div className="relative aspect-video">
            {videoModal && (
              <video
                ref={videoRef}
                src={videoModal.url}
                autoPlay
                loop
                muted={isMuted}
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{videoModal?.name}'s Story</p>
                  <p className="text-white/60 text-sm">Student Testimonial</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="text-white hover:bg-white/20 border border-transparent hover:border-[#ffc107]/50"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TestimonialsSection;