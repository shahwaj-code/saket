import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Filter, 
  CheckCircle, 
  Linkedin, 
  FileText, 
  ExternalLink,
  X,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    placementVerified: true,
    hireStatus: "Available",
    linkedIn: "https://linkedin.com",
    resume: "#",
    challenge: "Create an immersive cyberpunk environment for a AAA game pitch",
    solution: "Used procedural modeling in Houdini for buildings, Substance for materials, and Unreal for real-time rendering with ray tracing",
    result: "Project was selected for studio presentation. Student placed at a top gaming studio with ₹12 LPA package.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=600&h=800&fit=crop",
    thumbnailAspect: "portrait",
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
    placementVerified: true,
    hireStatus: "Employed",
    linkedIn: "https://linkedin.com",
    resume: "#",
    challenge: "Redesign complete brand identity for a fintech startup in 4 weeks",
    solution: "Conducted user research, created modular design system with 500+ components, animated brand guidelines",
    result: "Startup raised ₹10Cr funding post-rebrand. Student now leads design at a major product company.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    thumbnailAspect: "landscape",
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
    placementVerified: false,
    hireStatus: "Available",
    linkedIn: "https://linkedin.com",
    resume: "#",
    challenge: "Create a full fashion editorial using only AI tools for a digital magazine",
    solution: "Combined Midjourney for concepts, trained custom LoRAs for consistency, post-processed in Photoshop",
    result: "Published in 3 digital magazines. Freelancing with fashion brands across India.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    thumbnailAspect: "square",
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
    placementVerified: true,
    hireStatus: "Employed",
    linkedIn: "https://linkedin.com",
    resume: "#",
    challenge: "Create award-worthy showreel demonstrating fluid simulation mastery",
    solution: "Combined Houdini FLIP simulations with C4D for product shots, composited in After Effects",
    result: "Reel won student category at MIFA. Placed at leading motion studio in Mumbai.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    thumbnailAspect: "landscape",
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
    placementVerified: true,
    hireStatus: "Available",
    linkedIn: "https://linkedin.com",
    resume: "#",
    challenge: "Design a photorealistic sci-fi Tokyo street scene for VR experience",
    solution: "Kitbashed assets in Blender, sculpted hero props in ZBrush, textured with Substance suite",
    result: "VR experience demoed at tech conference. Multiple job offers from gaming studios.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=700&fit=crop",
    thumbnailAspect: "portrait",
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
    placementVerified: true,
    hireStatus: "Employed",
    linkedIn: "https://linkedin.com",
    resume: "#",
    challenge: "Complete 30-second hero VFX shot with explosion, debris, and CG integration",
    solution: "Simulated pyro in Houdini, tracked and composited in Nuke, color graded for film look",
    result: "Shot featured in short film that won state film award. Working at DNEG.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    thumbnailAspect: "landscape",
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
    placementVerified: false,
    hireStatus: "Available",
    linkedIn: "https://linkedin.com",
    resume: "#",
    challenge: "Create cohesive series of abstract landscapes for NFT collection",
    solution: "Developed consistent style using custom workflows in ComfyUI, batch processed 100+ images",
    result: "NFT collection sold out in 24 hours. Now consulting for Web3 art projects.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop",
    thumbnailAspect: "square",
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
    placementVerified: true,
    hireStatus: "Freelancing",
    linkedIn: "https://linkedin.com",
    resume: "#",
    challenge: "Create photo-realistic product renders for luxury watch brand campaign",
    solution: "Built detailed CAD models, developed custom Octane materials, studio-lit virtual environment",
    result: "Renders used in actual brand campaign. Ongoing retainer with agency.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=500&fit=crop",
    thumbnailAspect: "landscape",
  },
];

const categories = ["All", "VFX", "UI/UX", "AI Art", "Motion Graphics"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

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
        <title>Student Portfolio Hub | CreativeTech Institute</title>
        <meta 
          name="description" 
          content="Explore job-ready portfolios from CreativeTech alumni. VFX artists, UI designers, AI artists, and motion designers ready for hire." 
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 md:py-24 border-b border-border">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-12"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  🎨 Job-Ready Talent
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Student <span className="gradient-text">Portfolio Hub</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Browse case studies from our placement-verified alumni. Find and hire industry-ready VFX artists, designers, and AI specialists.
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
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  <Filter className="w-4 h-4 text-[#ffc107] self-center mr-2" />
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeFilter === cat
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Portfolio Grid */}
          <section className="py-16">
            <div className="container px-4 md:px-6">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                <AnimatePresence>
                  {filteredItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="break-inside-avoid mb-6 group cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="apple-card overflow-hidden relative">
                        {/* Badges */}
                        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
                          {item.placementVerified && (
                            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-apple-green/90 text-white text-xs font-medium backdrop-blur-sm">
                              <CheckCircle className="w-3 h-3" />
                              Placement Verified
                            </span>
                          )}
                          {item.hireStatus === "Available" && (
                            <span className="px-2.5 py-1 rounded-full bg-apple-blue/90 text-white text-xs font-medium backdrop-blur-sm">
                              Hire Me
                            </span>
                          )}
                        </div>

                        {/* Image with Zoom */}
                        <div className="overflow-hidden">
                          <motion.img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-cover"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>

                        {/* Info */}
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-primary font-medium">{item.category}</span>
                            <span className="text-xs text-muted-foreground">{item.skill}</span>
                          </div>
                          <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">by {item.student}</p>
                          
                          {/* Tools */}
                          <div className="flex flex-wrap gap-1">
                            {item.tools.slice(0, 3).map((tool, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-0.5 rounded-full bg-secondary"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">
                    No portfolios found matching your criteria. Try different filters.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-muted/30">
            <div className="container px-4 md:px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-4">Looking to Hire Creative Talent?</h2>
                <p className="text-muted-foreground mb-8">
                  Our placement-verified students are industry-ready. Get in touch to discuss your requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="apple" size="lg">
                    Contact for Hiring
                  </Button>
                  <Button variant="outline" size="lg">
                    Download Talent Catalog
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-y-auto"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="container px-4 md:px-6 py-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="fixed top-6 right-6 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="max-w-5xl mx-auto">
                  {/* Header */}
                  <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <div className="rounded-3xl overflow-hidden">
                      <img
                        src={selectedItem.image.replace("w=600", "w=1200")}
                        alt={selectedItem.title}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {selectedItem.category}
                        </span>
                        {selectedItem.placementVerified && (
                          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-apple-green/10 text-apple-green text-sm font-medium">
                            <CheckCircle className="w-3.5 h-3.5 text-[#ffc107]" />
                            Placement Verified
                          </span>
                        )}
                      </div>
                      <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedItem.title}</h1>
                      <div className="flex items-center gap-4 mb-6">
                        <div>
                          <p className="font-semibold text-lg">{selectedItem.student}</p>
                          <p className="text-muted-foreground">{selectedItem.skill}</p>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <a href={selectedItem.linkedIn} target="_blank" rel="noopener noreferrer">
                          <Button variant="apple">
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </Button>
                        </a>
                        <a href={selectedItem.resume} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline">
                            <FileText className="w-4 h-4" />
                            Resume
                          </Button>
                        </a>
                        <Link to={`/portfolio/${selectedItem.slug}`}>
                          <Button variant="outline">
                            <ExternalLink className="w-4 h-4" />
                            Full Project
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Case Study Content */}
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="apple-card p-6">
                      <h3 className="text-lg font-bold mb-3 text-apple-pink">Challenge</h3>
                      <p className="text-muted-foreground">{selectedItem.challenge}</p>
                    </div>
                    <div className="apple-card p-6">
                      <h3 className="text-lg font-bold mb-3 text-apple-blue">Solution</h3>
                      <p className="text-muted-foreground">{selectedItem.solution}</p>
                    </div>
                    <div className="apple-card p-6">
                      <h3 className="text-lg font-bold mb-3 text-apple-green">Result</h3>
                      <p className="text-muted-foreground">{selectedItem.result}</p>
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="font-semibold mb-4">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-secondary text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Portfolio;