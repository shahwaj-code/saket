import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import EnquiryModal from "./EnquiryModal";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Showcase", href: "#showcase" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const MotionLink = motion(Link);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuizClick = () => {
    navigate("/quiz");
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (!href) return;

    if (href.startsWith("#")) {
      const id = href.slice(1);
      const scrollToId = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      if (location.pathname !== "/") {
        navigate("/");
        // Wait a bit for the page to mount, then scroll
        setTimeout(scrollToId, 200);
      } else {
        scrollToId();
      }
      return;
    }

    // fallback: navigate to the href path
    navigate(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-0"
            : "py-0"
        }`}
      >
        {/* Glassmorphic background */}
        
        <div className={`absolute inset-0 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/60 backdrop-blur-2xl border-b border-white/5 shadow-lg shadow-neon-purple/5" 
            : "bg-transparent"
        }`} />
        
        <div className="container relative">
          <div className="flex items-center justify-between h-16 md:h-28">
            {/* Logo - Removed hover animation */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-20 sm:w-28 md:w-40 h-20 sm:h-28 md:h-40 rounded-xl p-[2px] overflow-hidden">
                <div className="relative w-full h-full rounded-xl flex items-center justify-center overflow-hidden">
                  <img src={logo} alt="Design Engine logo" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <MotionLink
                  key={item.label}
                  to={item.href}
                  replace={false}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e: any) => handleNavClick(e, item.href)}
                  className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#ffc107] group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </MotionLink>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="ghost"
                size="sm" 
                onClick={handleQuizClick}
                className="text-muted-foreground hover:text-foreground hover:bg-white/5"
              >
                <Sparkles className="w-4 h-4 mr-2 text-neon-cyan" />
                Career Quiz
              </Button>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="sm" 
                  onClick={() => setShowEnquiry(true)}
                  style={{ borderColor: '#ffc107' }}
                  className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-semibold rounded-full px-6 shadow-neon hover:shadow-neon-lg transition-all duration-300 border-2"
                >
                  <span className="flex items-center gap-2">
                    Join Now
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 hover:bg-white/5 rounded-xl transition-colors border border-white/10"
              >
                <Menu className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-xl z-50 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-card/95 backdrop-blur-2xl border-l border-white/10 z-50 lg:hidden overflow-hidden"
            >
              {/* Gradient orb decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-neon-cyan/20 rounded-full blur-3xl" />
              
              <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <span className="text-xl font-bold gradient-text">Menu</span>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 hover:bg-white/5 rounded-xl transition-colors border border-white/10"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
                
                <nav className="flex-1 space-y-1">
                  {navItems.map((item, index) => (
                    <MotionLink
                      key={item.label}
                      to={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={(e: any) => handleNavClick(e, item.href)}
                      className="flex items-center gap-3 py-4 px-4 rounded-2xl text-lg font-medium hover:bg-white/5 transition-colors group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </MotionLink>
                  ))}
                </nav>
                
                <div className="pt-6 space-y-3 border-t border-white/10">
                  <Button 
                    size="lg" 
                    style={{ borderColor: '#ffc107' }}
                    className="w-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-semibold rounded-xl border-2" 
                    onClick={() => { setIsMobileMenuOpen(false); setShowEnquiry(true); }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Join Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="w-full rounded-xl border-white/10 hover:bg-white/5" 
                    onClick={() => { setIsMobileMenuOpen(false); handleQuizClick(); }}
                  >
                    <Sparkles className="w-4 h-4 mr-2 text-neon-cyan" />
                    Take Career Quiz
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </>
  );
};

export default Navbar;