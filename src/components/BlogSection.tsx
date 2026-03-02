import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Button } from "./ui/button";

const blogPosts = [
  {
    id: 1,
    slug: "real-time-rendering-revolution",
    title: "The Real-Time Rendering Revolution: Why Unreal Engine 5.7 is a Game-Changer",
    excerpt: "Learn how real-time rendering and Unreal Engine 5.7 transform animation workflows, empowering creators with faster production tools.",
    image: "https://design-engine.io/img_bank/blog1.webp",
    category: "VFX",
    author: "Design Engine",
    date: "Dec 9, 2025",
    readTime: "8 min read",
  },
  {
    id: 2,
    slug: "ai-in-animation-friend-or-foe",
    title: "AI in Animation: Friend or Foe? The Truth About AI in Creative Industries",
    excerpt: "See how AI enhances animation workflows, supporting artists and shaping the future of creative production.",
    image: "https://design-engine.io/img_bank/blog2.webp",
    category: "AI & Animation",
    author: "Design Engine",
    date: "Dec 9, 2025",
    readTime: "12 min read",
  },
  {
    id: 3,
    slug: "virtual-production-mandalorian",
    title: "Virtual Production: How The Mandalorian Changed Everything",
    excerpt: "See how virtual production merges real-time 3D with filmmaking to expand creative possibilities.",
    image: "https://design-engine.io/img_bank/blog_3.webp",
    category: "VFX - Film Making",
    author: "Design Engine",
    date: "Dec 9, 2025",
    readTime: "15 min read",
  },
  {
    id: 4,
    slug: "cross-platform-gaming-revolution",
    title: "The Cross-Platform Gaming Revolution: Why Your Next Game Needs to Be Everywhere",
    excerpt: "Learn modern game development skills using Unity, Unreal, and cloud gaming technologies.",
    image: "https://design-engine.io/img_bank/blog_4.webp",
    category: "Gaming",
    author: "Design Engine",
    date: "Dec 22, 2025",
    readTime: "10 min read",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-sm font-medium mb-4">
            📚 Knowledge Hub
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest from Our <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and industry trends from our expert instructors and alumni.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="glass-card overflow-hidden h-full hover:border-primary/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
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

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
