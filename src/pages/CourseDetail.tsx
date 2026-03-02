import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Star, 
  Award, 
  Globe, 
  CheckCircle2, 
  Calendar,
  MapPin,
  Play,
  Download,
  Sparkles,
  Video,
  Palette,
  Layers,
  Zap,
  TrendingUp,
  BadgeCheck,
  GraduationCap,
  Briefcase,
  Target,
  Film,
  PenTool,
  Monitor,
  Gamepad2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCourseBySlug, CourseData } from "@/data/courses";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import { toast } from "sonner";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Video,
  Palette,
  Layers,
  Film,
  PenTool,
  Monitor,
  Gamepad2,
};

// Tool icons for marquee
const toolIcons: Record<string, string> = {
  "Midjourney": "🎨",
  "Stable Diffusion": "🖼️",
  "DALL-E 3": "🤖",
  "ChatGPT": "💬",
  "ComfyUI": "⚡",
  "RunwayML": "🎬",
  "Adobe Firefly": "🔥",
  "Figma AI": "✨",
  "Maya": "🎭",
  "Houdini": "🌀",
  "Nuke": "💥",
  "ZBrush": "🗿",
  "Substance Painter": "🎨",
  "Unreal Engine 5": "🎮",
  "DaVinci Resolve": "🎞️",
  "After Effects": "🎥",
  "Figma": "📐",
  "FigJam": "📋",
  "Maze": "🔍",
  "Hotjar": "🔥",
  "Notion": "📝",
  "Principle": "💫",
  "Framer": "🖥️",
  "Adobe XD": "💎",
  "Cinema 4D": "🎬",
  "Premiere Pro": "🎬",
  "Blender": "🧊",
  "Photoshop": "🖌️",
  "Illustrator": "✒️",
  "Toon Boom": "🎞️",
  "PFTrack": "📍",
  "Leonardo AI": "🤖",
};

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeModule, setActiveModule] = useState<string | null>("module-0");

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-8xl mb-6"
          >
            🔍
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist.</p>
          <Link to="/courses">
            <Button className="neon-button text-white">
              <ArrowLeft className="w-4 h-4 mr-2 text-[#ffc107]" />
              Browse All Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[course.icon] || Sparkles;
  const discountPercent = Math.round((1 - course.price / course.originalPrice) * 100);

  const handleEnroll = () => {
    setShowEnquiry(true);
  };

  return (
    <>
      <Helmet>
        <title>{course.title} Course | Design Engine</title>
        <meta name="description" content={course.description.slice(0, 160)} />
        <meta name="keywords" content={`${course.title}, ${course.category}, creative course, ${course.tools.join(', ')}`} />
        <link rel="canonical" href={`https://design-engine.io/course/${course.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section with Cinematic Background */}
          <section className="relative py-8 md:py-20 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
              <motion.img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70 md:to-background/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 md:via-background/80 to-transparent" />
            </div>

            {/* Floating particles - hidden on mobile for performance */}
            <div className="absolute inset-0 overflow-hidden hidden md:block">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-[#ffc107]/30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="container relative z-10 px-4 md:px-6">
              {/* Back Button */}
              <Link to="/courses" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4 md:mb-8 group text-sm">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform group-hover:text-[#ffc107]" />
                Back to Courses
              </Link>

              <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Category Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass-card mb-3 md:mb-6 border border-[#ffc107]/20"
                  >
                    <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#ffc107]" />
                    <span className="text-xs md:text-sm font-medium text-neon-cyan">{course.category}</span>
                    {course.studentsEnrolled > 2000 && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="text-xs md:text-sm text-neon-orange flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Popular
                        </span>
                      </>
                    )}
                  </motion.div>

                  <motion.h1 
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {course.title}
                    <span className="gradient-text"> Course</span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-base md:text-xl text-muted-foreground mb-3 md:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {course.tagline}
                  </motion.p>

                  {/* Rating & Stats */}
                  <motion.div 
                    className="flex flex-wrap items-center gap-2 md:gap-6 mb-3 md:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-amber-500/10 border border-[#ffc107]/20">
                      <Star className="w-3.5 h-3.5 md:w-5 md:h-5 fill-amber-500 text-amber-500" />
                      <span className="font-bold text-xs md:text-base">{course.rating}</span>
                     {/* <span className="text-muted-foreground text-[10px] md:text-sm">({course.studentsEnrolled.toLocaleString()}+)</span>*/}
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs md:text-base">
                      <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs md:text-base">
                      <Award className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      {course.level}
                    </div>
                  </motion.div>

                  <motion.p 
                    className="text-muted-foreground leading-relaxed mb-4 md:mb-8 text-sm md:text-base line-clamp-3 md:line-clamp-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {course.description}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-2 md:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      size="lg" 
                      onClick={handleEnroll} 
                      className="neon-button text-white font-bold text-sm md:text-lg py-5 md:py-7 px-5 md:px-8 w-full sm:w-auto border border-transparent hover:border-[#ffc107]/30"
                    >
                      <Zap className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 text-[#ffc107]" />
                      Enroll Now - ₹{course.price.toLocaleString()}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="glassmorphic-button py-5 md:py-7 w-full sm:w-auto text-sm md:text-base border-[#ffc107]/20 hover:border-[#ffc107]/40"
                    >
                      <Download className="w-4 h-4 mr-1.5 md:mr-2 text-[#ffc107]" />
                      Download Syllabus
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right - Pricing Card - Hidden on mobile, shown below hero on mobile */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hidden lg:block lg:sticky lg:top-28"
                >
                  <div className="glass-card rounded-3xl p-6 md:p-8 border border-[#ffc107]/20">
                    {/* Video Preview */}
                    <div className="relative rounded-2xl overflow-hidden mb-6 group cursor-pointer border border-transparent hover:border-[#ffc107]/30 transition-all duration-300">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan flex items-center justify-center shadow-neon border border-transparent hover:border-[#ffc107]/50"
                        >
                          <Play className="w-7 h-7 text-white ml-1 group-hover:text-[#ffc107] transition-colors duration-300" />
                        </motion.div>
                      </div>
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#ffc107] text-black text-xs font-bold">
                        {discountPercent}% OFF
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl font-bold gradient-text">₹{course.price.toLocaleString()}</span>
                        <span className="text-xl text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-[#ffc107]" />
                        EMI available starting ₹{Math.round(course.price / 12).toLocaleString()}/month
                      </p>
                    </div>

                    {/* Course Includes */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold">This course includes:</h4>
                      {[
                        { icon: Clock, text: `${course.duration} of intensive training` },
                        { icon: Globe, text: course.language },
                        { icon: GraduationCap, text: "Industry certification" },
                        { icon: Briefcase, text: "100% placement assistance" },
                        { icon: Users, text: "Lifetime community access" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <item.icon className="w-4 h-4 text-[#ffc107] flex-shrink-0" />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="w-full neon-button text-white font-bold mb-3 py-6 border border-transparent hover:border-[#ffc107]/30" 
                      onClick={handleEnroll}
                    >
                      <Zap className="w-4 h-4 mr-2 text-[#ffc107]" />
                      Enroll Now
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      <span className="text-[#ffc107]">✨</span> 7-day money-back guarantee <span className="text-[#ffc107]">✨</span>
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Mobile Pricing Card - Compact version */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:hidden mt-6 glass-card rounded-2xl p-4 border border-[#ffc107]/20"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-bold gradient-text">₹{course.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#ffc107] text-black text-[10px] font-bold">
                        {discountPercent}% OFF
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">EMI from ₹{Math.round(course.price / 12).toLocaleString()}/mo</p>
                  </div>
                  <Button 
                    className="neon-button text-white font-bold py-4 px-5 text-sm border border-transparent hover:border-[#ffc107]/30" 
                    onClick={handleEnroll}
                  >
                    <Zap className="w-4 h-4 mr-1.5 text-[#ffc107]" />
                    Enroll
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Tool Stack Marquee */}
          <section className="py-4 md:py-8 border-y border-[#ffc107]/10 overflow-hidden bg-muted/20">
            <div className="relative">
              <motion.div 
                className="flex gap-2 md:gap-4"
                animate={{ x: [0, -1000] }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {[...course.tools, ...course.tools, ...course.tools].map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-6 py-1.5 md:py-3 rounded-full glass-card whitespace-nowrap border border-transparent hover:border-[#ffc107]/20 transition-colors"
                  >
                    <span className="text-base md:text-xl">{toolIcons[tool] || "🔧"}</span>
                    <span className="font-medium text-xs md:text-base">{tool}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Highlights Grid */}
          <section className="py-8 md:py-16 border-b border-[#ffc107]/10">
            <div className="container px-4 md:px-6">
              <motion.h2 
                className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Choose This Course? 🚀
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
                {course.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="glass-card p-2.5 md:p-4 text-center rounded-xl md:rounded-2xl border border-border/50 hover:border-[#ffc107]/20 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-[#ffc107] mx-auto mb-1.5 md:mb-2" />
                    <p className="text-[10px] md:text-sm font-medium leading-tight">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Syllabus with Accordion */}
          <section className="py-8 md:py-16 bg-muted/20">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-6 md:mb-12"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card mb-3 border border-[#ffc107]/20">
                  <Target className="w-3.5 h-3.5 text-[#ffc107]" />
                  <span className="text-xs font-medium text-neon-pink">Curriculum</span>
                </div>
                <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">Complete Syllabus</h2>
                <p className="text-muted-foreground text-xs md:text-base">Everything you'll master in this program</p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <Accordion 
                  type="single" 
                  collapsible 
                  value={activeModule || undefined}
                  onValueChange={setActiveModule}
                  className="space-y-2 md:space-y-4"
                >
                  {course.modules.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <AccordionItem 
                        value={`module-${index}`} 
                        className="glass-card border border-border/50 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#ffc107]/20 transition-colors"
                      >
                        <AccordionTrigger className="p-3 md:p-6 hover:no-underline group [&[data-state=open]]:bg-muted/30">
                          <div className="flex items-center gap-2.5 md:gap-4 text-left">
                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center text-white font-bold flex-shrink-0 text-xs md:text-base">
                              {String(index + 1).padStart(2, '0')}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-xs md:text-lg group-hover:text-neon-cyan transition-colors line-clamp-1">
                                {module.title}
                              </h3>
                              <p className="text-[10px] md:text-sm text-muted-foreground">{module.duration}</p>
                            </div>
                          </div>
                          <span className="px-1.5 md:px-3 py-0.5 md:py-1 rounded-full bg-[#ffc107]/10 text-[#ffc107] text-[10px] md:text-xs font-medium mr-1 md:mr-4 flex-shrink-0 border border-[#ffc107]/20">
                            {module.topics.length}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-3 md:px-6 pb-3 md:pb-6">
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-3">
                            {module.topics.map((topic, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-start gap-1.5 md:gap-2 text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#ffc107] flex-shrink-0 mt-0.5" />
                                <span className="text-[11px] md:text-sm">{topic}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Instructors */}
          <section className="py-8 md:py-16">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-6 md:mb-12"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card mb-3 border border-[#ffc107]/20">
                  <GraduationCap className="w-3.5 h-3.5 text-[#ffc107]" />
                  <span className="text-xs font-medium text-neon-cyan">Expert Faculty</span>
                </div>
                <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">Meet Your Mentors</h2>
                <p className="text-muted-foreground text-xs md:text-base">Learn from industry veterans with real-world experience</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-3xl mx-auto">
                {course.instructors.map((instructor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-3 md:p-6 rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-5 border border-border/50 hover:border-[#ffc107]/20 transition-colors"
                  >
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-14 h-14 md:w-20 md:h-20 rounded-lg md:rounded-xl object-cover ring-2 ring-[#ffc107]/30"
                    />
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm md:text-lg truncate">{instructor.name}</h3>
                      <p className="text-[#ffc107] text-[10px] md:text-sm mb-0.5 md:mb-1">{instructor.role}</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground truncate">{instructor.experience}</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground truncate">{instructor.company}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Upcoming Batches */}
          <section id="batches" className="py-8 md:py-16 bg-muted/20">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-6 md:mb-12"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card mb-3 border border-[#ffc107]/20">
                  <Calendar className="w-3.5 h-3.5 text-[#ffc107]" />
                  <span className="text-xs font-medium text-neon-orange">Limited Seats</span>
                </div>
                <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">Upcoming Batches</h2>
                <p className="text-muted-foreground text-xs md:text-base">Choose a batch that fits your schedule</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
                {course.batches.map((batch, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-3 md:p-6 rounded-xl md:rounded-2xl border border-border/50 hover:border-[#ffc107]/20 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2 md:mb-4">
                      <Calendar className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#ffc107]" />
                      <span className="font-bold text-xs md:text-base">{batch.startDate}</span>
                    </div>
                    <div className="space-y-1 md:space-y-2 mb-3 md:mb-6">
                      <div className="flex items-center gap-1.5 text-[10px] md:text-sm text-muted-foreground">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        {batch.timing}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] md:text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                        {batch.mode}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] md:text-sm font-medium ${batch.seatsLeft <= 10 ? 'text-neon-orange' : 'text-neon-green'}`}>
                        {batch.seatsLeft <= 10 ? '🔥' : '✅'} {batch.seatsLeft} seats
                      </span>
                      <Button 
                        size="sm" 
                        className="neon-button text-white text-[10px] md:text-sm py-1.5 md:py-2 px-3 md:px-4 h-auto border border-transparent hover:border-[#ffc107]/30"
                        onClick={handleEnroll}
                      >
                        <Zap className="w-3 h-3 mr-1 text-[#ffc107]" />
                        Reserve
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section className="py-8 md:py-16 relative overflow-hidden">
            <div className="absolute inset-0 mesh-gradient opacity-10" />
            <div className="container relative z-10 px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-6 md:mb-12"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card mb-3 border border-[#ffc107]/20">
                  <Briefcase className="w-3.5 h-3.5 text-[#ffc107]" />
                  <span className="text-xs font-medium text-neon-green">Career Outcomes</span>
                </div>
                <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">What You'll Achieve 🎯</h2>
                <p className="text-muted-foreground text-xs md:text-base">Transform your career with industry-ready skills</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
                {course.outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 p-2.5 md:p-4 rounded-lg md:rounded-xl glass-card border border-border/50 hover:border-[#ffc107]/20 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#ffc107] flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] md:text-sm">{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-10 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-[#ffc107]/5 to-neon-cyan/20" />
            <div className="container relative z-10 px-4 md:px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">
                  Ready to Start Your <span className="gradient-text">Creative Journey</span>? 🚀
                </h2>
                {/* <p className="text-muted-foreground mb-5 md:mb-8 max-w-2xl mx-auto text-xs md:text-base">
                  Join {course.studentsEnrolled.toLocaleString()}+ students who have transformed their careers with Design Engine
                </p> */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="neon-button text-white font-bold py-5 md:py-7 px-6 md:px-12 text-sm md:text-lg border border-transparent hover:border-[#ffc107]/30"
                    onClick={handleEnroll}
                  >
                    <Zap className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 text-[#ffc107]" />
                    Enroll Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="glassmorphic-button py-5 md:py-7 text-sm md:text-base border-[#ffc107]/20 hover:border-[#ffc107]/40"
                  >
                    Talk to Counselor
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />

        {/* Sticky Enrollment Bar */}
        <AnimatePresence>
          {showStickyBar && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-[#ffc107]/20 py-2.5 md:py-4"
            >
              <div className="container px-4 md:px-6">
                <div className="flex items-center justify-between gap-2 md:gap-4">
                  <div className="hidden md:block">
                    <h4 className="font-bold text-lg">{course.title} Course</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-[#ffc107] text-[#ffc107]" />
                      <span>{course.rating}</span>
                      <span>•</span>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
                    <div className="text-left md:text-right flex-1 md:flex-none">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <span className="text-lg md:text-2xl font-bold gradient-text">₹{course.price.toLocaleString()}</span>
                        <span className="text-[10px] md:text-sm text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>
                      </div>
                      <p className="text-[10px] md:text-xs text-muted-foreground">EMI ₹{Math.round(course.price / 12).toLocaleString()}/mo</p>
                    </div>
                    <Button 
                      className="neon-button text-white font-bold py-4 md:py-6 px-4 md:px-8 text-sm border border-transparent hover:border-[#ffc107]/30" 
                      onClick={handleEnroll}
                    >
                      <Zap className="w-4 h-4 mr-1.5 text-[#ffc107]" />
                      Enroll
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
      </div>
    </>
  );
};

export default CourseDetail;