import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
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
  GraduationCap
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import CourseVideoPreview from "./CourseVideoPreview";
import ResponsiveImage from "./ResponsiveImage";

import generativeAiImg from "@/assets/courses/Generative-ai.webp";
import vfxImg from "@/assets/courses/vfx.webp";
import animationImg from "@/assets/courses/Animation.webp";
import motionGraphicsImg from "@/assets/courses/motion-graphic.webp";
import uiUxImg from "@/assets/courses/ui-ux.webp";
import graphicDesignImg from "@/assets/courses/graphic.webp";
import gameDesignImg from "@/assets/courses/game_img.webp";
import videoEditingImg from "@/assets/courses/Video_course.webp";
import degreeCourseImg from "@/assets/courses/degree-course.webp";

// Updated courses with correct subcourse mappings
const courses = [
  {
    slug: "B.sc-digital-media-ai-filmmaking",
    title: "B.Sc in Vocational Multimedia & Animation",
    fullTitle: "B.Sc in Vocational Multimedia & Animation",
    description: "UGC-approved B.Sc degree offering intense specialization in 3D production pipelines, cinematic VFX, advanced motion graphics, and job showreels.",
    icon: GraduationCap,
    duration: "3 Years",
    image: degreeCourseImg,
    category: "Degree",
    trending: true
  },
  {
    slug: "generative-ai-for-designers",
    title: "Generative AI",
    fullTitle: "Generative AI for Designers",
    description: "Master Midjourney, Stable Diffusion, and advanced prompt engineering workflows for rapid visual conceptualization.",
    icon: Sparkles,
    duration: "2 - 12 Months",
    image: generativeAiImg,
    category: "AI",
    trending: true,
    isCombined: true,
    subCourses: [
      { slug: "master-in-gen-ai", title: "MASTER IN GEN AI", image: generativeAiImg },
      { slug: "gen-2-0-ai-generalist-course", title: "GEN 2.0: AI GENERALIST COURSE", image: generativeAiImg }
    ]
  },
  {
    slug: "game-design",
    title: "Game Design",
    fullTitle: "Game Design",
    description: "Learn level mechanics, environment asset creation, and interactive game storytelling using Unreal Engine and Unity software.",
    icon: Gamepad2,
    duration: "12-24 Months",
    image: gameDesignImg,
    category: "Gaming",
    trending: false,
    isCombined: true,
    subCourses: [
      { slug: "dreamengine-animation-unreal", title: "DreamEngine: Animation with Unreal", image: gameDesignImg },
      { slug: "master-in-avg", title: "Master in AVG", image: animationImg }
    ]
  },
  {
    slug: "animation",
    title: "Animation",
    fullTitle: "Animation",
    description: "Complete specialization covering character modeling, rigging, texturing, and 3D rendering workflows in Autodesk Maya.",
    icon: Film,
    duration: "12-36 Months",
    image: animationImg,
    category: "Animation",
    trending: true,
    isCombined: true,
    subCourses: [
      { slug: "master-in-avg", title: "Master in AVG", image: animationImg },
      { slug: "motion-graphics-animation", title: "Expert Program in Digital Content & Animation", image: motionGraphicsImg },
      { slug: "rendercraft-3d-animation-vfx", title: "RenderCraft: 3D Animation & VFX", image: vfxImg }
    ]
  },
  {
    slug: "vfx",
    title: "VFX",
    fullTitle: "VFX",
    description: "Master node-based compositing, green screen chroma keying, rotoscoping, and matchmoving utilizing industry-standard Nuke software.",
    icon: Film,
    duration: "12-36 Months",
    image: vfxImg,
    category: "VFX",
    trending: false,
    isCombined: true,
    subCourses: [
      { slug: "master-in-avg", title: "Master in AVG", image: animationImg },
      { slug: "rendercraft-3d-animation-vfx", title: "RenderCraft: 3D Animation & VFX", image: vfxImg }
    ]
  },
  {
    slug: "motion-graphics-video-editing",
    title: "Motion Graphics & Video Editing",
    fullTitle: "Motion Graphics & Video Editing",
    description: "Create cinematic title animations, commercial ads, and high-end video montages using Adobe Premiere Pro and After Effects.",
    icon: Layers,
    duration: "12 Months",
    image: motionGraphicsImg,
    category: "Animation",
    trending: false,
    isCombined: true,
    subCourses: [
      { slug: "video-editing", title: "Video Editing", image: videoEditingImg },
      { slug: "digital-content-motion-design", title: "Digital Content & Motion Design", image: motionGraphicsImg }
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    fullTitle: "UI/UX Design",
    description: "Master user research frameworks, component-driven wireframing, high-fidelity Figma prototyping, and mobile app design systems.",
    icon: Palette,
    duration: "9 Months",
    image: uiUxImg,
    category: "Design",
    trending: true
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    fullTitle: "Graphic Design",
    description: "Learn design layouts, typography hierarchies, vector illustrations, and commercial branding using Illustrator and Photoshop.",
    icon: PenTool,
    duration: "7 Months",
    image: graphicDesignImg,
    category: "Design",
    trending: false
  }
];

const categories = ["All", "Degree", "AI", "VFX", "Animation", "Design", "Gaming"];

const CourseGrid = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [showVideoPreview, setShowVideoPreview] = useState(false);
  const [selectedCourseForPreview, setSelectedCourseForPreview] = useState<typeof courses[0] | null>(null);
  const [showCourseSelection, setShowCourseSelection] = useState(false);
  const [selectedCombinedCourse, setSelectedCombinedCourse] = useState<typeof courses[0] | null>(null);

  const filteredCourses =
    activeFilter === "All"
      ? courses
      : courses.filter((c) => c.category === activeFilter);

  const handleExploreCourse = (course: typeof courses[0]) => {
    if (course.isCombined) {
      setSelectedCombinedCourse(course);
      setShowCourseSelection(true);
    } else {
      navigate(`/quiz-course/${course.slug}`);
    }
  };

  // Function to get items for last row
  const getLastRowItems = (items: any[]) => {
    const itemsPerRow = 3;
    const remainder = items.length % itemsPerRow;
    if (remainder === 0) return [];
    return items.slice(-remainder);
  };

  const lastRowItems = getLastRowItems(filteredCourses);
  const isLastRowIncomplete = lastRowItems.length === 2;

  return (
    <section id="courses" className="relative py-16 bg-[#030306] overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ffc107]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ffc107]/5 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ffc107]/30 mb-6">
            <Zap className="w-4 h-4 text-[#ffc107]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Job-Ready Multimedia Courses
          </h2>

          <p className="text-gray-400 text-base md:text-lg">
            AVGC programs with Generative AI integration. Build high-end portfolios that Delhi recruiters hire.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          <Filter className="w-4 h-4 text-[#ffc107] mt-2 mr-2 hidden sm:block" />

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold border transition ${
                activeFilter === cat
                  ? "bg-[#ffc107] text-black border-[#ffc107]"
                  : "border-[#ffc107]/40 text-white hover:bg-[#ffc107]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence>
            {filteredCourses.map((course, index) => {
              const isLastRowItem = lastRowItems.includes(course);
              const shouldCenter = isLastRowIncomplete && isLastRowItem;
              
              return (
                <motion.div
                  key={course.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`group cursor-pointer h-full ${
                    shouldCenter 
                      ? 'lg:col-span-1 lg:mx-auto lg:w-full lg:max-w-md' 
                      : ''
                  }`}
                  onClick={() => handleExploreCourse(course)}
                >
                  <div className="rounded-2xl overflow-hidden bg-[#0a0a0f] border border-[#ffc107]/20 hover:border-[#ffc107] transition-all duration-300 h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden flex-shrink-0">
                      <ResponsiveImage
                        src={course.image}
                        alt={course.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[#ffc107] flex items-center justify-center">
                        <course.icon className="w-4 h-4 text-black" />
                      </div>
                    </div>

                    <div className="p-4 md:p-5 flex flex-col flex-1">
                      <h3 className="text-base md:text-lg font-bold text-white mb-2 hover:text-[#ffc107] transition line-clamp-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {course.title}
                      </h3>

                      <p className="text-xs md:text-sm text-gray-400 mb-3 line-clamp-2 flex-1">
                        {course.description}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-[#ffc107]/10 mt-auto">
                        <span className="flex items-center gap-1.5 text-xs md:text-sm text-gray-400">
                          <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#ffc107]" />
                          {course.duration}
                        </span>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleExploreCourse(course);
                          }}
                          className="flex items-center gap-1 text-[#ffc107] hover:text-[#ffb300] transition-colors text-xs md:text-sm font-medium group/btn"
                        >
                          Explore Course
                          <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Center the grid when only 2 courses are filtered */}
        {filteredCourses.length === 2 && (
          <style>{`
            @media (min-width: 1024px) {
              .grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3 {
                display: flex;
                justify-content: center;
                gap: 1.5rem;
              }
              .grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3 > div {
                width: calc(33.333% - 1rem);
                max-width: 400px;
              }
            }
          `}</style>
        )}

        <div className="text-center mt-12 md:mt-16">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button asChild className="bg-[#ffc107] text-black font-bold px-6 md:px-8 py-5 md:py-6 rounded-full text-sm md:text-base">
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </Button>
          </div>

          <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">
            Confused about careers? Take our{" "}
            <Link to="/quiz" className="text-[#ffc107] hover:underline">
              Creative Path Quiz
            </Link>
          </p>
        </div>
      </div>

      <CourseVideoPreview
        isOpen={showVideoPreview}
        onClose={() => setShowVideoPreview(false)}
        courseTitle={selectedCourseForPreview?.title || ""}
        thumbnailUrl={selectedCourseForPreview?.image || ""}
      />

      {/* Course Selection Modal */}
      <AnimatePresence>
        {showCourseSelection && selectedCombinedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCourseSelection(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0a0a0f] border border-[#ffc107]/20 rounded-3xl p-6 md:p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-8 md:mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Choose Your Path
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  Select the course that best fits your creative journey
                </p>
              </div>

              <div className={`grid gap-4 md:gap-6 mb-6 md:mb-8 ${
                selectedCombinedCourse.subCourses?.length === 2 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {selectedCombinedCourse.subCourses?.map((subCourse, index) => (
                  <motion.div
                    key={subCourse.slug}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      navigate(`/quiz-course/${subCourse.slug}`);
                      setShowCourseSelection(false);
                    }}
                  >
                    <div className="rounded-xl md:rounded-2xl overflow-hidden bg-[#1a1a1f] border border-[#ffc107]/20 hover:border-[#ffc107] transition-all duration-300">
                      <div className="relative h-40 md:h-48 overflow-hidden">
                        <img
                          src={subCourse.image}
                          alt={subCourse.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>

                      <div className="p-3 md:p-4 text-center">
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1 line-clamp-2">
                          {subCourse.title}
                        </h4>
                        <div className="flex items-center justify-center gap-1 text-[#ffc107] text-xs md:text-sm font-medium">
                          Explore Course
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center pt-4 border-t border-[#ffc107]/10">
                <button
                  onClick={() => setShowCourseSelection(false)}
                  className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors px-4 py-2"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CourseGrid;