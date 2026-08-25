import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, CheckCircle2, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import brandImage from "@/assets/courses/reference-work-brand.jpg";
import posterImage from "@/assets/courses/reference-work-poster.jpg";
import socialImage from "@/assets/courses/reference-work-social.jpg";

export interface CourseCampaignConfig {
  name: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  duration: string;
  hours: string;
  focus: string;
  eyebrow?: string;
  curriculum: string[];
  outcomes: string[];
  careers: string[];
  software?: string[];
  projects?: string[];
  assessment?: [string, string][];
  intentCards?: [string, string][];
  highlights?: string[];
  moduleDetails?: { title: string; skills: string[]; outputs: string[] }[];
  projectDetails?: { name: string; outcome: string; image?: string }[];
  faqs: [string, string][];
}

const CourseCampaignPage = ({ course }: { course: CourseCampaignConfig }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const canonicalUrl = `https://design-engine.io/saket/course/${course.slug}`;
  const projectDetails: { name: string; outcome: string; image?: string }[] = course.projectDetails || (course.projects || course.outcomes).map((name) => ({ name, outcome: "Practical portfolio evidence" }));

  return (
    <div className="course-reference min-h-screen bg-[#171614] text-white">
      <Helmet>
        <title>{course.title} | Design Engine</title>
        <meta name="description" content={course.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${course.title} | Design Engine`} />
        <meta property="og:description" content={course.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: course.name,
          description: course.description,
          provider: { "@type": "EducationalOrganization", name: "Design Engine", url: "https://design-engine.io/saket" },
          url: canonicalUrl,
          timeRequired: course.duration,
          occupationalCredentialAwarded: course.name,
        })}</script>
      </Helmet>

      <Navbar />
      <main>
        <section className="border-b border-white/10 bg-[#090908] px-3 pb-12 pt-24 sm:px-6 lg:px-8 lg:pb-16 lg:pt-28">
          <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-5 sm:gap-8 lg:gap-10">
            <div>
              <span className="inline-flex rounded-full border border-[#ffc107]/40 bg-[#ffc107]/10 px-2.5 py-1 text-[8px] font-semibold tracking-[.12em] text-[#ffe08a] sm:px-3.5 sm:py-1.5 sm:text-[11px]">{course.eyebrow || `${course.name.toUpperCase()} • SAKET`}</span>
              <h1 className="mt-3 max-w-3xl text-[27px] font-bold leading-[1.02] sm:mt-5 sm:text-5xl lg:text-6xl">{course.title.replace(" in Saket", "")} <span className="bg-gradient-to-r from-[#ffe9a6] to-[#ffc107] bg-clip-text text-transparent">in Saket</span></h1>
              <p className="mt-4 max-w-xl text-[10px] leading-relaxed text-white/65 sm:mt-5 sm:text-base">{course.description}</p>
              <div className="mt-5 grid grid-cols-4 gap-1.5 sm:mt-8 sm:gap-3">
                {[[course.duration, "Course Duration"], [course.hours, "Recommended Hours"], ["Practical", "Projects"], ["Portfolio", "Development"]].map(([value, label]) => <div key={label} className="rounded-xl border border-white/15 bg-[#171512] px-2 py-2.5 sm:px-4 sm:py-4"><p className="font-display text-[9px] font-bold text-[#ffc107] sm:text-sm">{value}</p><p className="mt-1 text-[6px] uppercase tracking-widest text-white/45 sm:text-[11px]">{label}</p></div>)}
              </div>
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-3"><button onClick={() => setIsEnquiryOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffe9a6] to-[#ffc107] px-4 py-2 text-[9px] font-bold text-black shadow-[0_18px_60px_-18px_rgba(255,193,7,.7)] hover:-translate-y-1 sm:px-6 sm:py-3 sm:text-sm">Enquire Now <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" /></button><a href="#curriculum" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[9px] font-semibold hover:border-[#ffc107] hover:text-[#ffc107] sm:px-6 sm:py-3 sm:text-sm">View Curriculum</a></div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20"><img src={course.image} alt={`${course.name} learning environment`} className="aspect-[4/3] w-full object-cover" /></div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#090908] px-3 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold tracking-[.2em] text-[#ffc107]">LEARN · CREATE · BUILD</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">Learn Design By Creating</h2>
          {course.intentCards && <div className="mt-7 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-4">{course.intentCards.map(([title, copy], index) => <div key={title} className="h-36 rounded-2xl border border-white/15 bg-[#171512] p-3 shadow-[0_24px_60px_-30px_rgba(0,0,0,.8)] sm:h-40 sm:p-5"><span className="font-display text-[9px] font-bold text-[#ffc107] sm:text-xs">0{index + 1}</span><h3 className="mt-2 text-[11px] font-bold sm:text-lg">{title}</h3><p className="mt-2 text-[7px] leading-tight text-white/55 sm:text-xs sm:leading-relaxed">{copy}</p></div>)}</div>}
          <button onClick={() => setIsEnquiryOpen(true)} className="mt-7 rounded-full bg-[#ffc107] px-5 py-2.5 text-[10px] font-bold text-black sm:mt-8 sm:px-7 sm:py-3 sm:text-sm">Enquire Now</button>
          </div>
        </section>

        {course.highlights && <section className="border-b border-white/10 bg-[#090908] px-3 py-8 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-5xl grid-cols-4 gap-1.5 sm:gap-4">{course.highlights.map((highlight) => <div key={highlight} className="flex min-h-9 items-center gap-1.5 rounded-xl border border-white/15 bg-[#171512] px-2 py-2 sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4"><CheckCircle2 className="h-3 w-3 shrink-0 text-[#ffc107] sm:h-5 sm:w-5" /><span className="text-[7px] font-semibold leading-tight sm:text-sm">{highlight}</span></div>)}</div></section>}

        <section id="curriculum" className="border-y border-white/10 bg-[#0d0d0c] px-3 py-12 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-bold tracking-[.2em] text-[#ffc107]">CURRICULUM</p>
          <h2 className="mt-4 max-w-3xl text-4xl sm:text-6xl">What You'll Learn</h2>
          <p className="mt-3 max-w-xl text-white/55">Six modules across 8 months, built around practical design output.</p>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-4">{(course.moduleDetails || course.curriculum.map((title) => ({ title, skills: [], outputs: [] }))).map((module) => <article key={module.title} className="rounded-xl border border-white/10 bg-[#171512] p-3 shadow-[0_24px_60px_-30px_rgba(0,0,0,.8)] sm:rounded-2xl sm:p-6"><h3 className="font-display text-[9px] font-bold leading-tight sm:text-lg">{module.title}</h3>{module.skills.length > 0 && <><p className="mt-2 text-[6px] uppercase tracking-widest text-white/45 sm:mt-4 sm:text-[11px]">Skills</p><ul className="mt-1 flex flex-wrap gap-1 sm:mt-2 sm:gap-2">{module.skills.map((skill) => <li key={skill} className="rounded-full border border-white/10 bg-[#211f1b] px-1.5 py-0.5 text-[6px] sm:px-3 sm:py-1 sm:text-xs">{skill}</li>)}</ul></>}<p className="mt-3 text-[6px] uppercase tracking-widest text-white/45 sm:mt-5 sm:text-[11px]">Practical Output</p><ul className="mt-1 space-y-1 text-[7px] leading-tight text-white/60 sm:mt-2 sm:space-y-1.5 sm:text-sm">{(module.outputs.length ? module.outputs : ["Practical project and portfolio evidence"]).map((output) => <li key={output} className="flex gap-1 sm:gap-2"><CheckCircle2 className="mt-0.5 h-2 w-2 shrink-0 text-[#ffc107] sm:h-4 sm:w-4" />{output}</li>)}</ul></article>)}</div>
        </section>

        {course.software && <section className="border-b border-white/10 bg-[#090908] px-3 py-12 sm:px-6 lg:px-8 lg:py-16"><div className="mx-auto max-w-6xl"><span className="inline-flex rounded-full border border-[#ffc107]/40 bg-[#ffc107]/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[.14em] text-[#ffe08a]">TOOLS</span><h2 className="mt-5 text-4xl font-bold sm:text-5xl">Professional Tools You'll Work With</h2><p className="mt-3 max-w-2xl text-base leading-relaxed text-white/65">Each tool is mapped to the workflow it is used for — not every tool appears in every module.</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{course.software.map((tool) => <div key={tool} className="rounded-2xl border border-white/15 bg-[#171512] p-5"><p className="font-display text-base font-bold">{tool}</p><p className="mt-2 text-sm text-white/65">→ Mapped to the design workflow</p></div>)}</div></div></section>}

        <section className="border-y border-white/10 bg-[#090908] px-3 py-12 sm:px-6 lg:px-8 lg:py-16"><div className="mx-auto max-w-6xl"><span className="inline-flex rounded-full border border-[#ffc107]/40 bg-[#ffc107]/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[.14em] text-[#ffe08a]">PROJECTS</span><h2 className="mt-5 text-4xl font-bold sm:text-5xl">Learn By Building Real Design Projects</h2><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{projectDetails.map((project) => <article key={project.name} className="overflow-hidden rounded-xl border border-white/15 bg-[#171512] sm:rounded-2xl">{project.image && <img src={project.image} alt={`${project.name} project`} className="aspect-[4/3] w-full object-cover" />}<div className="p-4 sm:p-5"><h3 className="font-display text-sm font-bold sm:text-base">{project.name}</h3><p className="mt-1.5 text-[11px] leading-relaxed text-white/65 sm:text-sm">{project.outcome}</p><p className="mt-3 text-[9px] text-[#ffc107] sm:text-xs">Practical design portfolio work</p></div></article>)}</div><button onClick={() => setIsEnquiryOpen(true)} className="mt-7 rounded-full bg-[#ffc107] px-5 py-2.5 text-[10px] font-bold text-black sm:px-7 sm:py-3 sm:text-sm">Enquire Now</button></div></section>

        <section className="border-b border-white/10 bg-[#090908] px-3 py-12 sm:px-6 lg:px-8 lg:py-16"><div className="mx-auto max-w-6xl"><span className="inline-flex rounded-full border border-[#ffc107]/40 bg-[#ffc107]/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[.14em] text-[#ffe08a]">PORTFOLIO</span><h2 className="mt-5 text-4xl font-bold sm:text-5xl">Build Your Graphic Design Portfolio</h2><div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr]"><div className="grid gap-3 sm:grid-cols-2">{(course.projects || course.outcomes).slice(0, 5).map((piece) => <div key={piece} className="flex min-h-[74px] items-center rounded-2xl border border-white/15 bg-[#171512] px-5 py-4 text-sm font-medium">{piece}</div>)}</div><div className="rounded-2xl border border-white/15 bg-[#171512] p-6"><ol className="space-y-4">{["Create", "Refine", "Present"].map((step, index) => <li key={step}><p className="font-display text-sm font-bold uppercase tracking-widest text-[#ffc107]">{step}</p>{index < 2 && <span className="text-white/45">↓</span>}</li>)}</ol><button onClick={() => setIsEnquiryOpen(true)} className="mt-6 w-full rounded-full bg-[#ffc107] px-5 py-3 text-sm font-bold text-black">Build Your Portfolio</button></div></div></div></section>

        <section className="border-b border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold tracking-[.2em] text-[#ffc107]">STUDENT WORK</p><h2 className="mt-4 text-4xl sm:text-6xl">See What Students Create</h2><p className="mt-3 text-sm text-white/55">Verified Design Engine work across branding, campaigns and digital content.</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{[[brandImage, "Branding"], [posterImage, "Campaign Design"], [socialImage, "Digital Content"]].map(([source, label]) => <figure key={label} className="overflow-hidden rounded-2xl border border-white/10 bg-[#211f1b]"><img src={source} alt={`${label} student design work`} className="aspect-[4/3] w-full object-cover" /><figcaption className="px-5 py-4 text-sm font-semibold">{label}</figcaption></figure>)}</div></div></section>

        <section className="border-b border-white/10 bg-[#090908] px-3 py-12 sm:px-6 lg:px-8 lg:py-16"><div className="mx-auto max-w-6xl"><span className="inline-flex rounded-full border border-[#ffc107]/40 bg-[#ffc107]/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[.14em] text-[#ffe08a]">CAREER</span><h2 className="mt-5 text-4xl font-bold sm:text-5xl">Where Graphic Design Skills Can Lead</h2><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{course.careers.map((career) => <div key={career} className="min-h-[76px] rounded-2xl border border-white/15 bg-[#171512] p-4"><p className="font-display text-sm font-bold">{career}</p><p className="mt-2 text-xs text-white/60">Visual communication and design production.</p></div>)}</div><button onClick={() => setIsEnquiryOpen(true)} className="mt-7 rounded-full bg-[#ffc107] px-5 py-2.5 text-[10px] font-bold text-black sm:px-7 sm:py-3 sm:text-sm">Enquire Now</button></div></section>

        <section className="border-b border-white/10 bg-[#090908] px-3 py-12 sm:px-6 lg:px-8 lg:py-16"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2"><div><span className="inline-flex rounded-full border border-[#ffc107]/40 bg-[#ffc107]/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[.14em] text-[#ffe08a]">STRUCTURE</span><h2 className="mt-5 text-4xl font-bold sm:text-5xl">Course Structure</h2><div className="mt-8 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl border border-white/15 bg-[#171512] px-5 py-4"><p className="text-[10px] uppercase tracking-widest text-white/45">Course</p><p className="mt-1 text-sm font-bold">{course.name}</p></div><div className="rounded-2xl border border-white/15 bg-[#171512] px-5 py-4"><p className="text-[10px] uppercase tracking-widest text-white/45">Duration</p><p className="mt-1 text-sm font-bold">{course.duration}</p></div><div className="rounded-2xl border border-white/15 bg-[#171512] px-5 py-4"><p className="text-[10px] uppercase tracking-widest text-white/45">Recommended Hours</p><p className="mt-1 text-sm font-bold">{course.hours}</p></div><div className="rounded-2xl border border-white/15 bg-[#171512] px-5 py-4"><p className="text-[10px] uppercase tracking-widest text-white/45">Expected Sessions</p><p className="mt-1 text-sm font-bold">20 / Month</p></div><div className="rounded-2xl border border-white/15 bg-[#171512] px-5 py-4"><p className="text-[10px] uppercase tracking-widest text-white/45">Modules</p><p className="mt-1 text-sm font-bold">{course.curriculum.length}</p></div></div></div><div><span className="inline-flex rounded-full border border-[#ffc107]/40 bg-[#ffc107]/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[.14em] text-[#ffe08a]">ASSESSMENT</span><h2 className="mt-5 text-4xl font-bold sm:text-5xl">How You're Assessed</h2><div className="mt-8 space-y-4">{(course.assessment || []).map(([name, score]) => <div key={name}><div className="flex justify-between text-xs"><span>{name}</span><span className="text-white/55">{score}</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#292621]"><div className="h-full rounded-full bg-[#ffc107]" style={{ width: score }} /></div></div>)}</div></div></div></section>

        <section className="border-b border-white/10 bg-[#10100f] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold tracking-[.2em] text-[#ffc107]">WHY DESIGN ENGINE</p><h2 className="mt-4 text-4xl sm:text-6xl">How We Teach Design</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["Practical Project Work", "Portfolio Development", "Modern Creative Workflow", "Branding + Digital Content", "AI-Assisted Design"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#211f1b] px-5 py-4 text-sm font-semibold"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#ffc107]" />{item}</div>)}</div></div></section>

        <section className="border-b border-white/10 bg-[#090908] px-3 py-12 sm:px-6 lg:px-8 lg:py-16"><div className="mx-auto max-w-3xl"><span className="inline-flex rounded-full border border-[#ffc107]/40 bg-[#ffc107]/10 px-3 py-1 text-[10px] font-semibold tracking-[.14em] text-[#ffe08a]">FAQS</span><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Graphic Design Course FAQs</h2><div className="mt-6">{course.faqs.map(([question, answer], index) => <div key={question} className="border-b border-white/10"><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full justify-between gap-5 py-3 text-left text-xs font-semibold sm:py-4 sm:text-sm"><span>{question}</span><ChevronDown className={`h-4 w-4 shrink-0 text-[#ffc107] transition-transform ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <p className="pb-4 pr-8 text-xs leading-relaxed text-white/55">{answer}</p>}</div>)}</div><button onClick={() => setIsEnquiryOpen(true)} className="mt-6 rounded-full bg-[#ffc107] px-5 py-2 text-[10px] font-bold text-black">Enquire Now</button></div></section>

        <section id="enquiry" className="border-b border-white/10 bg-[#090908] px-3 py-12 sm:px-6 lg:px-8 lg:py-16"><div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1fr_360px]"><div><span className="inline-flex rounded-full border border-[#ffc107]/40 bg-[#ffc107]/10 px-3 py-1 text-[10px] font-semibold tracking-[.14em] text-[#ffe08a]">ENQUIRE</span><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Talk To A Course Counsellor</h2><p className="mt-3 max-w-xl text-xs leading-relaxed text-white/60">Share your details and our counsellor will walk you through the curriculum, schedule and fees for Digital Graphic Design Essentials at Saket.</p><ul className="mt-5 space-y-2 text-[11px] text-white/60"><li className="flex gap-2"><CheckCircle2 className="h-3 w-3 text-[#ffc107]" />8 Months · 160 Hours</li><li className="flex gap-2"><CheckCircle2 className="h-3 w-3 text-[#ffc107]" />20 sessions per month</li><li className="flex gap-2"><CheckCircle2 className="h-3 w-3 text-[#ffc107]" />6 modules · project and portfolio based</li><li className="flex gap-2"><CheckCircle2 className="h-3 w-3 text-[#ffc107]" />Saket, South Delhi</li></ul></div><form onSubmit={(event) => { event.preventDefault(); setIsEnquiryOpen(true); }} className="rounded-xl border border-white/15 bg-[#171512] p-4 sm:p-5"><label className="block text-[10px] font-semibold">Name<input required className="mt-1.5 w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-xs outline-none focus:border-[#ffc107]" placeholder="Your name" /></label><label className="mt-3 block text-[10px] font-semibold">Mobile Number<input required type="tel" className="mt-1.5 w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-xs outline-none focus:border-[#ffc107]" placeholder="+91 mobile number" /></label><label className="mt-3 block text-[10px] font-semibold">Interested Course<input readOnly value={course.name} className="mt-1.5 w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-xs text-white/70 outline-none" /></label><label className="mt-3 block text-[10px] font-semibold">Preferred Centre<select className="mt-1.5 w-full rounded-md border border-white/20 bg-[#171512] px-3 py-2 text-xs text-white outline-none focus:border-[#ffc107]"><option>No preference</option><option>Saket, South Delhi</option></select></label><button type="submit" className="mt-4 w-full rounded-full bg-[#ffc107] px-4 py-2.5 text-[11px] font-bold text-black">Talk To A Counsellor</button><p className="mt-3 text-[8px] text-white/40">We'll use your details only to respond to your course enquiry.</p></form></div></section>

        <section className="border-b border-white/10 bg-[#090908] px-3 py-12 text-center sm:px-6 lg:px-8 lg:py-16"><div className="mx-auto max-w-6xl"><p className="text-2xl font-bold sm:text-3xl">Start Your Graphic Design Course in Saket</p><p className="mt-2 text-[10px] text-white/55 sm:text-xs">Practical projects, professional tools and a portfolio you can show.</p><button onClick={() => setIsEnquiryOpen(true)} className="mt-5 rounded-full bg-[#ffc107] px-5 py-2 text-[10px] font-bold text-black">Talk To A Counsellor <ArrowRight className="ml-1 inline h-3 w-3" /></button></div></section>
      </main>
      <Footer />
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} selectedCourse={course.name} />
    </div>
  );
};

export default CourseCampaignPage;
