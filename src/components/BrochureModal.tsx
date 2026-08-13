import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Mail, User, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// WhatsApp number for the Delhi campus
const WHATSAPP_NUMBER = "918796151653";

const BrochureModal = ({ isOpen, onClose }: BrochureModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const whatsappNumber = WHATSAPP_NUMBER;
    
    // Prepare WhatsApp message
    const message = `Hello My name is ${formData.name} and mail ${formData.email}. Please send me the brochure message.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecting to WhatsApp...", {
      description: "Please send the message to receive your brochure.",
    });
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "" });
    onClose();
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
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container - This ensures proper centering */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-md"
            >
              <div className="bg-[#030306] border border-[#ffc107]/20 rounded-3xl shadow-2xl shadow-[0_0_30px_rgba(255,193,7,0.15)]">
                {/* Header */}
                <div className="p-6 pb-4 border-b border-[#ffc107]/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ffc107] to-[#ffb300] flex items-center justify-center">
                        <Download className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Download Brochure</h2>
                        <p className="text-sm text-white/60">Get complete course details</p>
                      </div>
                    </div>
                    <button
                      onClick={onClose}
                      className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-[#ffc107]/20"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Form */}
                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ffc107]" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-[#ffc107]/20 text-white placeholder:text-white/40 focus:border-[#ffc107] focus:ring-2 focus:ring-[#ffc107]/20 outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ffc107]" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-[#ffc107]/20 text-white placeholder:text-white/40 focus:border-[#ffc107] focus:ring-2 focus:ring-[#ffc107]/20 outline-none transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin text-black" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-2 text-black" />
                          Download Now
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-white/40">
                      By submitting, you agree to receive communications from Design Engine.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BrochureModal;