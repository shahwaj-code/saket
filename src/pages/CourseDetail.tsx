import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  Award,
  Globe,
  CheckCircle2,
  Calendar,
  MapPin,
  Play,
  Download,
  Sparkles,
  Video,
  Palette,
  Layers,
  Zap,
  TrendingUp,
  BadgeCheck,
  GraduationCap,
  Briefcase,
  Target,
  Film,
  PenTool,
  Monitor,
  Gamepad2,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import StickyButtons from "@/components/StickyButtons";
import { toast } from "sonner";

// Import course images
import animationImg from '../assets/courses/Animation.webp';
import vfxImg from '../assets/courses/vfx.webp';
import generativeAiImg from '../assets/courses/Generative-ai.webp';
import motionGraphicsImg from '../assets/courses/motion-graphic.webp';
import gameDesignImg from '../assets/courses/game_img.webp';
import uiUxImg from '../assets/courses/ui-ux.webp';
import graphicDesignImg from '../assets/courses/graphic.webp';
import videoEditingImg from '../assets/courses/Video_course.webp';
import degreeCourseImg from '../assets/courses/degree-course.webp';

// Course data with all 9 courses
// Course data - updated to match Courses.jsx
const courseData = {
  "B.sc-digital-media-ai-filmmaking": {
    title: "B.Sc in Vocational Multimedia & Animation",
    seoTitle: "B.Sc Multimedia, Animation & AI Filmmaking in Saket, Delhi | Design Engine",
    tagline: "Hands-on B.Sc degree for vocational multimedia and animation careers.",
    description: "UGC-approved B.Sc degree offering intense specialization in 3D production pipelines, cinematic VFX, advanced motion graphics, and job showreels.",
    seoDescription: "Join Design Engine Saket for a 3-year B.Sc in Vocational Multimedia, Animation and AI Filmmaking in South Delhi. Build a studio-ready portfolio with VFX, motion graphics, 3D, Unreal Engine and industry internship.",
    seoHiddenH1: "B.Sc in Vocational Multimedia, Animation & AI Filmmaking – Saket, Delhi",
    ogUrl: "https://design-engine.io/saket/B.sc-digital-media-ai-filmmaking",
    ogImage: "https://design-engine.io/path-to-your-bsc-multimedia-hero-image.jpg",
    longDescription: "This B.Sc degree is designed for students who want to build a career in vocational multimedia and animation. You will learn animation production, multimedia storytelling, motion graphics, VFX compositing, and professional portfolio development through real-world projects and internships.",
    gradient: "from-[#22c55e] to-[#14b8a6]",
    color: "#22c55e",
    duration: "3 Years",
    icon: "GraduationCap",
    image: degreeCourseImg,
    highlights: [
      "Creative media and AI filmmaking",
      "Industry-ready portfolio",
      "Internship & real-world projects",
      "Hands-on production workflows",
      "AI-assisted content creation",
      "Professional showreel development"
    ],
    tools: [
      "Illustrator", "Photoshop", "Premiere Pro", "DaVinci Resolve",
      "After Effects", "Maya", "Blender", "Unreal Engine",
      "AI filmmaking tools", "Storyboarding software"
    ],
    outcomes: [
      "Build a professional filmmaking portfolio",
      "Master AI-assisted content creation",
      "Create cinematic digital media projects",
      "Intern with industry production teams",
      "Launch a career in digital filmmaking and media"
    ],
    modules: [
      {
        title: "Semester I – Creative Technologist",
        duration: "6 Months",
        topics: [
          "Design fundamentals, color psychology & visual aesthetics",
          "Introduction to AI tools and prompt engineering",
          "Brand identity and creative design concepts",
          "Graphic designing using Illustrator & Photoshop",
          "Modern layout and content creation techniques"
        ],
      },
      {
        title: "Semester II – Digital Content Creator",
        duration: "6 Months",
        topics: [
          "Storytelling, scripting and content planning",
          "Audio basics and sound design fundamentals",
          "AI-based video creation and filmmaking",
          "Video editing and post-production workflows",
          "Motion graphics and cinematic color grading"
        ],
      },
      {
        title: "Semester III – 3D Visualization Specialist",
        duration: "6 Months",
        topics: [
          "3D pipeline, workflow and production basics",
          "Lighting, materials and realistic rendering",
          "AI-assisted 3D modeling techniques",
          "3D design using Maya and sculpting tools",
          "Character and environment creation"
        ],
      },
      {
        title: "Semester IV – VFX Compositor",
        duration: "6 Months",
        topics: [
          "Digital compositing and VFX fundamentals",
          "3D workflow using Blender",
          "Node-based compositing techniques",
          "Rotoscoping and visual cleanup",
          "Matchmoving and tracking for VFX"
        ],
      },
      {
        title: "Semester V – Real-time Technical Artist",
        duration: "6 Months",
        topics: [
          "Virtual production and real-time workflows",
          "Media law and creative entrepreneurship",
          "Real-time rendering using Unreal Engine",
          "Interactive design and blueprint systems"
        ],
      },
      {
        title: "Semester VI – Industry Immersion",
        duration: "6 Months",
        topics: [
          "Full-time industry internship experience",
          "Portfolio and professional showreel development",
          "Real-world production and project exposure",
          "Industry-level workflow and collaboration"
        ],
      },
    ],
  },
  "master-in-gen-ai": {
    title: "MASTER IN GEN AI",
    tagline: "Master generative AI tools and techniques for creative professionals",
    description: "Master generative AI tools and techniques for creative professionals.",
    longDescription: "Become an expert in generative AI with hands-on training in the latest tools and methodologies used by top creative professionals worldwide.",
    gradient: "from-[#ffc107] to-[#ffb300]",
    color: "#ffc107",
    duration: "2 Months",
    icon: "Sparkles",
    image: generativeAiImg,
    highlights: [
      "Advanced AI tools mastery",
      "Creative workflow integration",
      "Portfolio development",
      "Industry applications",
      "Career advancement",
      "Certification"
    ],
    tools: [
      "Midjourney", "DALL-E", "Stable Diffusion", "ChatGPT",
      "RunwayML", "Adobe Firefly", "Nano Banana", "Claude",
      "Veo3", "Kling", "Grok", "Seedance", "Suno AI",
      "ElevenLabs", "Bolt", "Loveable", "Canva AI",
      "Framer AI", "Notebook LM", "Deepseek", "Gamma"
    ],
    outcomes: [
      "Master generative AI tools",
      "Create AI-enhanced creative work",
      "Integrate AI in professional workflows",
      "Build innovative portfolios",
      "Lead AI-driven projects",
      "Advance career in AI creative fields"
    ],
  },
  "gen-2-0-ai-generalist-course": {
    title: "GEN 2.0: AI GENERALIST COURSE",
    tagline: "Master AI across creative industries. Learn prompt engineering, AI content creation, video generation, and build a portfolio.",
    description: "Master AI across creative industries. Learn prompt engineering, AI content creation, video generation, and build a portfolio.",
    longDescription: "This comprehensive course transforms you into an AI generalist, equipped with knowledge across AI creativity, content production, and practical applications in design, animation, gaming, and media.",
    gradient: "from-[#ffc107] to-[#ffb300]",
    color: "#ffc107",
    duration: "12 Months",
    icon: "Sparkles",
    image: generativeAiImg,
    highlights: [
      "🎯 Industry-Driven Curriculum",
      "💡 Practical Learning, Not Just Theory",
      "👨‍🏫 Mentorship by Design Experts",
      "🎬 Creative Exposure & Industry Workshops",
      "📈 Career Guidance & Placement Support",
      "🚀 Portfolio Power with DesignEngine"
    ],
    tools: [
      "Midjourney", "ChatGPT", "DALL-E 3", "Stable Diffusion",
      "RunwayML", "Adobe Firefly", "Leonardo AI", "Claude",
      "ElevenLabs", "Synthesia", "Canva AI", "Framer AI"
    ],
    outcomes: [
      "Understand AI ecosystem clearly",
      "Master prompt engineering & AI dialogue",
      "Create designs, logos, and creative assets using AI",
      "Produce social media content, videos, and animations",
      "Build a job-ready AI portfolio",
      "Launch freelance or full-time AI creative career"
    ],
    modules: [
      {
        title: "Term 1: AI Foundations & Creative Intelligence",
        duration: "6 Months",
        topics: [
          "Introduction to Artificial Intelligence",
          "Understanding Generative AI in Creative Industries",
          "Fundamentals of Prompt Engineering",
          "Advanced Prompting Techniques & Frameworks",
          "Branding and Identity Creation using AI Tools",
          "Image Generation and Editing with AI"
        ],
      },
      {
        title: "Term 2: AI Production & Content Creation Mastery",
        duration: "6 Months",
        topics: [
          "AI Tools for Visual Enhancement and Design",
          "Video Creation using AI Platforms",
          "Motion Graphics and Animation with AI",
          "AI Cinematics & Video Generation",
          "AI Voiceovers, Music & Audio Cleanup",
          "Capstone Project: AI-Based Creative Portfolio"
        ],
      },
    ],
  },
  "expert-program-digital-content-animation": {
    title: "Expert Program in Digital Content & Animation",
    tagline: "Create stunning motion graphics and animations for various media.",
    description: "Create stunning motion graphics and animations for various media.",
    longDescription: "Learn to create professional animated content for film, games, advertising, and digital platforms. Master industry-standard workflows and production pipelines.",
    gradient: "from-[#9c27b0] to-[#e91e63]",
    color: "#9c27b0",
    duration: "19 Months",
    icon: "Film",
    image: motionGraphicsImg,
    highlights: [
      "Advanced animation techniques",
      "Digital content production",
      "Industry-standard workflows",
      "Professional portfolio",
      "Mentorship sessions",
      "Career guidance"
    ],
    tools: [
      "Photoshop", "Illustrator", "After Effects", "Premiere Pro",
      "Maya", "Blender", "Substance Painter", "ZBrush"
    ],
    outcomes: [
      "Master advanced animation and VFX",
      "Create professional digital content",
      "Build comprehensive portfolio",
      "Lead animation projects"
    ],
  },
  "rendercraft-3d-animation-vfx": {
    title: "RenderCraft: 3D Animation & VFX",
    tagline: "Master 3D rendering, animation, and visual effects for film and games.",
    description: "Master 3D rendering, animation, and visual effects for film and games.",
    longDescription: "Learn industry-standard tools and workflows for creating stunning 3D content for film, games, and advertising. Master rendering, lighting, and VFX pipelines.",
    gradient: "from-[#2196f3] to-[#00bcd4]",
    color: "#2196f3",
    duration: "12 Months",
    icon: "Monitor",
    image: vfxImg,
    highlights: [
      "Advanced 3D rendering",
      "VFX pipeline mastery",
      "Industry tools & software",
      "Real-world projects",
      "Portfolio development",
      "Placement support"
    ],
    tools: [
      "Autodesk Maya", "Blender", "Nuke", "Houdini",
      "Substance Painter", "ZBrush", "Arnold Renderer", "After Effects"
    ],
    outcomes: [
      "Master advanced 3D rendering and VFX",
      "Create photorealistic animations",
      "Build professional portfolio",
      "Work in production pipelines"
    ],
  },
  "video-editing": {
    title: "Video Editing",
    tagline: "Professional video editing skills for film, advertising, and content creation.",
    description: "Professional video editing skills for film, advertising, and content creation.",
    longDescription: "This comprehensive video editing course covers everything from basic cutting to advanced color grading. Learn to create engaging content for YouTube, social media, and professional productions.",
    gradient: "from-[#ffc107] to-[#ffb300]",
    color: "#ffc107",
    duration: "12 Months",
    icon: "Film",
    image: videoEditingImg,
    highlights: [
      "Real projects",
      "Demo reel creation",
      "Mentorship",
      "Job support",
      "Portfolio building",
      "Career guidance"
    ],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Audition"],
    outcomes: [
      "Master editing tools",
      "Create professional videos",
      "Build demo reel",
      "Start editing career",
      "Advanced color grading",
      "Professional sound design"
    ],
  },
  "digital-content-motion-design": {
    title: "Digital Content & Motion Design",
    tagline: "Create engaging digital content with advanced motion design techniques.",
    description: "Create engaging digital content with advanced motion design techniques.",
    longDescription: "Learn to combine storytelling with visual effects for modern digital platforms. Create engaging content for Instagram, TikTok, YouTube, and other social media platforms.",
    gradient: "from-[#00bcd4] to-[#0097a7]",
    color: "#00bcd4",
    duration: "12 Months",
    icon: "Layers",
    image: motionGraphicsImg,
    highlights: [
      "Social media content creation",
      "Motion design fundamentals",
      "Interactive animations",
      "Platform-specific content",
      "Portfolio development",
      "Freelance preparation"
    ],
    tools: [
      "After Effects", "Premiere Pro", "Photoshop", "Illustrator",
      "Cinema 4D", "Adobe Audition"
    ],
    outcomes: [
      "Create engaging content for all major platforms",
      "Master motion design for digital marketing",
      "Build interactive animations",
      "Launch freelance motion design career"
    ],
  },
  "dreamengine-animation-unreal": {
    title: "DreamEngine: Animation with Unreal",
    tagline: "Learn animation techniques using Unreal Engine for games and interactive media.",
    description: "Learn animation techniques using Unreal Engine for games and interactive media.",
    longDescription: "Learn to create stunning animated sequences, virtual cinematography, and interactive experiences for film, games, and virtual production using Unreal Engine.",
    gradient: "from-[#9c27b0] to-[#3f51b5]",
    color: "#9c27b0",
    duration: "28 Months",
    icon: "Gamepad2",
    image: gameDesignImg,
    highlights: [
      "Unreal Engine mastery",
      "Real-time animation",
      "Cinematic content creation",
      "Virtual cinematography",
      "Game development skills",
      "Portfolio building"
    ],
    tools: [
      "Unreal Engine", "Maya", "Blender", "Substance Painter",
      "ZBrush", "Photoshop", "After Effects"
    ],
    outcomes: [
      "Master Unreal Engine for animation",
      "Create cinematic content",
      "Develop real-time experiences",
      "Work in virtual production"
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    seoTitle: "UI/UX Design Course in Saket, Delhi | 9-Month Job-Ready Program",
    tagline: "Master user research frameworks, component-driven wireframing, high-fidelity Figma prototyping, and mobile app design systems.",
    description: "Master user research frameworks, component-driven wireframing, high-fidelity Figma prototyping, and mobile app design systems.",
    seoDescription: "Join a 9-month UI/UX Design course at Design Engine Saket. Learn user-centered design, UX research, design systems and interactive prototypes with Figma, Adobe CC, Generative AI, HTML, CSS and WordPress to build a hire-ready portfolio.",
    seoHiddenH1: "UI/UX Design Course in Saket, Delhi",
    ogUrl: "https://design-engine.io/saket/ui-ux-design",
    ogImage: "https://design-engine.io/path-to-your-ui-ux-hero-image.jpg",
    seoImageAlt: "Students working on UI/UX design projects at Design Engine Saket",
    longDescription: "This comprehensive UI/UX course takes you from beginner to job-ready designer. Learn industry best practices, design thinking methodologies, and how to create portfolios that impress employers.",
    gradient: "from-[#ffc107] to-[#ffd54f]",
    color: "#ffc107",
    duration: "9 Months",
    icon: "Palette",
    image: uiUxImg,
    highlights: [
      "Real-world projects",
      "Portfolio development",
      "Mentorship",
      "Placement support",
      "Industry tools training",
      "Career guidance"
    ],
    tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "HTML5", "CSS3", "Generative AI"],
    outcomes: [
      "Create user-centered designs",
      "Build interactive prototypes",
      "Conduct user research",
      "Develop design systems",
      "Launch your design career",
      "Work on real products"
    ],
  },
  "digital-graphic-design-essentials": {
    title: "Graphic Design",
    seoTitle: "Graphic Design Course in Saket, Delhi | 7-Month Digital Design Program",
    tagline: "Learn the essentials of digital graphic design, from branding to layout and mobile UI basics.",
    description: "Learn the essentials of digital graphic design, from branding to layout and mobile UI basics.",
    seoDescription: "Join a 7-month graphic design course at Design Engine Saket. Learn digital design fundamentals, Figma essentials, UI design basics and modern tools like Photoshop, Illustrator, Canva and Generative AI while building a portfolio with real brand projects.",
    seoHiddenH1: "Graphic Design Course in Saket, Delhi",
    ogUrl: "https://design-engine.io/saket/graphic-design",
    ogImage: "https://design-engine.io/path-to-your-graphic-design-hero-image.jpg",
    seoImageAlt: "Students working on digital graphic design projects at Design Engine Saket",
    longDescription: "Perfect for beginners looking to start their digital design journey, this course covers practical skills and real-world applications. Learn Figma, digital illustration, web design fundamentals, and build a strong portfolio.",
    gradient: "from-[#bb86fc] to-[#6200ff]",
    color: "#bb86fc",
    duration: "7 Months",
    icon: "PenTool",
    image: graphicDesignImg,
    highlights: [
      "Digital design fundamentals",
      "Figma essentials",
      "UI design basics",
      "Portfolio building",
      "Branding principles",
      "Layout design"
    ],
    tools: ["Photoshop", "Illustrator", "InDesign", "Figma", "Canva", "Generative AI"],
    outcomes: [
      "Master digital design fundamentals",
      "Design with Figma and modern tools",
      "Create UI/UX basics",
      "Build portfolio with 10+ projects"
    ],
  }
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Video,
  Palette,
  Layers,
  Film,
  PenTool,
  Monitor,
  Gamepad2,
};

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Slug alias mapping to handle variations
  const slugAliases: Record<string, string> = {
    "degree-in-animation-design": "B.sc-digital-media-ai-filmmaking",
  };
  
  const normalizedSlug = slugAliases[slug as string] || slug;
  let course = courseData[normalizedSlug as keyof typeof courseData];

  // If direct lookup fails, try a robust slug/title match to avoid mismatches
  if (!course && slug) {
    const slugify = (s: string) =>
      String(s)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    const target = slugify(slug);

    // try matching keys by slugified forms
    const foundKey = Object.keys(courseData).find((k) => slugify(k) === target || k.toLowerCase() === slug!.toLowerCase());
    if (foundKey) {
      course = courseData[foundKey as keyof typeof courseData];
    } else {
      // try matching by title
      const foundByTitle = Object.values(courseData).find((c: any) => slugify(c.title || "") === target);
      if (foundByTitle) course = foundByTitle as any;
    }
  }
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!course) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#030306',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#ffffff'
          }}>Course Not Found</h1>
          <Link to="/courses" style={{
            color: '#ffc107',
            textDecoration: 'underline',
            fontSize: '1rem',
            cursor: 'pointer'
          }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffd54f'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffc107'}>
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const normalizedHighlights = Array.from({ length: 6 }, (_, idx) =>
    course.highlights[idx] || "Practical skills from real brand projects"
  );

  const normalizedOutcomes = Array.from({ length: 6 }, (_, idx) =>
    course.outcomes[idx] || "Industry-driven hands-on learning"
  );

  const IconComponent = iconMap[course.icon] || Sparkles;

  return (
    <>
      <Helmet>
        <title>{course.seoTitle || `${course.title} | Design Engine`}</title>
        <meta name="description" content={course.seoDescription || course.description} />
        <meta property="og:title" content={course.seoTitle || `${course.title} | Design Engine`} />
        <meta property="og:description" content={course.seoDescription || course.description} />
        <meta property="og:url" content={course.ogUrl || "https://design-engine.io"} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={course.ogImage || "https://design-engine.io/path-to-your-default-og-image.jpg"} />
        {course.seoImageAlt && <meta property="og:image:alt" content={course.seoImageAlt} />}
      </Helmet>

      <div className="min-h-screen bg-[#030306] text-white">
        <Navbar />

        {/* Sticky Bar */}
        <AnimatePresence>
          {showStickyBar && (
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#ffc107]/20"
            >
              <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <IconComponent className="w-8 h-8 text-[#ffc107]" />
                  <div>
                    <h3 className="font-bold">{course.title}</h3>
                    <p className="text-sm text-gray-400">{course.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => setShowEnquiry(true)}
                    className="bg-[#ffc107] text-black hover:bg-[#ffb300] px-6 py-2"
                  >
                    Enquiry Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffc107]/10 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <BadgeCheck className="w-5 h-5 text-[#ffc107]" />
                  <span className="text-sm text-[#ffc107] font-medium">Industry Recognized</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {course.title}
                </h1>

                <p className="text-xl text-gray-300 mb-8">
                  {course.tagline}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#ffc107]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#ffc107]" />
                    <span>{(course as any).studentsEnrolled || 500}+ Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#ffc107]" />
                    <span>Online/Offline</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <Button
                    size="lg"
                    onClick={() => setShowEnquiry(true)}
                      className="bg-[#ffc107] text-black hover:bg-[#ffb300] px-6 py-3 text-center"
                  >
                    Enquiry Now
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* removed icon badge: only show hero image as requested */}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Course Highlights */}
        <section className="py-16 bg-[#0a0a0f]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Course Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {normalizedHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-[#ffc107] mx-auto mb-3" />
                  <p className="text-sm font-medium">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Description */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About the Course</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-3">
                {course.longDescription}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                This program includes dedicated mentor support, real-world assignments, and placement-oriented projects.
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-16 bg-[#0a0a0f]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {normalizedOutcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-[#14141a] p-4 rounded-xl"
                >
                  <Target className="w-5 h-5 text-[#ffc107] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools You'll Master */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Tools You'll Master</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {course.tools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03 }}
                  className="px-6 py-3 bg-[#ffc107]/10 text-[#ffc107] rounded-full font-medium border border-[#ffc107]/20"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#ffc107] to-[#ffb300]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setShowEnquiry(true)}
                className="bg-black text-[#ffc107] hover:bg-gray-900 px-8 py-3"
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </section>

        <Footer />

        <EnquiryModal
          isOpen={showEnquiry}
          onClose={() => setShowEnquiry(false)}
          selectedCourse={course.title}
        />
      </div>
      <StickyButtons />
    </>
  );
};

export default CourseDetail;