import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Send, User, Phone, Mail, BookOpen, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const courses = [
  "Generative AI for Designers",
  "VFX & Cinematic Animation",
  "UI/UX & Product Design",
  "Motion Graphics & Video",
  "Animation",
  "Graphic Design",
  "Game Design",
  "Video Editing",
];

const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Yo, we need your name! 👋";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "That's a pretty long name! Keep it under 100 chars";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Drop your digits! 📱";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "That doesn't look like a valid Indian number";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "We need your email to slide into your inbox! 📧";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "That email looks sus... double check it?";
    }
    
    if (!formData.course) {
      newErrors.course = "Pick a vibe! 🎯";
    }

    if (formData.message.length > 500) {
      newErrors.message = "Keep it short and sweet - under 500 chars!";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("We got your message! Our team will hit you up soon 🚀");
    
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", phone: "", email: "", course: "", message: "" });
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setErrors({});
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-xl"
            onClick={handleClose}
          />

          {/* Modal - Slide in from right */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-[101] w-full max-w-lg bg-card border-l border-border overflow-y-auto"
          >
            {/* VHS Effect */}
            <div className="absolute inset-0 vhs-lines opacity-5 pointer-events-none" />
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors disabled:opacity-50"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 pt-16">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold mb-2 font-display">
                  Let's Get You <span className="gradient-text">Started</span> 🚀
                </h2>
                <p className="text-muted-foreground">
                  Drop your deets and our team will hit you up real quick!
                </p>
              </motion.div>

              {/* Success State */}
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center py-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-24 h-24 rounded-full bg-neon-green/20 flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-12 h-12 text-neon-green" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">You're All Set! 🎉</h3>
                    <p className="text-muted-foreground text-center">
                      Our team will slide into your inbox shortly
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <label className="block text-sm font-medium mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Your Name *
                      </label>
                      <Input
                        placeholder="What should we call you?"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`rainbow-border bg-secondary/50 h-12 ${errors.name ? "border-destructive" : ""}`}
                        maxLength={100}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name}</p>
                      )}
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number *
                      </label>
                      <Input
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                        className={`rainbow-border bg-secondary/50 h-12 ${errors.phone ? "border-destructive" : ""}`}
                        type="tel"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                      )}
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <label className="block text-sm font-medium mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <Input
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`rainbow-border bg-secondary/50 h-12 ${errors.email ? "border-destructive" : ""}`}
                        type="email"
                        maxLength={255}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email}</p>
                      )}
                    </motion.div>

                    {/* Course Interest */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium mb-2">
                        <BookOpen className="w-4 h-4 inline mr-2" />
                        Course Interest *
                      </label>
                      <Select
                        value={formData.course}
                        onValueChange={(value) => setFormData({ ...formData, course: value })}
                      >
                        <SelectTrigger className={`h-12 bg-secondary/50 ${errors.course ? "border-destructive" : ""}`}>
                          <SelectValue placeholder="Pick your creative path" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {courses.map((course) => (
                            <SelectItem key={course} value={course}>
                              {course}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.course && (
                        <p className="text-destructive text-sm mt-1">{errors.course}</p>
                      )}
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <label className="block text-sm font-medium mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Anything else? (Optional)
                      </label>
                      <Textarea
                        placeholder="Got questions? Spill the tea..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rainbow-border bg-secondary/50 min-h-[100px]"
                        maxLength={500}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        {formData.message.length}/500 characters
                      </p>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full neon-button float-hover text-white font-bold rounded-full h-14 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Submit Enquiry 🚀
                          </>
                        )}
                      </Button>
                    </motion.div>

                    {/* Privacy Note */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.45 }}
                      className="text-xs text-muted-foreground text-center"
                    >
                      We respect your privacy. No spam, we promise! 🤝
                    </motion.p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
