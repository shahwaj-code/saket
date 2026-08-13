import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, TrendingUp, Sparkles } from "lucide-react";

const LiveEnrollmentCounter = () => {
  const [enrollments, setEnrollments] = useState(2847);
  const [recentEnrollments, setRecentEnrollments] = useState<{ name: string; course: string; time: string }[]>([
    { name: "Priya S.", course: "Animation", time: "2 min ago" },
    { name: "Rahul M.", course: "VFX", time: "5 min ago" },
    { name: "Ankit K.", course: "AI Design", time: "8 min ago" },
  ]);

  const count = useMotionValue(enrollments - 100);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, enrollments, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [enrollments, count]);

  // Simulate live enrollments
  useEffect(() => {
    const interval = setInterval(() => {
      const names = ["Amit P.", "Sneha R.", "Vikram T.", "Neha G.", "Karan V.", "Pooja M."];
      const courses = ["Animation", "VFX", "AI Design", "Game Design", "Motion Graphics"];
      
      setEnrollments((prev) => prev + 1);
      setRecentEnrollments((prev) => [
        { 
          name: names[Math.floor(Math.random() * names.length)], 
          course: courses[Math.floor(Math.random() * courses.length)],
          time: "Just now" 
        },
        ...prev.slice(0, 2).map((e) => ({
          ...e,
          time: e.time === "Just now" ? "1 min ago" : 
                e.time === "1 min ago" ? "3 min ago" : 
                e.time === "3 min ago" ? "5 min ago" : e.time
        }))
      ]);
    }, 15000); // Every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-xl border border-[#ffc107]/10 p-6 rounded-3xl relative overflow-hidden hover:border-[#ffc107]/30 transition-all duration-500"
    >
      {/* Golden glow orbs */}
      <motion.div
        className="absolute -top-20 -right-20 w-60 h-60 bg-[#ffc107]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#ffd54f]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main Counter */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#ffc107] animate-pulse" />
            <span className="text-sm text-[#ffc107] font-medium">Live Enrollments</span>
          </div>
          <div className="flex items-baseline gap-2">
            <motion.span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent">
              {rounded}
            </motion.span>
            <span className="text-white/60">students</span>
          </div>
        </div>
        
        {/* Weekly badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffc107]/10 text-[#ffc107] border border-[#ffc107]/20">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">+127 this week</span>
        </div>
      </div>

      {/* Recent Enrollments */}
      <div className="space-y-3 relative z-10">
        <div className="text-xs text-white/40 uppercase tracking-wider flex items-center gap-1">
          Recent Joins 
          <span className="text-[#ffc107]">✨</span>
        </div>
        
        {recentEnrollments.map((enrollment, index) => (
          <motion.div
            key={`${enrollment.name}-${index}`}
            initial={index === 0 ? { opacity: 0, x: -20 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between py-2 border-b border-[#ffc107]/10 last:border-0 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffc107]/20 to-[#ffd54f]/20 flex items-center justify-center border border-[#ffc107]/30">
                <Users className="w-4 h-4 text-[#ffc107]" />
              </div>
              <div>
                <span className="font-medium text-white group-hover:text-[#ffc107] transition-colors">{enrollment.name}</span>
                <span className="text-white/40"> joined </span>
                <span className="text-white/80 group-hover:text-[#ffc107] transition-colors">{enrollment.course}</span>
              </div>
            </div>
            <span className="text-xs text-white/40 group-hover:text-[#ffc107] transition-colors">{enrollment.time}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#ffc107]/10 via-[#ffd54f]/10 to-[#ffb300]/10 border border-[#ffc107]/20 cursor-pointer group relative overflow-hidden hover:border-[#ffc107]/40 transition-all duration-300"
      >
        {/* Golden shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffc107]/20 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1.5,
          }}
        />
        
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#ffc107]" />
            <span className="font-medium text-white group-hover:text-[#ffc107] transition-colors">Don't miss out!</span>
          </div>
          <span className="text-sm text-[#ffc107] group-hover:text-white group-hover:translate-x-1 transition-all">Join the squad →</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LiveEnrollmentCounter;