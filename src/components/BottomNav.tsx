import { motion } from "framer-motion";
import { Home, BookOpen, Users, MessageSquare, Sparkles } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: BookOpen, label: "Courses", href: "#courses" },
  { icon: Users, label: "Gallery", href: "#gallery" },
  { icon: MessageSquare, label: "Contact", href: "#contact" },
  { icon: Sparkles, label: "Quiz", href: "#quiz", isSpecial: true },
];

interface BottomNavProps {
  onQuizClick?: () => void;
}

const BottomNav = ({ onQuizClick }: BottomNavProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number, href: string, isSpecial?: boolean) => {
    setActiveIndex(index);
    
    if (isSpecial && onQuizClick) {
      onQuizClick();
      return;
    }
    
    if (href !== "#") {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", damping: 20 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden"
    >
      <div className="flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full glass-card border border-border/50">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeIndex === index;
          
          return (
            <motion.button
              key={item.label}
              onClick={() => handleClick(index, item.href, item.isSpecial)}
              className={`relative flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-300 ${
                item.isSpecial 
                  ? 'bg-gradient-to-br from-neon-purple to-neon-cyan text-white -mt-5 sm:-mt-6 shadow-neon'
                  : isActive 
                    ? 'text-neon-cyan' 
                    : 'text-muted-foreground'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {isActive && !item.isSpecial && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-neon-purple/20"
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                />
              )}
              <Icon className={`w-4 h-4 sm:w-5 sm:h-5 relative z-10 ${item.isSpecial ? 'w-5 h-5 sm:w-6 sm:h-6' : ''}`} />
              <span className={`text-[9px] sm:text-[10px] mt-0.5 relative z-10 ${item.isSpecial ? 'hidden' : ''}`}>
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default BottomNav;
