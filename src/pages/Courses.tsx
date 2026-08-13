import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  Video,
  Palette,
  Layers,
  ArrowRight,
  Gamepad2,
  Film,
  PenTool,
  Monitor,
  Clock,
  Filter,
  Zap,
  Search,
  GraduationCap
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";

import generativeAiImg from "@/assets/courses/Generative-ai.webp";
import vfxImg from "@/assets/courses/vfx.webp";
import animationImg from "@/assets/courses/Animation.webp";
import motionGraphicsImg from "@/assets/courses/motion-graphic.webp";
import uiUxImg from "@/assets/courses/ui-ux.webp";
import graphicDesignImg from "@/assets/courses/graphic.webp";
import gameDesignImg from "@/assets/courses/game_img.webp";
import videoEditingImg from "@/assets/courses/Video_course.webp";
import degreeCourseImg from "@/assets/courses/degree-course.webp";
import collaborationLogo from "@/assets/lingyas_university_logo/lingyas-logo.webp.jpg";

// All individual courses (flat list for the all courses page)
const courses = [
  // Degree
  {
    slug: "B.sc-digital-media-ai-filmmaking",
    title: "B.Sc in Vocational Multimedia & Animation",
    description: "UGC-approved B.Sc degree offering intense specialization in 3D production pipelines, cinematic VFX, advanced motion graphics, and job showreels.",
    icon: GraduationCap,
    color: "from-[#ffc107] to-[#ffb300]",
    duration: "3 Years",
    image: degreeCourseImg,
    category: "Degree",
  },
  // AI Courses
  {
    slug: "master-in-gen-ai",
    title: "MASTER IN GEN AI",
    description: "Master generative AI tools and techniques for creative professionals.",
    icon: Sparkles,
    color: "from-[#ffc107] to-[#ffb300]",
    duration: "2 Months",
    image: generativeAiImg,
    category: "AI",
  },
  {
    slug: "gen-2-0-ai-generalist-course",
    title: "GEN 2.0: AI GENERALIST COURSE",
    description: "Master AI across creative industries. Learn prompt engineering, AI content creation, video generation, and build a portfolio.",
    icon: Sparkles,
    color: "from-[#ffc107] to-[#ffb300]",
    duration: "12 Months",
    image: generativeAiImg,
    category: "AI",
  },
  // Animation Courses
  {
    slug: "expert-program-digital-content-animation",
    title: "Expert Program in Digital Content & Animation",
    description: "Create stunning motion graphics and animations for various media.",
    icon: Film,
    color: "from-[#ffb300] to-[#ffd54f]",
    duration: "19 Months",
    image: motionGraphicsImg,
    category: "Animation",
  },
  {
    slug: "vfx-animation",
    title: "VFX & Animation",
    description: "Master 3D rendering, animation, and visual effects for film and games.",
    icon: Monitor,
    color: "from-[#2196f3] to-[#00bcd4]",
    duration: "12 Months",
    image: vfxImg,
    category: "VFX",
  },
  // VFX Courses
  {
    slug: "vfx-animation",
    title: "VFX & Animation",
    description: "Master 3D rendering, animation, and visual effects for film and games.",
    icon: Monitor,
    color: "from-[#2196f3] to-[#00bcd4]",
    duration: "12 Months",
    image: vfxImg,
    category: "VFX",
  },
  // Motion Graphics & Video Editing Courses
  {
    slug: "video-editing",
    title: "Video Editing",
    description: "Professional video editing skills for film, advertising, and content creation.",
    icon: Video,
    color: "from-[#ffc107] to-[#ffb300]",
    duration: "12 Months",
    image: videoEditingImg,
    category: "Animation",
  },
  {
    slug: "digital-content-motion-design",
    title: "Digital Content & Motion Design",
    description: "Create engaging digital content with advanced motion design techniques.",
    icon: Layers,
    color: "from-[#ffc107] to-[#ffb300]",
    duration: "12 Months",
    image: motionGraphicsImg,
    category: "Animation",
  },
  // Game Design Courses
  {
    slug: "dreamengine-animation-unreal",
    title: "DreamEngine: Animation with Unreal",
    description: "Learn animation techniques using Unreal Engine for games and interactive media.",
    icon: Gamepad2,
    color: "from-[#ffc107] to-[#ffb300]",
    duration: "28 Months",
    image: gameDesignImg,
    category: "Gaming",
  },
  // Design Courses
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Master user research frameworks, component-driven wireframing, high-fidelity Figma prototyping, and mobile app design systems.",
    icon: Palette,
    color: "from-[#ffd54f] to-[#ffc107]",
    duration: "9 Months",
    image: uiUxImg,
    category: "Design",
  },
  {
    slug: "digital-graphic-design-essentials",
    title: "Graphic Design",
    description: "Learn the essentials of digital graphic design, from branding to layout and mobile UI basics.",
    icon: PenTool,
    color: "from-[#bb86fc] to-[#6200ff]",
    duration: "7 Months",
    image: graphicDesignImg,
    category: "Design",
  }
];

// Remove duplicate courses based on slug for display (keeping unique entries)
const uniqueCourses = courses.filter((course, index, self) => 
  index === self.findIndex((c) => c.slug === course.slug)
);

const categories = ["All", "Degree", "AI", "VFX", "Animation", "Design", "Gaming"];

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = uniqueCourses.filter((course) => {
    const matchesCategory =
      activeFilter === "All" || course.category === activeFilter;

    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>
          All Courses | Best Animation, VFX & AI Training Institute
        </title>
      </Helmet>

      <div className="min-h-screen bg-[#030306] text-white">
        <Navbar />

        <main className="relative pt-16 z-10">
          {/* HERO */}
          <section className="relative py-12">
            <div className="container text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Find Your{" "}
                <span className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent">
                  Creative Superpower
                </span>
              </h1>

              <p className="text-white/60 text-lg mb-10">
                Industry-aligned courses with AI integration.
              </p>

              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ffc107]" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 rounded-full bg-white/5 border border-[#ffc107]/20 text-white"
                />
              </div>
            </div>
          </section>

          {/* FILTERS */}
          <section className="pb-16">
            <div className="container">
              <div className="flex justify-center gap-2 mb-12 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-5 py-2 rounded-full text-sm border transition ${
                      activeFilter === cat
                        ? "bg-[#ffc107] text-black border-[#ffc107]"
                        : "bg-white/5 text-white/60 border-[#ffc107]/20 hover:bg-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* COURSES GRID */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={`${course.slug}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <Link to={`/quiz-course/${course.slug}`}>
                      <div className="rounded-3xl bg-white/5 border border-[#ffc107]/10 overflow-hidden hover:border-[#ffc107]/30 transition hover:transform hover:scale-[1.02] duration-300">
                        {/* IMAGE */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                          />

                          {/* ICON */}
                          <div className={`absolute top-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                            <course.icon className="w-5 h-5 text-black" />
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-5">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-[#ffc107] transition line-clamp-1">
                            {course.title}
                          </h3>

                          <p className="text-sm text-white/60 mb-4 line-clamp-2">
                            {course.description}
                          </p>

                          <div className="flex items-center gap-1 text-xs text-white/60">
                            <Clock className="w-3 h-3 text-[#ffc107]" />
                            {course.duration}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Academic Collaboration Section */}
              <section className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.18em] text-white/70">
                      Academic Collaboration
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
                        Top University Collaboration
                      </h2>
                      <p className="text-white/70 text-base sm:text-lg leading-8 max-w-2xl">
                        Design Engine Delhi collaborates with Lingaya's Vidyapeeth to provide university-recognized AVGC programs. This strategic tie-up ensures Delhi NCR students receive accredited degree credentials alongside production-level skills.
                      </p>
                      <p className="text-white/70 text-base sm:text-lg leading-8 max-w-2xl">
                        Our Delhi curriculum combines intensive studio training with UGC-backed learning. Creative aspirants gain studio-ready skills, local agency exposure, and valid academic degrees—creating hybrid design professionals ready for top tech hubs.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        "UGC Recognized",
                        "NAAC Accredited",
                        "Industry-Oriented Curriculum",
                        "Practical Training",
                      ].map((point) => (
                        <div
                          key={point}
                          className="rounded-3xl border border-white/10 bg-slate-950/60 px-5 py-4 text-sm text-white/90 shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.22)]">
                    <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/70 mb-6">
                      In collaboration with
                    </div>
                    <div className="rounded-[28px] border border-white/10 bg-white/5 p-10 flex items-center justify-center">
                      <img
                        src={collaborationLogo}
                        alt="Lingaya's Vidyapeeth logo"
                        className="max-h-40 w-auto object-contain opacity-95"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Empty State */}
              {filteredCourses.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-white/60 text-lg">No courses found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setActiveFilter("All");
                      setSearchQuery("");
                    }}
                    className="mt-4 text-[#ffc107] hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
      <StickyButtons />
    </>
  );
}; // <-- This closing brace was missing!

export default Courses;