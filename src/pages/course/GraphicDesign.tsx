import CourseCampaignPage from "./CourseCampaignPage";
import image from "@/assets/courses/hero-graphic-design.jpg";
import brandImage from "@/assets/courses/reference-work-brand.jpg";
import posterImage from "@/assets/courses/reference-work-poster.jpg";
import socialImage from "@/assets/courses/reference-work-social.jpg";

const GraphicDesign = () => (
  <CourseCampaignPage
    course={{
      name: "Digital Graphic Design Essentials",
      title: "Graphic Design Course in Saket",
      eyebrow: "GRAPHIC DESIGN • DIGITAL DESIGN • SAKET",
      slug: "graphic-design",
      image,
      duration: "8 Months",
      hours: "160 Hours",
      focus: "Graphic Design + Digital Content",
      description: "Build practical graphic design skills across design fundamentals, professional production, digital content, AI-assisted design, branding and portfolio development at Design Engine Saket.",
      intentCards: [
        ["Learn", "Build foundations in design principles, composition, typography, colour, hierarchy and layout."],
        ["Create", "Apply skills through practical design assignments and creative projects."],
        ["Build", "Turn selected work into a professional design portfolio."],
      ],
      highlights: ["Design Fundamentals", "Professional Graphic Design", "Digital Content + AI", "Branding + Portfolio"],
      curriculum: ["Design Fundamentals", "Professional Graphic Design", "Digital Content Design", "Generative AI for Designers", "Branding & Visual Communication", "Portfolio & Industry Project"],
      moduleDetails: [
        { title: "Module 1 — Design Fundamentals", skills: ["Design Principles", "Composition", "Typography", "Color Theory", "Visual Hierarchy", "Layout Design", "Color Psychology", "Design Thinking"], outputs: ["Design fundamentals exercise", "Typography & colour board", "Layout composition project"] },
        { title: "Module 2 — Professional Graphic Design", skills: ["Photoshop", "Illustrator", "InDesign", "Image editing", "Vector design", "Publication/layout design"], outputs: ["Poster", "Brochure", "Flyer", "Social media creative", "Advertisement", "Brand collateral"] },
        { title: "Module 3 — Digital Content Design", skills: ["Canva", "Adobe Express", "Lightroom", "Digital content workflow"], outputs: ["Instagram post set", "Reel cover", "YouTube thumbnail", "Digital campaign creatives", "Social media template system"] },
        { title: "Module 4 — Generative AI for Designers", skills: ["Generative AI fundamentals", "Prompt engineering", "AI image generation", "AI-assisted ideation", "Image enhancement", "AI + Photoshop/Illustrator workflow"], outputs: ["AI-assisted campaign concept", "Prompt library", "AI + Photoshop/Illustrator creative"] },
        { title: "Module 5 — Branding & Visual Communication", skills: ["Logo design", "Brand identity", "Typography system", "Color system", "Brand guidelines", "Marketing collateral"], outputs: ["Complete mini brand identity", "Logo system", "Brand guideline", "Campaign collateral"] },
        { title: "Module 6 — Portfolio & Industry Project", skills: ["Portfolio development", "Art direction", "Project presentation", "Industry workflow"], outputs: ["Brand identity", "Social campaign", "Advertising campaign", "Print/digital portfolio", "AI-assisted creative campaign"] },
      ],
      projects: ["Typography board, colour board and layout composition", "Poster, brochure, flyer, advertisement and brand collateral", "Instagram post set, reel cover and YouTube thumbnail", "AI-assisted campaign concept and prompt library", "Complete mini brand identity and campaign collateral", "Curated print/digital design portfolio"],
      projectDetails: [
        { name: "Brand Identity", outcome: "A complete mini brand identity and visual system.", image: brandImage },
        { name: "Campaign Creative", outcome: "Poster and advertising work built around one concept.", image: posterImage },
        { name: "Digital Content", outcome: "A consistent creative set for digital channels.", image: socialImage },
        { name: "Print / Editorial", outcome: "Layout and production work ready for print.", image: posterImage },
        { name: "AI-Assisted Design", outcome: "A considered creative concept using AI in the workflow.", image: brandImage },
        { name: "Final Portfolio", outcome: "A curated presentation of your strongest design work.", image: socialImage },
      ],
      software: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva", "Adobe Express", "Adobe Lightroom", "Generative AI Tools", "Photoshop AI", "Illustrator AI"],
      assessment: [["Assignments", "30%"], ["Projects", "30%"], ["Portfolio", "25%"], ["Viva / Test", "15%"]],
      careers: ["Graphic Designer", "Brand Designer", "Digital Designer"],
      faqs: [
        ["What is the course name?", "Digital Graphic Design Essentials."],
        ["How long is the course?", "The course is 8 months and includes 160 hours."],
        ["What will I learn?", "Design fundamentals, professional graphic design, digital content, Generative AI for designers, branding and portfolio work."],
        ["Will I build a portfolio?", "Yes. The final stage includes brand identity, campaign creatives, print/digital collateral and AI-assisted design outcomes."],
        ["What career directions are mapped?", "Graphic Designer, Brand Designer and Digital Designer."],
      ],
    }}
  />
);

export default GraphicDesign;
