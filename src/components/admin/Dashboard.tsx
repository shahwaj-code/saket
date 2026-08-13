import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase, Enquiry } from "@/lib/supabase";
import { Users, Phone, Mail, BookOpen, Loader2, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('enquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEnquiries(data || []);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalEnquiries = enquiries.length;
  const uniqueCourses = [...new Set(enquiries.map(e => e.course))].length;

  const statsCards = [
    {
      title: "Total Enquiries",
      value: totalEnquiries,
      icon: Users,
      color: "from-neon-purple to-neon-pink",
      bg: "bg-neon-purple/10"
    },
    {
      title: "Courses Interested",
      value: uniqueCourses,
      icon: BookOpen,
      color: "from-neon-blue to-neon-green",
      bg: "bg-neon-blue/10"
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-neon-pink" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-display font-bold mb-1">
          Welcome <span className="gradient-text">back</span> 👋
        </h1>
        <p className="text-sm text-muted-foreground">Here are your latest enquiries.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {statsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{card.title}</p>
                  <p className="text-2xl font-bold">{card.value}</p>
                </div>
                <div className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-lg p-4"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold">Recent Enquiries</h2>
          <button
            onClick={() => navigate('/admin/enquiries')}
            className="text-neon-pink hover:text-neon-purple transition-colors flex items-center gap-1 text-xs"
          >
            View All
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-3">
          {enquiries.slice(0, 5).map((enquiry) => (
            <div
              key={enquiry.id}
              onClick={() => navigate('/admin/enquiries')}
              className="bg-secondary/10 rounded-lg p-3 border border-border cursor-pointer hover:bg-secondary/20 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-sm">{enquiry.name}</h3>
                <span className="text-xs text-muted-foreground">
                  {format(new Date(enquiry.created_at), 'dd MMM')}
                </span>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Mail className="w-3 h-3" />
                  <span className="truncate">{enquiry.email}</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Phone className="w-3 h-3" />
                  <span>{enquiry.phone}</span>
                </div>
                
                <div className="flex items-center justify-between pt-1">
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-secondary/50">
                    {enquiry.course}
                  </span>
                  <ChevronRight className="w-3 h-3 text-muted-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {enquiries.length === 0 && (
          <div className="text-center py-6 text-sm text-muted-foreground">
            No enquiries yet
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AdminDashboard;