export interface CourseInstructor {
  name: string;
  role: string;
  image: string;
  experience: string;
  company: string;
}

export interface CourseBatch {
  startDate: string;
  timing: string;
  mode: string;
  seatsLeft: number;
}

export interface CourseModule {
  title: string;
  duration: string;
  topics: string[];
}

export interface CourseData {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  studentsEnrolled: number;
  level: string;
  language: string;
  certificate: boolean;
  image: string;
  icon: string;
  color: string;
  highlights: string[];
  modules: CourseModule[];
  instructors: CourseInstructor[];
  batches: CourseBatch[];
  tools: string[];
  outcomes: string[];
}

export const coursesData: CourseData[] = [
  {
    id: "1",
    slug: "animation",
    title: "Animation",
    category: "Animation",
    tagline: "Master modern animation techniques from 2D to 3D",
    description: "Learn modern animation techniques including 2D animation, 3D animation, motion graphics, VFX basics, and industry-standard tools. This pathway is ideal for students exploring animation courses after 12th, diploma of animation, or those aiming for careers across studios and production houses.",
    duration: "12 Months",
    price: 150000,
    originalPrice: 200000,
    rating: 4.9,
    studentsEnrolled: 2500,
    level: "Beginner to Advanced",
    language: "English & Hindi",
    certificate: true,
    image: "https://design-engine.io/img_bank/Animation_1%20(1).webp",
    icon: "Layers",
    color: "from-neon-orange to-neon-pink",
    highlights: [
      "Gen AI-Powered Learning",
      "Industry-Led Curriculum",
      "1000+ Hiring Partners",
      "Portfolio Development",
      "Global Certifications",
      "Placement Assistance",
    ],
    modules: [
      {
        title: "Fundamentals of Animation",
        duration: "4 Weeks",
        topics: [
          "12 Principles of Animation",
          "Timing and Spacing",
          "Squash and Stretch",
          "Anticipation and Follow-through",
          "Drawing fundamentals for animators",
        ],
      },
      {
        title: "2D Animation Mastery",
        duration: "6 Weeks",
        topics: [
          "Frame-by-frame animation",
          "Character design and rigging",
          "Lip sync and expressions",
          "Background design",
          "2D effects animation",
        ],
      },
      {
        title: "3D Animation with Maya & Blender",
        duration: "8 Weeks",
        topics: [
          "3D modeling fundamentals",
          "Character rigging",
          "Keyframe animation in 3D",
          "Motion capture integration",
          "Rendering and lighting",
        ],
      },
      {
        title: "Motion Graphics & After Effects",
        duration: "6 Weeks",
        topics: [
          "After Effects interface mastery",
          "Kinetic typography",
          "Shape layer animation",
          "Expressions and scripting",
          "Broadcast graphics",
        ],
      },
      {
        title: "Industry Project & Portfolio",
        duration: "4 Weeks",
        topics: [
          "Showreel creation",
          "Client project execution",
          "Industry collaboration",
          "Portfolio optimization",
          "Interview preparation",
        ],
      },
    ],
    instructors: [
      {
        name: "Rajesh Kumar",
        role: "Lead Animation Director",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        experience: "15+ years in animation industry",
        company: "Ex-DreamWorks, Disney India",
      },
      {
        name: "Priya Menon",
        role: "Character Animation Expert",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        experience: "10 years in character animation",
        company: "Ex-Pixar, Blue Sky Studios",
      },
    ],
    batches: [
      {
        startDate: "January 20, 2026",
        timing: "Mon - Fri | 10 AM - 1 PM",
        mode: "Offline (Gurugram)",
        seatsLeft: 8,
      },
      {
        startDate: "February 5, 2026",
        timing: "Sat, Sun | 10 AM - 4 PM",
        mode: "Hybrid",
        seatsLeft: 12,
      },
    ],
    tools: ["Maya", "Blender", "After Effects", "Premiere Pro", "Photoshop", "Toon Boom", "Cinema 4D", "ZBrush"],
    outcomes: [
      "Create broadcast-quality animations",
      "Build and animate 3D characters",
      "Master motion graphics for brands",
      "Work on real studio projects",
      "Build an industry-ready showreel",
    ],
  },
  {
    id: "2",
    slug: "vfx",
    title: "VFX",
    category: "Visual Effects",
    tagline: "Create Hollywood-grade visual effects",
    description: "Master advanced VFX techniques—from compositing and CGI to motion tracking, simulations, and real-time workflows. This VFX course supports learners pursuing visual effects, VFX and animation, and visual effects programs for film, gaming, and OTT projects.",
    duration: "12 Months",
    price: 180000,
    originalPrice: 250000,
    rating: 4.8,
    studentsEnrolled: 1800,
    level: "Intermediate to Advanced",
    language: "English & Hindi",
    certificate: true,
    image: "https://design-engine.io/img_bank/vfx_img%20(1).webp",
    icon: "Video",
    color: "from-neon-cyan to-neon-purple",
    highlights: [
      "Industry-Standard Software",
      "Real Film Projects",
      "Studio Internship",
      "Demo Reel Support",
      "Direct Industry Connections",
      "95% Placement Rate",
    ],
    modules: [
      {
        title: "VFX Fundamentals & Compositing",
        duration: "6 Weeks",
        topics: [
          "Introduction to VFX pipeline",
          "Nuke fundamentals",
          "Green screen keying",
          "Rotoscoping techniques",
          "Basic compositing workflows",
        ],
      },
      {
        title: "3D Modeling & Texturing",
        duration: "6 Weeks",
        topics: [
          "Hard surface modeling",
          "Organic modeling with ZBrush",
          "UV mapping techniques",
          "Substance Painter workflows",
          "PBR texturing",
        ],
      },
      {
        title: "Simulations & Dynamics",
        duration: "8 Weeks",
        topics: [
          "Houdini fundamentals",
          "Particle systems",
          "Fluid simulations",
          "Fire and smoke effects",
          "Destruction simulations",
        ],
      },
      {
        title: "Motion Tracking & Matchmove",
        duration: "4 Weeks",
        topics: [
          "Camera tracking theory",
          "3D object tracking",
          "Matchmove in PFTrack",
          "Set extension workflows",
          "Integration with 3D software",
        ],
      },
      {
        title: "Virtual Production & Real-time VFX",
        duration: "6 Weeks",
        topics: [
          "Unreal Engine for VFX",
          "LED wall virtual production",
          "Real-time compositing",
          "MetaHuman integration",
          "Final project: Film VFX shot",
        ],
      },
    ],
    instructors: [
      {
        name: "Karan Verma",
        role: "VFX Supervisor",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        experience: "12+ years in VFX, worked on 50+ films",
        company: "Ex-DNEG, Ex-Framestore",
      },
      {
        name: "Meera Joshi",
        role: "Compositing Lead",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        experience: "10 years in film compositing",
        company: "Ex-Weta Digital, Ex-ILM",
      },
    ],
    batches: [
      {
        startDate: "January 25, 2026",
        timing: "Mon - Fri | 10 AM - 1 PM",
        mode: "Offline (Gurugram)",
        seatsLeft: 5,
      },
      {
        startDate: "February 10, 2026",
        timing: "Sat, Sun | 9 AM - 4 PM",
        mode: "Hybrid",
        seatsLeft: 10,
      },
    ],
    tools: ["Nuke", "Maya", "Houdini", "ZBrush", "Substance Painter", "Unreal Engine 5", "DaVinci Resolve", "PFTrack"],
    outcomes: [
      "Create broadcast-quality VFX shots",
      "Master compositing and color grading",
      "Work with virtual production pipelines",
      "Build simulations and dynamics",
      "Create a professional VFX demo reel",
    ],
  },
  {
    id: "3",
    slug: "generative-ai",
    title: "Generative AI",
    category: "AI & Automation",
    tagline: "Master AI tools to 10x your creative output",
    description: "Explore powerful generative AI courses covering machine learning, neural networks, prompt engineering, and creative automation. This generative AI course equips future-ready creators with AI-driven skills that enhance animation, VFX, design, content creation, and virtual production.",
    duration: "6 Months",
    price: 75000,
    originalPrice: 100000,
    rating: 4.9,
    studentsEnrolled: 3200,
    level: "Beginner to Advanced",
    language: "English & Hindi",
    certificate: true,
    image: "https://design-engine.io/img_bank/Generative_AI.webp",
    icon: "Sparkles",
    color: "from-neon-purple to-neon-pink",
    highlights: [
      "Learn 10+ AI Tools",
      "Build 15+ AI Projects",
      "Industry Certification",
      "1-on-1 Mentorship",
      "Lifetime Access",
      "Placement Assistance",
    ],
    modules: [
      {
        title: "Introduction to Generative AI",
        duration: "2 Weeks",
        topics: [
          "Understanding AI & Machine Learning",
          "History of generative AI",
          "Overview of AI art tools",
          "Setting up your AI toolkit",
          "Ethics in AI-generated content",
        ],
      },
      {
        title: "Prompt Engineering Mastery",
        duration: "3 Weeks",
        topics: [
          "The art of prompt writing",
          "Prompt structures and frameworks",
          "Negative prompts and refinement",
          "Style transfer techniques",
          "Advanced prompt chaining",
        ],
      },
      {
        title: "Midjourney & DALL-E Deep Dive",
        duration: "3 Weeks",
        topics: [
          "Midjourney interface and commands",
          "Parameters and aspect ratios",
          "DALL-E 3 integration",
          "Character consistency",
          "Commercial usage guidelines",
        ],
      },
      {
        title: "Stable Diffusion & ComfyUI",
        duration: "4 Weeks",
        topics: [
          "Local installation and setup",
          "Understanding diffusion models",
          "ControlNet and img2img",
          "Training custom LoRA models",
          "ComfyUI automation workflows",
        ],
      },
      {
        title: "AI-Powered Creative Workflows",
        duration: "4 Weeks",
        topics: [
          "AI in Figma and Photoshop",
          "AI for logo and branding",
          "Creating marketing assets",
          "Video and animation with AI",
          "Building an AI portfolio",
        ],
      },
    ],
    instructors: [
      {
        name: "Vikram Sharma",
        role: "Lead AI Artist",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        experience: "8+ years in digital art, 3 years in AI",
        company: "Ex-Adobe, Ex-Canva",
      },
      {
        name: "Ananya Gupta",
        role: "Prompt Engineering Expert",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        experience: "5 years in NLP & AI applications",
        company: "Ex-Google, AI Consultant",
      },
    ],
    batches: [
      {
        startDate: "January 15, 2026",
        timing: "Mon, Wed, Fri | 7 PM - 9 PM",
        mode: "Online Live",
        seatsLeft: 8,
      },
      {
        startDate: "February 1, 2026",
        timing: "Sat, Sun | 10 AM - 1 PM",
        mode: "Hybrid (Gurugram)",
        seatsLeft: 12,
      },
    ],
    tools: ["Midjourney", "Stable Diffusion", "DALL-E 3", "ChatGPT", "ComfyUI", "RunwayML", "Adobe Firefly", "Leonardo AI"],
    outcomes: [
      "Create professional AI-generated artwork",
      "Build custom AI workflows",
      "Train personalized AI models",
      "Integrate AI into design tools",
      "Launch an AI design business",
    ],
  },
  {
    id: "4",
    slug: "graphic-design",
    title: "Graphic Design",
    category: "Design",
    tagline: "Create stunning visual communications",
    description: "Learn professional design foundations including typography, layout, branding, digital illustration, and visual communication. This track suits learners seeking graphic design courses, diploma in graphic design, or graphic design courses after 12th.",
    duration: "8 Months",
    price: 85000,
    originalPrice: 120000,
    rating: 4.8,
    studentsEnrolled: 2100,
    level: "All Levels",
    language: "English & Hindi",
    certificate: true,
    image: "https://design-engine.io/img_bank/Graphic_course%20(1).webp",
    icon: "Palette",
    color: "from-neon-green to-neon-cyan",
    highlights: [
      "Adobe Creative Suite Mastery",
      "Brand Identity Projects",
      "Print & Digital Design",
      "Portfolio with 20+ Projects",
      "Industry Mentorship",
      "Freelance Training",
    ],
    modules: [
      {
        title: "Design Fundamentals",
        duration: "4 Weeks",
        topics: [
          "Principles of design",
          "Color theory mastery",
          "Typography fundamentals",
          "Layout and composition",
          "Visual hierarchy",
        ],
      },
      {
        title: "Adobe Illustrator Mastery",
        duration: "5 Weeks",
        topics: [
          "Vector graphics fundamentals",
          "Logo design workflows",
          "Illustration techniques",
          "Icon and infographic design",
          "Print-ready artwork",
        ],
      },
      {
        title: "Adobe Photoshop Advanced",
        duration: "5 Weeks",
        topics: [
          "Photo manipulation",
          "Digital painting",
          "Compositing techniques",
          "Social media graphics",
          "Web graphics optimization",
        ],
      },
      {
        title: "Brand Identity Design",
        duration: "4 Weeks",
        topics: [
          "Brand strategy basics",
          "Logo design process",
          "Brand guidelines creation",
          "Collateral design",
          "Brand presentation",
        ],
      },
      {
        title: "Portfolio & Career Launch",
        duration: "4 Weeks",
        topics: [
          "Portfolio development",
          "Client communication",
          "Freelance business setup",
          "Interview preparation",
          "Industry networking",
        ],
      },
    ],
    instructors: [
      {
        name: "Sneha Kapoor",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        experience: "12 years in branding & design",
        company: "Ex-Ogilvy, Ex-Leo Burnett",
      },
      {
        name: "Arjun Mehta",
        role: "Senior Graphic Designer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        experience: "8 years in visual design",
        company: "Ex-Pentagram, Ex-Landor",
      },
    ],
    batches: [
      {
        startDate: "January 10, 2026",
        timing: "Mon, Wed, Fri | 7 PM - 9 PM",
        mode: "Online Live",
        seatsLeft: 10,
      },
      {
        startDate: "January 25, 2026",
        timing: "Sat, Sun | 10 AM - 2 PM",
        mode: "Offline (Gurugram)",
        seatsLeft: 8,
      },
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "Canva", "CorelDRAW", "Procreate", "Affinity Designer"],
    outcomes: [
      "Create complete brand identities",
      "Design print and digital materials",
      "Build a professional portfolio",
      "Master Adobe Creative Suite",
      "Launch a freelance design career",
    ],
  },
  {
    id: "5",
    slug: "motion-graphics",
    title: "Motion Graphics",
    category: "Animation",
    tagline: "Bring designs to life with motion",
    description: "Develop motion design skills across concept development, storyboarding, animation, and compositing. Ideal for those seeking a motion graphics course that merges design, animation, and storytelling into high-impact visuals.",
    duration: "6 Months",
    price: 70000,
    originalPrice: 95000,
    rating: 4.9,
    studentsEnrolled: 1600,
    level: "Beginner to Advanced",
    language: "English & Hindi",
    certificate: true,
    image: "https://design-engine.io/img_bank/motion_banner.webp",
    icon: "Layers",
    color: "from-neon-pink to-neon-orange",
    highlights: [
      "After Effects Mastery",
      "Cinema 4D Integration",
      "Brand Campaign Projects",
      "Social Media Content",
      "Freelance Training",
      "Industry Connections",
    ],
    modules: [
      {
        title: "After Effects Fundamentals",
        duration: "4 Weeks",
        topics: [
          "Interface and workspace",
          "Keyframe animation basics",
          "Shape layers and masks",
          "Text animation",
          "Effects and presets",
        ],
      },
      {
        title: "Advanced Motion Techniques",
        duration: "4 Weeks",
        topics: [
          "Expression fundamentals",
          "Character animation (Duik)",
          "Procedural animation",
          "3D layers and cameras",
          "Particle systems",
        ],
      },
      {
        title: "Cinema 4D for Motion",
        duration: "4 Weeks",
        topics: [
          "C4D modeling basics",
          "Materials and lighting",
          "Camera animation",
          "MoGraph toolset",
          "Rendering workflows",
        ],
      },
      {
        title: "Sound Design & Editing",
        duration: "3 Weeks",
        topics: [
          "Audio fundamentals",
          "Sound design for motion",
          "Premiere Pro integration",
          "Export optimization",
          "Platform-specific formats",
        ],
      },
      {
        title: "Portfolio & Client Work",
        duration: "3 Weeks",
        topics: [
          "Showreel creation",
          "Client briefing",
          "Project management",
          "Freelance pricing",
          "Industry networking",
        ],
      },
    ],
    instructors: [
      {
        name: "Rohan Desai",
        role: "Motion Design Lead",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        experience: "10+ years in motion graphics",
        company: "Ex-Buck, Ex-Ordinary Folk",
      },
      {
        name: "Kavita Reddy",
        role: "Senior Motion Designer",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        experience: "7 years in broadcast motion",
        company: "Ex-Mainframe, Ex-Giant Ant",
      },
    ],
    batches: [
      {
        startDate: "January 18, 2026",
        timing: "Mon, Wed, Fri | 6 PM - 8 PM",
        mode: "Online Live",
        seatsLeft: 12,
      },
      {
        startDate: "February 8, 2026",
        timing: "Sat, Sun | 11 AM - 3 PM",
        mode: "Hybrid (Gurugram)",
        seatsLeft: 8,
      },
    ],
    tools: ["After Effects", "Cinema 4D", "Premiere Pro", "Illustrator", "Photoshop", "Audition", "Lottie", "Rive"],
    outcomes: [
      "Create broadcast-quality motion graphics",
      "Master 2D and 3D animation",
      "Build a professional showreel",
      "Work with top brands",
      "Start a freelance motion business",
    ],
  },
  {
    id: "6",
    slug: "game-design",
    title: "Game Design",
    category: "Gaming",
    tagline: "Design immersive gaming experiences",
    description: "Build core game design capabilities including storytelling, level design, character creation, and gameplay mechanics. Designed for students exploring game design courses or game development courses.",
    duration: "12 Months",
    price: 160000,
    originalPrice: 220000,
    rating: 4.8,
    studentsEnrolled: 1200,
    level: "Beginner to Advanced",
    language: "English & Hindi",
    certificate: true,
    image: "https://design-engine.io/img_bank/game_img.webp",
    icon: "Gamepad2",
    color: "from-neon-cyan to-neon-green",
    highlights: [
      "Unity & Unreal Engine",
      "Complete Game Development",
      "Publish to App Stores",
      "Industry Mentorship",
      "Game Jam Participation",
      "Portfolio with 5+ Games",
    ],
    modules: [
      {
        title: "Game Design Fundamentals",
        duration: "4 Weeks",
        topics: [
          "Game design theory",
          "Player psychology",
          "Game mechanics",
          "Level design principles",
          "Narrative design",
        ],
      },
      {
        title: "Unity Game Development",
        duration: "8 Weeks",
        topics: [
          "Unity interface mastery",
          "C# programming basics",
          "2D game development",
          "Physics and collisions",
          "UI/UX for games",
        ],
      },
      {
        title: "Unreal Engine 5",
        duration: "8 Weeks",
        topics: [
          "Unreal Engine fundamentals",
          "Blueprint visual scripting",
          "3D level design",
          "Materials and lighting",
          "Gameplay mechanics",
        ],
      },
      {
        title: "3D Art for Games",
        duration: "6 Weeks",
        topics: [
          "Game-ready modeling",
          "Character design",
          "Environment art",
          "Texturing workflows",
          "Optimization techniques",
        ],
      },
      {
        title: "Capstone Project",
        duration: "6 Weeks",
        topics: [
          "Complete game development",
          "Team collaboration",
          "Quality assurance",
          "Publishing pipeline",
          "Portfolio presentation",
        ],
      },
    ],
    instructors: [
      {
        name: "Amit Patel",
        role: "Lead Game Designer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        experience: "12+ years in game development",
        company: "Ex-Ubisoft, Ex-EA Games",
      },
      {
        name: "Neha Sharma",
        role: "Game Art Director",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        experience: "9 years in game art",
        company: "Ex-Rockstar, Ex-Gameloft",
      },
    ],
    batches: [
      {
        startDate: "January 22, 2026",
        timing: "Mon - Fri | 10 AM - 1 PM",
        mode: "Offline (Gurugram)",
        seatsLeft: 6,
      },
      {
        startDate: "February 15, 2026",
        timing: "Sat, Sun | 10 AM - 5 PM",
        mode: "Hybrid",
        seatsLeft: 10,
      },
    ],
    tools: ["Unity", "Unreal Engine 5", "Blender", "Maya", "Substance Painter", "ZBrush", "Photoshop", "FMOD"],
    outcomes: [
      "Design and develop complete games",
      "Master Unity and Unreal Engine",
      "Create game-ready 3D assets",
      "Publish games to app stores",
      "Build an industry-ready portfolio",
    ],
  },
  {
    id: "7",
    slug: "video-editing",
    title: "Video Editing",
    category: "Video Production",
    tagline: "Master professional video editing",
    description: "Acquire professional editing skills including cutting, color grading, motion design, and advanced workflows. Perfect for students seeking a video editing course or evaluating video editing course fees.",
    duration: "4 Months",
    price: 45000,
    originalPrice: 65000,
    rating: 4.9,
    studentsEnrolled: 2800,
    level: "All Levels",
    language: "English & Hindi",
    certificate: true,
    image: "https://design-engine.io/img_bank/Video%20(1).webp",
    icon: "Video",
    color: "from-neon-orange to-neon-pink",
    highlights: [
      "Premiere Pro & DaVinci",
      "Color Grading Mastery",
      "Sound Design Basics",
      "YouTube/OTT Content",
      "Freelance Ready",
      "Real Client Projects",
    ],
    modules: [
      {
        title: "Editing Fundamentals",
        duration: "3 Weeks",
        topics: [
          "Storytelling through editing",
          "Pacing and rhythm",
          "Shot selection",
          "Continuity editing",
          "Creative transitions",
        ],
      },
      {
        title: "Adobe Premiere Pro Mastery",
        duration: "4 Weeks",
        topics: [
          "Interface and workflow",
          "Advanced editing tools",
          "Audio editing basics",
          "Effects and transitions",
          "Export optimization",
        ],
      },
      {
        title: "DaVinci Resolve & Color Grading",
        duration: "4 Weeks",
        topics: [
          "Color theory for video",
          "Primary color correction",
          "Secondary color grading",
          "LUTs and looks",
          "Professional workflows",
        ],
      },
      {
        title: "Motion Graphics Integration",
        duration: "3 Weeks",
        topics: [
          "After Effects basics",
          "Title design",
          "Lower thirds",
          "Simple animations",
          "Dynamic linking",
        ],
      },
      {
        title: "Professional Projects",
        duration: "2 Weeks",
        topics: [
          "Music video editing",
          "Commercial editing",
          "Documentary style",
          "Social media content",
          "Showreel creation",
        ],
      },
    ],
    instructors: [
      {
        name: "Rahul Khanna",
        role: "Senior Video Editor",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        experience: "10+ years in film & TV",
        company: "Ex-Prime Video, Ex-Netflix",
      },
      {
        name: "Simran Kaur",
        role: "Colorist & Editor",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        experience: "8 years in color grading",
        company: "Ex-Yash Raj Films, Ex-Dharma",
      },
    ],
    batches: [
      {
        startDate: "January 12, 2026",
        timing: "Mon, Wed, Fri | 6 PM - 8 PM",
        mode: "Online Live",
        seatsLeft: 15,
      },
      {
        startDate: "February 2, 2026",
        timing: "Sat, Sun | 10 AM - 2 PM",
        mode: "Hybrid (Gurugram)",
        seatsLeft: 10,
      },
    ],
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Audition", "Final Cut Pro", "Avid Media Composer", "CapCut", "Canva Video"],
    outcomes: [
      "Edit professional-quality videos",
      "Master color grading",
      "Create content for all platforms",
      "Build a diverse portfolio",
      "Start a freelance editing career",
    ],
  },
  {
    id: "8",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    tagline: "Design intuitive digital experiences",
    description: "Master UI/UX fundamentals through user research, wireframing, prototyping, visual design, and interaction design. This pathway covers UI UX course, UI UX design classes, UI UX designer training for aspiring experience designers.",
    duration: "6 Months",
    price: 80000,
    originalPrice: 110000,
    rating: 4.9,
    studentsEnrolled: 2400,
    level: "All Levels",
    language: "English & Hindi",
    certificate: true,
    image: "https://design-engine.io/img_bank/UI%20(1).webp",
    icon: "Palette",
    color: "from-neon-purple to-neon-cyan",
    highlights: [
      "Figma Mastery",
      "5+ Case Studies",
      "FAANG Designers Teach",
      "Real Client Projects",
      "Interview Prep Included",
      "95% Placement Rate",
    ],
    modules: [
      {
        title: "UX Research & Strategy",
        duration: "3 Weeks",
        topics: [
          "User research methods",
          "Personas and journey maps",
          "Competitive analysis",
          "Information architecture",
          "Usability testing",
        ],
      },
      {
        title: "UI Design Fundamentals",
        duration: "4 Weeks",
        topics: [
          "Visual design principles",
          "Typography and color",
          "Layout and grids",
          "Iconography",
          "Responsive design",
        ],
      },
      {
        title: "Figma Mastery",
        duration: "5 Weeks",
        topics: [
          "Figma deep dive",
          "Components and variants",
          "Auto layout",
          "Prototyping",
          "Developer handoff",
        ],
      },
      {
        title: "Design Systems",
        duration: "3 Weeks",
        topics: [
          "Design tokens",
          "Component libraries",
          "Documentation",
          "Design ops",
          "Enterprise systems",
        ],
      },
      {
        title: "Portfolio & Career",
        duration: "3 Weeks",
        topics: [
          "Case study creation",
          "Portfolio website",
          "Interview preparation",
          "Design challenges",
          "Industry networking",
        ],
      },
    ],
    instructors: [
      {
        name: "Priya Sharma",
        role: "Principal Product Designer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        experience: "9 years in product design",
        company: "Ex-Google, Ex-Spotify",
      },
      {
        name: "Aditya Rao",
        role: "Design Lead",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        experience: "7 years in UX design",
        company: "Ex-Microsoft, Ex-Flipkart",
      },
    ],
    batches: [
      {
        startDate: "January 8, 2026",
        timing: "Mon, Wed, Fri | 7 PM - 9 PM",
        mode: "Online Live",
        seatsLeft: 6,
      },
      {
        startDate: "January 28, 2026",
        timing: "Sat, Sun | 10 AM - 2 PM",
        mode: "Offline (Gurugram)",
        seatsLeft: 8,
      },
    ],
    tools: ["Figma", "FigJam", "Maze", "Hotjar", "Notion", "Principle", "Framer", "Adobe XD"],
    outcomes: [
      "Design complete digital products",
      "Build design systems",
      "Conduct user research",
      "Create portfolio case studies",
      "Land roles at top companies",
    ],
  },
];

export const getCourseBySlug = (slug: string): CourseData | undefined => {
  return coursesData.find(course => course.slug === slug);
};

export const getCoursesByCategory = (category: string): CourseData[] => {
  return coursesData.filter(course => course.category === category);
};
