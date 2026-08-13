import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Send, CheckCircle, Loader2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { CENTER_OPTIONS } from "@/data/centers";

const courses = [
  "Animation",
  "Game Design",
  "Generative AI",
  "Graphic Design",
  "Motion Graphics",
  "UI/UX Design",
  "VFX",
  "Video Editing",
];

const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    url: "",
    center: "",
    course: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFormData((prev) => ({ ...prev, url: window.location.href }));
    }
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formFocused, setFormFocused] = useState(false);

  useEffect(() => {
    if (formFocused) {
      window.history.pushState(null, "", "#enquiry-form");
    }
  }, [formFocused]);

  // ✅ Enhanced phone validation - rejects patterns like 9999999999
  const validatePhoneNumber = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, "");
    
    // Check if it's exactly 10 digits
    if (cleanPhone.length !== 10) return false;
    
    // Check if first digit is between 6-9 (Indian mobile numbers)
    const firstDigit = cleanPhone[0];
    if (!['6', '7', '8', '9'].includes(firstDigit)) return false;
    
    // Check if all digits are the same (9999999999, 8888888888, etc.)
    const allSameDigit = cleanPhone.split('').every(digit => digit === cleanPhone[0]);
    if (allSameDigit) return false;
    
    // Check for sequential patterns (1234567890, 9876543210)
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
    
    // Check for repeated patterns like 1212121212, 1231231231
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

  // ✅ Enhanced validation function
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Enter your name";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Name is too long";
    }
    
    // ✅ Enhanced phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Enter phone number";
    } else {
      const cleanPhone = formData.phone.replace(/\D/g, "");
      if (cleanPhone.length !== 10) {
        newErrors.phone = "Phone number must be exactly 10 digits";
      } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        newErrors.phone = "Enter a valid Indian mobile number (starts with 6,7,8,9)";
      } else {
        // Check for invalid patterns
        const allSameDigit = cleanPhone.split('').every(digit => digit === cleanPhone[0]);
        if (allSameDigit) {
          newErrors.phone = "Enter a valid mobile number";
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
            newErrors.phone = "Enter a valid mobile number";
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
              newErrors.phone = "Enter a valid mobile number";
            }
          }
        }
      }
    }
    
    if (!formData.course) {
      newErrors.course = "Select a course";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Phone input handler with strict validation
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Remove any non-digit characters
    let digits = value.replace(/\D/g, "");
    
    // Limit to exactly 10 digits
    if (digits.length > 10) {
      digits = digits.slice(0, 10);
    }
    
    // Update form data with the cleaned digits
    setFormData({ ...formData, phone: digits });
    
    // Clear phone error when user starts typing again
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const currentUrl = typeof window !== "undefined" ? window.location.href : formData.url;
      
      // ✅ Clean phone number before sending to backend
      const cleanPhone = formData.phone.replace(/\D/g, "");
      
      const { error } = await supabase.from("enquiries").insert([
        {
          name: formData.name,
          phone: cleanPhone, // Send cleaned 10-digit number
          email: formData.email || null,
          pincode: formData.pincode || null,
          full_url: currentUrl || null,
          course: formData.course,
          center: formData.center,
          status: "new",
        },
      ]);

      if (error) throw error;

      setIsSuccess(true);
      setIsSubmitting(false);
      toast.success("Enquiry submitted 🚀");

      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          pincode: "",
          url: window.location.href,
          center: "",
          course: "",
        });
        navigate("/thank-you");
      }, 2000);
    } catch {
      toast.error("Something went wrong");
      setIsSubmitting(false);
    }
  };

  // Google Maps Embed URL
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d876.4158433530464!2d77.20075!3d28.519774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21fa7e64a8ce1bcf%3A0xf6deed6dd80ea7!2sDesign%20Engine%20%E2%80%93%20Saket!5e0!3m2!1sen!2sin!4v1779282104351!5m2!1sen!2sin";

  // Performance helpers: disable animations on reduced-motion or small screens
  const [disableAnimations, setDisableAnimations] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.innerWidth && window.innerWidth < 768;
    setDisableAnimations(!!(prefersReduced || smallScreen));
  }, []);

  // Lazy load map iframe only after user interaction to reduce LCP impact
  const [mapLoaded, setMapLoaded] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Auto-load map on larger screens for better UX; keep deferred on small devices to save LCP
    if (window.innerWidth >= 768) {
      setMapLoaded(true);
    }
  }, []);

  return (
    <section id="contact" className="relative py-16 bg-[#030306] overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ffc107]/10 blur-xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ffc107]/5 blur-xl rounded-full" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={disableAnimations ? undefined : { opacity: 0, y: 30 }}
            whileInView={disableAnimations ? undefined : { opacity: 1, y: 0 }}
            transition={disableAnimations ? undefined : { duration: 0.5 }}
            viewport={disableAnimations ? undefined : { once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                Start your{" "}
                <span className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent">
                  creative journey
                </span>
              </h2>
              <p className="text-white/60 text-base mt-3">
                Ready to transform your career? Connect with our counselors and visit our state-of-the-art campus.
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-xl border border-[#ffc107]/10 rounded-2xl p-5">
              <h3 className="text-white font-semibold text-base mb-3">Contact Details</h3>
              <div className="space-y-2">
                <a href="tel:+918796151653" className="flex items-center gap-3 text-white/70 hover:text-[#ffc107] transition-colors">
                  <Phone className="w-4 h-4 text-[#fcc007]" />
                  <span className="text-sm">+91 87961 51653</span>
                </a>
                <a href="mailto:designengine.saket@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-[#ffc107] transition-colors">
                  <Mail className="w-4 h-4 text-[#fcc007]" />
                  <span className="text-sm">designengine.saket@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Our Location with Map */}
            <div className="bg-white/5 backdrop-blur-xl border border-[#ffc107]/10 rounded-2xl p-5">
              <h3 className="text-white font-semibold text-base mb-3">Our Location</h3>
              
              <div className="flex gap-3 mb-4">
                <MapPin className="w-4 h-4 text-[#fcc007] flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm leading-relaxed">
                  JP House, Plot 172, Westend Marg, Saidulajab,<br />
                  Saiyad Ul Ajaib Village, Sainik Farm,<br />
                  New Delhi, Delhi 110030
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#ffc107]/20">
                {mapLoaded ? (
                  <iframe
                    title="Design Engine Saket, Delhi Campus Location"
                    src={googleMapsEmbedUrl}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                ) : (
                  <div className="w-full h-[250px] flex flex-col items-center justify-center bg-[#000000]/10 text-white/70 p-4">
                    <p className="text-sm text-center mb-3">Map is deferred to improve page load. Click to load the interactive map.</p>
                    <div className="flex gap-2">
                      <Button onClick={() => setMapLoaded(true)} className="bg-[#ffc107] text-black">Load Map</Button>
                      <a href="https://www.google.com/maps/search/?api=1&query=Design+Engine+Saket" target="_blank" rel="noreferrer" className="text-[#ffc107] hover:underline self-center">Open in Maps</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Form */}
          <motion.div
            initial={disableAnimations ? undefined : { opacity: 0, y: 30 }}
            whileInView={disableAnimations ? undefined : { opacity: 1, y: 0 }}
            transition={disableAnimations ? undefined : { duration: 0.5, delay: 0.1 }}
            viewport={disableAnimations ? undefined : { once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-[#ffc107]/20 rounded-2xl p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Let's Get You Started 🚀
                </h3>
                <p className="text-white/40 text-sm">
                  Fill in your details and our counselor will reach out within 24 hours
                </p>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center py-12"
                >
                  <div className="w-24 h-24 rounded-full bg-[#ffc107]/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-12 h-12 text-[#ffc107]" />
                  </div>
                  <h3 className="text-2xl text-white font-bold mb-2">You're All Set!</h3>
                  <p className="text-white/60 text-center max-w-xs">
                    Thank you for reaching out. Our counselor will contact you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" onFocus={() => setFormFocused(true)}>
                  {/* Name Field */}
                  <div>
                    <Input
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`bg-white/5 border-[#ffc107]/20 text-white h-12 ${errors.name ? 'border-red-500' : 'focus:border-[#ffc107]'}`}
                      maxLength={100}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <Input
                      placeholder="10-digit Mobile Number *"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`bg-white/5 border-[#ffc107]/20 text-white h-12 ${errors.phone ? 'border-red-500' : 'focus:border-[#ffc107]'}`}
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Course Selection */}
                  <div>
                    <Select
                      value={formData.course}
                      onValueChange={(value) => setFormData({ ...formData, course: value })}
                    >
                      <SelectTrigger className={`h-12 bg-white/5 border-[#ffc107]/20 text-white ${errors.course ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select Course *" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#030306] border-[#ffc107]/20 text-white">
                        {courses.map((course) => (
                          <SelectItem 
                            key={course} 
                            value={course}
                            className="hover:bg-[#ffc107] hover:text-black"
                          >
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
                  </div>

                  {/* Center Field - AT THE END (before submit button) */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">
                      <MapPin className="w-4 h-4 inline mr-2 text-[#ffc107]" />
                      Select Center *
                    </label>
                    <Select
                      value={formData.center}
                      onValueChange={(value) => setFormData({ ...formData, center: value })}
                    >
                      <SelectTrigger className="h-12 bg-white/5 border-[#ffc107]/20 text-white"> 
                        <SelectValue placeholder="Select Center" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#030306] border-[#ffc107]/20 text-white">
                        {CENTER_OPTIONS.map(opt => (
                          <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <input type="hidden" name="url" value={formData.url} />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold rounded-full h-12 text-base shadow-lg hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Enquiry
                      </>
                    )}
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-white/30 text-center mt-4">
                    By submitting this form, you agree to our{' '}
                    <Link to="/privacy-policy" target="_blank" className="text-[#ffc107] hover:underline">
                      Privacy Policy
                    </Link>{' '}
                    and consent to being contacted.
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