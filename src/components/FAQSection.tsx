import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    category: "Courses & Curriculum",
    questions: [
      {
        q: "What is the Design Engine Institute?",
        a: "Design Engine Institute is a leading creative education academy focused on real-world learning in design, animation, VFX, UI/UX, and digital media. We blend industry-driven curriculum with hands-on project experience.",
      },
      {
        q: "What courses and programs do you offer at Design Engine Institute?",
        a: "Design Engine Institute offers industry-focused programs in Animation, VFX, Graphic Design, Motion Graphics, UI/UX Design, Game Design, Video Editing, and Generative AI.",
      },
      {
        q: "What is the duration of each course?",
        a: "Course durations vary by program level. We offer short-term certification courses of a few months, advanced diploma programs up to 24 months, and full-time graduation programs spanning 3 years.",
      },
      {
        q: "Do I need prior experience to join?",
        a: "No prior experience is required to join Design Engine Institute, as our courses are designed for beginners and advanced learners alike.",
      },
      {
        q: "What software will I learn?",
        a: "Students are trained on industry-standard software including Adobe Creative Suite, Canva, 3ds Max, Maya, Blender, Unreal Engine, Unity, and Nuke. All courses include hands-on exposure to 25+ AI tools.",
      },
    ],
  },
  {
    category: "Placements & Career",
    questions: [
      {
        q: "Does the Design Engine provide placement assistance?",
        a: "Yes, we offer end-to-end placement assistance including career guidance, resume building, portfolio reviews, and interview preparation.",
      },
      {
        q: "Do you provide internship opportunities?",
        a: "Yes, internships are an integral part of a student's learning journey at Design Engine, alongside classroom education.",
      },
      {
        q: "What is the average salary package for freshers?",
        a: "Fresh graduates typically find entry-level opportunities with competitive starting packages in the animation, design, VFX, UI/UX, and digital media industries.",
      },
    ],
  },
  {
    category: "Fees & Payment",
    questions: [
      {
        q: "What are the course fees?",
        a: "Course fees vary based on the program selected, course duration, and specialization. We offer flexible fee structures for all programs.",
      },
      {
        q: "Do you offer EMI or payment plans?",
        a: "Yes, we offer flexible payment plans, including 0% EMI options, to make quality education accessible.",
      },
      {
        q: "Is there any scholarship available?",
        a: "Design Engine Institute offers scholarship opportunities during select intakes throughout the year. Eligibility criteria apply.",
      },
    ],
  },
  {
    category: "Campus & Facilities",
    questions: [
      {
        q: "What facilities do you provide?",
        a: "We provide modern classrooms, well-equipped computer labs, and access to licensed industry-standard software. Students are encouraged to invest in their own laptops for regular practice.",
      },
      {
        q: "Do you offer online courses?",
        a: "Yes, we offer online courses, hybrid programs, and fully offline classroom learning. Online classes are conducted live with real-time interaction.",
      },
    ],
  },
];

const FAQItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <motion.div
      layout
      className={`rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen 
          ? "bg-card shadow-lg border border-[#ffc107]/30" 
          : "bg-secondary/50 hover:bg-secondary border border-transparent hover:border-[#ffc107]/20"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className={`font-medium pr-8 flex items-center gap-2 ${isOpen ? "text-[#ffc107]" : ""}`}>
          <HelpCircle className={`w-4 h-4 ${isOpen ? "text-[#ffc107]" : "text-muted-foreground"}`} />
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen 
              ? "bg-[#ffc107] text-black" 
              : "bg-background border border-[#ffc107]/20"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 text-muted-foreground leading-relaxed border-l-2 border-[#ffc107]/30 ml-5">
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
    setOpenItems(prev => 
      prev.includes(key) 
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  // Filter FAQs based on search and category
  const filteredFAQs = faqData
    .filter(cat => activeCategory === "All" || cat.category === activeCategory)
    .map(cat => ({
      ...cat,
      questions: cat.questions.filter(
        faq => 
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(cat => cat.questions.length > 0);

  const categories = ["All", ...faqData.map(c => c.category)];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#ffc107]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#ffc107]/5 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffc107]/10 text-[#ffc107] text-sm font-medium mb-4 border border-[#ffc107]/20">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our courses, placements, fees, and more.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ffc107]" />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-secondary border border-border focus:border-[#ffc107] focus:ring-2 focus:ring-[#ffc107]/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#ffc107] text-black"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 border border-transparent hover:border-[#ffc107]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-8">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-secondary/30 rounded-3xl border border-[#ffc107]/20"
            >
              <HelpCircle className="w-12 h-12 text-[#ffc107]/50 mx-auto mb-4" />
              <p className="text-muted-foreground">
                No questions found matching your search. Try different keywords or{" "}
                <a href="#contact" className="text-[#ffc107] hover:underline">
                  contact us directly
                </a>.
              </p>
            </motion.div>
          ) : (
            filteredFAQs.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {activeCategory === "All" && (
                  <h3 className="text-lg font-semibold mb-4 text-[#ffc107] flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#ffc107] rounded-full" />
                    {category.category}
                  </h3>
                )}
                <div className="space-y-3">
                  {category.questions.map((faq, faqIndex) => {
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
                  })}
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#ffc107]/5 to-[#ffc107]/10 border border-[#ffc107]/20"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#ffc107]/10 flex items-center justify-center border border-[#ffc107]/30">
              <HelpCircle className="w-8 h-8 text-[#ffc107]" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] text-black font-medium hover:bg-[#ffc107]/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contact Us
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;