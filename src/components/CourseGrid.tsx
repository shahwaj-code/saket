import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Video, Palette, Layers, ArrowRight, Gamepad2, Film, PenTool, Monitor, Play, Clock, Users, Filter, Zap, Scale } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import CourseVideoPreview from "./CourseVideoPreview";
import CourseComparisonTool from "./CourseComparisonTool";

import generativeAiImg from "@/assets/courses/generative-ai.jpg";
import vfxImg from "@/assets/courses/vfx.jpg";
import animationImg from "@/assets/courses/animation.jpg";
import motionGraphicsImg from "@/assets/courses/motion-graphics.jpg";
import uiUxImg from "@/assets/courses/ui-ux.jpg";
import graphicDesignImg from "@/assets/courses/graphic-design.jpg";
import gameDesignImg from "@/assets/courses/game-design.jpg";
import videoEditingImg from "@/assets/courses/video-editing.jpg";

const courses = [
  {
    slug: "generative-ai-for-designers",
    title: "Generative AI",
    description: "Explore powerful generative AI courses covering machine learning, neural networks, prompt engineering, and creative automation.",
    icon: Sparkles,
    color: "from-neon-purple to-neon-pink",
    duration: "2 Months",
    image: generativeAiImg,
    difficulty: "Beginner",
    category: "AI",
    trending: true,
  },
  {
    slug: "vfx-cinematic-animation",
    title: "VFX",
    description: "Master advanced VFX techniques—from compositing and CGI to motion tracking, simulations, and real-time workflows.",
    icon: Video,
    color: "from-neon-pink to-neon-purple",
    duration: "12 - 28 Months",
    /*students: "823+",*/
    image: vfxImg,
    difficulty: "Advanced",
    category: "VFX",
    trending: false,
  },
  {
    slug: "animation",
    title: "Animation",
    description: "Learn modern animation techniques including 2D animation, 3D animation, motion graphics, VFX basics, and industry-standard tools.",
    icon: Film,
    color: "from-neon-cyan to-neon-purple",
    duration: "12 - 28 Months",
    /*students: "1,534+",*/
    image: animationImg,
    difficulty: "Intermediate",
    category: "Animation",
    trending: true,
  },
  {
    slug: "motion-graphics-video",
    title: "Motion Graphics",
    description: "Develop motion design skills across concept development, storyboarding, animation, and compositing.",
    icon: Layers,
    color: "from-neon-purple to-neon-cyan",
    duration: "14 Months",
    /*students: "967+",*/
    image: motionGraphicsImg,
    difficulty: "Intermediate",
    category: "Animation",
    trending: false,
  },
  {
    slug: "ui-ux-product-design",
    title: "UI/UX Design",
    description: "Master UI/UX fundamentals through user research, wireframing, prototyping, visual design, and interaction design.",
    icon: Palette,
    color: "from-neon-cyan to-neon-pink",
    duration: "9 Months",
    /*students: "1,234+",*/
    image: uiUxImg,
    difficulty: "Beginner",
    category: "Design",
    trending: true,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    description: "Learn professional design foundations including typography, layout, branding, digital illustration, and visual communication.",
    icon: PenTool,
    color: "from-neon-pink to-neon-cyan",
    duration: "20 Months",
    /*students: "890+",*/
    image: graphicDesignImg,
    difficulty: "Beginner",
    category: "Design",
    trending: false,
  },
  {
    slug: "game-design",
    title: "Game Design",
    description: "Build core game design capabilities including storytelling, level design, character creation, and gameplay mechanics.",
    icon: Gamepad2,
    color: "from-neon-purple to-neon-pink",
    duration: "13 Months",
    /*students: "654+",*/
    image: gameDesignImg,
    difficulty: "Advanced",
    category: "Gaming",
    trending: true,
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    description: "Acquire professional editing skills including cutting, color grading, motion design, and advanced workflows.",
    icon: Monitor,
    color: "from-neon-cyan to-neon-purple",
    duration: "20 Months",
    /*students: "1,100+",*/
    image: videoEditingImg,
    difficulty: "Beginner",
    category: "Animation",
    trending: false,
  },
];

const categories = ["All", "AI", "VFX", "Animation", "Design", "Gaming"];

const difficultyColors = {
  Beginner: "bg-neon-green/20 text-neon-green",
  Intermediate: "bg-neon-orange/20 text-neon-orange",
  Advanced: "bg-neon-pink/20 text-neon-pink",
};

const CourseGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  const [showVideoPreview, setShowVideoPreview] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedCourseForPreview, setSelectedCourseForPreview] = useState<typeof courses[0] | null>(null);

  const filteredCourses = activeFilter === "All" 
    ? courses 
    : courses.filter(c => c.category === activeFilter);

  return (
    <section id="courses" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-pink/5 rounded-full blur-3xl" />
      
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container relative z-10">
        {/* Header with kinetic elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <Zap className="w-4 h-4" style={{ color: "#ffc107" }} />
            {/* <span className="text-sm font-medium text-neon-cyan">Explore Courses</span> */}
          </motion.div>
          
          <h2 className="display-medium mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="block">Choose Your</span>
            <span className="gradient-text">Creative Superpower</span> ⚡
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Industry-aligned courses with Generative AI at the core. 
            Build job-ready portfolios that'll make recruiters slide into your DMs 📩
          </p>
        </motion.div>

        {/* Filter Buttons - Pill style with #ffc107 border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 md:mb-12 flex-wrap px-4"
        >
          <Filter className="w-4 h-4 mr-2 hidden sm:block" style={{ color: "#ffc107" }} />
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-neon border-[#ffc107]"
                  : "bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-foreground border-[#ffc107]"
              }`}
              style={{ borderWidth: "1px" }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Course Grid with 3D hover effects */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-2 sm:px-0"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.slug}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                onMouseEnter={() => setHoveredCourse(course.slug)}
                onMouseLeave={() => setHoveredCourse(null)}
                className="group"
              >
                <Link to={`/course/${course.slug}`} className="block h-full">
                  <motion.div 
                    className="relative h-full overflow-hidden rounded-3xl glass-card course-card-3d"
                    whileHover={{ 
                      y: -10,
                      rotateX: 5,
                      rotateY: -5,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                  >
                    {/* Trending Badge */}
                    {course.trending && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-orange/90 text-white text-xs font-bold"
                      >
                        <span className="animate-pulse">🔥</span>
                        Trending
                      </motion.div>
                    )}

                    {/* Course Image with video preview on hover */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover"
                        animate={{ 
                          scale: hoveredCourse === course.slug ? 1.15 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-40`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      
                      {/* Animated Icon with #ffc107 color */}
                      <motion.div 
                        className={`absolute top-3 right-3 w-12 h-12 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-neon`}
                        animate={{ 
                          rotate: hoveredCourse === course.slug ? [0, -10, 10, 0] : 0,
                          scale: hoveredCourse === course.slug ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <course.icon className="w-6 h-6" style={{ color: "#ffc107" }} />
                      </motion.div>

                      {/* Play button on hover */}
                      <AnimatePresence>
                        {hoveredCourse === course.slug && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <Play className="w-8 h-8 ml-1" style={{ color: "#ffc107" }} />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Difficulty & Category badges */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColors[course.difficulty as keyof typeof difficultyColors]}`}>
                          {course.difficulty}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
                          {course.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {course.description}
                      </p>

                      {/* Meta with icons - icons set to #ffc107 */}
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" style={{ color: "#ffc107" }} />
                            {course.duration}
                          </span>
                         {/* <span className="flex items-center gap-1 text-muted-foreground">
                            <Users className="w-3.5 h-3.5" style={{ color: "#ffc107" }} />
                            {course.students}
                          </span>*/}
                        </div>
                        {/*<motion.span 
                          className="flex items-center gap-1 text-neon-cyan font-medium"
                          animate={{ x: hoveredCourse === course.slug ? 5 : 0 }}
                        >
                          Explore
                          <ArrowRight className="w-4 h-4" style={{ color: "#ffc107" }} />
                        </motion.span>*/}
                      </div>
                    </div>

                    {/* Bottom glow line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${course.color}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredCourse === course.slug ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link to="/courses">
              <Button 
                size="lg" 
                className="neon-button float-hover text-white font-bold rounded-full px-8 border border-[#ffc107]"
                style={{ borderWidth: "1px" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View All Courses
                  <ArrowRight className="w-5 h-5" style={{ color: "#ffc107" }} />
                </span>
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="glassmorphic-button rounded-full px-8 border border-[#ffc107]"
              style={{ borderWidth: "1px" }}
              onClick={() => setShowComparison(true)}
            >
              <Scale className="w-5 h-5 mr-2" style={{ color: "#ffc107" }} />
              Compare Courses
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Can't decide? Take our <Link to="/quiz" className="text-neon-cyan hover:underline font-medium">Creative Path Quiz</Link> ✨
          </p>
        </motion.div>
      </div>

      {/* Course Video Preview Modal */}
      <CourseVideoPreview
        isOpen={showVideoPreview}
        onClose={() => setShowVideoPreview(false)}
        courseTitle={selectedCourseForPreview?.title || ""}
        thumbnailUrl={selectedCourseForPreview?.image || ""}
      />

      {/* Course Comparison Tool */}
      <CourseComparisonTool
        isOpen={showComparison}
        onClose={() => setShowComparison(false)}
      />
    </section>
  );
};

export default CourseGrid;