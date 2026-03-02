import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEnabled?: boolean;
}

const TiltCard = ({ 
  children, 
  className = "", 
  tiltAmount = 10,
  glareEnabled = true 
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPercent = mouseX / width - 0.5;
    const yPercent = mouseY / height - 0.5;
    
    x.set(xPercent);
    y.set(yPercent);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* Content */}
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>

      {/* Glare effect */}
      {glareEnabled && (
        <motion.div
          className="absolute inset-0 rounded-inherit pointer-events-none overflow-hidden rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 50%)`,
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
