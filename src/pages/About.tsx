import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen bg-[#030306] text-foreground">
      <Helmet>
        <title>About Us - Design Engine Saket</title>
        <meta name="description" content="About Design Engine Saket — our mission, campus, and teaching approach." />
      </Helmet>

      <Navbar />

      <main>
        <section id="about">
          <AboutSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
