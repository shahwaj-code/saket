import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface KineticTextProps {
  children: string;
  className?: string;
  delay?: number;
  type?: "word" | "letter";
  gradient?: boolean;
}

export const KineticText = ({ 
  children, 
  className = "", 
  delay = 0,
  type = "word",
  gradient = false
}: KineticTextProps) => {
  const items = type === "word" ? children.split(" ") : children.split("");
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === "word" ? 0.12 : 0.03,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap justify-center ${className}`}
      style={{ perspective: "1000px" }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className={`inline-block ${gradient ? 'bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent' : ''}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {item}
          {type === "word" && index < items.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Glitch text effect with gold tones
export const GlitchText = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.span 
      className={`relative inline-block ${className}`}
      whileHover="glitch"
    >
      <motion.span
        className="absolute inset-0 text-[#ffc107]"
        variants={{
          glitch: {
            x: [0, -3, 3, -2, 2, 0],
            opacity: [1, 0.8, 1, 0.9, 1],
            transition: { duration: 0.3, repeat: 2 }
          }
        }}
        style={{ clipPath: "inset(0 0 50% 0)" }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-[#ffd54f]"
        variants={{
          glitch: {
            x: [0, 3, -3, 2, -2, 0],
            opacity: [1, 0.9, 1, 0.8, 1],
            transition: { duration: 0.3, repeat: 2 }
          }
        }}
        style={{ clipPath: "inset(50% 0 0 0)" }}
      >
        {children}
      </motion.span>
      <span className="relative text-white">{children}</span>
    </motion.span>
  );
};

// Sculptural 3D text with gold lighting
export const Sculptural3DText = ({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string 
}) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ rotateY: -15, rotateX: 10 }}
      animate={{ rotateY: 0, rotateX: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      whileHover={{ 
        rotateY: 5, 
        rotateX: -5,
        transition: { duration: 0.3 }
      }}
      style={{ 
        perspective: "1000px",
        transformStyle: "preserve-3d",
        textShadow: `
          1px 1px 0 rgba(255, 193, 7, 0.3),
          2px 2px 0 rgba(255, 193, 7, 0.25),
          3px 3px 0 rgba(255, 213, 79, 0.2),
          4px 4px 0 rgba(255, 213, 79, 0.15),
          5px 5px 10px rgba(255, 179, 0, 0.3)
        `,
        color: 'white'
      }}
    >
      {children}
    </motion.span>
  );
};

export default KineticText;