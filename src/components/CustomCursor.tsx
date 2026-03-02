import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Check for hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        !!target.closest('.cursor-pointer') ||
        getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isClickable);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 16),
          y: mousePosition.y - (isHovering ? 24 : 16),
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div 
          className={`rounded-full border-2 transition-colors duration-200 ${
            isHovering 
              ? 'w-12 h-12 border-apple-blue bg-apple-blue/10' 
              : 'w-8 h-8 border-foreground/50'
          }`}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.2,
        }}
      >
        <div 
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
            isHovering ? 'bg-apple-blue' : 'bg-foreground'
          }`}
        />
      </motion.div>

      {/* Hide default cursor */}
      <style>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
