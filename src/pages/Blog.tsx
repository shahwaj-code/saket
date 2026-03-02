import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogDetail from "@/components/BlogDetail";

const blogPosts = [
  {
    id: 1,
    slug: "future-of-ai-in-design-2025",
    title: "The Future of AI in Design: What to Expect in 2025",
    excerpt: "Explore how generative AI is reshaping the creative industry and what skills you need to stay ahead of the curve. From Midjourney to Stable Diffusion, we break down the tools transforming design.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    category: "AI & Design",
    author: "Vikram Sharma",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "Dec 28, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "mastering-midjourney-prompts",
    title: "Mastering Midjourney: 10 Prompt Engineering Secrets",
    excerpt: "Learn the advanced techniques our instructors use to create stunning AI-generated artwork consistently. These prompt strategies will level up your AI art game.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop",
    category: "Tutorial",
    author: "Ananya Gupta",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "Dec 22, 2024",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "vfx-career-guide-india",
    title: "Complete VFX Career Guide: From Beginner to Supervisor",
    excerpt: "A comprehensive roadmap to building a successful VFX career in India's booming entertainment industry. Salary insights, skill requirements, and growth opportunities.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=500&fit=crop",
    category: "Career",
    author: "Karan Verma",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    date: "Dec 18, 2024",
    readTime: "15 min read",
    featured: true,
  },
  {
    id: 4,
    slug: "figma-design-systems-2024",
    title: "Building Scalable Design Systems in Figma",
    excerpt: "Step-by-step guide to creating enterprise-grade design systems used by top product teams. Learn component architecture, tokens, and documentation best practices.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    category: "UI/UX",
    author: "Priya Sharma",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    date: "Dec 15, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "unreal-engine-5-beginners",
    title: "Getting Started with Unreal Engine 5: A Beginner's Guide",
    excerpt: "Everything you need to know to start creating stunning real-time visuals with Unreal Engine 5. From installation to your first render.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop",
    category: "Tutorial",
    author: "Arjun Mehta",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    date: "Dec 10, 2024",
    readTime: "18 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "motion-design-trends-2025",
    title: "Motion Design Trends to Watch in 2025",
    excerpt: "From 3D typography to AI-enhanced animations, discover the motion design trends that will dominate brand content and digital experiences next year.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop",
    category: "Industry Trends",
    author: "Sneha Patel",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    featured: false,
  },
];

const categories = ["All", "AI & Design", "Tutorial", "Career", "UI/UX", "Industry Trends"];

const Blog = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // If slug is provided, show blog detail
  if (slug) {
    const post = blogPosts.find(p => p.slug === slug);
    if (post) {
      const relatedPosts = blogPosts.filter(p => 
        p.id !== post.id && (p.category === post.category || p.featured)
      );
      return (
        <>
          <Helmet>
            <title>{post.title} | CreativeTech Institute Blog</title>
            <meta name="description" content={post.excerpt} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.excerpt} />
            <meta property="og:image" content={post.image} />
            <meta property="og:type" content="article" />
          </Helmet>
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-20">
              <BlogDetail post={post} relatedPosts={relatedPosts} />
            </main>
            <Footer />
          </div>
        </>
      );
    }
  }

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog | CreativeTech Institute - AI, VFX & Design Insights</title>
        <meta 
          name="description" 
          content="Explore tutorials, career guides, and industry insights on Generative AI, VFX, Motion Graphics, and UI/UX Design from CreativeTech experts." 
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 md:py-24 border-b border-border relative overflow-hidden">
            {/* Mesh gradient background */}
            <div className="absolute inset-0 mesh-gradient opacity-30" />
            
            <div className="container relative z-10 px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-12"
              >
                <span className="inline-block px-4 py-1.5 rounded-full glassmorphic-button text-primary text-sm font-medium mb-4">
                  📚 Knowledge Hub
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Insights & <span className="gradient-text">Tutorials</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Stay ahead with the latest in AI art, VFX techniques, design trends, and career advice from industry experts.
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
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-secondary border border-border focus:border-[#ffc107] focus:ring-2 focus:ring-[#ffc107]/20 outline-none transition-all"
                  />
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeCategory === cat
                          ? "glassmorphic-button text-foreground shadow-lg border border-[#ffc107]/30"
                          : "bg-secondary text-muted-foreground hover:bg-secondary/80 border border-transparent hover:border-[#ffc107]/20"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Featured Post */}
          {featuredPost && activeCategory === "All" && !searchQuery && (
            <section className="py-16 border-b border-border">
              <div className="container px-4 md:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/blog/${featuredPost.slug}`}>
                    <div className="grid lg:grid-cols-2 gap-8 items-center group">
                      <div className="relative overflow-hidden rounded-3xl">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full glassmorphic-button text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="lg:pl-8">
                        <span className="text-sm text-primary font-medium">{featuredPost.category}</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 group-hover:text-[#ffc107] transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4">
                          <img 
                            src={featuredPost.authorImage} 
                            alt={featuredPost.author}
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#ffc107]/30"
                          />
                          <div>
                            <p className="font-medium">{featuredPost.author}</p>
                            <p className="text-sm text-muted-foreground">
                              {featuredPost.date} · {featuredPost.readTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </section>
          )}

          {/* Blog Grid */}
          <section className="py-16">
            <div className="container px-4 md:px-6">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">
                    No articles found matching your search. Try different keywords.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link to={`/blog/${post.slug}`} className="group block h-full">
                        <div className="apple-card overflow-hidden h-full flex flex-col border border-transparent hover:border-[#ffc107]/20 transition-all duration-300">
                          <div className="relative aspect-video overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium border border-[#ffc107]/20">
                                {post.category}
                              </span>
                            </div>
                          </div>
                          
                          <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#ffc107] transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground line-clamp-2 mb-4 flex-1">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-border">
                              <div className="flex items-center gap-2">
                                <img 
                                  src={post.authorImage} 
                                  alt={post.author}
                                  className="w-8 h-8 rounded-full object-cover ring-1 ring-[#ffc107]/30"
                                />
                                <span className="text-sm text-muted-foreground">{post.author}</span>
                              </div>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3 text-[#ffc107]" />
                                  {post.date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3 text-[#ffc107]" />
                                  {post.readTime}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              )}

              {/* Load More */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Button variant="outline" size="lg" className="glassmorphic-button border-[#ffc107]/20 hover:border-[#ffc107]/40">
                  Load More Articles
                  <ArrowRight className="w-4 h-4 text-[#ffc107]" />
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-16 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 mesh-gradient opacity-20" />
            <div className="container relative z-10 px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto text-center"
              >
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-muted-foreground mb-8">
                  Get weekly insights on AI art, VFX tutorials, and career tips delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 rounded-full bg-background border border-[#ffc107]/20 focus:border-[#ffc107] focus:ring-2 focus:ring-[#ffc107]/20 outline-none transition-all"
                  />
                  <Button variant="apple" size="lg" className="rounded-full border border-transparent hover:border-[#ffc107]/30">
                    Subscribe
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;