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
        gradient: "from-slate-800 to-slate-600"
      },
      {
        label: "Maximalist & Bold",
        value: "maximalist",
        icon: <Sparkles className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80",
        gradient: "from-neon-purple to-neon-pink"
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
        gradient: "from-neon-cyan to-neon-purple"
      },
      {
        label: "VFX & 3D Magic",
        value: "vfx",
        icon: <Zap className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
        gradient: "from-neon-orange to-neon-pink"
      },
      {
        label: "AI & Generative Art",
        value: "ai",
        icon: <Sparkles className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
        gradient: "from-neon-purple to-neon-cyan"
      },
      {
        label: "Game Design",
        value: "gaming",
        icon: <Gamepad2 className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80",
        gradient: "from-neon-green to-neon-cyan"
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
        label: "Tech Giants (Google, Meta)",
        value: "tech",
        icon: <Monitor className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80",
        gradient: "from-blue-500 to-purple-600"
      },
      {
        label: "Freelance Creative",
        value: "freelance",
        icon: <Palette className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80",
        gradient: "from-neon-pink to-neon-purple"
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
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
      >
        {/* VHS Scanlines Overlay */}
        <div className="absolute inset-0 pointer-events-none vhs-lines opacity-10" />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-4xl"
        >
          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute -top-12 right-0 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skip for now →
          </button>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {quizSteps.length}
              </span>
              <span className="text-sm font-medium text-neon-cyan">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan"
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
            className="text-3xl md:text-4xl font-bold text-center mb-10 font-display"
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
                    ? 'border-neon-cyan shadow-neon-lg scale-[1.02]'
                    : 'border-border/50 hover:border-neon-purple/50'
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
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-neon-cyan flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Label */}
                <div className="p-4 bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center text-white`}>
                      {option.icon}
                    </div>
                    <span className="font-semibold text-left">{option.label}</span>
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
              className={`min-w-[200px] neon-button float-hover text-white font-bold rounded-full ${
                !selectedOption ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {currentStep === quizSteps.length - 1 ? (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Show My Path ✨
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
      </motion.div>
    </AnimatePresence>
  );
};

export default StyleQuiz;
