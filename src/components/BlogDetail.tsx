import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Link as LinkIcon
} from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  featured: boolean;
}

interface BlogDetailProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogDetail = ({ post, relatedPosts }: BlogDetailProps) => {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  const handleShare = (platform: string) => {
    const url = shareUrl || (typeof window !== "undefined" ? window.location.href : "");
    if (!url) {
      toast.error('Unable to share right now. Please try again.');
      return;
    }

    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard?.writeText(url);
      toast.success('Link copied to clipboard!');
      return;
    }

    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const articleContent = post.content || `Add your full blog content here...`;

  const convertContentToHtml = (content: string) => {
    if (!content) return "";
    // Preserve newlines and allow HTML tags like <strong> to render correctly
    return content
      .split("\n\n")
      .map((block) => {
        if (block.startsWith("## ")) {
          return `<h2>${block.replace("## ", "")}</h2>`;
        }
        if (block.startsWith("### ")) {
          return `<h3>${block.replace("### ", "")}</h3>`;
        }
        if (block.startsWith("> ")) {
          return `<blockquote>${block.replace("> ", "")}</blockquote>`;
        }
        if (block.trim().startsWith("- ")) {
          const items = block
            .split("\n")
            .filter((line) => line.trim().startsWith("- "))
            .map((line) => `<li>${line.replace("- ", "")}</li>`)
            .join("");
          return `<ul>${items}</ul>`;
        }
        return `<p>${block.replace(/\n/g, "<br/>")}</p>`;
      })
      .join("");
  };

  return (
    <article className="py-8 md:py-16">
      <div className="container px-4 md:px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
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
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              {/* Meta - Only Date */}
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
              className="relative aspect-video rounded-3xl overflow-hidden mb-10"
            >
              <img
                src={post.image.replace('w=800', 'w=1200')}
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
                dangerouslySetInnerHTML={{ __html: convertContentToHtml(articleContent) }}
              />
            </motion.div>

            {/* Share Actions Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-8 mt-10 border-t border-border"
            >
              <div className="flex-1" />
              <span className="text-sm text-muted-foreground">Share this article:</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => handleShare('twitter')} aria-label="Share on Twitter">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleShare('linkedin')} aria-label="Share on LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleShare('facebook')} aria-label="Share on Facebook">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleShare('copy')} aria-label="Copy link">
                  <LinkIcon className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Only Related Posts */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28">
              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="apple-card p-6"
              >
                <h3 className="font-bold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.slice(0, 3).map((related) => (
                    <Link 
                      key={related.id} 
                      to={`/blog/${related.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <img 
                          src={related.image} 
                          alt={related.title}
                          className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                        />
                        <div>
                          <p className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                            {related.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {related.date}
                          </p>
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
  );
};

export default BlogDetail;