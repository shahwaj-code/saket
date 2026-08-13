import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "919910267123";

const states = [
  "Delhi","Uttar Pradesh","Maharashtra","Gujarat","Rajasthan","Punjab"
];

const cardClass =
  "p-5 bg-[#0a0a0f] border border-yellow-500/20 rounded-xl text-center " +
  "transition-all duration-300 " +
  "hover:border-yellow-400 hover:bg-[#0f0f17] " +
  "hover:shadow-[0_0_30px_rgba(250,204,21,0.35)] hover:-translate-y-2";

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    floorArea: "",
    comments: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e: any = {};
    if (!formData.name) e.name = "Enter name";
    if (!/^\d{10}$/.test(formData.phone)) e.phone = "Enter valid phone";
    if (!formData.email.includes("@")) e.email = "Enter valid email";
    if (!formData.state) e.state = "Select state";
    if (!formData.city) e.city = "Enter city";
    if (!formData.floorArea) e.floorArea = "Enter area";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const msg = `Hello 👋
I am interested in your franchise.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.state}, ${formData.city}
Area: ${formData.floorArea}

Comments: ${formData.comments}`;

    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    toast.success("Opening WhatsApp...");
  };

  return (
    <>
      <Helmet>
        <title>Franchise | Design Engine</title>
      </Helmet>

      <div className="bg-[#030306] text-white min-h-screen">
        <Navbar />

        <main className="py-16 px-4">

          {/* HERO */}
          <section className="text-center mt-28 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
              Start Your Own Design Institute
            </h1>
            <p className="text-white/60 mt-4">
              Join Design Engine & build a future-ready AI-powered institute 🚀
            </p>
          </section>

          {/* ABOUT */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              About Design Engine Delhi
            </h2>
            <p className="text-white/70">
              The Delhi NCR media ecosystem is witnessing explosive growth across OTT production, game development, and digital agencies—rapidly accelerated today by the strategic integration of Generative AI pipelines. Design Engine Delhi bridges the talent gap by embedding advanced Gen-AI modules into our curriculum at the South Delhi campus to produce studio-ready professionals.
            </p>
          </motion.section>

          {/* WHY US */}
          <section className="mb-16">
            <h2 className="text-3xl text-yellow-400 text-center mb-10">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "AI Based Courses",
                "High Demand Industry",
                "Job Oriented Training",
                "Strong Brand",
                "Hybrid Learning",
                "Future Skills"
              ].map((item, i) => (
                <div key={i} className={cardClass}>
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* BENEFITS */}
          <section className="mb-16">
            <h2 className="text-3xl text-yellow-400 text-center mb-10">
              Franchise Benefits
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "High ROI Potential",
                "Marketing Support",
                "Student Leads",
                "Course Content",
                "Brand Value",
                "Low Risk Model"
              ].map((item, i) => (
                <div key={i} className={cardClass}>
                  ✔ {item}
                </div>
              ))}
            </div>
          </section>

          {/* WHO CAN APPLY */}
          <section className="mb-16 text-center">
            <h2 className="text-3xl text-yellow-400 mb-10">
              Who Can Partner With Us
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Entrepreneurs",
                "Education Institutes",
                "Coaching Centers",
                "Business Owners",
                "Investors",
                "Creative Professionals"
              ].map((item, i) => (
                <div key={i} className={cardClass}>
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* SUPPORT */}
          <section className="mb-16">
            <h2 className="text-3xl text-yellow-400 text-center mb-10">
              Support We Provide
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Faculty Training",
                "Marketing & Ads Support",
                "Center Setup Guidance",
                "Admissions Support",
                "Placement Assistance",
                "Technical Support"
              ].map((item, i) => (
                <div key={i} className={cardClass}>
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* FORM */}
          <section className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="p-6 bg-[#0a0a0f] rounded-xl border border-yellow-500/20">

              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Full Name" onChange={e => setFormData({...formData, name: e.target.value})}/>
                <Input placeholder="Phone" onChange={e => setFormData({...formData, phone: e.target.value})}/>
                <Input placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})}/>

                <Select onValueChange={(v)=>setFormData({...formData,state:v})}>
                  <SelectTrigger><SelectValue placeholder="State"/></SelectTrigger>
                  <SelectContent>
                    {states.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>

                <Input placeholder="City" onChange={e => setFormData({...formData, city: e.target.value})}/>
                <Input placeholder="Area (sq.ft)" onChange={e => setFormData({...formData, floorArea: e.target.value})}/>
              </div>

              <textarea
                className="w-full mt-4 p-3 bg-black rounded"
                placeholder="Comments"
                onChange={e => setFormData({...formData, comments: e.target.value})}
              />

              <Button className="w-full mt-6 bg-yellow-400 text-black">
                {isSubmitting ? <Loader2 className="animate-spin"/> : "Submit & Chat on WhatsApp"}
              </Button>

            </form>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default Franchise;