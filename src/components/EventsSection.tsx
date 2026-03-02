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
    location: "MG Road, Gurugram",
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
    location: "MG Road, Gurugram",
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
    location: "MG Road, Gurugram",
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
      {/* Background elements with amber accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffc107]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ffc107]/5 rounded-full blur-3xl" />
      {/* Additional amber glow */}
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffc107]/5 rounded-full blur-[120px]"
      />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffc107]/10 text-[#ffc107] text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#ffc107]" />
            Events & Activities
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Learn Beyond the <span className="text-[#ffc107]">Classroom</span>
          </h2>
          <p className="text-muted-foreground text-lg">
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
              <div className={`apple-card overflow-hidden h-full ${event.featured ? 'ring-2 ring-[#ffc107]/30' : ''}`}>
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium">
                      {event.type}
                    </span>
                    {event.featured && (
                      <span className="px-3 py-1 rounded-full bg-[#ffc107] text-black text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      event.price === "Free" 
                        ? "bg-[#ffc107] text-black" 
                        : "bg-background/90 backdrop-blur-sm"
                    }`}>
                      {event.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#ffc107] transition-colors">
                    {event.title}
                  </h3>

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
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#ffc107]" />
                      <span className="text-sm text-muted-foreground">
                        {event.attendees}/{event.maxAttendees} registered
                      </span>
                    </div>
                    <Button 
                      variant="apple" 
                      size="sm"
                      className="group/btn relative overflow-hidden"
                    >
                      <span className="relative z-10">Register</span>
                      <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                      {/* Amber shine effect */}
                      <div className="absolute inset-0 bg-[#ffc107] opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500" />
                    </Button>
                  </div>

                  {/* Progress bar for registration */}
                  <div className="mt-3">
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          event.attendees / event.maxAttendees > 0.8 
                            ? 'bg-[#ffc107]' 
                            : 'bg-[#ffc107]'
                        }`}
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
              className="glassmorphic-button group relative overflow-hidden border-[#ffc107]/20 hover:border-[#ffc107]/40"
            >
              <span className="relative z-10">View All Events</span>
              <ArrowRight className="w-4 h-4 relative z-10 text-[#ffc107] group-hover:translate-x-1 transition-transform" />
              {/* Amber shine effect */}
              <div className="absolute inset-0 bg-[#ffc107] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;