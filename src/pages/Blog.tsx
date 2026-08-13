import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { 
  Calendar, 
  ArrowLeft, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Link as LinkIcon
} from "lucide-react";
import { toast } from "sonner";
import { blogs } from "@/data/blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
}

const BlogListView = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h1>
              <p className="text-lg text-muted-foreground">
                Discover the latest insights on animation, VFX, game development, and creative careers.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`} className="group h-full block">
                    <div className="bg-card rounded-xl overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 border border-border">
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3 w-fit">
                          {post.category}
                        </span>
                        <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto pt-4 border-t border-border">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const BlogDetailView = ({ post }: { post: BlogPost }) => {
  const relatedPosts = blogs.filter((b) => b.id !== post.id).slice(0, 3);
  const shareUrl = window.location.href;

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      toast.success('Link copied to clipboard!');
      return;
    }

    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const convertContentToHtml = (content: string) => {
    if (!content) return "";
    
    return content
      .split("\n\n")
      .map((block, idx) => {
        if (block.startsWith("## ")) {
          return `<h2 class="text-2xl md:text-3xl font-bold mt-12 mb-4 pb-2">${block.replace("## ", "")}</h2>`;
        }
        if (block.startsWith("### ")) {
          return `<h3 class="text-xl md:text-2xl font-semibold mt-8 mb-3">${block.replace("### ", "")}</h3>`;
        }
        if (block.startsWith("> ")) {
          return `<blockquote class="pl-4 border-l-4 border-primary italic text-muted-foreground my-6 py-2">${block.replace("> ", "")}</blockquote>`;
        }
        if (block.trim().startsWith("- ")) {
          const items = block
            .split("\n")
            .filter((line) => line.trim().startsWith("- "))
            .map((line) => `<li class="mb-2">${line.replace("- ", "")}</li>`)
            .join("");
          return `<ul class="list-disc list-inside space-y-2 my-6 ml-4">${items}</ul>`;
        }
        return `<p class="text-lg leading-relaxed mb-6 text-muted-foreground">${block.replace(/\n/g, "<br/>")}</p>`;
      })
      .join("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <article className="py-12 md:py-20">
          <div className="w-full px-4 md:px-6 max-w-[1400px] mx-auto">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Header */}
                <motion.header
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    {post.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    {post.title}
                  </h1>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                </motion.header>

                {/* Featured Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative aspect-video rounded-2xl overflow-hidden mb-10 shadow-lg"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Article Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="prose prose-lg dark:prose-invert max-w-none"
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: convertContentToHtml(post.content) }}
                    className="[&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-muted-foreground [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:pb-2 [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-2 [&>ul]:my-6 [&>ul]:ml-4 [&>blockquote]:pl-4 [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:italic [&>blockquote]:text-muted-foreground [&>blockquote]:my-6 [&>blockquote]:py-2"
                  />
                </motion.div>

                {/* Share Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col items-start gap-4 pt-8 mt-12"
                >
                  <span className="text-lg font-semibold text-white">
                    Share this article:
                  </span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleShare('twitter')}
                      aria-label="Share on Twitter"
                      className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 group hover:animate-[shake_0.5s_ease-in-out]"
                      style={{ backgroundColor: '#0f3d35' }}
                    >
                      <Twitter className="w-4 h-4" style={{ color: '#ffc107' }} />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      aria-label="Share on LinkedIn"
                      className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 group hover:animate-[shake_0.5s_ease-in-out]"
                      style={{ backgroundColor: '#0f3d35' }}
                    >
                      <Linkedin className="w-4 h-4" style={{ color: '#ffc107' }} />
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      aria-label="Share on Facebook"
                      className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 group hover:animate-[shake_0.5s_ease-in-out]"
                      style={{ backgroundColor: '#0f3d35' }}
                    >
                      <Facebook className="w-4 h-4" style={{ color: '#ffc107' }} />
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      aria-label="Copy link"
                      className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 group hover:animate-[shake_0.5s_ease-in-out]"
                      style={{ backgroundColor: '#0f3d35' }}
                    >
                      <LinkIcon className="w-4 h-4" style={{ color: '#ffc107' }} />
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar - Related Posts */}
              <aside className="lg:col-span-1">
                <div className="sticky top-28">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-card rounded-xl border border-border p-6"
                  >
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full"></span>
                      Related Articles
                    </h3>
                    <div className="space-y-5">
                      {relatedPosts.map((related) => (
                        <Link 
                          key={related.id} 
                          to={`/blog/${related.slug}`}
                          className="block group"
                        >
                          <div className="flex gap-4">
                            <img 
                              src={related.image} 
                              alt={related.title}
                              className="w-20 h-20 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors mb-2">
                                {related.title}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3" />
                                <span>{related.date}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default function Blog() {
  const { slug } = useParams<{ slug?: string }>();

  if (!slug) {
    return <BlogListView />;
  }

  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-16 px-4">
            <div className="text-6xl mb-6">🔍</div>
            <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Sorry, we couldn't find the article you're looking for. It might have been moved or deleted.
            </p>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return <BlogDetailView post={post} />;
}