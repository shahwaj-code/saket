import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import EnquiryModal from "./EnquiryModal";
import logo from "@/assets/logo.webp";
import ResponsiveImage from "./ResponsiveImage";

const navItems = [
  { label: "Courses", href: "#courses" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Showcase", href: "#showcase" },
  { label: "Careers", href: "#careers" },
  // { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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
        setTimeout(scrollToId, 200);
      } else {
        scrollToId();
      }

      return;
    }

    navigate(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Glass Background */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled
              ? "bg-background/60 backdrop-blur-2xl border-b border-white/5 shadow-lg"
              : "bg-transparent"
          }`}
        />

        <div className="container relative px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <ResponsiveImage
                src={logo}
                alt="Design Engine"
                className="w-auto h-6 sm:h-7 md:h-8 lg:h-10 max-w-[60px] sm:max-w-[78px] md:max-w-[104px] lg:max-w-[150px] object-contain"
                sizes="(max-width: 640px) 60px, (max-width: 768px) 78px, (max-width: 1024px) 104px, 150px"
                loading="eager"
                fetchPriority="high"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative inline-flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {item.label}

                  <span className="pointer-events-none absolute bottom-[3px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#ffc107] transition-all duration-300 group-hover:w-[70%]" />
                </Link>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={handleQuizClick}
                className="text-muted-foreground hover:text-foreground border-2 border-[#ffc107]/20 hover:border-[#ffc107]/50 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 mr-2 text-[#ffc107]" />
                Career Quiz
              </Button>

              <Button
                onClick={() => setShowEnquiry(true)}
                className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold rounded-full px-6 shadow-lg hover:shadow-[0_0_25px_rgba(255,193,7,0.6)] transition-all"
              >
                Join Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-xl border border-white/10"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <>
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-xl z-50 lg:hidden"
          />

          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-card border-l border-white/10 z-50 lg:hidden shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title">
            <div className="p-6 h-full flex flex-col">

              <div className="flex justify-between items-center mb-10">
                <span id="mobile-menu-title" className="text-xl font-bold text-[#ffc107]">Menu</span>

                <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav id="mobile-menu" className="flex-1 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-3 px-4 rounded-xl hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="pt-6 space-y-3 border-t border-white/10">
                <Button
                  className="w-full bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setShowEnquiry(true);
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Join Now
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-2 border-[#ffc107]/20 hover:border-[#ffc107]/50 transition-all duration-300"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleQuizClick();
                  }}
                >
                  <Sparkles className="w-4 h-4 mr-2 text-[#ffc107]" />
                  Take Career Quiz
                </Button>
              </div>

            </div>
          </div>
        </>
      )}

      <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </>
  );
};

export default Navbar;