import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Send, User, Phone, Mail, BookOpen, CheckCircle, Loader2, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { CENTER_OPTIONS } from "@/data/centers";
import { useNavigate } from "react-router-dom";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

// ✅ FIXED: Remove duplicates and sort alphabetically
const courses = [
  "Animation",
  "Game Design",
  "Generative AI for Designers",
  "Graphic Design",
  "Motion Graphics & Video",
  "UI/UX Design",
  "VFX & Cinematic Animation",
  "Video Editing",
].sort();

const EnquiryModal = ({ isOpen, onClose, selectedCourse }: EnquiryModalProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pincode: "",
    full_url: window.location.href,
    course: selectedCourse || "",
    center: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  useEffect(() => {
    console.log("Modal isOpen:", isOpen);
    console.log("SelectedCourse prop:", selectedCourse);
    console.log("Courses array:", courses);
  }, [isOpen, selectedCourse]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFormData((prev) => ({ ...prev, full_url: window.location.href }));
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.history.pushState(null, "", "#enquiry-form");
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && selectedCourse) {
      console.log("Setting course to:", selectedCourse);
      setFormData((prev) => ({
        ...prev,
        course: selectedCourse,
      }));
    }
  }, [isOpen, selectedCourse]);

  // ✅ Enhanced phone validation - rejects patterns like 9999999999
  const validatePhoneNumber = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, "");
    
    // Check if it's exactly 10 digits
    if (cleanPhone.length !== 10) return false;
    
    // Check if first digit is between 6-9 (Indian mobile numbers)
    const firstDigit = cleanPhone[0];
    if (!['6', '7', '8', '9'].includes(firstDigit)) return false;
    
    // ✅ NEW: Check if all digits are the same (9999999999, 8888888888, etc.)
    const allSameDigit = cleanPhone.split('').every(digit => digit === cleanPhone[0]);
    if (allSameDigit) return false;
    
    // ✅ NEW: Check for sequential patterns (1234567890, 9876543210)
    const isSequential = (num: string): boolean => {
      // Check ascending
      let ascending = true;
      for (let i = 0; i < num.length - 1; i++) {
        if (parseInt(num[i+1]) !== parseInt(num[i]) + 1) {
          ascending = false;
          break;
        }
      }
      
      // Check descending
      let descending = true;
      for (let i = 0; i < num.length - 1; i++) {
        if (parseInt(num[i+1]) !== parseInt(num[i]) - 1) {
          descending = false;
          break;
        }
      }
      
      return ascending || descending;
    };
    
    if (isSequential(cleanPhone)) return false;
    
    // ✅ NEW: Check for repeated patterns like 1212121212, 1231231231
    const hasRepeatedPattern = (num: string): boolean => {
      for (let patternLen = 2; patternLen <= 5; patternLen++) {
        if (num.length % patternLen === 0) {
          const pattern = num.substring(0, patternLen);
          let matches = true;
          for (let i = 0; i < num.length; i += patternLen) {
            if (num.substring(i, i + patternLen) !== pattern) {
              matches = false;
              break;
            }
          }
          if (matches && patternLen < num.length) {
            return true;
          }
        }
      }
      return false;
    };
    
    if (hasRepeatedPattern(cleanPhone)) return false;
    
    return true;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Yo, we need your name! 👋";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "That's a pretty long name! Keep it under 100 chars";
    }
    
    // ✅ Enhanced phone validation with user-friendly messages
    if (!formData.phone.trim()) {
      newErrors.phone = "Drop your digits! 📱";
    } else {
      const cleanPhone = formData.phone.replace(/\D/g, "");
      if (cleanPhone.length !== 10) {
        newErrors.phone = "Phone number must be exactly 10 digits";
      } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        newErrors.phone = "Please enter a valid Indian mobile number (starts with 6,7,8,9)";
      } else {
        // Check for invalid patterns
        const allSameDigit = cleanPhone.split('').every(digit => digit === cleanPhone[0]);
        if (allSameDigit) {
          newErrors.phone = "Please enter a valid mobile number";
        } else {
          // Check sequential
          let isSequential = false;
          // Check ascending
          let ascending = true;
          for (let i = 0; i < cleanPhone.length - 1; i++) {
            if (parseInt(cleanPhone[i+1]) !== parseInt(cleanPhone[i]) + 1) {
              ascending = false;
              break;
            }
          }
          // Check descending
          let descending = true;
          for (let i = 0; i < cleanPhone.length - 1; i++) {
            if (parseInt(cleanPhone[i+1]) !== parseInt(cleanPhone[i]) - 1) {
              descending = false;
              break;
            }
          }
          if (ascending || descending) {
            newErrors.phone = "Please enter a valid mobile number";
          } else {
            // Check repeated patterns
            let hasPattern = false;
            for (let patternLen = 2; patternLen <= 5; patternLen++) {
              if (cleanPhone.length % patternLen === 0) {
                const pattern = cleanPhone.substring(0, patternLen);
                let matches = true;
                for (let i = 0; i < cleanPhone.length; i += patternLen) {
                  if (cleanPhone.substring(i, i + patternLen) !== pattern) {
                    matches = false;
                    break;
                  }
                }
                if (matches && patternLen < cleanPhone.length) {
                  hasPattern = true;
                  break;
                }
              }
            }
            if (hasPattern) {
              newErrors.phone = "Please enter a valid mobile number";
            }
          }
        }
      }
    }
    
    if (!formData.course) {
      newErrors.course = "Pick a vibe! 🎯";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const currentUrl = typeof window !== "undefined" ? window.location.href : formData.full_url;
      const cleanPhone = formData.phone.replace(/\D/g, "");
      
      const { error } = await supabase
        .from('enquiries')
        .insert([
          {
            name: formData.name,
            phone: cleanPhone,
            full_url: currentUrl || null,
            course: formData.course,
            center: formData.center,
            status: 'new'
          }
        ]);

      if (error) throw error;
      
      setIsSuccess(true);
      toast.success("We got your message! Our team will hit you up soon 🚀");
      
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", phone: "", email: "", pincode: "", full_url: window.location.href, course: "", center: "" });
        setErrors({});
        onClose();        
        navigate("/thank-you");
      }, 2000);
    } catch (error: any) {
      console.error('Error submitting enquiry:', error);
      const errorMsg = error?.message || error?.error_description || "Something went wrong. Please try again!";
      toast.error(errorMsg);
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    console.log("Close button clicked");
    if (!isSubmitting) {
      setErrors({});
      setIsSuccess(false);
      setFormData({ name: "", phone: "", email: "", pincode: "", full_url: window.location.href, course: "", center: "" });
      onClose();
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let digits = value.replace(/\D/g, "");
    
    if (digits.length > 10) {
      digits = digits.slice(0, 10);
    }
    
    setFormData({ ...formData, phone: digits });
    
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: "" }));
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#030306]/80 backdrop-blur-xl"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-[101] w-full max-w-lg bg-[#030306] border-l border-[#ffc107]/20 overflow-y-auto"
          >
            {/* Golden orbs */}
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

            {/* 3D Grid Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,193,7,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,193,7,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
            
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors disabled:opacity-50 border border-[#ffc107]/20 hover:border-[#ffc107]/40"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-[#ffc107]" />
            </button>

            <div className="relative z-10 p-8 pt-16">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold mb-2 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Let's Get You{" "}
                  <span className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent">
                    Started
                  </span>{" "}
                  🚀
                </h2>
                <p className="text-white/60">
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
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-[#ffc107]/20 to-[#ffb300]/20 flex items-center justify-center mb-6 border border-[#ffc107]/30"
                    >
                      <CheckCircle className="w-12 h-12 text-[#ffc107]" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2 text-white">You're All Set! 🎉</h3>
                    <p className="text-white/60 text-center">
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
                      <label className="block text-sm font-medium mb-2 text-white/80">
                        <User className="w-4 h-4 inline mr-2 text-[#ffc107]" />
                        Your Name *
                      </label>
                      <Input
                        placeholder="What should we call you?"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`bg-white/5 border-[#ffc107]/20 text-white placeholder:text-white/40 h-12 focus:border-[#ffc107]/50 ${errors.name ? "border-red-500" : ""}`}
                        maxLength={100}
                      />
                      {errors.name && (
                        <p className="text-[#ffc107] text-sm mt-1">{errors.name}</p>
                      )}
                    </motion.div>

                    {/* Phone - FIXED VALIDATION without success message */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium mb-2 text-white/80">
                        <Phone className="w-4 h-4 inline mr-2 text-[#ffd54f]" />
                        Phone Number *
                      </label>
                      <Input
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={`bg-white/5 border-[#ffd54f]/20 text-white placeholder:text-white/40 h-12 focus:border-[#ffd54f]/50 ${errors.phone ? "border-red-500" : ""}`}
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                      />
                      {errors.phone && (
                        <p className="text-[#ffd54f] text-sm mt-1">{errors.phone}</p>
                      )}
                      {/* REMOVED: Success message for valid number */}
                    </motion.div>

                    {/* Course Interest */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium mb-2 text-white/80">
                        <BookOpen className="w-4 h-4 inline mr-2 text-[#ffc107]" />
                        Course Interest *
                      </label>
                      <Select
                        value={formData.course}
                        onValueChange={(value) => {
                          console.log("Selected course:", value);
                          setFormData({ ...formData, course: value });
                        }}
                        onOpenChange={(open) => {
                          console.log("Select open state:", open);
                          setIsSelectOpen(open);
                        }}
                      >
                        <SelectTrigger 
                          className={`h-12 bg-white/5 border-[#ffc107]/20 text-white ${errors.course ? "border-red-500" : ""}`}
                          onClick={() => console.log("Select trigger clicked")}
                        >
                          <SelectValue placeholder="Pick your creative path" />
                        </SelectTrigger>
                        <SelectContent 
                          className="bg-[#030306] border-[#ffc107]/20 text-white z-[200]"
                          position="popper"
                          sideOffset={5}
                        >
                          {courses.map((course) => (
                            <SelectItem 
                              key={course} 
                              value={course}
                              className="hover:bg-[#ffc107] hover:text-black focus:bg-[#ffc107] focus:text-black cursor-pointer"
                            >
                              {course}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.course && (
                        <p className="text-[#ffc107] text-sm mt-1">{errors.course}</p>
                      )}
                    </motion.div>

                    {/* Center selection added: use shared CENTER_OPTIONS */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/80">
                        <MapPin className="w-4 h-4 inline mr-2 text-[#ffc107]" />
                        Select Center *
                      </label>
                      <Select
                        value={formData.center}
                        onValueChange={(value) => setFormData({ ...formData, center: value })}
                      >
                        <SelectTrigger className={`h-12 bg-white/5 border-[#ffc107]/20 text-white`}> 
                          <SelectValue placeholder="Select Center *" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#030306] border-[#ffc107]/20 text-white z-[200]">
                          {CENTER_OPTIONS.map(opt => (
                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <input type="hidden" name="full_url" value={formData.full_url} />

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold rounded-full h-14 text-lg hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin mr-2 text-black" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2 text-black" />
                            Submit Enquiry 🚀
                          </>
                        )}
                      </Button>
                    </motion.div>

                    {/* Privacy Note */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-xs text-white/40 text-center"
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