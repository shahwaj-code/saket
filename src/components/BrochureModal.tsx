import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, MapPin, Phone, Mail, User, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const campuses = [
  { value: "varanasi", label: "Varanasi (Bhelupur)" },
  { value: "gurugram", label: "Gurugram" },
];

const BrochureModal = ({ isOpen, onClose }: BrochureModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    campus: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.campus) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Brochure sent to your email!", {
      description: "Check your inbox for the download link.",
    });
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", campus: "" });
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
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-card border border-border rounded-3xl shadow-2xl overflow-hidden mx-4">
              {/* Header */}
              <div className="relative p-6 pb-4 border-b border-border">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-apple-blue to-apple-purple flex items-center justify-center">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Download Brochure</h2>
                    <p className="text-sm text-muted-foreground">Get complete course details</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                {/* Campus Selection */}
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    value={formData.campus}
                    onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Campus</option>
                    {campuses.map((campus) => (
                      <option key={campus.value} value={campus.value}>
                        {campus.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="apple"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download Now
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting, you agree to receive communications from CreativeTech Institute.
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BrochureModal;
