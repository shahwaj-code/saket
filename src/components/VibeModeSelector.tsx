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
    gradient: "from-[#ffc107] via-[#ffd54f] to-[#ffb300]",
    preview: "bg-gradient-to-br from-[#ffc107]/80 via-[#ffd54f]/80 to-[#ffb300]/80"
  },
  {
    id: "retro" as VibeMode,
    label: "Y2K Retro",
    icon: Sparkles,
    description: "Nostalgic vibes",
    gradient: "from-[#ffd54f] via-[#ffc107] to-[#ffb300]",
    preview: "bg-gradient-to-br from-[#ffb300]/80 via-[#ffd54f]/80 to-[#ffc107]/80"
  },
  {
    id: "minimalist" as VibeMode,
    label: "Minimalist",
    icon: Monitor,
    description: "Clean & sleek",
    gradient: "from-[#ffc107]/70 via-[#ffd54f]/70 to-[#ffb300]/70",
    preview: "bg-gradient-to-br from-[#030306] via-[#1a1a1a] to-[#333333]"
  },
];

const VibeModeSelector = ({ currentMode, onChange }: VibeModeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-[#ffc107]/20 hover:border-[#ffc107]/50 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette className="w-4 h-4 text-[#ffc107]" />
        <span className="text-sm font-medium text-white">Vibe Mode</span>
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
              className="absolute top-full mt-2 right-0 z-50 w-64 p-2 rounded-2xl bg-[#030306] border border-[#ffc107]/20 shadow-xl backdrop-blur-xl"
            >
              <div className="text-xs text-white/40 px-3 py-2 mb-1 border-b border-[#ffc107]/10">
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
                        ? 'bg-gradient-to-r ' + mode.gradient + ' text-black border-[#ffc107]/50 shadow-lg'
                        : 'bg-white/5 border-[#ffc107]/10 hover:border-[#ffc107]/30 hover:bg-white/10'
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {/* Preview Circle */}
                    <div className={`w-10 h-10 rounded-xl ${mode.preview} flex items-center justify-center border ${isActive ? 'border-white/30' : 'border-[#ffc107]/20'}`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-white'}`} />
                    </div>
                    
                    <div className="text-left flex-1">
                      <div className={`font-semibold ${isActive ? 'text-black' : 'text-white'}`}>
                        {mode.label}
                      </div>
                      <div className={`text-xs ${isActive ? 'text-black/70' : 'text-white/40'}`}>
                        {mode.description}
                      </div>
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center"
                      >
                        <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}

              {/* Footer note */}
              <div className="mt-2 pt-2 text-center border-t border-[#ffc107]/10">
                <span className="text-[10px] text-white/40 flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#ffc107]" />
                  Pick your vibe
                  <Sparkles className="w-3 h-3 text-[#ffd54f]" />
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