import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Palette, Sparkles, Monitor, Zap } from "lucide-react";

type VibeMode = "cyberpunk" | "retro" | "minimalist";

interface VibeModeProps {
  currentMode: VibeMode;
  onChange: (mode: VibeMode) => void;
}

const vibeModes = [
  {
    id: "cyberpunk" as VibeMode,
    label: "Cyberpunk",
    icon: Zap,
    description: "Neon dreams",
    gradient: "from-neon-purple to-neon-cyan",
    preview: "bg-gradient-to-br from-purple-900 via-black to-cyan-900"
  },
  {
    id: "retro" as VibeMode,
    label: "Y2K Retro",
    icon: Sparkles,
    description: "Nostalgic vibes",
    gradient: "from-neon-pink to-neon-orange",
    preview: "bg-gradient-to-br from-pink-500 via-purple-600 to-orange-400"
  },
  {
    id: "minimalist" as VibeMode,
    label: "Minimalist",
    icon: Monitor,
    description: "Clean & sleek",
    gradient: "from-slate-400 to-slate-600",
    preview: "bg-gradient-to-br from-slate-800 to-slate-900"
  },
];

const VibeModeSelector = ({ currentMode, onChange }: VibeModeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:border-[#ffc107]/50 transition-colors border border-transparent"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette className="w-4 h-4 text-[#ffc107]" />
        <span className="text-sm font-medium">Vibe Mode</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#ffc107]"
        >
          ▼
        </motion.span>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="absolute top-full mt-2 right-0 z-50 w-64 p-2 rounded-2xl glass-card border border-[#ffc107]/20"
            >
              <div className="text-xs text-muted-foreground px-3 py-2 mb-1 border-b border-[#ffc107]/10">
                Choose your aesthetic
              </div>
              
              {vibeModes.map((mode) => {
                const Icon = mode.icon;
                const isActive = currentMode === mode.id;
                
                return (
                  <motion.button
                    key={mode.id}
                    onClick={() => {
                      onChange(mode.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 border ${
                      isActive 
                        ? 'bg-gradient-to-r ' + mode.gradient + ' text-white border-[#ffc107]/30'
                        : 'hover:bg-secondary border-transparent hover:border-[#ffc107]/30'
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {/* Preview Circle */}
                    <div className={`w-10 h-10 rounded-xl ${mode.preview} flex items-center justify-center border border-[#ffc107]/20`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="text-left flex-1">
                      <div className="font-semibold">{mode.label}</div>
                      <div className={`text-xs ${isActive ? 'text-white/80' : 'text-muted-foreground'}`}>
                        {mode.description}
                      </div>
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 rounded-full bg-[#ffc107]/20 flex items-center justify-center border border-[#ffc107]/50"
                      >
                        <svg className="w-3 h-3 text-[#ffc107]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}

              {/* Footer note */}
              <div className="mt-2 pt-2 text-center border-t border-[#ffc107]/10">
                <span className="text-[10px] text-muted-foreground flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#ffc107]" />
                  Pick your vibe
                  <Sparkles className="w-3 h-3 text-[#ffc107]" />
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VibeModeSelector;