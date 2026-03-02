import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, ArrowLeft, Sparkles, Palette, Zap, Gamepad2, Film, Monitor, 
  CheckCircle, Share2, Calendar, MessageCircle
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
        icon: <Film className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&q=80",
        gradient: "from-neon-purple to-neon-pink"
      },
      {
        label: "I'm obsessed with visual aesthetics",
        value: "visual",
        icon: <Palette className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
        gradient: "from-neon-cyan to-neon-purple"
      },
      {
        label: "I want to create mind-blowing effects",
        value: "effects",
        icon: <Zap className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
        gradient: "from-neon-orange to-neon-pink"
      },
      {
        label: "Gaming and interactive worlds excite me",
        value: "gaming",
        icon: <Gamepad2 className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80",
        gradient: "from-neon-green to-neon-cyan"
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
        icon: <Sparkles className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
        gradient: "from-neon-purple to-neon-cyan"
      },
      {
        label: "3D software like Maya & Blender",
        value: "3d-tools",
        icon: <Monitor className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
        gradient: "from-neon-pink to-neon-orange"
      },
      {
        label: "Design tools like Figma & Adobe",
        value: "design-tools",
        icon: <Palette className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
        gradient: "from-neon-cyan to-neon-green"
      },
      {
        label: "Video tools like Premiere & After Effects",
        value: "video-tools",
        icon: <Film className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80",
        gradient: "from-neon-orange to-neon-pink"
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
        icon: <Zap className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
        gradient: "from-neon-green to-neon-cyan"
      },
      {
        label: "Part-time (15-20 hrs/week)",
        value: "parttime",
        icon: <Film className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80",
        gradient: "from-neon-purple to-neon-pink"
      },
    ]
  },
  {
    id: 4,
    question: "What's your experience level? 📊",
    options: [
      {
        label: "Complete beginner - teach me everything!",
        value: "beginner",
        icon: <Sparkles className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
        gradient: "from-neon-green to-neon-cyan"
      },
      {
        label: "Some experience - know the basics",
        value: "intermediate",
        icon: <Monitor className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
        gradient: "from-neon-purple to-neon-pink"
      },
      {
        label: "Experienced - ready for advanced stuff",
        value: "advanced",
        icon: <Zap className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
        gradient: "from-neon-orange to-neon-pink"
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
        icon: <Film className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
        gradient: "from-amber-500 to-orange-600"
      },
      {
        label: "Gaming Companies",
        value: "gaming-company",
        icon: <Gamepad2 className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80",
        gradient: "from-neon-green to-neon-cyan"
      },
      {
        label: "Tech Giants (Google, Meta, Apple)",
        value: "tech",
        icon: <Monitor className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80",
        gradient: "from-blue-500 to-purple-600"
      },
      {
        label: "Freelance Creative Entrepreneur",
        value: "freelance",
        icon: <Palette className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80",
        gradient: "from-neon-pink to-neon-purple"
      },
    ]
  },
];

interface CourseRecommendation {
  title: string;
  slug: string;
  match: number;
  description: string;
  gradient: string;
}

const getRecommendations = (answers: string[]): CourseRecommendation[] => {
  const recommendations: CourseRecommendation[] = [];
  
  // Logic to determine recommendations based on answers
  if (answers.includes("ai-tools") || answers.includes("tech")) {
    recommendations.push({
      title: "Generative AI for Designers",
      slug: "generative-ai-for-designers",
      match: 95,
      description: "Master AI tools and become a future-ready creative",
      gradient: "from-neon-purple to-neon-cyan"
    });
  }
  
  if (answers.includes("effects") || answers.includes("3d-tools") || answers.includes("studios")) {
    recommendations.push({
      title: "VFX & Cinematic Animation",
      slug: "vfx-cinematic-animation",
      match: 92,
      description: "Create Hollywood-grade visual effects",
      gradient: "from-neon-pink to-neon-orange"
    });
  }
  
  if (answers.includes("visual") || answers.includes("design-tools") || answers.includes("tech")) {
    recommendations.push({
      title: "UI/UX & Product Design",
      slug: "ui-ux-product-design",
      match: 88,
      description: "Design intuitive digital experiences",
      gradient: "from-neon-cyan to-neon-green"
    });
  }
  
  if (answers.includes("gaming") || answers.includes("gaming-company")) {
    recommendations.push({
      title: "Game Design & Development",
      slug: "game-design",
      match: 90,
      description: "Build immersive gaming experiences",
      gradient: "from-neon-green to-neon-cyan"
    });
  }
  
  if (answers.includes("storyteller") || answers.includes("video-tools")) {
    recommendations.push({
      title: "Motion Graphics & Video",
      slug: "motion-graphics-video",
      match: 85,
      description: "Create stunning motion graphics",
      gradient: "from-neon-orange to-neon-pink"
    });
  }
  
  // If no specific matches, add default recommendations
  if (recommendations.length === 0) {
    recommendations.push(
      {
        title: "Generative AI for Designers",
        slug: "generative-ai-for-designers",
        match: 80,
        description: "Start with the future of creativity",
        gradient: "from-neon-purple to-neon-cyan"
      },
      {
        title: "UI/UX & Product Design",
        slug: "ui-ux-product-design",
        match: 75,
        description: "Build a versatile design foundation",
        gradient: "from-neon-cyan to-neon-green"
      }
    );
  }
  
  return recommendations.slice(0, 3).sort((a, b) => b.match - a.match);
};

const Quiz = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<CourseRecommendation[]>([]);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (!selectedOption) return;
    
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);
    
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate recommendations
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

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-20 pb-24">
          <div className="container max-w-5xl mx-auto px-4">
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12"
                >
                  {/* Progress Bar */}
                  <div className="mb-12">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">
                        Question {currentStep + 1} of {quizSteps.length}
                      </span>
                      <span className="text-sm font-medium text-neon-cyan">
                        {Math.round(progress)}% Complete
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan"
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
                    className="text-3xl md:text-5xl font-bold text-center mb-12 font-display"
                  >
                    {step.question}
                  </motion.h1>

                  {/* Options Grid */}
                  <motion.div
                    key={`options-${step.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`grid gap-4 mb-12 ${
                      step.options.length === 2 
                        ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto' 
                        : 'grid-cols-1 sm:grid-cols-2'
                    }`}
                  >
                    {step.options.map((option, index) => (
                      <motion.button
                        key={option.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        onClick={() => handleSelect(option.value)}
                        className={`group relative overflow-hidden rounded-3xl border-2 transition-all duration-300 text-left ${
                          selectedOption === option.value
                            ? 'border-[#ffc107] shadow-neon-lg scale-[1.02]'
                            : 'border-border/50 hover:border-neon-purple/50'
                        }`}
                      >
                        {/* Background Image */}
                        <div className="relative aspect-[3/2] overflow-hidden">
                          <img
                            src={option.image}
                            alt={option.label}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${option.gradient} opacity-60`} />
                          
                          {/* Selection Indicator */}
                          <AnimatePresence>
                            {selectedOption === option.value && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#ffc107] flex items-center justify-center"
                              >
                                <CheckCircle className="w-6 h-6 text-background" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Label */}
                        <div className="p-5 bg-card/80 backdrop-blur-sm">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center text-white`}>
                              {option.icon}
                            </div>
                            <span className="font-semibold text-lg">{option.label}</span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className="glassmorphic-button"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    
                    <Button
                      onClick={handleNext}
                      disabled={!selectedOption}
                      className={`neon-button text-white font-bold min-w-[200px] ${
                        !selectedOption ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {currentStep === quizSteps.length - 1 ? (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          See My Results ✨
                        </>
                      ) : (
                        <>
                          Next
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12"
                >
                  {/* Results Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan mx-auto mb-6 flex items-center justify-center"
                    >
                      <Sparkles className="w-12 h-12 text-white" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                      Your Creative Path is <span className="gradient-text">Ready!</span> 🎉
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Based on your answers, here are our top recommendations
                    </p>
                  </motion.div>

                  {/* Recommendations */}
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {recommendations.map((rec, index) => (
                      <motion.div
                        key={rec.slug}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className={`glass-card p-6 ${index === 0 ? 'ring-2 ring-[#ffc107]' : ''}`}
                      >
                        {index === 0 && (
                          <span className="inline-block px-3 py-1 rounded-full bg-[#ffc107]/20 text-[#ffc107] text-xs font-bold mb-4">
                            🏆 Best Match
                          </span>
                        )}
                        
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${rec.gradient} flex items-center justify-center mb-4`}>
                          <span className="text-3xl font-bold text-white">{rec.match}%</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2">{rec.title}</h3>
                        <p className="text-muted-foreground mb-4">{rec.description}</p>
                        
                        <Button
                          onClick={() => navigate(`/course/${rec.slug}`)}
                          className={index === 0 ? "neon-button text-white w-full" : "w-full"}
                          variant={index === 0 ? "default" : "outline"}
                        >
                          View Course
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Button
                      onClick={handleShare}
                      variant="outline"
                      className="glassmorphic-button"
                    >
                      <Share2 className="w-4 h-4 mr-2 text-[#ffc107]" />
                      Share Results
                    </Button>
                    <Button
                      onClick={() => navigate("/courses")}
                      variant="outline"
                      className="glassmorphic-button"
                    >
                      <Sparkles className="w-4 h-4 mr-2 text-[#ffc107]" />
                      Browse All Courses
                    </Button>
                    <Button
                      className="neon-button text-white"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Free Counseling
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Quiz;