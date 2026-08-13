import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, Users, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const events = [
  {
    id: 1,
    title: "AI Art Workshop: Generative AI Masterclass",
    type: "Workshop",
    date: "Jan 15, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Saket",
    attendees: 45,
    maxAttendees: 60,
    image: "https://design-engine.io/img_bank/Generative_AI.webp",
    featured: true,
    price: "Free",
  },
  {
    id: 2,
    title: "VFX & Animation Career Summit 2026",
    type: "Summit",
    date: "Jan 20, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "Saket",
    attendees: 120,
    maxAttendees: 150,
    image: "https://design-engine.io/img_bank/vfx_img%20(1).webp",
    featured: true,
    price: "₹499",
  },
  {
    id: 3,
    title: "UI/UX Design Sprint Challenge",
    type: "Competition",
    date: "Jan 25, 2026",
    time: "10:00 AM - 8:00 PM",
    location: "Online",
    attendees: 200,
    maxAttendees: 300,
    image: "https://design-engine.io/img_bank/UI%20(1).webp",
    featured: false,
    price: "Free",
  },
  {
    id: 4,
    title: "Motion Graphics Masterclass with Industry Experts",
    type: "Masterclass",
    date: "Feb 1, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Saket",
    attendees: 30,
    maxAttendees: 40,
    image: "https://design-engine.io/img_bank/motion_banner.webp",
    featured: false,
    price: "₹299",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-[#030306]" />

      {/* Golden Orbs */}
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
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffb300]/10 rounded-full blur-[120px]"
      />

      {/* 3D Grid Effect */}
      <div className="absolute inset-0 opacity-15">
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
      <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-[#ffc107]/20 via-transparent to-[#ffd54f]/10" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-[#ffc107] mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-[#ffc107]" />
            </motion.div>
            <span className="text-sm font-medium text-white/90">Events & Activities</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Learn Beyond the{" "}
            <span className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent">
              Classroom
            </span>
          </h2>
          <p className="text-white/60 text-lg">
            Workshops, hackathons, industry talks, and networking events 
            to accelerate your creative career.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-white/5 backdrop-blur-xl border ${event.featured ? 'border-[#ffc107]' : 'border-[#ffc107]/20'} rounded-2xl overflow-hidden h-full hover:border-[#ffc107]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,193,7,0.15)]`}>
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030306] via-[#030306]/60 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium border border-[#ffc107]/30">
                      {event.type}
                    </span>
                    {event.featured && (
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-black text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      event.price === "Free" 
                        ? "bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-black" 
                        : "bg-black/60 backdrop-blur-sm text-white border border-[#ffc107]/30"
                    }`}>
                      {event.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#ffc107] transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {event.title}
                  </h3>

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
                      <Users className="w-4 h-4 text-[#ffc107]" />
                      <span className="text-sm text-white/60">
                        {event.attendees}/{event.maxAttendees} registered
                      </span>
                    </div>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold rounded-full px-4 py-2 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)] transition-all duration-300 group/btn"
                    >
                      <span className="relative z-10">Register</span>
                      <ArrowRight className="w-4 h-4 ml-1 text-black group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Progress bar for registration */}
                  <div className="mt-3">
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-[#ffc107] to-[#ffb300]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/events">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/5 backdrop-blur-sm border border-[#ffc107]/20 hover:border-[#ffc107]/50 text-white font-semibold rounded-full px-8 py-6 group relative overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">View All Events</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#ffc107] group-hover:translate-x-1 transition-transform relative z-10" />
              {/* Gold shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffc107]/0 via-[#ffc107]/20 to-[#ffc107]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;