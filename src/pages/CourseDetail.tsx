import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowDown, ArrowRight, Check, ChevronDown, Clock3, Layers3, Palette, Sparkles, Target, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import StickyButtons from "@/components/StickyButtons";
import graphicDesignImage from "@/assets/courses/graphic.webp";
import advertisementImage from "@/assets/student_work/Advertisement Design.webp";
import brandingImage from "@/assets/student_work/Product Branding Design.webp";
import thumbnailImage from "@/assets/student_work/Youtube Thumbnail.webp";

const canonicalUrl = "https://design-engine.io/saket/course/digital-graphic-design-essentials";
const courseName = "Digital Graphic Design Essentials";

const modules = [
  { number: "01", title: "Design Fundamentals", summary: "Build the visual thinking behind every strong design.", items: ["Design Principles", "Composition", "Typography", "Color Theory", "Visual Hierarchy", "Layout Design", "Color Psychology", "Design Thinking"], practical: "Design fundamentals exercise, typography & color board, layout composition project", output: "Design fundamentals project", icon: Palette },
  { number: "02", title: "Professional Graphic Design", summary: "Turn ideas into polished, production-ready communication.", items: ["Image editing", "Vector design", "Publication / layout design", "Production design"], practical: "Poster, brochure, flyer, social media creative, advertisement and brand collateral", output: "Professional graphic design work", icon: Layers3 },
  { number: "03", title: "Digital Content Design", summary: "Create a consistent visual system for digital channels.", items: ["Canva", "Adobe Express", "Lightroom", "Digital content workflow"], practical: "Instagram post set, reel cover, YouTube thumbnail, digital campaign creatives and template system", output: "Digital content campaign", icon: Target },
  { number: "04", title: "Generative AI for Designers", summary: "Use AI inside a considered design workflow, with design skill in control.", items: ["Generative AI fundamentals", "Prompt engineering", "AI image generation", "AI-assisted ideation", "Image enhancement", "AI + Photoshop / Illustrator workflow"], practical: "AI-assisted campaign concept, prompt library and AI + Photoshop / Illustrator creative", output: "AI-assisted design concept", icon: Sparkles },
  { number: "05", title: "Branding & Visual Communication", summary: "Shape a brand from its first mark to a complete communication system.", items: ["Logo design", "Brand identity", "Typography system", "Color system", "Brand guidelines", "Marketing collateral"], practical: "Complete mini brand identity, logo system, brand guideline and campaign collateral", output: "Mini brand identity system", icon: Palette },
  { number: "06", title: "Portfolio & Industry Project", summary: "Curate your strongest work into a clear professional story.", items: ["Portfolio development", "Art direction", "Project presentation", "Industry workflow"], practical: "Brand identity, social campaign, advertising campaign, print/digital portfolio and AI-assisted creative campaign", output: "Final design portfolio", icon: Target },
];

const faqs = [
  ["What is the course name?", "Digital Graphic Design Essentials."],
  ["How long is the course?", "The course runs for 8 months and includes 160 hours of learning."],
  ["What will I learn?", "Design fundamentals, professional graphic design, digital content design, Generative AI for designers, branding and visual communication, and portfolio project work."],
  ["Will I learn Photoshop, Illustrator and InDesign?", "Yes. Photoshop, Illustrator and InDesign are part of the professional graphic design and branding workflows."],
  ["Is Canva included?", "Yes. Canva is included in Digital Content Design and the Portfolio & Industry Project workflow."],
  ["Will I build a portfolio?", "Yes. Portfolio development is the final course stage, with brand identity, campaign creatives, print/digital collateral and AI-assisted design outcomes."],
  ["What career directions are mapped?", "Graphic Designer, Brand Designer and Digital Designer."],
];

const CourseDetail = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openEnquiry = () => setIsEnquiryOpen(true);

  return (
    <div className="min-h-screen overflow-hidden bg-[#090a0b] text-white">
      <Helmet>
        <title>Graphic Design Course in Saket | Design Engine</title>
        <meta name="description" content="Build practical graphic design skills across design fundamentals, professional production, digital content, AI-assisted design, branding and portfolio development at Design Engine Saket." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Graphic Design Course in Saket | Design Engine" />
        <meta property="og:description" content="Build practical graphic design skills across design fundamentals, professional production, digital content, AI-assisted design, branding and portfolio development at Design Engine Saket." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={canonicalUrl.replace("course/digital-graphic-design-essentials", "assets/courses/graphic.webp")} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "Course", name: courseName,
          description: "Practical graphic design course covering fundamentals, production, digital content, AI-assisted design, branding and portfolio development.",
          provider: { "@type": "EducationalOrganization", name: "Design Engine", url: "https://design-engine.io/saket" },
          timeRequired: "P8M", educationalLevel: "Professional", courseMode: "On-site",
          url: canonicalUrl, occupationalCredentialAwarded: "Graphic Design Portfolio"
        })}</script>
      </Helmet>

      <Navbar />
      <main>
        <section className="relative border-b border-white/10 bg-[#111315] pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(255,193,7,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,193,7,.06) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12">
            <div>
              <p className="mb-6 text-xs font-semibold tracking-[0.24em] text-[#ffc107]">GRAPHIC DESIGN <span className="text-white/30">•</span> DIGITAL DESIGN <span className="text-white/30">•</span> SAKET</p>
              <h1 className="max-w-3xl text-5xl leading-[.98] tracking-[-0.03em] text-white sm:text-7xl lg:text-[84px]">Graphic Design <span className="text-[#ffc107]">Course</span> in Saket</h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">Build practical graphic design skills from design fundamentals and professional production to digital content, AI-assisted design, branding and portfolio development.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button onClick={openEnquiry} className="inline-flex items-center gap-3 bg-[#ffc107] px-6 py-3.5 text-sm font-bold text-black transition-transform hover:-translate-y-1">Enquire About The Course <ArrowRight className="h-4 w-4" /></button>
                <a href="#curriculum" className="inline-flex items-center gap-3 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#ffc107] hover:text-[#ffc107]">Explore Curriculum <ArrowDown className="h-4 w-4" /></a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 border border-[#ffc107]/30" />
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1b1d1e]">
                <img src={graphicDesignImage} alt="Graphic design workspace and visual communication" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-[#ffc107]/15" />
                <div className="absolute bottom-5 left-5 border-l-2 border-[#ffc107] pl-4"><p className="text-xs tracking-[.2em] text-[#ffc107]">MAKE IT VISIBLE</p><p className="mt-1 text-sm font-semibold">Typography / Composition / Brand</p></div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-14 grid max-w-7xl grid-cols-2 border-y border-white/10 px-5 sm:px-8 md:grid-cols-4 lg:px-12">
            {[['08', 'Months'], ['160', 'Hours'], ['Graphic Design', '+ Digital Content'], ['Portfolio', 'Development']].map(([value, label]) => <div key={label} className="border-r border-white/10 px-4 py-5 first:pl-0 last:border-0"><p className="text-xl font-bold text-[#ffc107] sm:text-2xl">{value}</p><p className="mt-1 text-xs uppercase tracking-wider text-white/45">{label}</p></div>)}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-bold tracking-[.2em] text-[#ffc107]">THE CORE POSITION</p><h2 className="mt-4 max-w-sm text-4xl leading-tight sm:text-5xl">Learn Graphic Design. <span className="text-white/45">Build Professional Design Work.</span></h2></div><div className="grid gap-0 border-t border-white/15">{['Design Fundamentals', 'Professional Graphic Design', 'Digital Content Design', 'Generative AI for Designers', 'Branding & Visual Communication', 'Portfolio & Industry Project'].map((item, index) => <div key={item} className="flex items-center gap-5 border-b border-white/10 py-4"><span className="font-mono text-xs text-[#ffc107]">0{index + 1}</span><span className="text-lg font-medium">{item}</span><ArrowRight className="ml-auto h-4 w-4 text-white/30" /></div>)}</div></div>
        </section>

        <section id="curriculum" className="border-y border-white/10 bg-[#101213] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold tracking-[.2em] text-[#ffc107]">THE CURRICULUM</p><div className="mt-4 flex flex-wrap items-end justify-between gap-5"><h2 className="max-w-2xl text-4xl sm:text-6xl">From first principles to a finished portfolio.</h2><p className="max-w-xs text-sm leading-relaxed text-white/50">A practical learning arc: learn, apply, build, refine, deliver.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{modules.map((module) => { const Icon = module.icon; return <article key={module.number} className="group border border-white/10 bg-[#151718] p-6 transition-colors hover:border-[#ffc107]/60"><div className="flex items-start justify-between"><span className="font-mono text-sm text-[#ffc107]">{module.number}</span><Icon className="h-5 w-5 text-[#ffc107]" /></div><h3 className="mt-12 text-2xl">{module.title}</h3><p className="mt-3 min-h-12 text-sm leading-relaxed text-white/50">{module.summary}</p><div className="mt-6 border-t border-white/10 pt-5"><p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white/35">You will cover</p><div className="flex flex-wrap gap-2">{module.items.map((item) => <span key={item} className="border border-white/10 px-2 py-1 text-xs text-white/70">{item}</span>)}</div><p className="mt-5 text-xs leading-relaxed text-white/55"><strong className="text-[#ffc107]">Practical:</strong> {module.practical}</p><p className="mt-3 flex items-center gap-2 text-sm font-semibold"><Check className="h-4 w-4 text-[#ffc107]" /> {module.output}</p></div></article>; })}</div></div></section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-xs font-bold tracking-[.2em] text-[#ffc107]">PROJECT PROOF</p><h2 className="mt-4 text-4xl sm:text-6xl">Work that shows how you think.</h2><p className="mt-6 max-w-sm leading-relaxed text-white/55">Your portfolio moves from typography and composition to production design, brand identity, campaign creative, digital content and AI-assisted design.</p></div><div className="grid grid-cols-2 gap-3"><figure className="group relative col-span-2 aspect-[2/1] overflow-hidden bg-[#17191a]"><img src={brandingImage} alt="Brand identity design project" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-sm">Brand Identity / Visual System</figcaption></figure><figure className="group relative aspect-square overflow-hidden bg-[#17191a]"><img src={advertisementImage} alt="Advertisement design project" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-xs">Campaign Creative</figcaption></figure><figure className="group relative aspect-square overflow-hidden bg-[#17191a]"><img src={thumbnailImage} alt="Digital content thumbnail design project" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-xs">Digital Content</figcaption></figure></div></div></section>

        <section className="border-y border-white/10 bg-[#ffc107] px-5 py-16 text-black sm:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs font-bold tracking-[.2em]">CAREER DIRECTIONS</p><h2 className="mt-4 max-w-2xl text-4xl sm:text-6xl">Skills → Projects → Portfolio → Career Direction</h2></div><div className="grid gap-3 text-lg font-bold sm:grid-cols-3 lg:min-w-[480px]">{['Graphic Designer', 'Brand Designer', 'Digital Designer'].map((career) => <div key={career} className="border-t border-black/30 pt-3">{career}</div>)}</div></div></section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="grid gap-12 lg:grid-cols-2"><div><p className="text-xs font-bold tracking-[.2em] text-[#ffc107]">WHY THIS PROGRAM</p><h2 className="mt-4 text-4xl sm:text-6xl">A complete design pipeline.</h2><div className="mt-8 space-y-3">{['Strong design foundation', 'Professional production', 'Digital content systems', 'AI-assisted design workflow', 'Branding and visual communication', 'Portfolio development'].map((item) => <div key={item} className="flex items-center gap-3 border-b border-white/10 py-3 text-lg"><Check className="h-4 w-4 text-[#ffc107]" />{item}</div>)}</div></div><div className="lg:pt-20"><p className="text-xs font-bold tracking-[.2em] text-[#ffc107]">SOFTWARE PIPELINE</p><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">{['Photoshop', 'Illustrator', 'InDesign', 'Canva', 'Adobe Express', 'Lightroom', 'Generative AI Tools', 'Photoshop AI', 'Illustrator AI'].map((tool) => <div key={tool} className="border border-white/15 px-4 py-5 text-sm text-white/75">{tool}</div>)}</div><div className="mt-12 border border-[#ffc107]/40 p-6"><p className="text-xs uppercase tracking-widest text-[#ffc107]">Assessment framework</p><div className="mt-5 space-y-3 text-sm">{[['Assignments', '30%'], ['Projects', '30%'], ['Portfolio', '25%'], ['Viva / Test', '15%']].map(([name, score]) => <div key={name} className="flex justify-between border-b border-white/10 pb-2"><span>{name}</span><strong>{score}</strong></div>)}</div></div></div></div></section>

        <section className="border-t border-white/10 bg-[#101213] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-bold tracking-[.2em] text-[#ffc107]">FAQ</p><h2 className="mt-4 text-4xl sm:text-5xl">Questions, answered.</h2></div><div>{faqs.map(([question, answer], index) => <div key={question} className="border-b border-white/10"><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-semibold"><span>{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-[#ffc107] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} /></button>{openFaq === index && <p className="pb-5 pr-10 text-sm leading-relaxed text-white/55">{answer}</p>}</div>)}</div></div></section>

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-7xl border border-[#ffc107]/40 bg-[#141617] p-8 sm:p-12 lg:flex lg:items-end lg:justify-between"><div><p className="text-xs font-bold tracking-[.2em] text-[#ffc107]">START WITH A CONVERSATION</p><h2 className="mt-4 max-w-2xl text-4xl sm:text-6xl">Make your next piece of work count.</h2><p className="mt-5 max-w-xl text-white/55">Talk to the Design Engine team about the Graphic Design course in Saket.</p></div><button onClick={openEnquiry} className="mt-8 inline-flex shrink-0 items-center gap-3 bg-[#ffc107] px-6 py-3.5 text-sm font-bold text-black transition-transform hover:-translate-y-1 lg:mt-0">Enquire About The Course <ArrowRight className="h-4 w-4" /></button></div></section>
      </main>
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-white/15 bg-[#090a0b]/95 px-4 py-3 backdrop-blur md:hidden"><span className="text-xs font-semibold">Graphic Design in Saket</span><button onClick={openEnquiry} className="bg-[#ffc107] px-4 py-2 text-xs font-bold text-black">Enquire Now</button></div>
      <Footer />
      <StickyButtons />
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} selectedCourse={courseName} />
    </div>
  );
};

export default CourseDetail;
