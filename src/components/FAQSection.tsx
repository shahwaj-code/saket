import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    category: "Courses & Curriculum",
    questions: [
      {
        q: "Tell me more about Design Engine Saket?",
        a: "Design Engine Saket is a premier creative education academy delivering real-world training in UI/UX, VFX, Animation, and Gen-AI. At our South Delhi center, we blend an advanced media curriculum with intensive studio-level workflows.",
      },
      {
        q: "What courses and programs do you offer at the Saket campus?",
        a: "Our Saket campus delivers job-oriented programs in 3D Animation, Cinematic VFX, Graphic Design, Video Editing, UI/UX Product Strategy, Game Development, and advanced Generative AI prompt engineering.",
      },
      {
        q: "What is the duration of each multimedia course?",
        a: "Program durations are tailored to career tracks: short-term certification courses last 2 to 12 months, professional diploma pathways take up to 24 months, and our UGC-recognized B.Sc degree spans 3 years.",
      },
      {
        q: "Do I need a design background to join the Saket batches?",
        a: "No design experience is needed. Our specialized curriculum starts from absolute fundamentals, making it ideal for beginners, college graduates, and professionals switching careers in Delhi NCR.",
      },
      {
        q: "What core software and tools will I master?",
        a: "Students train on gold-standard platforms including Figma, Adobe Creative Suite, Autodesk Maya, Blender, Nuke, and Unreal Engine. Every single track includes hands-on mastery of 25+ advanced Gen-AI tools.",
      },
    ],
  },
  {
    category: "Placements & Career",
    questions: [
      {
        q: "How does the Saket placement cell support students?",
        a: "We provide complete local placement assistance. This includes custom resume building, studio showreel optimization, mock HR rounds, and direct entry into corporate recruitment drives across top Delhi NCR tech hubs.",
      },
      {
        q: "Are there structured internship opportunities available?",
        a: "Yes, corporate internships are a core pillar of our methodology. Our local network connects long-term students with paid apprenticeships at creative agencies to build verified commercial experience.",
      },
      {
        q: "What is the average placement package for freshers?",
        a: "Freshers secure job opportunities with highly competitive starting salaries across leading animation hubs. Exceptional portfolios from our institute have successfully commanded packages up to ₹12 LPA.",
      },
    ],
  },
  {
    category: "Fees & Payment",
    questions: [
      {
        q: "What are the fees for animation and design programs?",
        a: "Tuition fees depend on the specific specialization, program depth, and duration chosen. We provide affordable fee structures aligned with premium infrastructural resources to ensure complete value.",
      },
      {
        q: "Do you offer flexible EMI or fee payment plans?",
        a: "Yes, we support our student community with highly flexible payment structures, including easy monthly installments and 0% interest EMI options for all professional programs.",
      },
      {
        q: "Are there any scholarships available at the Saket center?",
        a: "Design Engine Saket grants merit-based scholarship opportunities during specific academic intakes. Candidates can easily apply by scheduling a profile evaluation with our Saket career counselors.",
      },
    ],
  },
  {
    category: "Campus & Facilities",
    questions: [
      {
        q: "What facilities do you provide at the South Delhi(Saket) campus?",
        a: "Our high-end Delhi center features state-of-the-art production labs, high-performance GPU rendering workstations, interactive theory zones, and complete access to fully licensed creative software.",
      },
      {
        q: "Do you provide online or hybrid design modules?",
        a: "Yes, we provide fully flexible learning models. Students can choose absolute on-campus studio training, complete interactive online modules, or a hybrid model matching their daily routines.",
      },
    ],
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      layout
      className={`rounded-xl overflow-hidden border transition-all ${
        isOpen
          ? "bg-white/5 border-[#ffc107]/30"
          : "bg-white/5 border-[#ffc107]/10 hover:border-[#ffc107]/20"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-4 py-4 text-left"
      >
        <h3
          className={`font-medium text-sm sm:text-base pr-6 ${
            isOpen ? "text-[#ffc107]" : "text-white"
          }`}
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          {question}
        </h3>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0 ${
            isOpen
              ? "bg-[#ffc107] text-black"
              : "bg-white/5 border border-[#ffc107]/20 text-white/70"
          }`}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="px-4 pb-4 text-[13px] sm:text-[15px] text-white/70 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleItem = (key: string) => {
    setOpenItems((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const filteredFAQs = faqData
    .filter((cat) => activeCategory === "All" || cat.category === activeCategory)
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (faq) =>
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.questions.length > 0);

  const categories = ["All", ...faqData.map((c) => c.category)];

  return (
    <div className="py-12 md:py-16 bg-[#030306]">
      <div className="container px-4 sm:px-6 mx-auto max-w-3xl lg:max-w-4xl">
        {/* Header - Updated Title */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Saket Campus <span className="text-[#ffc107]">FAQs</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
            Find answers about courses, placements, fees, and everything you need to know about our Saket campus.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ffc107]" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-[#ffc107]/20 text-white placeholder:text-white/40 focus:border-[#ffc107] outline-none transition text-sm sm:text-base"
          />
        </div>

        {/* Categories - Responsive wrap with proper gaps */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#ffc107] text-black border-transparent"
                  : "text-white/70 border-[#ffc107]/20 hover:border-[#ffc107]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((category, catIndex) =>
              category.questions.map((faq, faqIndex) => {
                const key = `${catIndex}-${faqIndex}`;
                return (
                  <FAQItem
                    key={key}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={openItems.includes(key)}
                    onClick={() => toggleItem(key)}
                  />
                );
              })
            )
          ) : (
            <div className="text-center py-10 text-white/50">
              No matching questions found. Try a different search term.
            </div>
          )}
        </div>

        {/* Contact Box - Updated copy with responsive padding/text */}
        <div className="text-center mt-12 md:mt-16 p-6 sm:p-8 rounded-2xl bg-white/5 border border-[#ffc107]/20">
          <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffc107] mx-auto mb-2 sm:mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
            Still Have Queries?
          </h3>
          <p className="text-white/60 text-sm sm:text-base mb-4 sm:mb-5 max-w-md mx-auto">
            Our Saket team is here to help you with any questions about courses, admissions, or campus life.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#ffc107] text-black font-medium text-sm sm:text-base hover:scale-105 transition-transform duration-200 shadow-lg shadow-[#ffc107]/10"
          >
            Contact Now →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;