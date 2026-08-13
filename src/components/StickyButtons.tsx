import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const StickyButtons = () => {
  const buttons = [
    {
      icon: MessageCircle,
      href: "https://wa.me/918796151653",
      color: "bg-[#25D366]",
      glowMain: "rgba(37, 211, 102, 0.7)",
      glowSoft: "rgba(37, 211, 102, 0.25)",
    },
    {
      icon: Phone,
      href: "tel:+918796151653",
      color: "bg-[#ffc107]",
      glowMain: "rgba(255, 193, 7, 0.7)",
      glowSoft: "rgba(255, 193, 7, 0.25)",
    },
  ];

  const WhatsAppIcon = buttons[0].icon;
  const PhoneIcon = buttons[1].icon;

  // detect reduced-motion or small screens for lighter animations
  const [reduced, setReduced] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // don't show sticky contact buttons on admin pages
  if (location?.pathname?.includes("/admin")) return null;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.innerWidth < 768;
    setReduced(!!(prefersReduced || small));

    const activateButtons = () => {
      setIsVisible(true);
    };

    window.addEventListener('scroll', activateButtons, { passive: true });
    window.addEventListener('mousemove', activateButtons);
    window.addEventListener('touchstart', activateButtons, { passive: true });
    window.addEventListener('keydown', activateButtons);

    return () => {
      window.removeEventListener('scroll', activateButtons);
      window.removeEventListener('mousemove', activateButtons);
      window.removeEventListener('touchstart', activateButtons);
      window.removeEventListener('keydown', activateButtons);
    };
  }, []);

  return (
    <motion.div 
      className="fixed right-2 z-50 flex flex-col gap-[10px] bottom-20 md:bottom-24"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8
      }}
      transition={{ 
        duration: 0.4, 
        ease: [0.175, 0.885, 0.32, 1.275] // Spring-like easing
      }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      
      {/* WhatsApp */}
      <motion.a
        href={buttons[0].href}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative w-10 h-10 rounded-full flex items-center justify-center ${buttons[0].color} text-white shadow-lg`}
        {...(reduced ? { whileHover: { scale: 1.02 }, whileTap: { scale: 0.97 } } : {
          whileHover: { scale: 1.08 },
          whileTap: { scale: 0.96 },
          animate: {
            scale: [1, 1.06, 1],
            boxShadow: [
              `0 4px 6px rgba(0,0,0,0.1), 0 0 10px 2px ${buttons[0].glowMain}, 0 0 30px 10px ${buttons[0].glowSoft}, 0 0 60px 20px ${buttons[0].glowSoft}`,
              `0 4px 6px rgba(0,0,0,0.1), 0 0 20px 6px ${buttons[0].glowMain}, 0 0 50px 18px ${buttons[0].glowSoft}, 0 0 90px 30px ${buttons[0].glowSoft}`,
              `0 4px 6px rgba(0,0,0,0.1), 0 0 10px 2px ${buttons[0].glowMain}, 0 0 30px 10px ${buttons[0].glowSoft}, 0 0 60px 20px ${buttons[0].glowSoft}`,
            ],
          },
          transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
        })}
      >
        <WhatsAppIcon className="text-white" style={{ width: '20px', height: '20px' }} />
      </motion.a>

      {/* Phone */}
      <motion.a
        href={buttons[1].href}
        className={`relative w-10 h-10 rounded-full flex items-center justify-center ${buttons[1].color} text-black shadow-lg`}
        {...(reduced ? { whileHover: { scale: 1.02 }, whileTap: { scale: 0.97 } } : {
          whileHover: { scale: 1.08 },
          whileTap: { scale: 0.96 },
          animate: {
            scale: [1, 1.06, 1],
            boxShadow: [
              `0 4px 6px rgba(0,0,0,0.1), 0 0 10px 2px ${buttons[1].glowMain}, 0 0 30px 10px ${buttons[1].glowSoft}, 0 0 60px 20px ${buttons[1].glowSoft}`,
              `0 4px 6px rgba(0,0,0,0.1), 0 0 20px 6px ${buttons[1].glowMain}, 0 0 50px 18px ${buttons[1].glowSoft}, 0 0 90px 30px ${buttons[1].glowSoft}`,
              `0 4px 6px rgba(0,0,0,0.1), 0 0 10px 2px ${buttons[1].glowMain}, 0 0 30px 10px ${buttons[1].glowSoft}, 0 0 60px 20px ${buttons[1].glowSoft}`,
            ],
          },
          transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
        })}
      >
        <PhoneIcon className="text-black" style={{ width: '20px', height: '20px' }} />
      </motion.a>
    </motion.div>
  );
};

export default StickyButtons;