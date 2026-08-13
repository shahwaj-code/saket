import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  Filter, 
  Search
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";

const portfolioItems = [
  {
    id: 1,
    slug: "cyberpunk-cityscape",
    title: "Cyberpunk Cityscape",
    category: "VFX",
    skill: "3D Modeler",
    student: "Arjun Mehta",
    tools: ["Unreal Engine", "Maya", "Substance Painter"],
    type: "image",
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=600&h=800&fit=crop",
  },
  {
    id: 2,
    slug: "brand-evolution",
    title: "Brand Identity System",
    category: "UI/UX",
    skill: "UI Designer",
    student: "Priya Singh",
    tools: ["Figma", "Illustrator", "After Effects"],
    type: "image",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    slug: "ai-dreamscapes",
    title: "AI Fashion Editorial",
    category: "AI Art",
    skill: "AI Artist",
    student: "Rahul Kumar",
    tools: ["Midjourney", "Stable Diffusion", "Photoshop"],
    type: "image",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    slug: "liquid-motion",
    title: "Liquid Motion Reel",
    category: "Motion Graphics",
    skill: "Motion Designer",
    student: "Sneha Patel",
    tools: ["After Effects", "Cinema 4D", "Houdini"],
    type: "video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    slug: "neo-tokyo",
    title: "Neo Tokyo Environment",
    category: "VFX",
    skill: "Environment Artist",
    student: "Vikram Sharma",
    tools: ["Blender", "ZBrush", "Substance"],
    type: "image",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=700&fit=crop",
  },
  {
    id: 6,
    slug: "vfx-breakdown",
    title: "VFX Shot Breakdown",
    category: "VFX",
    skill: "VFX Compositor",
    student: "Karan Verma",
    tools: ["Nuke", "Houdini", "After Effects"],
    type: "video",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    slug: "abstract-emotions",
    title: "Abstract AI Landscapes",
    category: "AI Art",
    skill: "AI Artist",
    student: "Neha Agarwal",
    tools: ["Midjourney", "ComfyUI", "Photoshop"],
    type: "image",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop",
  },
  {
    id: 8,
    slug: "product-viz",
    title: "Premium Product Renders",
    category: "VFX",
    skill: "3D Artist",
    student: "Ananya Gupta",
    tools: ["Cinema 4D", "Octane", "Photoshop"],
    type: "image",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=500&fit=crop",
  },
];

const categories = ["All", "VFX", "UI/UX", "AI Art", "Motion Graphics"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = activeFilter === "All" || item.category === activeFilter;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.skill.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Student Portfolio Hub | Design Engine</title>
        <meta
          name="description"
          content="Explore job-ready portfolios from Design Engine alumni. VFX artists, UI designers, AI artists, and motion designers ready for hire."
        />
      </Helmet>

      <div className="min-h-screen bg-[#030306] text-white">
        <Navbar />

        {/* Golden orbs background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#ffc107]/10 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ffd54f]/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#ffb300]/10 rounded-full blur-[90px]"
          />
        </div>

        {/* 3D Grid Effect */}
        <div className="fixed inset-0 opacity-15 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,193,7,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,193,7,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              transform: "perspective(500px) rotateX(60deg)"
            }}
          />
        </div>

        {/* Golden Gradient Overlay */}
        <div className="fixed inset-0 mix-blend-overlay bg-gradient-to-br from-[#ffc107]/20 via-transparent to-[#ffd54f]/10 pointer-events-none" />

        <main className="relative pt-20 z-10">
          {/* Hero Section */}
          <section className="py-16 md:py-24 border-b border-[#ffc107]/10">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-12"
              >
                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-[#ffc107] mb-6"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-[#ffc107]">🎨</span>
                  </motion.div>
                  <span className="text-sm font-medium text-white/90">Student Showcase</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Student{" "}
                  <span className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent">
                    Portfolio Hub
                  </span>
                </h1>
                <p className="text-lg text-white/60">
                  Browse creative works from our talented students. VFX artists, UI designers, AI artists, and motion designers.
                </p>
              </motion.div>

              {/* Search & Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-4xl mx-auto"
              >
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ffc107]" />
                  <input
                    type="text"
                    placeholder="Search by name, skill, or title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-[#ffc107]/20 text-white placeholder:text-white/40 focus:border-[#ffc107] focus:ring-2 focus:ring-[#ffc107]/20 outline-none transition-all"
                  />
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  <Filter className="w-4 h-4 text-[#ffc107] self-center mr-2" />
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                        activeFilter === cat
                          ? "bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-black border-transparent shadow-[0_0_20px_rgba(255,193,7,0.3)]"
                          : "bg-white/5 text-white/60 border-[#ffc107]/20 hover:bg-white/10 hover:border-[#ffc107]/40 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Portfolio Grid - 3 Cards per row */}
          <section className="py-16">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <AnimatePresence>
                  {filteredItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group h-full"
                    >
                      <div className="bg-white/5 backdrop-blur-xl border border-[#ffc107]/10 overflow-hidden rounded-2xl hover:border-[#ffc107]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,193,7,0.15)] h-full flex flex-col">
                        {/* Image Container - Larger aspect ratio */}
                        <div className="relative aspect-[3/2] overflow-hidden flex-shrink-0">
                          <motion.img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-[#ffc107] font-medium">{item.category}</span>
                            <span className="text-xs text-white/60">{item.skill}</span>
                          </div>
                          <h3 className="text-base font-bold mb-1 text-white line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-white/60 mb-3">by {item.student}</p>
                          
                          {/* Tools */}
                          <div className="flex flex-wrap gap-1.5 mt-auto">
                            {item.tools.slice(0, 3).map((tool, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/80 border border-[#ffc107]/20"
                              >
                                {tool}
                              </span>
                            ))}
                            {item.tools.length > 3 && (
                              <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/80 border border-[#ffc107]/20">
                                +{item.tools.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-white/60 text-lg">
                    No portfolios found matching your criteria. Try different filters.
                  </p>
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
};

export default Portfolio;