import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, MapPin, Clock, Users, ArrowRight, Sparkles, Filter, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    location: "Gurugram Campus",
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
        <title>Events & Activities | CreativeTech Institute</title>
        <meta 
          name="description" 
          content="Join workshops, hackathons, competitions, and industry events. Learn beyond the classroom with hands-on experiences and networking opportunities." 
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 mesh-gradient opacity-50" />
            <div className="absolute inset-0 cyber-grid opacity-5" />
            
            <div className="container relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-4xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                >
                  <CalendarDays className="w-4 h-4 text-[#ffc107]" />
                  <span className="text-sm font-medium text-neon-cyan">Events & Activities</span>
                </motion.div>
                
                <h1 className="display-medium mb-6">
                  Learn Beyond the <span className="gradient-text">Classroom</span> 🎯
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-neon"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
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
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeFilter === type
                        ? "bg-neon-purple/20 text-neon-purple border border-neon-purple/50"
                        : "bg-secondary/80 text-muted-foreground hover:text-foreground"
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
                    <div className={`glass-card overflow-hidden h-full ${event.featured ? 'ring-2 ring-neon-purple/30' : ''}`}>
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium">
                            {event.type}
                          </span>
                          {event.featured && (
                            <span className="px-3 py-1 rounded-full bg-neon-orange/90 text-white text-sm font-medium flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Price Badge */}
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                            event.price === "Free" 
                              ? "bg-neon-green/90 text-white" 
                              : "bg-background/90 backdrop-blur-sm"
                          }`}>
                            {event.price}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {event.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 text-[#ffc107]" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 text-[#ffc107]" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-[#ffc107]" />
                            {event.location}
                          </div>
                        </div>

                        {/* Attendees & Register */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {event.attendees}/{event.maxAttendees}
                            </span>
                          </div>
                          <Button 
                            size="sm" 
                            className={event.status === "past" 
                              ? "bg-secondary text-muted-foreground cursor-not-allowed" 
                              : "neon-button text-white"
                            }
                            disabled={event.status === "past"}
                          >
                            {event.status === "past" ? "Ended" : "Register"}
                            {event.status !== "past" && <ArrowRight className="w-4 h-4 ml-1" />}
                          </Button>
                        </div>

                        {/* Progress bar */}
                        {event.status === "upcoming" && (
                          <div className="mt-3">
                            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full rounded-full ${
                                  event.attendees / event.maxAttendees > 0.8 
                                    ? 'bg-neon-orange' 
                                    : 'bg-neon-green'
                                }`}
                              />
                            </div>
                            {event.attendees / event.maxAttendees > 0.8 && (
                              <p className="text-xs text-neon-orange mt-1">Almost full! 🔥</p>
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
                  <p className="text-2xl font-bold mb-2">No events found 😅</p>
                  <p className="text-muted-foreground">Try adjusting your filters or check back later!</p>
                </motion.div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Events;