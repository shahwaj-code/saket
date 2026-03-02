import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, User, BookOpen, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const campuses = [
  //{ id: "varanasi", name: "Varanasi (Bhelupur)", address: "123 Creative Hub, Bhelupur, Varanasi 221001" },
  { id: "gurugram", name: "Gurugram", address: " K-2/5, near Mehrauli-Gurgaon Road, DLF Phase 2, Sector 25, Gurugram, Sarhol, Haryana 122002" },
];

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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    campus: "",
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
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("We got your message! Our team will hit you up soon 🚀");
    
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", phone: "", campus: "", course: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <MapPin className="w-4 h-4 text-[#ffc107]" />
              <span className="text-neon-cyan font-medium">📍 Get in Touch</span>
            </motion.span>
            <h2 className="display-medium mb-6 text-foreground">
              Start your <span className="gradient-text">creative journey</span>
            </h2>
            <p className="text-xl text-foreground/80 mb-10 leading-relaxed">
              Ready to transform your career? Connect with our counselors for 
              personalized guidance and course recommendations.
            </p>

            {/* Campus Cards */}
            <div className="space-y-4 mb-8">
              {campuses.map((campus, index) => (
                <motion.div
                  key={campus.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-5 group hover:border-[#ffc107]/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform border border-neon-purple/30">
                      <MapPin className="w-5 h-5 text-neon-cyan group-hover:text-[#ffc107] transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">{campus.name}</h3>
                      <p className="text-sm text-foreground/70">{campus.address}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919910792123"
                className="flex items-center gap-3 px-5 py-4 rounded-2xl glass-card hover:border-[#ffc107]/30 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 text-neon-cyan group-hover:text-[#ffc107] transition-colors duration-300" />
                <span className="font-medium text-foreground">+91 99107 92123</span>
              </a>
              <a 
                href="mailto:hello@creativeinstitute.com"
                className="flex items-center gap-3 px-5 py-4 rounded-2xl glass-card hover:border-[#ffc107]/30 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-neon-cyan group-hover:text-[#ffc107] transition-colors duration-300" />
                <span className="font-medium text-foreground">namaste@design-engine.io</span>
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Form (Matching Hero Form Style) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 hover:border-[#ffc107]/10 transition-all duration-300">
              {/* VHS Effect */}
              <div className="absolute inset-0 vhs-lines opacity-5 pointer-events-none rounded-3xl" />
              
              <h3 className="text-2xl font-bold mb-2 font-display">
                Let's Get You <span className="gradient-text">Started</span> 🚀
              </h3>
              <p className="text-muted-foreground mb-6">
                Drop your deets and our team will hit you up real quick!
              </p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-24 h-24 rounded-full bg-neon-green/20 flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-[#ffc107]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">You're All Set! 🎉</h3>
                  <p className="text-muted-foreground text-center">
                    Our team will slide into your inbox shortly
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2 text-[#ffc107]" />
                      Your Name *
                    </label>
                    <Input
                      placeholder="What should we call you?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`rainbow-border bg-secondary/50 h-12 ${errors.name ? "border-destructive" : "focus:border-[#ffc107]/50"}`}
                      maxLength={100}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Phone className="w-4 h-4 inline mr-2 text-[#ffc107]" />
                        Phone Number *
                      </label>
                      <Input
                        placeholder="10-digit mobile"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                        className={`rainbow-border bg-secondary/50 h-12 ${errors.phone ? "border-destructive" : "focus:border-[#ffc107]/50"}`}
                        type="tel"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Mail className="w-4 h-4 inline mr-2 text-[#ffc107]" />
                        Email *
                      </label>
                      <Input
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`rainbow-border bg-secondary/50 h-12 ${errors.email ? "border-destructive" : "focus:border-[#ffc107]/50"}`}
                        type="email"
                        maxLength={255}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Campus & Course */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <MapPin className="w-4 h-4 inline mr-2 text-[#ffc107]" />
                        Preferred Campus
                      </label>
                      <Select
                        value={formData.campus}
                        onValueChange={(value) => setFormData({ ...formData, campus: value })}
                      >
                        <SelectTrigger className="h-12 bg-secondary/50 focus:border-[#ffc107]/50">
                          <SelectValue placeholder="Select Campus" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {/*<SelectItem value="varanasi">Varanasi (Bhelupur)</SelectItem>*/}
                          <SelectItem value="gurugram">Gurugram</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <BookOpen className="w-4 h-4 inline mr-2 text-[#ffc107]" />
                        Course Interest *
                      </label>
                      <Select
                        value={formData.course}
                        onValueChange={(value) => setFormData({ ...formData, course: value })}
                      >
                        <SelectTrigger className={`h-12 bg-secondary/50 ${errors.course ? "border-destructive" : "focus:border-[#ffc107]/50"}`}>
                          <SelectValue placeholder="Pick your path" />
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
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2 text-[#ffc107]" />
                      Anything else? (Optional)
                    </label>
                    <Textarea
                      placeholder="Got questions? Spill the tea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rainbow-border bg-secondary/50 min-h-[100px] focus:border-[#ffc107]/50"
                      maxLength={500}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.message.length}/500 characters
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neon-button float-hover text-white font-bold rounded-full h-14 text-lg hover:border-[#ffc107]/30 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 text-[#ffc107]" />
                        Submit Enquiry 🚀
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    <span className="text-[#ffc107]">✨</span> We respect your privacy. No spam, we promise! 🤝
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;