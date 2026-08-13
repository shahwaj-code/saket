import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, BookOpen, Download, Play, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const adobeCourses = [
  {
    slug: "adobe-illustrator",
    title: "Adobe Illustrator",
    subtitle: "Vector Graphics Mastery",
    description: "Master the industry-standard vector graphics software. Create logos, icons, illustrations, and scalable designs.",
    icon: "Ai",
    iconBg: "from-[#ffc107] via-[#ffd54f] to-[#ffb300]",
    duration: "3 Months",
    level: "Beginner to Advanced",
    rating: 4.9,
    tools: ["Pen Tool", "Shape Builder", "Pathfinder", "Type Tool", "Effects"],
    syllabus: [
      "Fundamentals of Vector Graphics",
      "Logo & Brand Identity Design",
      "Character Illustration",
      "Pattern & Textile Design",
      "Print-Ready Artwork",
    ],
    projects: 15,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
  },
  {
    slug: "adobe-photoshop",
    title: "Adobe Photoshop",
    subtitle: "Photo Editing & Compositing",
    description: "Learn professional photo editing, retouching, compositing, and digital art creation techniques.",
    icon: "Ps",
    iconBg: "from-[#ffd54f] via-[#ffc107] to-[#ffb300]",
    duration: "4 Months",
    level: "Beginner to Advanced",
    rating: 4.8,
    tools: ["Layers", "Masks", "Smart Objects", "Camera Raw", "Actions"],
    syllabus: [
      "Non-Destructive Editing",
      "Advanced Retouching",
      "Photo Compositing",
      "Digital Painting",
      "Web & UI Graphics",
    ],
    projects: 20,
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800",
  },
  {
    slug: "adobe-indesign",
    title: "Adobe InDesign",
    subtitle: "Publication & Layout Design",
    description: "Create stunning print and digital publications, from magazines to interactive PDFs.",
    icon: "Id",
    iconBg: "from-[#ffb300] via-[#ffd54f] to-[#ffc107]",
    duration: "2 Months",
    level: "Beginner to Intermediate",
    rating: 4.7,
    tools: ["Master Pages", "Styles", "Tables", "EPUB", "Interactive PDFs"],
    syllabus: [
      "Typography & Layout Principles",
      "Multi-page Documents",
      "Print Production",
      "Digital Publishing",
      "Portfolio Creation",
    ],
    projects: 10,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
  },
];

const AdobeCoursesSection = () => {
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  const [showSyllabus, setShowSyllabus] = useState<string | null>(null);

  return (
    <section id="courses" className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Premium dark background */}
      <div className="absolute inset-0 bg-[#030306]" />
      
      {/* Golden Orbs - Reduced size on mobile */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#ffc107]/10 rounded-full blur-[60px] md:blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-[250px] md:w-[420px] h-[250px] md:h-[420px] bg-[#ffd54f]/10 rounded-full blur-[50px] md:blur-[80px]"
      />

      {/* 3D Grid Effect - Reduced opacity on mobile */}
      <div className="absolute inset-0 opacity-10 md:opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,193,7,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,193,7,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px md:60px 60px",
            transform: "perspective(500px) rotateX(60deg)"
          }}
        />
      </div>

      <div className="container relative z-10 px-3 sm:px-4">
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
            className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-1.5 md:py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-[#ffc107] mb-4 md:mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <BookOpen className="w-3 h-3 md:w-4 md:h-4 text-[#ffc107]" />
            </motion.div>
            <span className="text-[10px] md:text-sm font-medium text-white/90 whitespace-nowrap">Industry-Standard Software</span>
          </motion.div>

          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-white px-2" style={{ fontFamily: 'Syne, sans-serif' }}>
            Master{" "}
            <span className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent">
              Adobe Creative Suite
            </span>
          </h2>
          <p className="text-white/60 text-xs sm:text-sm md:text-base lg:text-lg px-2">
            Learn from certified instructors with 10+ years of industry experience
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {adobeCourses.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCourse(course.slug)}
              onMouseLeave={() => setHoveredCourse(null)}
              className="group relative"
            >
              {/* Glassmorphic Card */}
              <div className="relative h-full rounded-xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-[#ffc107]/10 overflow-hidden transition-all duration-500 group-hover:border-[#ffc107]/30 group-hover:bg-white/10">
                {/* Gradient glow on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${course.iconBg} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Course Image */}
                <div className="relative h-28 sm:h-32 md:h-48 overflow-hidden">
                  <motion.img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredCourse === course.slug ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030306] via-[#030306]/60 to-transparent" />
                  
                  {/* Software Icon - Smaller on mobile */}
                  <div className={`absolute top-2 left-2 md:top-4 md:left-4 w-5 h-5 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${course.iconBg} flex items-center justify-center shadow-lg border border-[#ffc107]/30`}>
                    <span className="text-black font-bold text-xs md:text-lg">{course.icon}</span>
                  </div>

                  {/* Rating - Smaller on mobile */}
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 flex items-center gap-0.5 md:gap-1 px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-full bg-black/60 backdrop-blur-sm border border-[#ffc107]/20">
                    <Star className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-[#ffc107] fill-[#ffc107]" />
                    <span className="text-[10px] md:text-sm font-medium text-white">{course.rating}</span>
                  </div>
                </div>

                {/* Content - Reduced padding on mobile */}
                <div className="p-3 md:p-6">
                  <span className="text-[8px] md:text-xs font-medium text-white/40 uppercase tracking-wider">{course.subtitle}</span>
                  <h3 className="text-sm sm:text-base md:text-xl font-bold text-white mt-0.5 md:mt-1 mb-1 md:mb-2 group-hover:text-[#ffc107] transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {course.title}
                  </h3>
                  <p className="text-white/50 text-[10px] md:text-sm mb-2 md:mb-4 line-clamp-2">{course.description}</p>

                  {/* Meta Info - Smaller icons on mobile */}
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-2 md:mb-4">
                    <div className="flex items-center gap-1 md:gap-1.5 text-[8px] md:text-xs text-white/60">
                      <Clock className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-[#ffc107]" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1 md:gap-1.5 text-[8px] md:text-xs text-white/60">
                      <BookOpen className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-[#ffd54f]" />
                      {course.projects} Projects
                    </div>
                  </div>

                  {/* Tools Preview - Smaller on mobile */}
                  <div className="flex flex-wrap gap-1 md:gap-1.5 mb-2 md:mb-5">
                    {course.tools.slice(0, 4).map((tool, i) => (
                      <span
                        key={i}
                        className="px-1.5 md:px-2 py-0.5 text-[8px] md:text-xs rounded-full bg-white/5 text-white/60 border border-[#ffc107]/10 whitespace-nowrap"
                      >
                        {tool}
                      </span>
                    ))}
                    {course.tools.length > 4 && (
                      <span className="px-1.5 md:px-2 py-0.5 text-[8px] md:text-xs rounded-full bg-white/5 text-white/40 border border-[#ffc107]/10">
                        +{course.tools.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Syllabus Preview Toggle - Smaller on mobile */}
                  <motion.button
                    onClick={() => setShowSyllabus(showSyllabus === course.slug ? null : course.slug)}
                    className="w-full mb-2 md:mb-4 px-2 md:px-4 py-1.5 md:py-2.5 rounded-lg md:rounded-xl bg-white/5 hover:bg-white/10 border border-[#ffc107]/10 text-[10px] md:text-sm font-medium text-white/70 hover:text-[#ffc107] transition-all flex items-center justify-center gap-1 md:gap-2"
                  >
                    <BookOpen className="w-3 h-3 md:w-4 md:h-4 text-[#ffc107]" />
                    {showSyllabus === course.slug ? "Hide" : "View Syllabus"}
                  </motion.button>

                  {/* Syllabus Dropdown - Smaller on mobile */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: showSyllabus === course.slug ? "auto" : 0,
                      opacity: showSyllabus === course.slug ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-2 md:pb-4 space-y-1 md:space-y-2">
                      {course.syllabus.map((item, i) => (
                        <div key={i} className="flex items-center gap-1 md:gap-2 text-[9px] md:text-sm text-white/60">
                          <span className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gradient-to-r ${course.iconBg}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Actions - Smaller buttons on mobile */}
                  <div className="flex gap-1.5 md:gap-2">
                    <Link to={`/course/${course.slug}`} className="flex-1">
                      <Button 
                        className={`w-full bg-gradient-to-r ${course.iconBg} text-black font-bold rounded-lg md:rounded-xl text-[10px] md:text-sm py-1.5 md:py-2 px-2 md:px-4 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)] transition-all duration-300`}
                      >
                        Explore
                        <ArrowRight className="w-2.5 h-2.5 md:w-4 md:h-4 ml-1 md:ml-2 text-black" />
                      </Button>
                    </Link>
                    <Button 
                      variant="outline"
                      size="icon"
                      className="rounded-lg md:rounded-xl border-[#ffc107]/20 hover:bg-white/5 hover:border-[#ffc107]/40 w-7 h-7 md:w-10 md:h-10"
                    >
                      <Play className="w-3 h-3 md:w-4 md:h-4 text-[#ffc107]" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Courses - Smaller on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <Link to="/courses">
            <Button 
              size="lg"
              className="bg-white/5 backdrop-blur-sm border border-[#ffc107]/20 hover:bg-white/10 hover:border-[#ffc107]/50 text-white font-semibold rounded-full px-4 md:px-8 py-2 md:py-3 text-xs md:text-base group transition-all duration-300"
            >
              View All 15+ Courses
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 text-[#ffc107] group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AdobeCoursesSection;