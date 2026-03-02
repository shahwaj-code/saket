import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Link as LinkIcon,
  Bookmark,
  ThumbsUp 
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
  author: string;
  authorImage: string;
  authorBio?: string;
  date: string;
  readTime: string;
  featured: boolean;
}

interface BlogDetailProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogDetail = ({ post, relatedPosts }: BlogDetailProps) => {
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

  // Extended article content (simulated)
  const articleContent = `
## Introduction

${post.excerpt}

The landscape of ${post.category.toLowerCase()} is evolving rapidly, driven by technological advancements and changing user expectations. In this comprehensive guide, we'll explore the key trends, best practices, and actionable insights that will help you stay ahead of the curve.

## Understanding the Fundamentals

Before diving into advanced concepts, it's crucial to establish a solid foundation. The core principles we'll cover include:

- **User-Centric Design**: Always prioritize the end-user experience
- **Technical Excellence**: Maintain high standards in code quality and performance
- **Iterative Improvement**: Embrace continuous learning and adaptation
- **Collaboration**: Work effectively with cross-functional teams

## Key Strategies for Success

### 1. Embrace Modern Tools and Technologies

The tools we use significantly impact our workflow efficiency. From AI-powered assistants to advanced prototyping software, staying updated with the latest technologies is essential.

> "The best way to predict the future is to create it." — Peter Drucker

### 2. Focus on Continuous Learning

The industry moves fast. Dedicate time each week to:

- Read industry publications and case studies
- Experiment with new techniques
- Attend workshops and webinars
- Connect with peers and mentors

### 3. Build a Strong Portfolio

Your portfolio is your professional identity. Ensure it showcases:

- Diverse project types
- Clear problem-solving approaches
- Measurable outcomes
- Personal creative vision

## Practical Applications

Let's look at how these principles apply in real-world scenarios. Our students at CreativeTech Institute have successfully applied these strategies to land roles at top companies.

## Conclusion

Success in ${post.category.toLowerCase()} requires a combination of technical skills, creative thinking, and strategic planning. By following the guidelines outlined in this article, you'll be well-equipped to excel in your career.

Ready to take your skills to the next level? [Explore our courses](/courses) and join our community of creative professionals.
  `;

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
              
              {/* Author & Meta */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <img 
                    src={post.authorImage} 
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Content Specialist</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
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
              {articleContent.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-10 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('###')) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-8 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('>')) {
                  return (
                    <blockquote 
                      key={index} 
                      className="border-l-4 border-primary pl-6 italic text-muted-foreground my-6"
                    >
                      {paragraph.replace('> ', '')}
                    </blockquote>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                      {items.map((item, i) => (
                        <li key={i} className="text-muted-foreground">
                          {item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return paragraph.trim() ? (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ) : null;
              })}
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-8 mt-10 border-t border-border"
            >
              <Button variant="outline" size="sm" onClick={() => toast.success('Article saved!')}>
                <Bookmark className="w-4 h-4" />
                Save
              </Button>
              <Button variant="outline" size="sm" onClick={() => toast.success('Thanks for the feedback!')}>
                <ThumbsUp className="w-4 h-4" />
                Helpful
              </Button>
              <div className="flex-1" />
              <span className="text-sm text-muted-foreground">Share:</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => handleShare('twitter')}>
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleShare('linkedin')}>
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleShare('facebook')}>
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleShare('copy')}>
                  <LinkIcon className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              {/* Author Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="apple-card p-6"
              >
                <h3 className="font-bold mb-4">About the Author</h3>
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={post.authorImage} 
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Content Specialist</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Expert in {post.category} with over 5 years of industry experience. 
                  Passionate about sharing knowledge and helping students succeed.
                </p>
              </motion.div>

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
                            {related.readTime}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="apple-card p-6 bg-gradient-to-br from-primary/5 to-transparent"
              >
                <h3 className="font-bold mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest articles delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary outline-none text-sm mb-3"
                />
                <Button variant="apple" size="sm" className="w-full">
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
