import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  ArrowLeft, Sparkles, Clock, Users, Star, Award, 
  CheckCircle, CheckCircle2, MessageCircle,
  Calendar, Share2, BookOpen, Target, Zap, Film,
  Palette, Gamepad2, Monitor, IndianRupee, ChevronDown,
  ChevronRight, TrendingUp, BadgeCheck, GraduationCap,
  Briefcase, Globe, MapPin, Download, PenTool
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import { toast } from "sonner";
import { useState, useEffect } from "react";

// Import course images
import animationImg from '../assets/courses/Animation.webp';
import vfxImg from '../assets/courses/vfx.webp';
import generativeAiImg from '../assets/courses/Generative-ai.webp';
import motionGraphicImg from '../assets/courses/motion-graphic.webp';
import gameImg from '../assets/courses/game_img.webp';
import uiUxImg from '../assets/courses/ui-ux.webp';
import graphicImg from '../assets/courses/graphic.webp';
import videoCourseImg from '../assets/courses/Video_course.webp';
import degreeCourseImg from '../assets/courses/degree-course.webp';

// Course data - simplified structure matching CourseDetail
const courseData = {
  "generative-ai-for-designers": {
    title: "Generative AI for Designers",
    tagline: "Master AI tools and become a future-ready creative",
    description: "Learn to harness the power of AI tools like Midjourney, ChatGPT, and DALL-E to supercharge your creative workflow. Create stunning visuals, generate innovative ideas, and stay ahead in the rapidly evolving design landscape.",
    longDescription: "This comprehensive course is designed for creatives who want to leverage AI to enhance their work. You'll learn practical applications of generative AI in design, from concept development to final execution. Whether you're a graphic designer, UI/UX professional, or digital artist, this course will transform how you approach creative problem-solving.",
    gradient: "from-[#ffc107] to-[#ffb300]",
    color: "#ffc107",
    duration: "8 weeks",
    icon: "Sparkles",
    image: generativeAiImg,
    highlights: [
      "Hands-on projects",
      "Portfolio building",
      "1-on-1 mentorship",
      "Lifetime access"
    ],
    tools: ["Midjourney", "ChatGPT", "DALL-E 3", "Stable Diffusion", "Adobe Firefly", "RunwayML", "Leonardo AI"],
    outcomes: [
      "Master AI design tools",
      "Create AI-enhanced portfolios",
      "Develop innovative workflows",
      "Stay ahead of industry trends",
      "Launch AI-powered design career",
      "Build client-ready projects"
    ],
  },
  "vfx-animation": {
    title: "VFX & Animation",
    tagline: "Create Hollywood-grade visual effects",
    description: "Master the art of visual effects and cinematic animation. Learn industry-standard techniques used in major film studios to create breathtaking scenes and characters.",
    longDescription: "Dive deep into the world of VFX and animation with hands-on training in industry-standard software. From compositing to 3D animation, this course covers everything you need to create stunning visual effects for film, television, and digital media.",
    gradient: "from-[#ffd54f] to-[#ffc107]",
    color: "#ffd54f",
    duration: "12 weeks",
    icon: "Film",
    image: vfxImg,
    highlights: [
      "Real-world projects",
      "Demo reel creation",
      "Mentorship",
      "Placement support"
    ],
    tools: ["Maya", "Houdini", "Nuke", "After Effects", "Blender"],
    outcomes: [
      "Create Hollywood-quality VFX shots",
      "Master industry-standard software",
      "Build a professional demo reel",
      "Understand full VFX pipeline",
      "Collaborate on team projects",
      "Work on real film projects"
    ],
  },
  "animation": {
    title: "Animation",
    tagline: "Bring characters and stories to life through animation",
    description: "Learn modern animation techniques including 2D animation, 3D animation, motion graphics and VFX basics.",
    longDescription: "This comprehensive animation course covers everything from traditional principles to cutting-edge digital techniques. Master character animation, storyboarding, and industry-standard software used by top studios worldwide.",
    gradient: "from-[#ffd54f] to-[#ffc107]",
    color: "#ffd54f",
    duration: "12 weeks",
    icon: "Palette",
    image: animationImg,
    highlights: [
      "Character animation projects",
      "Portfolio development",
      "Mentorship sessions",
      "Lifetime access"
    ],
    tools: ["Maya", "Blender", "Toon Boom", "After Effects", "Photoshop"],
    outcomes: [
      "Master 2D and 3D animation techniques",
      "Create professional character animations",
      "Build a stunning animation portfolio",
      "Understand the full animation pipeline",
      "Work on animation projects for film, games, and media",
      "Develop storytelling skills"
    ],
  },
  "motion-graphics": {
    title: "Motion Graphics",
    tagline: "Create stunning motion graphics",
    description: "Bring your designs to life with motion. Learn animation principles, video editing, and motion graphics techniques for social media, advertising, and film.",
    longDescription: "Master the art of motion design and video production. From kinetic typography to complex animations, this course prepares you for a career in motion graphics.",
    gradient: "from-[#ffb300] to-[#ffd54f]",
    color: "#ffb300",
    duration: "8 weeks",
    icon: "Film",
    image: motionGraphicImg,
    highlights: [
      "Commercial projects",
      "Portfolio building",
      "Mentorship",
      "Career guidance"
    ],
    tools: ["After Effects", "Premiere Pro", "Cinema 4D", "Photoshop", "Illustrator"],
    outcomes: [
      "Create professional motion graphics",
      "Build strong portfolio",
      "Freelance ready",
      "Work with brands"
    ],
  },
  "game-design": {
    title: "Game Design & Development",
    tagline: "Build immersive gaming experiences",
    description: "Turn your passion for games into a career. Learn game design principles, development tools, and how to create engaging gameplay experiences.",
    longDescription: "From concept to playable game, this course covers every aspect of game creation. Learn industry-standard tools and techniques used by top game studios worldwide.",
    gradient: "from-[#ffb300] to-[#ffc107]",
    color: "#ffb300",
    duration: "14 weeks",
    icon: "Gamepad2",
    image: gameImg,
    highlights: [
      "Game development projects",
      "Portfolio creation",
      "Mentorship",
      "Job placement"
    ],
    tools: ["Unity", "Unreal Engine", "Blender", "C#", "Photoshop"],
    outcomes: [
      "Build complete games",
      "Master Unity game engine",
      "Understand game design",
      "Create game portfolios",
      "Publish to app stores",
      "Work on multiplayer games"
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    seoTitle: "UI/UX Design Course in Saket, Delhi | 9-Month Job-Ready Program",
    tagline: "Design intuitive digital experiences",
    description: "Learn to create user-centered designs that delight and engage. Master the full product design process from research to high-fidelity prototypes.",
    seoDescription: "Join a 9-month UI/UX Design course at Design Engine Saket. Learn user-centered design, UX research, design systems and interactive prototypes with Figma, Adobe CC, Generative AI, HTML, CSS and WordPress to build a hire-ready portfolio.",
    seoHiddenH1: "UI/UX Design Course in Saket, Delhi",
    ogUrl: "https://design-engine.io/saket/ui-ux-design",
    ogImage: "https://design-engine.io/path-to-your-ui-ux-hero-image.jpg",
    seoImageAlt: "Students working on UI/UX design projects at Design Engine Saket",
    longDescription: "This comprehensive UI/UX course takes you from beginner to job-ready designer. Learn industry best practices, design thinking methodologies, and how to create portfolios that impress employers.",
    gradient: "from-[#ffc107] to-[#ffd54f]",
    color: "#ffc107",
    duration: "9 months",
    icon: "Palette",
    image: uiUxImg,
    highlights: [
      "Real-world projects",
      "Portfolio development",
      "Mentorship",
      "Placement support"
    ],
    tools: ["Photoshop", "Illustrator", "Adobe Creative Cloud", "Figma", "Generative AI", "HTML5", "CSS3", "WordPress"],
    outcomes: [
      "Create user-centered designs",
      "Build interactive prototypes",
      "Conduct user research",
      "Develop design systems",
      "Launch your design career",
      "Work on real products"
    ],
  },
  "graphic-design": {
    title: "Graphic Design",
    seoTitle: "Graphic Design Course in Saket, Delhi | 7-Month Digital Design Program",
    tagline: "Master digital design fundamentals",
    description: "A focused course on digital graphic design essentials covering design fundamentals, digital illustration, UI design basics, and modern design tools.",
    seoDescription: "Join a 7-month graphic design course at Design Engine Saket. Learn digital design fundamentals, Figma essentials, UI design basics and modern tools like Photoshop, Illustrator, Canva and Generative AI while building a portfolio with real brand projects.",
    seoHiddenH1: "Graphic Design Course in Saket, Delhi",
    ogUrl: "https://design-engine.io/saket/graphic-design",
    ogImage: "https://design-engine.io/path-to-your-graphic-design-hero-image.jpg",
    seoImageAlt: "Students working on digital graphic design projects at Design Engine Saket",
    longDescription: "Perfect for beginners looking to start their digital design journey, this course covers practical skills and real-world applications. Learn Figma, digital illustration, web design fundamentals, and build a strong portfolio.",
    gradient: "from-[#bb86fc] to-[#6200ff]",
    color: "#bb86fc",
    duration: "7 months",
    icon: "Palette",
    image: graphicImg,
    highlights: [
      "Digital design fundamentals",
      "Figma essentials",
      "UI design basics",
      "Portfolio building"
    ],
    tools: ["Photoshop", "Illustrator", "InDesign", "Canva", "Adobe Express", "Lightroom", "Generative AI"],
    outcomes: [
      "Master digital design fundamentals",
      "Design with Figma and modern tools",
      "Create UI/UX basics",
      "Build portfolio with 10+ projects"
    ],
  },
  "digital-graphic-design-essentials": {
    title: "Digital Graphic Design Essentials",
    tagline: "Master digital design fundamentals",
    description: "A focused course on digital graphic design essentials covering design fundamentals, digital illustration, UI design basics, and modern design tools.",
    longDescription: "Perfect for beginners looking to start their digital design journey, this course covers practical skills and real-world applications. Learn Figma, digital illustration, web design fundamentals, and build a strong portfolio.",
    gradient: "from-[#bb86fc] to-[#6200ff]",
    color: "#bb86fc",
    duration: "7 months",
    icon: "Palette",
    image: graphicImg,
    highlights: [
      "Digital design fundamentals",
      "Figma essentials",
      "UI design basics",
      "Portfolio building"
    ],
    tools: ["Photoshop", "Illustrator", "InDesign", "Canva", "Adobe Express", "Lightroom", "Generative AI"],
    outcomes: [
      "Master digital design fundamentals",
      "Design with Figma and modern tools",
      "Create UI/UX basics",
      "Build portfolio with 10+ projects"
    ],
  },
  "digital-content-motion-design": {
    title: "Digital Content & Motion Design",
    tagline: "Create engaging digital content with motion design",
    description: "Master the art of creating compelling digital content through motion design, social media graphics, and interactive animations.",
    longDescription: "Learn to combine storytelling with visual effects for modern digital platforms. Create engaging content for Instagram, TikTok, YouTube, and other social media platforms.",
    gradient: "from-[#00bcd4] to-[#0097a7]",
    color: "#00bcd4",
    duration: "12 months",
    icon: "Layers",
    image: motionGraphicImg,
    highlights: [
      "Social media content creation",
      "Motion design fundamentals",
      "Interactive animations",
      "Platform-specific content"
    ],
    tools: ["Photoshop", "Illustrator", "InDesign", "Canva", "Adobe Express", "Lightroom", "Generative AI", "Premiere Pro", "After Effects", "Adobe Audition"],
    outcomes: [
      "Create engaging content for all major platforms",
      "Master motion design for digital marketing",
      "Build interactive animations",
      "Launch freelance motion design career"
    ],
  },
  "expert-program-digital-content-animation": {
    title: "Expert Program in Digital Content & Animation",
    tagline: "Advanced digital content creation and animation mastery",
    description: "Comprehensive expert-level program combining advanced animation techniques with digital content creation.",
    longDescription: "Learn to create professional animated content for film, games, advertising, and digital platforms. Master industry-standard workflows and production pipelines.",
    gradient: "from-[#9c27b0] to-[#e91e63]",
    color: "#9c27b0",
    duration: "19 months",
    icon: "Film",
    image: motionGraphicImg,
    highlights: [
      "Advanced animation techniques",
      "Digital content production",
      "Industry-standard workflows",
      "Professional portfolio"
    ],
    tools: ["Photoshop", "Illustrator", "InDesign", "Canva", "Adobe Express", "Lightroom", "Generative AI", "Premiere Pro", "After Effects", "Adobe Audition", "Adobe Creative Cloud", "Autodesk Maya", "Blender", "Substance Painter", "ZBrush"],
    outcomes: [
      "Master advanced animation and VFX",
      "Create professional digital content",
      "Build comprehensive portfolio",
      "Lead animation projects"
    ],
  },
  "rendercraft-3d-animation-vfx": {
    title: "RenderCraft: 3D Animation & VFX",
    seoTitle: "RenderCraft: 3D Animation & VFX Course in Saket, Delhi | Design Engine",
    tagline: "Master 3D rendering, animation, and visual effects",
    description: "Intensive program focused on 3D animation, rendering techniques, and advanced visual effects.",
    seoDescription: "Join RenderCraft, a 28-month 3D Animation & VFX course at Design Engine Saket. Learn advanced 3D rendering, photorealistic animation, VFX pipelines and industry tools through real client briefs and hire-ready portfolio projects.",
    seoHiddenH1: "RenderCraft: 3D Animation & VFX Course in Saket, Delhi",
    ogUrl: "https://design-engine.io/saket/rendercraft-3d-animation-vfx",
    ogImage: "https://design-engine.io/path-to-your-rendercraft-hero-image.jpg",
    seoImageAlt: "Students learning 3D animation and VFX in RenderCraft at Design Engine Saket",
    longDescription: "Learn industry-standard tools and workflows for creating stunning 3D content for film, games, and advertising. Master rendering, lighting, and VFX pipelines.",
    gradient: "from-[#2196f3] to-[#00bcd4]",
    color: "#2196f3",
    duration: "28 months",
    icon: "Monitor",
    image: vfxImg,
    highlights: [
      "Advanced 3D rendering",
      "VFX pipeline mastery",
      "Industry tools & software",
      "Real-world projects"
    ],
    tools: ["Photoshop", "Illustrator", "Premiere Pro", "Adobe Audition", "Storyboarding", "After Effects", "Generative AI", "Autodesk Maya", "ZBrush", "Substance Painter", "Arnold Renderer", "Meshy AI", "Nuke", "Houdini", "Silhouette", "iCloud", "3D Equalizer"],
    outcomes: [
      "Master advanced 3D rendering and VFX",
      "Create photorealistic animations",
      "Build professional portfolio",
      "Work in production pipelines"
    ],
  },
  "dreamengine-animation-unreal": {
    title: "DreamEngine: Animation with Unreal",
    seoTitle: "Unreal Engine Animation Course in Saket, Delhi | DreamEngine by Design Engine",
    tagline: "Create cinematic animations with Unreal Engine",
    description: "Master real-time animation and cinematic content creation using Unreal Engine.",
    seoDescription: "Join Design Engine Saket for a 28-month Unreal Engine animation course. Learn real-time animation, cinematic content creation, virtual production and Unreal workflows for film, games and interactive media.",
    seoHiddenH1: "Unreal Engine Animation Course in Saket, Delhi",
    ogUrl: "https://design-engine.io/saket/dreamengine-animation-unreal",
    ogImage: "https://design-engine.io/path-to-your-unreal-animation-hero-image.jpg",
    seoImageAlt: "Unreal Engine animation course at Design Engine Saket",
    longDescription: "Learn to create stunning animated sequences, virtual cinematography, and interactive experiences for film, games, and virtual production using Unreal Engine.",
    gradient: "from-[#9c27b0] to-[#3f51b5]",
    color: "#9c27b0",
    duration: "28 months",
    icon: "Film",
    image: gameImg,
    highlights: [
      "Unreal Engine mastery",
      "Real-time animation",
      "Cinematic content creation",
      "Virtual cinematography"
    ],
    tools: ["Photoshop", "Illustrator", "Premiere Pro", "Adobe Audition", "Storyboarding", "After Effects", "Generative AI", "Autodesk Maya", "ZBrush", "Substance Painter", "Arnold Renderer", "Meshy AI", "Unreal Engine", "Unity"],
    outcomes: [
      "Master Unreal Engine for animation",
      "Create cinematic content",
      "Develop real-time experiences",
      "Work in virtual production"
    ],
  },
  "video-editing": {
    title: "Video Editing",
    seoTitle: "Video Editing Course in Saket, Delhi | 12-Month Professional Program",
    tagline: "Master the art of storytelling through video",
    description: "Learn professional video editing techniques for films, YouTube, and social media. Master Premiere Pro, Final Cut Pro, and editing techniques.",
    seoDescription: "Join a 12-month video editing course at Design Engine Saket. Learn professional editing for films, YouTube and social media using Premiere Pro, Final Cut Pro, DaVinci Resolve and build a hire-ready demo reel.",
    seoHiddenH1: "Video Editing Course in Saket, Delhi",
    ogUrl: "https://design-engine.io/saket/video-editing",
    ogImage: "https://design-engine.io/path-to-your-video-editing-hero-image.jpg",
    seoImageAlt: "Student editing video projects at Design Engine Saket",
    longDescription: "This comprehensive video editing course covers everything from basic cutting to advanced color grading. Learn to create engaging content for YouTube, social media, and professional productions. Includes full project workflow, color science, and broadcast standards.",
    gradient: "from-[#ffc107] to-[#ffb300]",
    color: "#ffc107",
    duration: "12 months",
    icon: "Film",
    image: videoCourseImg,
    highlights: [
      "Real projects",
      "Demo reel",
      "Mentorship",
      "Job support"
    ],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Audition"],
    outcomes: [
      "Master editing tools",
      "Create professional videos",
      "Build demo reel",
      "Start editing career",
      "Advanced color grading",
      "Professional sound design",
      "Graphics & animation integration",
      "Export broadcast-ready videos",
      "Manage client feedback"
    ],
  },
  "master-in-avg": {
    title: "Master in AVG",
    seoTitle: "Master in Animation, VFX & Gaming (AVG) Course in Saket, Delhi | Design Engine",
    tagline: "Master Animation, VFX & Gaming",
    description: "Comprehensive master program covering advanced animation, visual effects, and gaming techniques.",
    seoDescription: "Join Design Engine Saket’s 36-month Master in Animation, VFX & Gaming (AVG) course. Learn advanced animation, professional VFX workflows, game development skills, industry tools and portfolio building for top studios.",
    seoHiddenH1: "Master in Animation, VFX & Gaming (AVG) Course in Saket, Delhi",
    ogUrl: "https://design-engine.io/saket/master-in-avg",
    ogImage: "https://design-engine.io/path-to-your-avg-hero-image.jpg",
    seoImageAlt: "Students learning animation, VFX and gaming at Design Engine Saket",
    longDescription: "This intensive master program combines the best of animation, VFX, and gaming education. Learn from industry experts and build a portfolio that showcases your mastery across multiple creative disciplines.",
    gradient: "from-[#ffd54f] to-[#ffc107]",
    color: "#ffd54f",
    duration: "36 months",
    icon: "Film",
    image: animationImg,
    highlights: [
      "Advanced animation techniques",
      "Professional VFX workflows",
      "Gaming development skills",
      "Industry-standard tools",
      "Portfolio development",
      "Career mentorship"
    ],
    tools: ["Photoshop", "Illustrator", "Premiere Pro", "Adobe Audition", "Storyboarding", "After Effects", "Generative AI", "Autodesk Maya", "ZBrush", "Substance Painter", "Arnold Renderer", "Meshy AI", "Nuke", "Houdini", "Silhouette", "iCloud", "3D Equalizer", "Unreal Engine", "Unity"],
    outcomes: [
      "Master advanced animation and VFX",
      "Create professional gaming content",
      "Build comprehensive portfolio",
      "Lead creative projects",
      "Work in top studios"
    ],
  },
  "B.sc-digital-media-ai-filmmaking": {
    title: "B.Sc in Vocational Multimedia & Animation",
    seoTitle: "B.Sc Multimedia, Animation & AI Filmmaking in Saket, Delhi | Design Engine",
    tagline: "Hands-on B.Sc degree for vocational multimedia and animation careers.",
    description: "UGC-approved B.Sc degree offering intense specialization in 3D production pipelines, cinematic VFX, advanced motion graphics, and job showreels.",
    seoDescription: "Join Design Engine Saket for a 3-year B.Sc in Vocational Multimedia, Animation and AI Filmmaking in South Delhi. Build a studio-ready portfolio with VFX, motion graphics, 3D, Unreal Engine and industry internship.",
    seoHiddenH1: "B.Sc in Vocational Multimedia, Animation & AI Filmmaking – Saket, Delhi",
    ogUrl: "https://design-engine.io/saket/quiz-course/B.sc-digital-media-ai-filmmaking",
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
      "Illustrator",
      "Photoshop",
      "Premiere Pro",
      "DaVinci Resolve",
      "After Effects",
      "Maya",
      "Blender",
      "Unreal Engine",
      "AI filmmaking tools",
      "Storyboarding software"
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
  "motion-graphics-animation": {
    title: "Expert Program in Digital Content & Animation",
    seoTitle: "Motion Graphics & Digital Content Animation Course in Saket, Delhi | Design Engine",
    tagline: "Advanced digital content creation and animation mastery",
    description: "Comprehensive expert-level program combining advanced animation techniques with digital content creation.",
    seoDescription: "Join Design Engine Saket’s 19-month Expert Program in Digital Content & Animation. Learn advanced animation techniques, digital content production, industry-standard workflows and build a professional portfolio with real brand projects.",
    seoHiddenH1: "Expert Program in Digital Content & Animation Course in Saket, Delhi",
    ogUrl: "https://design-engine.io/saket/motion-graphics-animation",
    ogImage: "https://design-engine.io/path-to-your-motion-graphics-hero-image.jpg",
    seoImageAlt: "Students learning digital content and animation at Design Engine Saket",
    longDescription: "Learn to create professional animated content for film, games, advertising, and digital platforms. Master industry-standard workflows and production pipelines.",
    gradient: "from-[#9c27b0] to-[#e91e63]",
    color: "#9c27b0",
    duration: "19 months",
    icon: "Film",
    image: motionGraphicImg,
    highlights: [
      "Advanced animation techniques",
      "Digital content production",
      "Industry-standard workflows",
      "Professional portfolio"
    ],
    tools: [
      "Photoshop",
      "Illustrator",
      "InDesign",
      "Canva",
      "Adobe Express",
      "Lightroom",
      "Generative AI",
      "After Effects",
      "Creative Cloud",
      "Maya",
      "Blender",
      "Substance Painter",
      "ZBrush"
    ],
    outcomes: [
      "Master advanced animation and VFX",
      "Create professional digital content",
      "Build comprehensive portfolio",
      "Lead animation projects"
    ],
  },
  "master-in-gen-ai": {
    title: "MASTER IN GEN AI",
    seoTitle: "Generative AI Course in Saket, Delhi | Master in Gen AI by Design Engine",
    tagline: "Master generative AI for creative professionals",
    description: "Comprehensive master program in generative AI tools and techniques.",
    seoDescription: "Master Generative AI in Saket, Delhi with hands-on training in ChatGPT, Midjourney, Runway, Firefly and prompt engineering. Build portfolio-ready AI creative skills.",
    seoHiddenH1: "Master in Generative AI Course in Saket, Delhi",
    ogUrl: "https://design-engine.io/saket/master-in-gen-ai",
    ogImage: "https://design-engine.io/path-to-your-gen-ai-hero-image.jpg",
    seoImageAlt: "Students learning Generative AI tools at Design Engine Saket",
    longDescription: "Become an expert in generative AI with hands-on training in the latest tools and methodologies used by top creative professionals worldwide.",
    gradient: "from-[#ffc107] to-[#ffb300]",
    color: "#ffc107",
    duration: "2 months",
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
    tools: ["Midjourney", "DALL-E", "Stable Diffusion", "ChatGPT", "RunwayML", "Adobe Firefly", "Nano banana", "Claude", "Veo3", "kling", "grok", "Seedance", "Suno Ai", "Elevenlabs", "Bolt", "Loveable", "Canva Ai", "Framer Ai", "Notebook lm", "Deepseek", "Gamma"],
    outcomes: [
      "Master generative AI tools",
      "Create AI-enhanced creative work",
      "Integrate AI in professional workflows",
      "Build innovative portfolios",
      "Lead AI-driven projects",
      "Advance career in AI creative fields"
    ],
    modules: [
      {
        title: "AI Foundations & Creative Intelligence",
        duration: "2 Months",
        topics: [
          "Introduction to Artificial Intelligence",
          "Understanding Generative AI in Creative Industries",
          "Fundamentals of Prompt Engineering",
          "Advanced Prompting Techniques & Frameworks",
          "Branding and Identity Creation using AI Tools",
          "Image Generation and Editing with AI"
        ],
      },
    ],
  },
  "gen-2-0-ai-generalist-course": {
    title: "GEN 2.0: AI GENERALIST COURSE",
    seoTitle: "AI Generalist Course in Saket, Delhi | 12-Month Gen 2.0 Program by Design Engine",
    tagline: "Master AI across creative industries — become a generalist ready for tomorrow",
    description: "Complete AI generalist program designed for creators. Learn AI foundations, creative production, and build a portfolio while staying ahead of industry trends.",
    seoDescription: "Join Design Engine Saket for a 12-month AI Generalist course. Learn prompt engineering, image generation, AI video, motion graphics, creative automation and portfolio building for jobs or freelancing.",
    seoHiddenH1: "AI Generalist Course in Saket, Delhi",
    ogUrl: "https://design-engine.io/saket/gen-2-0-ai-generalist-course",
    ogImage: "https://design-engine.io/path-to-your-ai-generalist-hero-image.jpg",
    seoImageAlt: "AI Generalist course at Design Engine Saket",
    longDescription: "This comprehensive course transforms you into an AI generalist, equipped with knowledge across AI creativity, content production, and practical applications in design, animation, gaming, and media. You'll learn prompt mastery, AI-powered creative workflows, and emerge job-ready or freelance-ready with a portfolio of AI-generated work.",
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
      "🚀 Portfolio Power with DesignEngine",
      "💬 Soft Skill Personal Training",
      "🤖 GenAI-Powered Creative Learning"
    ],
    tools: ["Midjourney", "ChatGPT", "DALL-E 3", "Stable Diffusion", "RunwayML", "Adobe Firefly", "Leonardo AI", "11Labs", "Synthesia", "Nano banana", "Claude", "Veo3", "kling", "grok", "Seedance", "Suno Ai", "Elevenlabs", "Bolt", "Loveable", "Canva Ai", "Framer Ai", "Notebook lm", "Deepseek", "Gamma"],
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
  "ui-ux-product-design": {
    title: "UI/UX Design",
    tagline: "Design intuitive digital experiences",
    description: "Learn to create user-centered designs that delight and engage. Master the full product design process from research to high-fidelity prototypes.",
    longDescription: "This comprehensive UI/UX course takes you from beginner to job-ready designer. Learn industry best practices, design thinking methodologies, and how to create portfolios that impress employers.",
    gradient: "from-[#ffc107] to-[#ffd54f]",
    color: "#ffc107",
    duration: "9 months",
    icon: "Palette",
    image: uiUxImg,
    highlights: [
      "Real-world projects",
      "Portfolio development",
      "Mentorship",
      "Placement support"
    ],
    tools: ["Photoshop", "Illustrator", "Adobe Creative Cloud", "Figma", "Generative AI", "HTML5", "CSS3", "WordPress"],
    outcomes: [
      "Create user-centered designs",
      "Build interactive prototypes",
      "Conduct user research",
      "Develop design systems",
      "Launch your design career",
      "Work on real products"
    ],
  }
};

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Film,
  Palette,
  PenTool,
  Monitor,
  Gamepad2,
};

// Tool icons for marquee
const toolIcons: Record<string, string> = {
  "Midjourney": "🎨",
  "Stable Diffusion": "🖼️",
  "DALL-E 3": "🤖",
  "ChatGPT": "💬",
  "Adobe Firefly": "🔥",
  "Maya": "🎭",
  "Houdini": "🌀",
  "Nuke": "💥",
  "Blender": "🧊",
  "After Effects": "🎥",
  "Premiere Pro": "🎬",
  "Cinema 4D": "🎬",
  "Photoshop": "🖌️",
  "Illustrator": "✒️",
  "InDesign": "📑",
  "Figma": "📐",
  "Adobe XD": "💎",
  "Sketch": "✏️",
  "Unity": "🎮",
  "Unreal Engine": "🎯",
  "DaVinci Resolve": "🎞️",
  "Final Cut Pro": "🎬",
  "Audition": "🎧",
  "Procreate": "🎨",
  "Toon Boom": "🎞️",
};

const QuizCourseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  
  // Slug alias mapping to handle variations
  const slugAliases: Record<string, string> = {
    "degree-in-animation-design": "B.sc-digital-media-ai-filmmaking",
  };
  
  const normalizedSlug = slugAliases[slug as string] || slug;
  const course = courseData[normalizedSlug as keyof typeof courseData];

  const normalizedHighlights = Array.from({ length: 6 }, (_, idx) =>
    course?.highlights?.[idx] || "Practical skills from real brand projects"
  );

  const normalizedOutcomes = Array.from({ length: 6 }, (_, idx) =>
    course?.outcomes?.[idx] || "Industry-driven hands-on learning"
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if user came from quiz page
  const fromQuiz = location.state?.from === 'quiz' || document.referrer.includes('/quiz');

  if (!course) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#030306',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{ fontSize: '4rem', marginBottom: '1.5rem' }}
          >
            🔍
          </motion.div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#ffffff'
          }}>Course Not Found</h1>
          <p style={{
            color: '#ffffff99',
            marginBottom: '1.5rem',
            fontSize: '1rem'
          }}>The course you're looking for doesn't exist.</p>
          <Button 
            onClick={() => fromQuiz ? navigate("/quiz") : navigate("/courses")}
            style={{
              background: 'linear-gradient(to right, #ffc107, #ffd54f, #ffb300)',
              color: 'black',
              fontWeight: 'bold',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1rem',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255,193,7,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ArrowLeft className="w-4 h-4" style={{ color: 'black' }} />
            {fromQuiz ? "Back to Quiz" : "Browse All Courses"}
          </Button>
        </div>
      </div>
    );
  }

  const Icon = iconMap[course.icon] || Sparkles;

  const handleShare = () => {
    const text = `Check out ${course.title} at Design Engine! 🎨✨`;
    if (navigator.share) {
      navigator.share({ text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(text + " " + window.location.href);
      toast.success("Link copied to clipboard! 📋");
    }
  };

  const handleEnroll = () => {
    setIsEnquiryModalOpen(true);
  };

  const handleBack = () => {
    if (fromQuiz) {
      navigate("/quiz");
    } else {
      navigate("/courses");
    }
  };

  return (
    <>
      <Helmet>
        <title>{course.seoTitle || `${course.title} Course | Design Engine`}</title>
        <meta name="description" content={course.seoDescription || course.description.slice(0, 160)} />
        <meta property="og:title" content={course.seoTitle || `${course.title} Course | Design Engine`} />
        <meta property="og:description" content={course.seoDescription || course.description.slice(0, 160)} />
        <meta property="og:url" content={course.ogUrl || window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={course.ogImage || "https://design-engine.io/path-to-your-default-og-image.jpg"} />
        {course.seoImageAlt && <meta property="og:image:alt" content={course.seoImageAlt} />}
      </Helmet>

      <div className="min-h-screen bg-[#030306] text-white">
        <Navbar />

        {/* Golden orbs background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#ffc107]/5 md:bg-[#ffc107]/10 rounded-full blur-[60px] md:blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#ffd54f]/5 md:bg-[#ffd54f]/10 rounded-full blur-[50px] md:blur-[100px]"
          />
        </div>

        <main className="relative pt-16 md:pt-20 pb-16 z-10">
          {/* Hero Section */}
          <section className="relative py-4 md:py-20 overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Back Button */}
              {fromQuiz && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-4 md:mb-6"
                >
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    className="text-white/60 hover:text-[#ffc107] hover:bg-white/5 text-sm md:text-base px-2 md:px-4 py-1 md:py-2 h-auto"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                    Back to Quiz
                  </Button>
                </motion.div>
              )}

              <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-3 md:space-y-4"
                >
                  {/* Title */}
                  <motion.h1 
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {course.title}
                  </motion.h1>
                  
                  <motion.p 
                    className="text-sm md:text-xl text-white/60"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {course.tagline}
                  </motion.p>

                  {/* Stats - Only duration */}
                  <motion.div 
                    className="flex flex-wrap items-center gap-2 md:gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-1 text-white/60 text-xs md:text-base">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#ffc107]" />
                      <span className="whitespace-nowrap">{course.duration}</span>
                    </div>
                  </motion.div>

                  <motion.p 
                    className="text-white/60 leading-relaxed text-sm md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {course.description}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div 
                    className="hidden lg:flex lg:flex-row gap-2 md:gap-4 pt-2 md:pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      size="lg" 
                      onClick={handleEnroll} 
                      className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold text-sm md:text-lg py-4 md:py-7 px-4 md:px-8 w-full sm:w-auto border border-transparent hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all duration-300"
                    >
                      <Zap className="w-3.5 h-3.5 md:w-5 md:h-5 mr-1.5 md:mr-2 text-black" />
                      Enquire Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      onClick={handleShare}
                      className="bg-white/5 backdrop-blur-sm border border-[#ffc107]/20 text-white hover:bg-white/10 hover:border-[#ffc107]/50 py-4 md:py-7 w-full sm:w-auto text-sm md:text-base transition-all duration-300"
                    >
                      <Share2 className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2 text-[#ffc107]" />
                      Share
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right - Course Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hidden lg:block lg:sticky lg:top-28"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-[#ffc107]/20 rounded-3xl p-4 md:p-6 hover:border-[#ffc107]/40 transition-all duration-300">
                    <div className="relative rounded-2xl overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                    {/* Enquire button removed from image card - only image will display */}
                  </div>
                </motion.div>
              </div>

              {/* Mobile Image Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:hidden mt-6 bg-white/5 backdrop-blur-xl border border-[#ffc107]/20 rounded-2xl p-4"
              >
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                </div>
                {/* mobile enquire button removed from image card */}
              </motion.div>
            </div>
          </section>

          {/* Course Highlights */}
          <section className="py-6 md:py-16">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2 
                className="text-lg md:text-3xl font-bold mb-4 md:mb-8 text-center text-white"
                style={{ fontFamily: 'Syne, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Course Highlights ✨
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto">
                {normalizedHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-[#ffc107]/10 p-2 md:p-4 text-center rounded-xl md:rounded-2xl hover:border-[#ffc107]/30 transition-all duration-300"
                  >
                    <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-[#ffc107] mx-auto mb-1 md:mb-2" />
                    <p className="text-[10px] md:text-sm font-medium leading-tight text-white/80">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Course Description */}
          <section className="py-6 md:py-16 bg-white/5">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-4 md:mb-8"
              >
                <h2 className="text-lg md:text-3xl font-bold mb-2 md:mb-4 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  About the Course
                </h2>
              </motion.div>
              <motion.p 
                className="text-white/60 leading-relaxed text-sm md:text-base text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {course.longDescription}
              </motion.p>
              <motion.p
                className="text-white/60 leading-relaxed text-sm md:text-base text-center mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                This course gives you real client briefs, personalized mentor check-ins, and a completion certificate tuned for hire-ready portfolios.
              </motion.p>
            </div>
          </section>

          {course.modules && course.modules.length > 0 && (
            <section className="py-6 md:py-16">
              <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-8"
                >
                  <h2 className="text-lg md:text-3xl font-bold mb-2 md:mb-4 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                    
                  </h2>
                </motion.div>

                <div className={`gap-6 ${slug === 'master-in-gen-ai' || slug === 'gen-2-0-ai-generalist-course' ? 'flex flex-col items-center' : 'grid grid-cols-1 md:grid-cols-3'}`}>
                  {course.modules.map((module, index) => (
                    <motion.div
                      key={module.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="rounded-3xl border border-[#ffc107]/20 bg-white/5 p-6 hover:border-[#ffc107]/40 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-white">
                            {module.title}
                          </h3>
                          <p className="text-sm text-white/60 mt-1">
                            {module.duration}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex gap-2 items-start text-sm md:text-base text-white/80">
                            <CheckCircle2 className="w-4 h-4 mt-1 text-[#ffc107] flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* What You'll Learn - Outcomes */}
          <section className="py-6 md:py-16">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-4 md:mb-8"
              >
                <h2 className="text-lg md:text-3xl font-bold mb-2 md:mb-4 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  What You'll Learn 🎯
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
                {normalizedOutcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 p-2 md:p-4 rounded-lg md:rounded-xl bg-white/5 backdrop-blur-sm border border-[#ffc107]/10 hover:border-[#ffc107]/30 transition-all duration-300"
                  >
                    <Target className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#ffc107] flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] md:text-sm text-white/80">{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Tools You'll Master */}
          <section className="py-6 md:py-16 bg-white/5">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2 
                className="text-lg md:text-3xl font-bold mb-4 md:mb-8 text-center text-white"
                style={{ fontFamily: 'Syne, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Tools You'll Master 🛠️
              </motion.h2>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
                {course.tools.map((tool, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="px-3 md:px-6 py-1.5 md:py-3 bg-[#ffc107]/10 text-[#ffc107] rounded-full font-medium border border-[#ffc107]/20 text-xs md:text-sm"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-8 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffc107]/10 via-[#ffd54f]/5 to-[#ffb300]/10" />
            <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-lg md:text-4xl font-bold mb-3 md:mb-4 text-white px-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Ready to Start Your{" "}
                  <span className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent">
                    Creative Journey
                  </span>
                  ? 🚀
                </h2>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center px-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold py-4 md:py-7 px-5 md:px-12 text-sm md:text-lg border border-transparent hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all duration-300"
                    onClick={handleEnroll}
                  >
                    <Zap className="w-3.5 h-3.5 md:w-5 md:h-5 mr-1.5 md:mr-2 text-black" />
                    Enquire Now
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
{/* Sticky Enrollment Bar */}
<AnimatePresence>
  {showStickyBar && (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#030306]/95 backdrop-blur-xl border-t border-[#ffc107]/20 py-3 md:py-4 shadow-lg"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          
          {/* Left Section - Course Info */}
          <div className="hidden md:block flex-1">
            <h4 className="font-bold text-base lg:text-lg text-white line-clamp-1">{course.title}</h4>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Clock className="w-3.5 h-3.5 text-[#ffc107]" />
              <span>{course.duration}</span>
            </div>
          </div>

          {/* CTA Button - Optimized for all devices */}
          <div className="flex-1 md:flex-none">
            <Button 
              onClick={handleEnroll}
              className="group relative w-full md:w-auto bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] 
                text-black font-bold 
                py-2.5 md:py-3.5 
                px-4 md:px-8 
                text-sm md:text-base 
                rounded-xl md:rounded-full
                border-none 
                overflow-hidden
                transition-all duration-300 
                hover:scale-105 
                hover:shadow-[0_0_25px_rgba(255,193,7,0.4)]
                active:scale-95
                shadow-lg"
            >
              {/* Button Shine Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 md:w-4.5 md:h-4.5 text-black fill-black/10" />
                <span>Enquiry Now</span>
                {/* Optional arrow icon on desktop */}
                <svg 
                  className="w-0 md:w-4 h-0 md:h-4 transition-all duration-300 group-hover:translate-x-0.5 opacity-0 group-hover:opacity-100 md:opacity-100" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
        

        <EnquiryModal 
          isOpen={isEnquiryModalOpen}
          onClose={() => setIsEnquiryModalOpen(false)}
          selectedCourse={course?.title}
        />
      </div>
    </>
  );
};

export default QuizCourseDetail;