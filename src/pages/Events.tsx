import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, MapPin, Clock, Users, ArrowRight, Sparkles, Filter, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";

const events = [
  {
    id: 1,
    title: "AI Art Workshop: From Prompt to Print",
    type: "Workshop",
    date: "Jan 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Varanasi Campus",
    attendees: 45,
    maxAttendees: 60,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    featured: true,
    price: "Free",
    description: "Learn to create stunning AI art using Midjourney, DALL-E, and Stable Diffusion. From prompts to prints!",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Industry Connect: VFX Career Summit",
    type: "Summit",
    date: "Jan 20, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Delhi Campus",
    attendees: 120,
    maxAttendees: 150,
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    featured: true,
    price: "₹499",
    description: "Meet industry leaders from top VFX studios. Network, learn, and discover career opportunities.",
    status: "upcoming",
  },
  {
    id: 3,
    title: "UI/UX Design Sprint Challenge",
    type: "Competition",
    date: "Jan 25, 2025",
    time: "10:00 AM - 8:00 PM",
    location: "Online",
    attendees: 200,
    maxAttendees: 300,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    featured: false,
    price: "Free",
    description: "24-hour design challenge! Create innovative solutions and win amazing prizes.",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Motion Graphics Masterclass",
    type: "Masterclass",
    date: "Feb 1, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Varanasi Campus",
    attendees: 30,
    maxAttendees: 40,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    featured: false,
    price: "₹299",
    description: "Deep dive into After Effects and Cinema 4D with industry veteran Rohit Sharma.",
    status: "upcoming",
  },
  {
    id: 5,
    title: "Game Jam: 48 Hour Challenge",
    type: "Competition",
    date: "Feb 10, 2025",
    time: "6:00 PM Start",
    location: "Hybrid",
    attendees: 80,
    maxAttendees: 100,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop",
    featured: true,
    price: "₹199",
    description: "Build a complete game in 48 hours! Team up or go solo. Epic prizes await!",
    status: "upcoming",
  },
  {
    id: 6,
    title: "Creative Showcase: Student Exhibition",
    type: "Festival",
    date: "Feb 15, 2025",
    time: "11:00 AM - 7:00 PM",
    location: "All Campuses",
    attendees: 500,
    maxAttendees: 1000,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    featured: true,
    price: "Free",
    description: "Annual student showcase featuring the best work from all our programs. Open to public!",
    status: "upcoming",
  },
  {
    id: 7,
    title: "Blender Bootcamp: Zero to Hero",
    type: "Workshop",
    date: "Dec 20, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Online",
    attendees: 150,
    maxAttendees: 150,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    featured: false,
    price: "Free",
    description: "Intensive Blender workshop covering modeling, texturing, and basic animation.",
    status: "past",
  },
  {
    id: 8,
    title: "Adobe MAX Watch Party",
    type: "Festival",
    date: "Dec 15, 2024",
    time: "8:00 PM - 11:00 PM",
    location: "All Campuses",
    attendees: 300,
    maxAttendees: 300,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
    featured: false,
    price: "Free",
    description: "Watch the Adobe MAX keynote together with fellow creatives and snacks!",
    status: "past",
  },
];

const eventTypes = ["All", "Workshop", "Competition", "Masterclass", "Summit", "Festival"];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const filteredEvents = events.filter((event) => {
    const matchesType = activeFilter === "All" || event.type === activeFilter;
    const matchesStatus = event.status === activeTab;
    return matchesType && matchesStatus;
  });

  return (
    <>
      <Helmet>
        <title>Events & Activities | Design Engine</title>
        <meta 
          name="description" 
          content="Join workshops, hackathons, competitions, and industry events. Learn beyond the classroom with hands-on experiences and networking opportunities." 
        />
      </Helmet>

      <div className="min-h-screen bg-[#030306] text-white">
        <Navbar />
        
        {/* Golden orbs background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#ffc107]/10 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ffd54f]/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#ffb300]/10 rounded-full blur-[90px]"
          />
        </div>

        {/* 3D Grid Effect */}
        <div className="fixed inset-0 opacity-15 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,193,7,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,193,7,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              transform: "perspective(500px) rotateX(60deg)"
            }}
          />
        </div>

        {/* Golden Gradient Overlay */}
        <div className="fixed inset-0 mix-blend-overlay bg-gradient-to-br from-[#ffc107]/20 via-transparent to-[#ffd54f]/10 pointer-events-none" />
        
        <main className="relative pt-20 z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-4xl mx-auto"
              >
                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-[#ffc107] mb-6"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <CalendarDays className="w-4 h-4 text-[#ffc107]" />
                  </motion.div>
                  <span className="text-sm font-medium text-white/90">Events & Activities</span>
                </motion.div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Learn Beyond the{" "}
                  <span className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent">
                    Classroom
                  </span>{" "}
                  🎯
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                  Workshops, hackathons, industry talks, and networking events 
                  to level up your creative career
                </p>
              </motion.div>
            </div>
          </section>

          {/* Tabs & Filters */}
          <section className="pb-24">
            <div className="container">
              {/* Upcoming/Past Tabs */}
              <div className="flex justify-center gap-4 mb-8">
                {(["upcoming", "past"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all border ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-black border-transparent shadow-[0_0_20px_rgba(255,193,7,0.3)]"
                        : "bg-white/5 text-white/60 border-[#ffc107]/20 hover:bg-white/10 hover:border-[#ffc107]/40 hover:text-white"
                    }`}
                  >
                    {tab === "upcoming" ? "🚀 Upcoming" : "📁 Past Events"}
                  </button>
                ))}
              </div>

              {/* Filter Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-2 mb-12 flex-wrap"
              >
                <Filter className="w-4 h-4 text-[#ffc107] mr-2 hidden sm:block" />
                {eventTypes.map((type) => (
                  <motion.button
                    key={type}
                    onClick={() => setActiveFilter(type)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                      activeFilter === type
                        ? "bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-black border-transparent shadow-[0_0_20px_rgba(255,193,7,0.3)]"
                        : "bg-white/5 text-white/60 border-[#ffc107]/20 hover:bg-white/10 hover:border-[#ffc107]/40 hover:text-white"
                    }`}
                  >
                    {type}
                  </motion.button>
                ))}
              </motion.div>

              {/* Events Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className={`bg-white/5 backdrop-blur-xl border border-[#ffc107]/10 overflow-hidden h-full rounded-2xl hover:border-[#ffc107]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,193,7,0.15)] ${event.featured ? 'ring-2 ring-[#ffc107]/30' : ''}`}>
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030306] to-transparent" />
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium border border-[#ffc107]/30">
                            {event.type}
                          </span>
                          {event.featured && (
                            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-black text-sm font-medium flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-black" />
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Price Badge */}
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-bold border ${
                            event.price === "Free" 
                              ? "bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-black border-transparent" 
                              : "bg-black/60 backdrop-blur-sm text-white border-[#ffc107]/30"
                          }`}>
                            {event.price}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#ffc107] transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-white/60 mb-4 line-clamp-2">
                          {event.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-white/60">
                            <Calendar className="w-4 h-4 text-[#ffc107]" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-white/60">
                            <Clock className="w-4 h-4 text-[#ffd54f]" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-white/60">
                            <MapPin className="w-4 h-4 text-[#ffb300]" />
                            {event.location}
                          </div>
                        </div>

                        {/* Attendees & Register */}
                        <div className="flex items-center justify-between pt-4 border-t border-[#ffc107]/10">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-white/40" />
                            <span className="text-sm text-white/60">
                              {event.attendees}/{event.maxAttendees}
                            </span>
                          </div>
                          <Button 
                            size="sm" 
                            className={event.status === "past" 
                              ? "bg-white/5 text-white/40 border border-[#ffc107]/10 cursor-not-allowed" 
                              : "bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold hover:shadow-[0_0_20px_rgba(255,193,7,0.5)] transition-all duration-300"
                            }
                            disabled={event.status === "past"}
                          >
                            {event.status === "past" ? "Ended" : "Register"}
                            {event.status !== "past" && <ArrowRight className="w-4 h-4 ml-1 text-black" />}
                          </Button>
                        </div>

                        {/* Progress bar */}
                        {event.status === "upcoming" && (
                          <div className="mt-3">
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full rounded-full ${
                                  event.attendees / event.maxAttendees > 0.8 
                                    ? 'bg-gradient-to-r from-[#ffc107] to-[#ffb300]' 
                                    : 'bg-gradient-to-r from-[#ffc107] to-[#ffd54f]'
                                }`}
                              />
                            </div>
                            {event.attendees / event.maxAttendees > 0.8 && (
                              <p className="text-xs text-[#ffc107] mt-1">Almost full! 🔥</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* No Results */}
              {filteredEvents.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <p className="text-2xl font-bold mb-2 text-white">No events found 😅</p>
                  <p className="text-white/60">Try adjusting your filters or check back later!</p>
                </motion.div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
      <StickyButtons />
    </>
  );
};

export default Events;