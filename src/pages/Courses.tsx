import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Sparkles, Video, Palette, Layers, ArrowRight, Gamepad2, Film, PenTool, Monitor, 
  Play, Clock, Users, Filter, Zap, Search, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    title: "Generative AI for Designers",
    description: "Explore powerful generative AI courses covering machine learning, neural networks, prompt engineering, and creative automation.",
    icon: Sparkles,
    color: "from-neon-purple to-neon-pink",
    duration: "3 Months",
    /*students: "1,247+",*/
    image: generativeAiImg,
    difficulty: "Beginner",
    category: "AI",
    trending: true,
    price: 45000,
    rating: 4.9,
  },
  {
    slug: "vfx-cinematic-animation",
    title: "VFX & Cinematic Animation",
    description: "Master advanced VFX techniques—from compositing and CGI to motion tracking, simulations, and real-time workflows.",
    icon: Video,
    color: "from-neon-pink to-neon-purple",
    duration: "6 Months",
    /*students: "823+",*/
    image: vfxImg,
    difficulty: "Advanced",
    category: "VFX",
    trending: false,
    price: 85000,
    rating: 4.8,
  },
  {
    slug: "animation",
    title: "Animation Fundamentals",
    description: "Learn modern animation techniques including 2D animation, 3D animation, motion graphics, VFX basics, and industry-standard tools.",
    icon: Film,
    color: "from-neon-cyan to-neon-purple",
    duration: "6 Months",
    /*students: "1,534+",*/
    image: animationImg,
    difficulty: "Intermediate",
    category: "Animation",
    trending: true,
    price: 65000,
    rating: 4.9,
  },
  {
    slug: "motion-graphics-video",
    title: "Motion Graphics & Video",
    description: "Develop motion design skills across concept development, storyboarding, animation, and compositing.",
    icon: Layers,
    color: "from-neon-purple to-neon-cyan",
    duration: "4 Months",
    /*students: "967+",*/
    image: motionGraphicsImg,
    difficulty: "Intermediate",
    category: "Animation",
    trending: false,
    price: 50000,
    rating: 4.8,
  },
  {
    slug: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    description: "Master UI/UX fundamentals through user research, wireframing, prototyping, visual design, and interaction design.",
    icon: Palette,
    color: "from-neon-cyan to-neon-pink",
    duration: "4 Months",
    /*students: "1,234+",*/
    image: uiUxImg,
    difficulty: "Beginner",
    category: "Design",
    trending: true,
    price: 55000,
    rating: 4.9,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design Mastery",
    description: "Learn professional design foundations including typography, layout, branding, digital illustration, and visual communication.",
    icon: PenTool,
    color: "from-neon-pink to-neon-cyan",
    duration: "4 Months",
    /*students: "890+",*/
    image: graphicDesignImg,
    difficulty: "Beginner",
    category: "Design",
    trending: false,
    price: 45000,
    rating: 4.7,
  },
  {
    slug: "game-design",
    title: "Game Design & Development",
    description: "Build core game design capabilities including storytelling, level design, character creation, and gameplay mechanics.",
    icon: Gamepad2,
    color: "from-neon-purple to-neon-pink",
    duration: "6 Months",
    /*students: "654+",*/
    image: gameDesignImg,
    difficulty: "Advanced",
    category: "Gaming",
    trending: true,
    price: 75000,
    rating: 4.8,
  },
  {
    slug: "video-editing",
    title: "Professional Video Editing",
    description: "Acquire professional editing skills including cutting, color grading, motion design, and advanced workflows.",
    icon: Monitor,
    color: "from-neon-cyan to-neon-purple",
    duration: "3 Months",
    /*students: "1,100+",*/
    image: videoEditingImg,
    difficulty: "Beginner",
    category: "Animation",
    trending: false,
    price: 35000,
    rating: 4.7,
  },
];

const categories = ["All", "AI", "VFX", "Animation", "Design", "Gaming"];

const difficultyColors = {
  Beginner: "bg-neon-green/20 text-neon-green",
  Intermediate: "bg-neon-orange/20 text-neon-orange",
  Advanced: "bg-neon-pink/20 text-neon-pink",
};

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = activeFilter === "All" || course.category === activeFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>All Courses | Best Animation, VFX & AI Training Institute</title>
        <meta 
          name="description" 
          content="Explore our comprehensive courses in Animation, VFX, Generative AI, UI/UX Design, Game Design & more. Industry-aligned curriculum with placement assistance." 
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 mesh-gradient opacity-50" />
            <div className="absolute inset-0 cyber-grid opacity-5" />
            
            <div className="container relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-4xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                >
                  <Zap className="w-4 h-4 text-[#ffc107]" />
                  <span className="text-sm font-medium text-neon-cyan">All Courses</span>
                </motion.div>
                
                <h1 className="display-medium mb-6">
                  Find Your <span className="gradient-text">Creative Superpower</span> ⚡
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                  Industry-aligned courses with AI integration. Build job-ready portfolios 
                  that'll make recruiters slide into your DMs 📩
                </p>

                {/* Search Bar */}
                <div className="max-w-md mx-auto relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ffc107]" />
                  <Input
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 rounded-full bg-secondary/50 rainbow-border text-lg"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Filters & Courses */}
          <section className="pb-24">
            <div className="container">
              {/* Filter Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-2 mb-12 flex-wrap"
              >
                <Filter className="w-4 h-4 text-[#ffc107] mr-2 hidden sm:block" />
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeFilter === cat
                        ? "bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-neon"
                        : "bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </motion.div>

              {/* Results Count */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground mb-8"
              >
                Showing {filteredCourses.length} of {courses.length} courses
              </motion.p>

              {/* Course Grid */}
              <motion.div 
                layout
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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

                          {/* Course Image */}
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
                            
                            <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-40`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                            
                            {/* Icon */}
                            <motion.div 
                              className={`absolute top-3 right-3 w-12 h-12 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-neon`}
                              animate={{ 
                                rotate: hoveredCourse === course.slug ? [0, -10, 10, 0] : 0,
                                scale: hoveredCourse === course.slug ? 1.1 : 1,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <course.icon className="w-6 h-6 text-white" />
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
                                    <Play className="w-8 h-8 text-white ml-1" />
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Content */}
                          <div className="p-5">
                            {/* Badges */}
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

                            {/* Rating & Price */}
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-[#ffc107] text-[#ffc107]" />
                                <span className="text-sm font-medium">{course.rating}</span>
                              </div>
                              <span className="text-lg font-bold gradient-text">
                                ₹{course.price.toLocaleString()}
                              </span>
                            </div>

                            {/* Meta */}
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-3">
                                  <span className="flex items-center gap-1 text-muted-foreground">
                                    <Clock className="w-3.5 h-3.5" />
                                    {course.duration}
                                  </span>
                                  {/* <span className="flex items-center gap-1 text-muted-foreground">
                                    <Users className="w-3.5 h-3.5" />
                                    {course.students}
                                  </span> */}
                                </div>
                                {/* <motion.span 
                                  className="flex items-center gap-1 text-neon-cyan font-medium"
                                  animate={{ x: hoveredCourse === course.slug ? 5 : 0 }}
                                >
                                  Explore
                                  <ArrowRight className="w-4 h-4" />
                                </motion.span> */}
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

              {/* No Results */}
              {filteredCourses.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <p className="text-2xl font-bold mb-2">No courses found 😅</p>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </motion.div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Courses;