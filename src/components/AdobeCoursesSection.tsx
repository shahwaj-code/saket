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
    iconBg: "from-[#FF9A00] to-[#FF6100]",
    duration: "3 Months",
    /*students: "2500+",*/
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
    iconBg: "from-[#31A8FF] to-[#001E36]",
    duration: "4 Months",
    /*students: "3200+",*/
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
    iconBg: "from-[#FF3366] to-[#49021F]",
    duration: "2 Months",
    /*students: "1800+",*/
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
    <section id="courses" className="py-20 md:py-32 relative overflow-hidden">
      {/* Premium dark background */}
      <div className="absolute inset-0 bg-[#030306]" />
      
      {/* Gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-[80px]"
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6"
          >
            <BookOpen className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-medium text-white/80">Industry-Standard Software</span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="text-white">Master </span>
            <span className="bg-gradient-to-r from-[#FF9A00] via-[#31A8FF] to-[#FF3366] bg-clip-text text-transparent">Adobe Creative Suite</span>
          </h2>
          <p className="text-white/50 text-lg">
            Learn from certified instructors with 10+ years of industry experience
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="relative h-full rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.05]">
                {/* Gradient glow on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${course.iconBg} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredCourse === course.slug ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030306] via-transparent to-transparent" />
                  
                  {/* Software Icon */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${course.iconBg} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{course.icon}</span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium text-white">{course.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{course.subtitle}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{course.title}</h3>
                  <p className="text-white/50 text-sm mb-4 line-clamp-2">{course.description}</p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-white/40">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </div>
                    {/*<div className="flex items-center gap-1.5 text-xs text-white/40">
                      <Users className="w-3.5 h-3.5" />
                      {course.students}
                    </div>*/}
                    <div className="flex items-center gap-1.5 text-xs text-white/40">
                      <BookOpen className="w-3.5 h-3.5" />
                      {course.projects} Projects
                    </div>
                  </div>

                  {/* Tools Preview */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {course.tools.slice(0, 4).map((tool, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-white/60 border border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                    {course.tools.length > 4 && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-white/40">
                        +{course.tools.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Syllabus Preview Toggle */}
                  <motion.button
                    onClick={() => setShowSyllabus(showSyllabus === course.slug ? null : course.slug)}
                    className="w-full mb-4 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white/70 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    {showSyllabus === course.slug ? "Hide Syllabus" : "View Syllabus Preview"}
                  </motion.button>

                  {/* Syllabus Dropdown */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: showSyllabus === course.slug ? "auto" : 0,
                      opacity: showSyllabus === course.slug ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 space-y-2">
                      {course.syllabus.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${course.iconBg}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link to={`/course/${course.slug}`} className="flex-1">
                      <Button 
                        className={`w-full bg-gradient-to-r ${course.iconBg} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity`}
                      >
                        {/* Explore Course */}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Button 
                      variant="outline"
                      size="icon"
                      className="rounded-xl border-white/10 hover:bg-white/5"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/courses">
            <Button 
              size="lg"
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold rounded-full px-8"
            >
              View All 15+ Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AdobeCoursesSection;