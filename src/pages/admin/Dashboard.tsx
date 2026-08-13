import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase, Enquiry } from "@/lib/supabase";
import { 
  Users, 
  Phone,
  Mail,
  BookOpen,
  Loader2,
  ChevronRight
} from "lucide-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [adminCenter, setAdminCenter] = useState<string>("all");
  const navigate = useNavigate();

  const resolveAdminCenter = (email?: string | null, metadata?: Record<string, unknown>): string => {
    const normalizedEmail = email?.toLowerCase().trim() || "";

    // Explicit mapping from user metadata if available
    if (metadata && typeof metadata.center === "string") {
      const fromMeta = metadata.center.toLowerCase().trim();
      if (fromMeta) return fromMeta;
    }

    // Explicit mapping by email local part (e.g., delhi@gmail.com => delhi)
    if (normalizedEmail.includes("delhi")) return "delhi";
    if (normalizedEmail.includes("saket")) return "delhi"; // treat saket under delhi center if needed

    return "all";
  };

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;

        const user = session?.user;
        const userCenter = resolveAdminCenter(user?.email, user?.user_metadata || user?.app_metadata);

        setAdminCenter(userCenter);
        await fetchEnquiries(userCenter);
      } catch (error) {
        console.error('Error initializing admin dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const fetchEnquiries = async (center = 'all') => {
    try {
      let query = supabase
        .from('enquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (center !== 'all') {
        query = query.eq('center', center);
      }

      const { data, error } = await query;

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
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin text-neon-pink" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-display font-bold mb-2">
          Welcome <span className="gradient-text">back</span> 👋
        </h1>
        <p className="text-muted-foreground">
          Here are your latest enquiries.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {statsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">{card.title}</p>
                  <p className="text-4xl font-bold">{card.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg ${card.bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Enquiries Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Enquiries</h2>
          <button
            onClick={() => navigate('/admin/enquiries')}
            className="text-neon-pink hover:text-neon-purple transition-colors flex items-center gap-1 text-sm"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4 text-sm font-medium text-muted-foreground">Name</th>
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4 text-sm font-medium text-muted-foreground">Email</th>
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4 text-sm font-medium text-muted-foreground">Phone</th>
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4 text-sm font-medium text-muted-foreground">Course</th>
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4 text-sm font-medium text-muted-foreground">Date</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.slice(0, 5).map((enquiry) => (
                <tr 
                  key={enquiry.id} 
                  className="border-b border-border hover:bg-secondary/20 transition-colors cursor-pointer"
                  onClick={() => navigate('/admin/enquiries')}
                >
                  <td className="py-2 px-2 sm:py-3 sm:px-4">
                    <div className="font-medium">{enquiry.name}</div>
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4">
                    <a 
                      href={`mailto:${enquiry.email}`} 
                      className="text-muted-foreground hover:text-neon-pink transition-colors flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-3 h-3" />
                      {enquiry.email}
                    </a>
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4">
                    <a 
                      href={`tel:${enquiry.phone}`} 
                      className="text-muted-foreground hover:text-neon-pink transition-colors flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone className="w-3 h-3" />
                      {enquiry.phone}
                    </a>
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-secondary/50">
                      {enquiry.course}
                    </span>
                  </td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4 text-sm text-muted-foreground">
                    {format(new Date(enquiry.created_at), 'dd MMM yyyy')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {enquiries.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No enquiries yet
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AdminDashboard;