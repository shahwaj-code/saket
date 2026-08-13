import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";
import ResponsiveImage from "./ResponsiveImage";
import {
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  ArrowUpRight,
  Facebook
} from "lucide-react";
import { FaPinterest } from "react-icons/fa";

const footerCourseLinks = [
  { title: "B.Sc in Vocational Multimedia & Animation", slug: "B.sc-digital-media-ai-filmmaking" },
  { title: "Digital Graphic Design Essentials", slug: "digital-graphic-design-essentials" },
  { title: "Digital Content & Motion Design", slug: "digital-content-motion-design" },
  { title: "Expert Program in Digital Content & Animation", slug: "expert-program-digital-content-animation" },
  { title: "Master in AVG", slug: "master-in-avg" },
  { title: "RenderCraft: 3D Animation & VFX", slug: "rendercraft-3d-animation-vfx" },
  { title: "DreamEngine: Animation with Unreal", slug: "dreamengine-animation-unreal" },
  { title: "Advanced UI Design Skills", slug: "ui-ux-product-design" },
  { title: "Video Editing", slug: "video-editing" },
];

const footerLinks = {
  courses: footerCourseLinks,
  company: [
    { label: "About Us", href: "/about", isHash: false },
    { label: "Blog", href: "/blog", isHash: false },
    { label: "Partners", href: "#partners", isHash: true },
    { label: "Student Work", href: "/student-work", isHash: false },
  ],
  resources: [
    { label: "All Courses", href: "/courses", isHash: false },
    { label: "Creative Path Quiz", href: "/quiz", isHash: false },
    { label: "FAQ", href: "/faq", isHash: false },
  ],
};

// Social links with YouTube and LinkedIn uncommented
const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/designengine_saket", label: "Instagram", isLucide: true },
  { icon: Youtube, href: "https://www.youtube.com/@DesignEngine_Official", label: "Youtube", isLucide: true },
  { icon: Linkedin, href: "https://www.linkedin.com/company/design-engine-saket", label: "LinkedIn", isLucide: true },
  { icon: Twitter, href: "https://x.com/de_saket", label: "Twitter", isLucide: true },
  { icon: Facebook, href: "https://www.facebook.com/designengine.saket", label: "Facebook", isLucide: true },
  { icon: FaPinterest, href: "https://in.pinterest.com/designengine_saket", label: "Pinterest", isLucide: false },
];

// Center details (without location/address)
const centers = [
  {
    name: "",
    phone: "+91 87961 51653",
    email: "designengine.saket@gmail.com"
  }
];

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-2 border-t border-[#ffc107]/10">
      <div className="absolute inset-0 bg-[#030306]" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-4">
          {/* BRAND */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-4">
              <ResponsiveImage
                src={logo}
                alt="Design Engine logo"
                className="w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] object-contain"
                sizes="(max-width: 768px) 100vw, 220px"
              />
            </Link>

            <p className="text-white/60 mb-4 max-w-sm leading-relaxed text-xs">
              India's leading Multimedia and Generative AI Institute.
              Transforming creative careers with cutting-edge AI tools and
              industry-ready skills.
            </p>

            {/* CENTERS CONTACT */}
            <div className="grid grid-cols-1 gap-6 mb-4">
              {centers.map((center, index) => (
                <div key={center.name || index} className="space-y-2">
                  
                  {/* Phone */}
                  <a
                    href={`tel:${center.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#ffc107]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-3 h-3 text-[#ffc107]" />
                    </div>
                    <span className="text-[11px] whitespace-nowrap">{center.phone}</span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${center.email}`}
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#ffc107]/10 flex items-center justify-center shrink-0">
                      <Mail className="w-3 h-3 text-[#ffc107]" />
                    </div>
                    <span className="text-[11px] whitespace-nowrap">{center.email}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* SOCIAL - All platforms including YouTube and LinkedIn */}
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#ffc107] flex items-center justify-center transition-colors group"
                  >
                    <Icon className="w-4 h-4 text-white/70 group-hover:text-black transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* LINKS - ALL THREE COLUMNS */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {/* COURSES */}
              <div>
                <h4 className="font-semibold text-[#ffc107] mb-3 text-xs tracking-wider">
                  Courses
                </h4>
                <ul className="space-y-2">
                  {footerLinks.courses.map((course) => (
                    <li key={course.slug}>
                      <Link
                        to={`/quiz-course/${course.slug}`}
                        className="relative block text-xs leading-normal text-white/80 transition-colors hover:text-white"
                      >
                        {course.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COMPANY */}
              <div>
                <h4 className="font-semibold text-[#ffc107] mb-3 text-xs tracking-wider">
                  Company
                </h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      {link.isHash ? (
                        <a
                          href={link.href}
                          className="group relative inline-flex items-center gap-0.5 text-xs text-white/60 transition-colors hover:text-white"
                        >
                          <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-0 after:bg-[#ffc107] after:transition-all after:duration-300 group-hover:after:w-full">{link.label}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="group relative inline-flex items-center gap-0.5 text-xs text-white/60 transition-colors hover:text-white"
                        >
                          <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-0 after:bg-[#ffc107] after:transition-all after:duration-300 group-hover:after:w-full">{link.label}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RESOURCES */}
              <div>
                <h4 className="font-semibold text-[#ffc107] mb-3 text-xs tracking-wider">
                  Resources
                </h4>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      {link.isHash ? (
                        <a
                          href={link.href}
                          className="group relative inline-flex items-center gap-0.5 text-xs text-white/60 transition-colors hover:text-white"
                        >
                          <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-0 after:bg-[#ffc107] after:transition-all after:duration-300 group-hover:after:w-full">{link.label}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="group relative inline-flex items-center gap-0.5 text-xs text-white/60 transition-colors hover:text-white"
                        >
                          <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-0 after:bg-[#ffc107] after:transition-all after:duration-300 group-hover:after:w-full">{link.label}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-4 mb-16 border-t border-[#ffc107]/10 flex flex-col items-center gap-3">
          <p className="text-[10px] text-white/60 text-center">
            © {new Date().getFullYear()} Design Engine. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[10px] text-white/60">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;