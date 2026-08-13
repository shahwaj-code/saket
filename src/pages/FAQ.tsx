import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-[#030306] text-foreground">
      <Helmet>
        <title>FAQs - Design Engine Saket</title>
        <meta name="description" content="Frequently Asked Questions about Design Engine Saket courses, admissions, and placements." />
      </Helmet>

      <Navbar />

      <main>
        <section id="faq">
          <FAQSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
