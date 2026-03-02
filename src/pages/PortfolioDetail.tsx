import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  ArrowLeft, 
  ExternalLink, 
  Play,
  User,
  Calendar,
  Layers,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const portfolioData = [
  {
    id: "1",
    slug: "cyberpunk-cityscape",
    title: "Cyberpunk Cityscape",
    category: "3D Design",
    student: "Arjun Mehta",
    type: "image",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    description: "A stunning cyberpunk cityscape created using advanced 3D modeling techniques in Cinema 4D and rendered with Octane. The piece showcases neon-lit skyscrapers, flying vehicles, and atmospheric fog effects.",
    tools: ["Cinema 4D", "Octane Render", "Photoshop"],
    date: "2024",
    likes: 234,
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    ]
  },
  {
    id: "2",
    slug: "brand-evolution",
    title: "Brand Evolution",
    category: "UI/UX",
    student: "Priya Sharma",
    type: "image",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200",
    description: "A complete brand identity redesign for a tech startup, featuring a modern logo, color palette, typography system, and comprehensive brand guidelines.",
    tools: ["Figma", "Illustrator", "After Effects"],
    date: "2024",
    likes: 189,
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200",
    ]
  },
  {
    id: "3",
    slug: "ai-dreamscapes",
    title: "AI Dreamscapes",
    category: "Generative AI",
    student: "Rahul Verma",
    type: "video",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200",
    description: "An experimental series exploring the boundaries of AI-generated art, combining Midjourney outputs with traditional digital painting techniques.",
    tools: ["Midjourney", "Runway ML", "Photoshop"],
    date: "2024",
    likes: 312,
    gallery: [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200",
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200",
    ]
  },
  {
    id: "4",
    slug: "liquid-motion",
    title: "Liquid Motion",
    category: "Motion Design",
    student: "Ananya Patel",
    type: "video",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200",
    description: "A mesmerizing fluid simulation showcasing the beauty of liquid dynamics. Created using Houdini and rendered in Redshift.",
    tools: ["Houdini", "Redshift", "After Effects"],
    date: "2024",
    likes: 276,
    gallery: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200",
    ]
  },
  {
    id: "5",
    slug: "neo-tokyo",
    title: "Neo Tokyo",
    category: "3D Design",
    student: "Vikram Singh",
    type: "image",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200",
    description: "A futuristic reimagining of Tokyo, blending traditional Japanese architecture with sci-fi elements.",
    tools: ["Blender", "Substance Painter", "Photoshop"],
    date: "2024",
    likes: 198,
    gallery: [
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    ]
  },
  {
    id: "6",
    slug: "abstract-emotions",
    title: "Abstract Emotions",
    category: "Motion Design",
    student: "Kavya Reddy",
    type: "video",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200",
    description: "An abstract motion piece exploring human emotions through color, shape, and movement.",
    tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
    date: "2024",
    likes: 245,
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200",
    ]
  },
];

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const work = portfolioData.find(w => w.slug === slug);

  if (!work) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Work Not Found</h1>
          <p className="text-muted-foreground mb-6">The portfolio piece you're looking for doesn't exist.</p>
          <Link to="/#portfolio">
            <Button variant="apple">Return to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{work.title} by {work.student} | CreativeTech Portfolio</title>
        <meta name="description" content={work.description.slice(0, 160)} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
              {/* Back Button */}
              <Link 
                to="/#portfolio" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full aspect-video object-cover"
                    />
                    {work.type === "video" && (
                      <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <Play className="w-7 h-7 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Gallery Thumbnails */}
                  {work.gallery.length > 1 && (
                    <div className="flex gap-3">
                      {work.gallery.map((img, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="w-20 h-20 rounded-lg overflow-hidden cursor-pointer ring-2 ring-transparent hover:ring-[#ffc107] transition-all"
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>

                {/* Right - Details */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:sticky lg:top-28"
                >
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <Layers className="w-4 h-4 text-[#ffc107]" />
                    <span className="text-sm font-medium text-primary">{work.category}</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{work.title}</h1>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-6 mb-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#ffc107]" />
                      <span>{work.student}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#ffc107]" />
                      <span>{work.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-[#ffc107]" />
                      <span>{work.likes} likes</span>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {work.description}
                  </p>

                  {/* Tools Used */}
                  <div className="mb-8">
                    <h3 className="font-semibold mb-3">Tools Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {work.tools.map((tool, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 rounded-full bg-secondary text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    <Button variant="apple" size="lg">
                      <ExternalLink className="w-4 h-4" />
                      View Full Project
                    </Button>
                    <Button variant="outline" size="lg">
                      <Heart className="w-4 h-4 text-[#ffc107]" />
                      Like
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* More from this student */}
          <section className="py-16 bg-muted/30">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-8">More from {work.student}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {portfolioData
                  .filter(w => w.student === work.student && w.id !== work.id)
                  .slice(0, 3)
                  .map((item) => (
                    <Link key={item.id} to={`/portfolio/${item.slug}`}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="group rounded-2xl overflow-hidden bg-card border border-border"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-xs text-muted-foreground mb-1">{item.category}</p>
                          <h3 className="font-semibold">{item.title}</h3>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PortfolioDetail;