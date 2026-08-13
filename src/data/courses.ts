import animationImg from '../assets/courses/Animation.webp';
import vfxImg from '../assets/courses/vfx.webp';
import generativeAiImg from '../assets/courses/Generative-ai.webp';
import motionGraphicImg from '../assets/courses/motion-graphic.webp';
import gameImg from '../assets/courses/game_img.webp';
import uiUxImg from '../assets/courses/ui-ux.webp';
import graphicImg from '../assets/courses/graphic.webp';

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
  certificate: boolean;
  image: string;
  icon: string;
  color: string;
  highlights: string[];
  modules: CourseModule[];
  batches: CourseBatch[];
  tools: string[];
  outcomes: string[];
  children?: {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    duration: string;
    image: string;
  }[];
}

export const coursesData: CourseData[] = [
  {
    id: "0",
    slug: "degree-in-animation-design",
    title: "Degree in Animation & Design",
    category: "Degree Programs",
    tagline: "Comprehensive 2-year degree in digital creative arts",
    description: "A full-fledged degree program covering animation, visual effects, motion graphics, game design, UI/UX, and AI-powered creative workflows. This degree course is designed for students seeking formal qualifications in animation & design with industry certifications and guaranteed placements.",
    duration: "2 Years",
    certificate: true,
    image: animationImg,
    icon: "GraduationCap",
    color: "from-neon-blue to-neon-purple",
    highlights: [
      "Formal Degree Certification",
      "Year 1 & Year 2 Curriculum",
      "500+ Hours of Content",
      "Industry Placements",
      "Internship Programs",
      "Global Recognition",
    ],
    modules: [
      {
        title: "Semester 1: Foundation Art & Design",
        duration: "12 Weeks",
        topics: [
          "Design fundamentals: Gestalt principles, visual hierarchy & composition",
          "Color theory: Psychology, harmonies, and application in digital media",
          "Typography: Font anatomy, pairing, and expressive typography",
          "Digital illustration: Raster graphics with Photoshop and Procreate",
          "Perspective drawing: 1-point, 2-point, and atmospheric perspective",
          "Storyboarding: Visual storytelling, shot composition, and cinematic language",
          "Design portfolio: Creating a cohesive body of work",
        ],
      },
      {
        title: "Semester 2: 2D & 3D Animation Fundamentals",
        duration: "12 Weeks",
        topics: [
          "12 principles of animation: Squash & stretch, anticipation, staging, etc.",
          "2D animation: Frame-by-frame animation in Toon Boom Harmony",
          "3D modeling: Polygon modeling, NURBS, and subdivision surfaces in Maya",
          "Texturing: UV mapping, PBR texturing in Substance Painter",
          "Character rigging: Joint placement, IK/FK systems, and skinning",
          "3D animation: Keyframe animation, graph editor, and motion curves",
          "Lighting & rendering: Three-point lighting, Arnold renderer basics",
        ],
      },
      {
        title: "Semester 3: VFX & Motion Graphics",
        duration: "12 Weeks",
        topics: [
          "After Effects: Interface, pre-composing, and essential workflows",
          "Motion design: Kinetic typography, shape layers, and logo animation",
          "Compositing: Green screen keying, rotoscoping, and color matching in Nuke",
          "Matchmoving: Camera tracking and object tracking in PFTrack",
          "Particle systems: Creating effects with Particular and Stardust",
          "Visual effects principles: Integrating CGI with live-action footage",
          "Professional motion project: Creating a 30-second broadcast package",
        ],
      },
      {
        title: "Semester 4: Video Production & Post-Production",
        duration: "12 Weeks",
        topics: [
          "Cinematography: Camera angles, framing, and composition",
          "Lighting for video: Three-point lighting, natural light, and mood",
          "Sound design: Foley, ADR, and sound effects",
          "Premiere Pro: Non-linear editing, transitions, and multi-cam editing",
          "DaVinci Resolve: Color correction, color grading, and creating looks",
          "Audio mixing: Dialogue cleanup, EQ, and mastering with Audition",
          "Complete video production: Directing, shooting, and editing a short film",
        ],
      },
      {
        title: "Semester 5: Game Design & Real-Time 3D",
        duration: "12 Weeks",
        topics: [
          "Game design theory: Core loops, mechanics, dynamics, and aesthetics",
          "Unity 3D: Scene management, prefabs, and C# scripting fundamentals",
          "Unreal Engine 5: Blueprint visual scripting and Nanite/Lumen technology",
          "Level design: Blockouts, lighting, and environmental storytelling",
          "Game art: Creating game-ready assets and optimizing for performance",
          "Interactive storytelling: Branching narratives and player agency",
          "Game prototype: Developing a playable vertical slice",
        ],
      },
      {
        title: "Semester 6: Interactive Design & UI/UX",
        duration: "12 Weeks",
        topics: [
          "UX research: User interviews, surveys, and affinity mapping",
          "Information architecture: Sitemaps, user flows, and card sorting",
          "Wireframing: Low-fidelity to high-fidelity transitions",
          "UI design: Visual hierarchy, micro-interactions, and design systems in Figma",
          "Prototyping: Interactive prototypes with advanced variables and conditions",
          "Usability testing: Moderated and unmoderated testing methods",
          "Digital product design project: Designing a complete mobile app",
        ],
      },
      {
        title: "Semester 7: AI & Emerging Technologies",
        duration: "12 Weeks",
        topics: [
          "Generative AI: Prompt engineering for Midjourney, DALL-E, and Stable Diffusion",
          "AI in animation: AI-assisted rigging, motion capture cleanup, and in-betweening",
          "Virtual production: LED walls, real-time compositing with Unreal Engine",
          "3D scanning & photogrammetry: Creating digital assets from real-world objects",
          "Web3 & NFTs: Blockchain basics and creating digital art collections",
          "AI-powered creative project: Integrating AI tools into a creative workflow",
        ],
      },
      {
        title: "Semester 8: Capstone & Industry Launch",
        duration: "12 Weeks",
        topics: [
          "Portfolio development: Creating a professional showreel and case studies",
          "Industry live project: Working with a real client or studio",
          "Resume & LinkedIn optimization: Building a professional online presence",
          "Interview preparation: Technical rounds, design challenges, and soft skills",
          "Networking: Industry connections and mentorship",
          "Final degree capstone project: A comprehensive, portfolio-ready project",
        ],
      },
    ],
    batches: [
      {
        startDate: "April 1, 2026",
        timing: "Mon - Fri | 10 AM - 2 PM",
        mode: "Offline (Saket, Delhi)",
        seatsLeft: 25,
      },
      {
        startDate: "July 15, 2026",
        timing: "Mon - Fri | 10 AM - 2 PM",
        mode: "Offline (Saket, Delhi)",
        seatsLeft: 20,
      },
    ],
    tools: ["Maya", "Blender", "Substance Painter", "ZBrush", "After Effects", "Nuke", "Premiere Pro", "DaVinci Resolve", "Figma", "Unity", "Unreal Engine 5", "Toon Boom Harmony", "Photoshop", "Audition"],
    outcomes: [
      "Bachelor's degree in Animation & Design",
      "Industry-recognized certifications from Adobe and Autodesk",
      "Guaranteed internship placements at leading studios",
      "Complete professional portfolio and showreel",
      "Direct entry to creative industry jobs in animation, VFX, and game design",
    ],
  },
  {
    id: "1",
    slug: "animation",
    title: "Animation",
    category: "Animation",
    tagline: "Master modern animation techniques from 2D to 3D",
    description: "Learn modern animation techniques including 2D animation, 3D animation, motion graphics, VFX basics, and industry-standard tools. This pathway is ideal for students exploring animation courses after 12th, diploma of animation, or those aiming for careers across studios and production houses.",
    duration: "12 Months",
    certificate: true,
    image: animationImg,
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
          "History of animation: From traditional to digital",
          "12 principles of animation: Deep dive with practical exercises",
          "Timing and spacing: Creating weight and personality",
          "Squash and stretch: Achieving realistic deformation",
          "Anticipation and follow-through: Creating natural movement",
          "Drawing fundamentals for animators: Gesture, anatomy, and form",
        ],
      },
      {
        title: "2D Animation Mastery",
        duration: "6 Weeks",
        topics: [
          "Traditional animation workflow: Roughs, cleanups, and in-betweening",
          "Toon Boom Harmony: Vector and bitmap drawing tools",
          "Character design: Silhouette, shape language, and expressions",
          "Rigging in Harmony: Cut-out animation and deformation tools",
          "Lip sync: Phoneme breakdown and dialogue animation",
          "Background design: Perspective and atmospheric depth",
        ],
      },
    ],
    batches: [
      {
        startDate: "January 20, 2026",
        timing: "Mon - Fri | 10 AM - 1 PM",
        mode: "Offline (Saket, Delhi)",
        seatsLeft: 8,
      },
      {
        startDate: "February 5, 2026",
        timing: "Sat, Sun | 10 AM - 4 PM",
        mode: "Hybrid",
        seatsLeft: 12,
      },
    ],
    tools: ["Maya", "Blender", "After Effects", "Toon Boom Harmony", "Photoshop", "Premiere Pro", "Cinema 4D", "ZBrush", "Substance Painter"],
    outcomes: [
      "Create broadcast-quality 2D and 3D animations",
      "Build and animate professional-grade 3D characters",
      "Master motion graphics for brands and broadcast",
      "Work on real studio projects simulating industry pipeline",
      "Build an industry-ready showreel for VFX, gaming, and animation studios",
    ],
  },
  {
    id: "2",
    slug: "vfx-cinematic-animation",
    title: "VFX",
    category: "Visual Effects",
    tagline: "Create Hollywood-grade visual effects",
    description: "Master advanced VFX techniques—from compositing and CGI to motion tracking, simulations, and real-time workflows. This VFX course supports learners pursuing visual effects, VFX and animation, and visual effects programs for film, gaming, and OTT projects.",
    duration: "12 Months",
    certificate: true,
    image: vfxImg,
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
          "VFX pipeline: From concept to final delivery",
          "Nuke fundamentals: Node-based compositing workflow",
          "Green screen keying: Keylight, Primatte, and IBK techniques",
          "Rotoscoping: Silhouette and manual roto for complex shapes",
          "Color correction: Matching plates and creating mood",
          "Basic compositing: Merging elements, grain, and lens distortion",
        ],
      },
      {
        title: "3D Modeling & Texturing",
        duration: "6 Weeks",
        topics: [
          "Hard surface modeling: Vehicles, weapons, and mechanical assets",
          "Organic modeling: ZBrush for creature and character sculpting",
          "UV mapping: Efficient layouts for texturing",
          "Substance Painter: PBR texturing, smart materials, and masking",
          "Look development: Creating realistic materials for film",
        ],
      },
*** End