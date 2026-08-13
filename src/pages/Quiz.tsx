import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, ArrowLeft, Sparkles, Palette, Zap, Gamepad2, Film, Monitor, 
  CheckCircle, Share2, Calendar, MessageCircle, Layers, PenTool, GraduationCap, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

interface QuizStep {
  id: number;
  question: string;
  options: {
    label: string;
    value: string;
    icon: React.ReactNode;
    image: string;
    gradient: string;
  }[];
}

const quizSteps: QuizStep[] = [
  {
    id: 1,
    question: "What's your creative vibe? 🎨",
    options: [
      {
        label: "I love bringing stories to life",
        value: "storyteller",
        icon: <Film className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gradient: "from-[#ffc107] to-[#ffb300]"
      },
      {
        label: "I'm obsessed with visual aesthetics",
        value: "visual",
        icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
        gradient: "from-[#ffd54f] to-[#ffc107]"
      },
      {
        label: "I want to create mind-blowing effects",
        value: "effects",
        icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
        gradient: "from-[#ffb300] to-[#ffd54f]"
      },
      {
        label: "Gaming and interactive worlds excite me",
        value: "gaming",
        icon: <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80",
        gradient: "from-[#ffc107] to-[#ffb300]"
      },
    ]
  },
  {
    id: 2,
    question: "What tools are you curious about? ⚡",
    options: [
      {
        label: "AI tools like Midjourney & ChatGPT",
        value: "ai-tools",
        icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
        gradient: "from-[#ffc107] to-[#ffd54f]"
      },
      {
        label: "3D software like Maya & Blender",
        value: "3d-tools",
        icon: <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
        gradient: "from-[#ffb300] to-[#ffc107]"
      },
      {
        label: "Design tools like Figma & Adobe",
        value: "design-tools",
        icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
        gradient: "from-[#ffd54f] to-[#ffb300]"
      },
      {
        label: "Video tools like Premiere & After Effects",
        value: "video-tools",
        icon: <Film className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80",
        gradient: "from-[#ffc107] to-[#ffd54f]"
      },
    ]
  },
  {
    id: 3,
    question: "How much time can you dedicate? ⏰",
    options: [
      {
        label: "Full-time (40+ hrs/week)",
        value: "fulltime",
        icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
        gradient: "from-[#ffc107] to-[#ffb300]"
      },
      {
        label: "Part-time (15-20 hrs/week)",
        value: "parttime",
        icon: <Film className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80",
        gradient: "from-[#ffd54f] to-[#ffc107]"
      },
    ]
  },
  {
    id: 4,
    question: "What's your experience level? 📊",
    options: [
      {
        label: "Complete beginner",
        value: "beginner",
        icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
        gradient: "from-[#ffc107] to-[#ffd54f]"
      },
      {
        label: "Some experience (know basics)",
        value: "intermediate",
        icon: <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
        gradient: "from-[#ffb300] to-[#ffc107]"
      },
      {
        label: "Experienced (ready for advanced)",
        value: "advanced",
        icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
        gradient: "from-[#ffd54f] to-[#ffb300]"
      },
    ]
  },
  {
    id: 5,
    question: "What's your dream career? 💼",
    options: [
      {
        label: "Hollywood/Bollywood Studios",
        value: "studios",
        icon: <Film className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
        gradient: "from-[#ffc107] to-[#ffb300]"
      },
      {
        label: "Gaming Companies",
        value: "gaming-company",
        icon: <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80",
        gradient: "from-[#ffd54f] to-[#ffc107]"
      },
      {
        label: "Tech Giants (Google, Meta, Apple)",
        value: "tech",
        icon: <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80",
        gradient: "from-[#ffb300] to-[#ffd54f]"
      },
      {
        label: "Freelance Creative Entrepreneur",
        value: "freelance",
        icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />,
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80",
        gradient: "from-[#ffc107] to-[#ffd54f]"
      },
    ]
  },
];

import generativeAiImg from '../assets/courses/Generative-ai.webp';
import vfxImg from '../assets/courses/vfx.webp';
import animationImg from '../assets/courses/Animation.webp';
import motionGraphicsImg from '../assets/courses/motion-graphic.webp';
import uiUxImg from '../assets/courses/ui-ux.webp';
import graphicDesignImg from '../assets/courses/graphic.webp';
import gameDesignImg from '../assets/courses/game_img.webp';
import videoEditingImg from '../assets/courses/Video_course.webp';
import degreeCourseImg from '../assets/courses/degree-course.webp';

// Course data from CourseGrid component
const courses = [
  {
    slug: "B.sc-digital-media-ai-filmmaking",
    title: "B.Sc in Vocational Multimedia & Animation",
    fullTitle: "B.Sc in Vocational Multimedia & Animation",
    description: "UGC-approved B.Sc degree offering intense specialization in 3D production pipelines, cinematic VFX, advanced motion graphics, and job showreels.",
    icon: GraduationCap,
    duration: "3 Years",
    image: degreeCourseImg,
    category: "Degree",
    trending: true
  },
  {
    slug: "generative-ai-for-designers",
    title: "Generative AI",
    fullTitle: "Generative AI for Designers",
    description: "Master Midjourney, Stable Diffusion, and advanced prompt engineering workflows for rapid visual conceptualization.",
    icon: Sparkles,
    duration: "2 - 12 Months",
    image: generativeAiImg,
    category: "AI",
    trending: true,
    isCombined: true,
    subCourses: [
      { slug: "master-in-gen-ai", title: "MASTER IN GEN AI", image: generativeAiImg },
      { slug: "gen-2-0-ai-generalist-course", title: "GEN 2.0: AI GENERALIST COURSE", image: generativeAiImg }
    ]
  },
  {
    slug: "game-design",
    title: "Game Design",
    fullTitle: "Game Design",
    description: "Learn level mechanics, environment asset creation, and interactive game storytelling using Unreal Engine and Unity software.",
    icon: Gamepad2,
    duration: "12-24 Months",
    image: gameDesignImg,
    category: "Gaming",
    trending: false,
    isCombined: true,
    subCourses: [
      { slug: "dreamengine-animation-unreal", title: "DreamEngine: Animation with Unreal", image: gameDesignImg },
      { slug: "game-design", title: "Game Design", image: gameDesignImg }
    ]
  },
  {
    slug: "animation",
    title: "Animation",
    fullTitle: "Animation",
    description: "Complete specialization covering character modeling, rigging, texturing, and 3D rendering workflows in Autodesk Maya.",
    icon: Film,
    duration: "12-36 Months",
    image: animationImg,
    category: "Animation",
    trending: true,
    isCombined: true,
    subCourses: [
      { slug: "animation", title: "Animation", image: animationImg },
      { slug: "expert-program-digital-content-animation", title: "Expert Program in Digital Content & Animation", image: motionGraphicsImg },
      { slug: "rendercraft-3d-animation-vfx", title: "RenderCraft: 3D Animation & VFX", image: vfxImg }
    ]
  },
  {
    slug: "vfx",
    title: "VFX",
    fullTitle: "VFX",
    description: "Master node-based compositing, green screen chroma keying, rotoscoping, and matchmoving utilizing industry-standard Nuke software.",
    icon: Film,
    duration: "12-36 Months",
    image: vfxImg,
    category: "VFX",
    trending: false,
    isCombined: true,
    subCourses: [
      { slug: "animation", title: "Animation", image: animationImg },
      { slug: "rendercraft-3d-animation-vfx", title: "RenderCraft: 3D Animation & VFX", image: vfxImg }
    ]
  },
  {
    slug: "motion-graphics-video-editing",
    title: "Motion Graphics & Video Editing",
    fullTitle: "Motion Graphics & Video Editing",
    description: "Create cinematic title animations, commercial ads, and high-end video montages using Adobe Premiere Pro and After Effects.",
    icon: Layers,
    duration: "12 Months",
    image: motionGraphicsImg,
    category: "Animation",
    trending: false,
    isCombined: true,
    subCourses: [
      { slug: "video-editing", title: "Video Editing", image: videoEditingImg },
      { slug: "digital-content-motion-design", title: "Digital Content & Motion Design", image: motionGraphicsImg }
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    fullTitle: "UI/UX Design",
    description: "Master user research frameworks, component-driven wireframing, high-fidelity Figma prototyping, and mobile app design systems.",
    icon: Palette,
    duration: "9 Months",
    image: uiUxImg,
    category: "Design",
    trending: true
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    fullTitle: "Graphic Design",
    description: "Learn design layouts, typography hierarchies, vector illustrations, and commercial branding using Illustrator and Photoshop.",
    icon: PenTool,
    duration: "7 Months",
    image: graphicDesignImg,
    category: "Design",
    trending: false
  }
];

interface CourseRecommendation {
  title: string;
  slug: string;
  match: number;
  description: string;
  gradient: string;
}

// UPDATED: Correct slugs matching QuizCourseDetail.tsx
const getRecommendations = (answers: string[]): CourseRecommendation[] => {
  const recommendations: CourseRecommendation[] = [];
  
  if (answers.includes("ai-tools") || answers.includes("tech")) {
    recommendations.push({
      title: "MASTER IN GEN AI",
      slug: "master-in-gen-ai",
      match: 95,
      description: "Master generative AI tools and become a future-ready creative",
      gradient: "from-[#ffc107] to-[#ffb300]"
    });
  }
  
  if (answers.includes("effects") || answers.includes("3d-tools") || answers.includes("studios")) {
    recommendations.push({
      title: "RenderCraft: 3D Animation & VFX",
      slug: "rendercraft-3d-animation-vfx",
      match: 92,
      description: "Create Hollywood-grade visual effects",
      gradient: "from-[#ffd54f] to-[#ffc107]"
    });
  }
  
  if (answers.includes("visual") || answers.includes("design-tools") || answers.includes("tech")) {
    recommendations.push({
      title: "UI/UX Design",
      slug: "ui-ux-design",
      match: 88,
      description: "Design intuitive digital experiences",
      gradient: "from-[#ffb300] to-[#ffd54f]"
    });
  }
  
  if (answers.includes("gaming") || answers.includes("gaming-company")) {
    recommendations.push({
      title: "DreamEngine: Animation with Unreal",
      slug: "dreamengine-animation-unreal",
      match: 90,
      description: "Build immersive Unreal Engine experiences for games and interactive media",
      gradient: "from-[#ffc107] to-[#ffb300]"
    });
  }
  
  if (answers.includes("storyteller") || answers.includes("video-tools")) {
    recommendations.push({
      title: "Video Editing",
      slug: "video-editing",
      match: 85,
      description: "Create professional videos with motion graphics and editing techniques",
      gradient: "from-[#ffd54f] to-[#ffc107]"
    });
  }

  // Add Graphic Design recommendation
  if (answers.includes("visual") || answers.includes("design-tools")) {
    recommendations.push({
      title: "Graphic Design",
      slug: "digital-graphic-design-essentials",
      match: 87,
      description: "Master digital graphic design fundamentals and branding",
      gradient: "from-[#ffd54f] to-[#ffb300]"
    });
  }

  // Animation course recommendation
  if (answers.includes("storyteller") || answers.includes("animation")) {
    recommendations.push({
      title: "Expert Program in Digital Content & Animation",
      slug: "expert-program-digital-content-animation",
      match: 86,
      description: "Master digital content and animation workflows",
      gradient: "from-[#ffc107] to-[#ffb300]"
    });
  }
  
  // Remove duplicates and limit to 3
  const uniqueRecs = recommendations.filter((rec, index, self) => 
    index === self.findIndex((r) => r.slug === rec.slug)
  );
  
  return uniqueRecs.slice(0, 3).sort((a, b) => b.match - a.match);
};

const Quiz = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<CourseRecommendation[]>([]);
  const [showCourseSelection, setShowCourseSelection] = useState(false);
  const [selectedCombinedCourse, setSelectedCombinedCourse] = useState<typeof courses[0] | null>(null);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    
    // Auto-advance to next step after selection
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null); // Reset for next question
    } else {
      const recs = getRecommendations(newAnswers);
      setRecommendations(recs);
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedOption(answers[currentStep - 1] || null);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleShare = () => {
    const text = `I found my creative path at Design Engine! 🎨✨ My top recommendation: ${recommendations[0]?.title}. Take the quiz yourself!`;
    if (navigator.share) {
      navigator.share({ text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(text + " " + window.location.href);
      toast.success("Link copied to clipboard! 📋");
    }
  };

  const handleViewCourse = (slug: string) => {
    const course = courses.find((c) => c.slug === slug);
    if (course?.isCombined) {
      setSelectedCombinedCourse(course);
      setShowCourseSelection(true);
    } else {
      navigate(`/quiz-course/${slug}`);
    }
  };

  const step = quizSteps[currentStep];
  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  return (
    <>
      <Helmet>
        <title>Creative Path Quiz | Find Your Perfect Course</title>
        <meta 
          name="description" 
          content="Take our interactive quiz to discover which creative career path suits you best. Get personalized course recommendations based on your interests and goals." 
        />
      </Helmet>

      <div className="min-h-screen bg-[#030306] text-white">
        <Navbar />
        
        {/* Golden orbs background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#ffc107]/10 rounded-full blur-[80px] md:blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#ffd54f]/10 rounded-full blur-[70px] md:blur-[100px]"
          />
        </div>

        {/* 3D Grid Effect */}
        <div className="fixed inset-0 opacity-10 md:opacity-15 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,193,7,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,193,7,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              transform: "perspective(500px) rotateX(60deg)"
            }}
          />
        </div>

        <main className="relative pt-20 md:pt-24 pb-16 md:pb-24 z-10">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-8 md:py-12"
                >
                  {/* Progress Bar */}
                  <div className="mb-8 md:mb-10 max-w-2xl mx-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white/60">
                        Question {currentStep + 1} of {quizSteps.length}
                      </span>
                      <span className="text-sm font-medium text-[#ffc107]">
                        {Math.round(progress)}% Complete
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <motion.h1
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 font-display text-white"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {step.question}
                  </motion.h1>

                  {/* Options Grid */}
                  <motion.div
                    key={`options-${step.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`grid gap-4 md:gap-5 mb-8 md:mb-10 ${
                      step.options.length === 2 
                        ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto' 
                        : step.options.length === 3
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto'
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                    }`}
                  >
                    {step.options.map((option, index) => (
                      <motion.button
                        key={option.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        onClick={() => handleSelect(option.value)}
                        className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 text-left ${
                          selectedOption === option.value
                            ? 'border-[#ffc107] shadow-[0_0_25px_rgba(255,193,7,0.4)] scale-[1.02]'
                            : 'border-white/10 hover:border-[#ffc107]/50 hover:scale-[1.01]'
                        }`}
                      >
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                          <img
                            src={option.image}
                            alt={option.label}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t ${option.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                          
                          {/* Selection Indicator */}
                          <AnimatePresence>
                            {selectedOption === option.value && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="absolute top-3 right-3 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-[#ffc107] to-[#ffb300] flex items-center justify-center shadow-lg"
                              >
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Label Container */}
                        <div className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm border-t-2 border-[#ffc107]/20">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${option.gradient} flex items-center justify-center text-black shadow-lg flex-shrink-0`}>
                              {option.icon}
                            </div>
                            <span className="text-sm sm:text-base font-medium text-white">
                              {option.label}
                            </span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-center items-center max-w-md mx-auto gap-3">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className="bg-white/5 backdrop-blur-sm border-2 border-[#ffc107]/20 text-white hover:bg-white/10 hover:border-[#ffc107]/50 disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:border-[#ffc107]/20 transition-all duration-300 text-sm px-6 py-2 h-auto rounded-lg"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2 text-[#ffc107]" />
                      Back
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 md:py-12"
                >
                  {/* Results Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8 md:mb-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#ffc107] via-[#ffd54f] to-[#ffb300] mx-auto mb-4 flex items-center justify-center shadow-2xl"
                    >
                      <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
                    </motion.div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 font-display text-white">
                      Your Creative Path is{" "}
                      <span className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent">
                        Ready!
                      </span>
                    </h1>
                    <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
                      Based on your answers, here are your personalized course recommendations
                    </p>
                  </motion.div>

                  {/* Recommendations Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8 md:mb-10 max-w-6xl mx-auto">
                    {recommendations.map((rec, index) => (
                      <motion.div
                        key={rec.slug}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className={`relative bg-white/5 backdrop-blur-xl border-2 ${index === 0 ? 'border-[#ffc107]' : 'border-[#ffc107]/20'} rounded-xl p-4 md:p-5 hover:border-[#ffc107]/50 transition-all duration-300 hover:scale-[1.02]`}
                      >
                        {index === 0 && (
                          <div className="absolute -top-3 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-black text-xs font-bold shadow-lg">
                            🏆 Best Match
                          </div>
                        )}
                        
                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rec.gradient} flex items-center justify-center border-2 border-[#ffc107]/30`}>
                            <span className="text-lg font-bold text-black">{rec.match}%</span>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-white/40">Match</div>
                            <div className="text-sm font-bold text-[#ffc107]">Score</div>
                          </div>
                        </div>
                        
                        <h3 className="text-base sm:text-lg font-bold mb-2 text-white">
                          {rec.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/60 mb-3 line-clamp-2">
                          {rec.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <Button
                            onClick={() => handleViewCourse(rec.slug)}
                            className={index === 0 
                              ? "flex-1 bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold text-xs sm:text-sm py-2 h-auto rounded-lg hover:shadow-[0_0_25px_rgba(255,193,7,0.5)] transition-all duration-300" 
                              : "flex-1 bg-white/5 border-2 border-[#ffc107]/20 text-white hover:bg-white/10 hover:border-[#ffc107]/50 text-xs sm:text-sm py-2 h-auto rounded-lg transition-all duration-300"
                            }
                          >
                            View Course
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 inline-block" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-3 justify-center"
                  >
                    <Button
                      onClick={handleShare}
                      variant="outline"
                      className="bg-white/5 backdrop-blur-sm border-2 border-[#ffc107]/20 text-white hover:bg-white/10 hover:border-[#ffc107]/50 transition-all duration-300 text-sm px-5 py-2 h-auto rounded-lg"
                    >
                      <Share2 className="w-4 h-4 mr-2 text-[#ffc107]" />
                      Share Results
                    </Button>
                    <Button
                      onClick={() => navigate("/courses")}
                      variant="outline"
                      className="bg-white/5 backdrop-blur-sm border-2 border-[#ffc107]/20 text-white hover:bg-white/10 hover:border-[#ffc107]/50 transition-all duration-300 text-sm px-5 py-2 h-auto rounded-lg"
                    >
                      <Sparkles className="w-4 h-4 mr-2 text-[#ffc107]" />
                      Browse All Courses
                    </Button>
                    <Button
                      onClick={() => {
                        // Reset quiz
                        setCurrentStep(0);
                        setAnswers([]);
                        setSelectedOption(null);
                        setShowResults(false);
                      }}
                      className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold text-sm px-5 py-2 h-auto rounded-lg hover:shadow-[0_0_25px_rgba(255,193,7,0.5)] transition-all duration-300"
                    >
                      <Calendar className="w-4 h-4 mr-2 text-black" />
                      Retake Quiz
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        <Footer />
      </div>

      {/* Course Selection Modal */}
      <AnimatePresence>
        {showCourseSelection && selectedCombinedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCourseSelection(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0a0a0f] border border-[#ffc107]/20 rounded-3xl p-6 md:p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-8 md:mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Choose Your Path
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  Select the course that best fits your creative journey
                </p>
              </div>

              <div className={`grid gap-4 md:gap-6 mb-6 md:mb-8 ${
                selectedCombinedCourse.subCourses?.length === 2
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {selectedCombinedCourse.subCourses?.map((subCourse, index) => (
                  <motion.div
                    key={subCourse.slug}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      navigate(`/quiz-course/${subCourse.slug}`);
                      setShowCourseSelection(false);
                    }}
                  >
                    <div className="rounded-xl md:rounded-2xl overflow-hidden bg-[#1a1a1f] border border-[#ffc107]/20 hover:border-[#ffc107] transition-all duration-300">
                      <div className="relative h-40 md:h-48 overflow-hidden">
                        <img
                          src={subCourse.image}
                          alt={subCourse.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>

                      <div className="p-3 md:p-4 text-center">
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1 line-clamp-2">
                          {subCourse.title}
                        </h4>
                        <div className="flex items-center justify-center gap-1 text-[#ffc107] text-xs md:text-sm font-medium">
                          Explore Course
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center pt-4 border-t border-[#ffc107]/10">
                <button
                  onClick={() => setShowCourseSelection(false)}
                  className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors px-4 py-2"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Quiz;