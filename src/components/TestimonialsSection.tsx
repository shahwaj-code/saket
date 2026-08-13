import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Film, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResponsiveImage from "./ResponsiveImage";
import alkaImg from "@/assets/testimonials/alka.webp";
import komalImg from "@/assets/testimonials/komal.webp";
import nikitaImg from "@/assets/testimonials/nikita.webp";
import vartulImg from "@/assets/testimonials/vartul.webp";

const testimonials = [
  {
    id: 1,
    name: "Alka",
    role: "VFX Artist",
    image: alkaImg,
    rating: 5,
    quote: "Design Engine's Delhi VFX course was a complete game-changer. The blend of production studio pipelines and Gen-AI tools gave me a unique edge. The NCR placement cell was top-notch, leading to my role at Charuvi Design Labs.",
    course: "VFX & Animation",
  },
  {
    id: 2,
    name: "Komal",
    role: "UI/UX Designer",
    company: "Future Design",
    image: komalImg,
    rating: 5,
    quote: "The South Delhi campus hands-on approach to advanced Figma systems and AI workflows gave me an edge no other academy could. The local placement support was exceptional.",
    salary: "₹24 LPA",
    course: "UI/UX Design",
  },
  {
    id: 3,
    name: "Nikita",
    role: "Motion Designer",
    company: "Schmooze Media",
    image: nikitaImg,
    rating: 5,
    quote: "Learning elite motion graphics with Gen-AI tools opened incredible global career doors. The Delhi mentors are production house veterans who genuinely guide your growth.",
    salary: "₹16 LPA",
    course: "Motion Graphics",
  },
  {
    id: 4,
    name: "Vartul",
    role: "3D Artist",
    company: "Immersive Art Studio",
    image: vartulImg,
    rating: 5,
    quote: "Design Engine Delhi was teaching 3D asset pipelines way before the market caught up—I was already rendering live projects while other batches were just starting out.",
    salary: "₹22 LPA",
    course: "3D Modeling & Animation",
  },
];

// Testimonial Card - Image only (no video)
const TestimonialCard = ({ 
  testimonial 
}: { 
  testimonial: typeof testimonials[0];
}) => {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-2xl aspect-[3/4]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <ResponsiveImage
        src={testimonial.image}
        alt={testimonial.name}
        className="w-full h-full object-cover"
        sizes="(max-width: 640px) 100vw, 33vw"
      />
      
      {/* Film strip overlay - Animation Institute feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      
      {/* Film reel decorations */}
      <div className="absolute top-4 left-4 flex items-center gap-2 text-white/60">
        <Film className="w-4 h-4" />
        <span className="text-xs font-medium tracking-wider">STUDENT REEL</span>
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent">Launch Your Creative Journey</span>
          </h2>
          
          {/* Enhanced alumni testimonials text */}
          <p className="text-lg md:text-lg font-light leading-relaxed text-foreground/90 max-w-2xl mx-auto">
            Real reviews from Delhi batch alumni who transformed their creative passions 
            <span className="block mt-2 text-[#ffc107] font-medium">with our intensive media programs</span>
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#ffc107] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Testimonials Grid - Image Only */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div> */}

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
                  <ResponsiveImage
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#ffc107]/30"
                    sizes="48px"
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
    </section>
  );
};

export default TestimonialsSection;