import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter, 
  Phone, 
  Mail,
  ArrowUpRight,
  Zap,
  Facebook
} from "lucide-react";

const footerLinks = {
  courses: [
    { label: "Generative AI", href: "/course/generative-ai-for-designers" },
    { label: "VFX & Animation", href: "/course/vfx-cinematic-animation" },
    { label: "UI/UX Design", href: "/course/ui-ux-product-design" },
    { label: "Motion Graphics", href: "/course/motion-graphics-video" },
    { label: "Video Editing", href: "/course/video-editing" },
  ],
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Blog", href: "/blog" },
    { label: "Events", href: "/events" },
    { label: "Partners", href: "/#partners" },
    { label: "Contact", href: "/#contact" },
  ],
  resources: [
    { label: "All Courses", href: "/courses" },
    { label: "Creative Path Quiz", href: "/quiz" },
    { label: "Student Portfolio", href: "/portfolio" },
    { label: "FAQ", href: "/#faq" },
    { label: "Placements", href: "/#partners" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/design_engine_india/", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@designengineindia?si=-GtE0qL8sJaVh3TU", label: "Youtube" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/design-engine-india/about/?viewAsMember=true", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/designengine_", label: "Twitter" },
  { icon: Facebook, href: "https://www.facebook.com/people/Design-Engine-India/61584258057605", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 border-t border-[#ffc107]/10">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute inset-0 mesh-gradient opacity-20" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center shadow-neon group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#ffc107] transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold">
                  Design<span className="gradient-text">Engine</span>
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">Creative-Tech Institute</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-sm leading-relaxed text-sm sm:text-base">
              India's leading Multimedia and Generative AI Institute. 
              Transforming creative careers with cutting-edge AI tools and 
              industry-ready skills since 2018.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors group text-sm sm:text-base">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-neon-purple/20 flex items-center justify-center group-hover:bg-neon-purple/30 transition-colors border border-transparent group-hover:border-[#ffc107]/20">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neon-purple group-hover:text-[#ffc107] transition-colors duration-300" />
                </div>
                <span>+91 9910792123</span>
              </a>
              <a href="mailto:hello@design-engine.io" className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors group text-sm sm:text-base">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-neon-cyan/20 flex items-center justify-center group-hover:bg-neon-cyan/30 transition-colors border border-transparent group-hover:border-[#ffc107]/20">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neon-cyan group-hover:text-[#ffc107] transition-colors duration-300" />
                </div>
                <span>namaste@design-engine.io</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary/80 hover:bg-gradient-to-br hover:from-neon-purple hover:to-neon-cyan flex items-center justify-center transition-all duration-300 border border-transparent hover:border-[#ffc107]/30"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 hover:text-[#ffc107] transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 gradient-text">Courses</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group text-xs sm:text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all group-hover:text-[#ffc107]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 gradient-text">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group text-xs sm:text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all group-hover:text-[#ffc107]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 gradient-text">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group text-xs sm:text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all group-hover:text-[#ffc107]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#ffc107]/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            <span className="text-[#ffc107]">✦</span> © {new Date().getFullYear()} Design Engine. All rights reserved. <span className="text-[#ffc107]">✦</span>
          </p>
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-muted-foreground flex-wrap justify-center">
            <a href="#" className="hover:text-foreground transition-colors hover:text-[#ffc107]">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors hover:text-[#ffc107]">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors hover:text-[#ffc107]">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;