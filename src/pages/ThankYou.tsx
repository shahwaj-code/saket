import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[#030306] relative overflow-hidden flex items-center justify-center py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#ffc107]/10 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-[#ffd54f]/10 rounded-full blur-[60px]"
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-2xl"
      >
        {/* Checkmark Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
          className="flex justify-center"
        >
          <CheckCircle className="w-24 h-24 text-[#4caf50] drop-shadow-[0_0_20px_rgba(76,175,80,0.5)]" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-white mt-8 mb-4"
        >
          Thank You! 🎉
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-6"
        >
          Your enquiry has been submitted successfully!
        </motion.p>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-[#ffc107]/10 to-[#ffd54f]/10 border border-[#ffc107]/20 rounded-lg p-6 mb-10"
        >
          <p className="text-gray-300">
            We've received your form submission and our team will be in touch very soon! Check your email for updates and more information about our courses.
          </p>
        </motion.div>

        {/* Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <Button
              className="bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-[#030306] hover:shadow-[0_0_20px_rgba(255,193,7,0.4)] font-semibold px-8 py-2 rounded-lg w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm text-gray-400 mt-8"
        >
          If you have any immediate questions, feel free to reach out to our support team.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ThankYou;
