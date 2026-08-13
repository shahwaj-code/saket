import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Sparkles, Palette, Zap, Gamepad2, Film, Monitor } from "lucide-react";
import { Button } from "./ui/button";

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
    question: "What's your vibe? 🎨",
    options: [
      {
        label: "Minimalist & Clean",
        value: "minimalist",
        icon: <Monitor className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
        gradient: "from-[#ffc107] to-[#ffb300]"
      },
      {
        label: "Maximalist & Bold",
        value: "maximalist",
        icon: <Sparkles className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80",
        gradient: "from-[#ffd54f] to-[#ffc107]"
      },
    ]
  },
  {
    id: 2,
    question: "Pick your creative superpower ⚡",
    options: [
      {
        label: "Animation & Motion",
        value: "animation",
        icon: <Film className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=400&q=80",
        gradient: "from-[#ffc107] to-[#ffd54f]"
      },
      {
        label: "VFX & 3D Magic",
        value: "vfx",
        icon: <Zap className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
        gradient: "from-[#ffb300] to-[#ffc107]"
      },
      {
        label: "AI & Generative Art",
        value: "ai",
        icon: <Sparkles className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
        gradient: "from-[#ffd54f] to-[#ffb300]"
      },
      {
        label: "Game Design",
        value: "gaming",
        icon: <Gamepad2 className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80",
        gradient: "from-[#ffc107] to-[#ffb300]"
      },
    ]
  },
  {
    id: 3,
    question: "What's your dream gig? 💼",
    options: [
      {
        label: "Bollywood/Hollywood Studios",
        value: "studios",
        icon: <Film className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
        gradient: "from-[#ffc107] to-[#ffb300]"
      },
      {
        label: "Gaming Companies",
        value: "gaming-company",
        icon: <Gamepad2 className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80",
        gradient: "from-[#ffd54f] to-[#ffc107]"
      },
      {
        label: "Tech Giants (Google, Meta)",
        value: "tech",
        icon: <Monitor className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80",
        gradient: "from-[#ffb300] to-[#ffd54f]"
      },
      {
        label: "Freelance Creative",
        value: "freelance",
        icon: <Palette className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80",
        gradient: "from-[#ffc107] to-[#ffd54f]"
      },
    ]
  }
];

interface StyleQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (answers: string[]) => void;
}

const StyleQuiz = ({ isOpen, onClose, onComplete }: StyleQuizProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

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
      onComplete(newAnswers);
      onClose();
    }
  };

  const handleSkip = () => {
    onClose();
  };

  if (!isOpen) return null;

  const step = quizSteps[currentStep];
  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030306] p-4"
      >
        {/* Golden Orbs Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#ffc107]/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-[420px] h-[420px] bg-[#ffd54f]/10 rounded-full blur-[80px]"
          />
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#ffb300]/10 rounded-full blur-[70px]"
          />
        </div>

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
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-4xl z-10"
        >
          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute -top-12 right-0 text-sm text-white/60 hover:text-[#ffc107] transition-colors"
          >
            Skip for now →
          </button>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white/60">
                Step {currentStep + 1} of {quizSteps.length}
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
          <motion.h2
            key={step.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-3xl md:text-4xl font-bold text-center mb-10 font-display text-white"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {step.question}
          </motion.h2>

          {/* Options Grid */}
          <motion.div
            key={`options-${step.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`grid gap-4 mb-10 ${
              step.options.length === 2 
                ? 'grid-cols-1 sm:grid-cols-2' 
                : 'grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {step.options.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                onClick={() => handleSelect(option.value)}
                className={`group relative overflow-hidden rounded-3xl border-2 transition-all duration-300 ${
                  selectedOption === option.value
                    ? 'border-[#ffc107] shadow-[0_0_30px_rgba(255,193,7,0.3)] scale-[1.02]'
                    : 'border-white/10 hover:border-[#ffc107]/50'
                }`}
              >
                {/* Background Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
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
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#ffc107] to-[#ffb300] flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Label */}
                <div className="p-4 bg-white/5 backdrop-blur-sm border-t border-[#ffc107]/20">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center text-black`}>
                      {option.icon}
                    </div>
                    <span className="font-semibold text-left text-white">{option.label}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Next Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleNext}
              disabled={!selectedOption}
              className={`min-w-[200px] bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all duration-300 ${
                !selectedOption ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {currentStep === quizSteps.length - 1 ? (
                <>
                  <Sparkles className="w-5 h-5 mr-2 text-black" />
                  Show My Path ✨
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-5 h-5 ml-2 text-black" />
                </>
              )}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StyleQuiz;