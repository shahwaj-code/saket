import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase, Enquiry } from "@/lib/supabase";
import { 
  Search,
  Mail,
  Phone,
  User,
  Calendar,
  BookOpen,
  Loader2,
  Download,
  MapPin
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { toast } from "sonner";
import { CENTERS, getCenterDisplayName } from "@/data/centers";

const EnquiriesPage = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [filteredEnquiries, setFilteredEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState<string>("all");
  const [centerFilter, setCenterFilter] = useState<string>("all");
  const [adminCenter, setAdminCenter] = useState<string>("all");

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

  const courses = [...new Set(enquiries.map(e => e.course))];
  const centers = [...new Set(enquiries.map(e => e.center).filter(Boolean))];

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;

        const user = session?.user;
        const userCenter = resolveAdminCenter(user?.email, user?.user_metadata || user?.app_metadata);

        setAdminCenter(userCenter);
        setCenterFilter(userCenter);

        await fetchEnquiries(userCenter);
      } catch (error) {
        console.error('Error initializing admin enquiries:', error);
        toast.error('Failed to load enquiries');
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  useEffect(() => {
    filterEnquiries();
  }, [searchTerm, courseFilter, centerFilter, enquiries, adminCenter]);

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
      setFilteredEnquiries(data || []);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      toast.error("Failed to load enquiries");
    }
  };

  const filterEnquiries = () => {
    let filtered = enquiries;

    if (searchTerm) {
      filtered = filtered.filter(e => 
        e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.phone.includes(searchTerm)
      );
    }

    if (courseFilter !== "all") {
      filtered = filtered.filter(e => e.course === courseFilter);
    }

    if (adminCenter !== "all") {
      filtered = filtered.filter(e => e.center === adminCenter);
    }

    if (centerFilter !== "all") {
      filtered = filtered.filter(e => e.center === centerFilter);
    }

    setFilteredEnquiries(filtered);
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Course', 'Center', 'Date'];
    const csvData = filteredEnquiries.map(e => [
      e.name,
      e.email,
      e.phone,
      e.course,
      getCenterDisplayName(e.center || ''),
      format(new Date(e.created_at), 'dd/MM/yyyy HH:mm')
    ]);
    
    const csvContent = [headers, ...csvData]
      .map(row => row.join(','))
      .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `enquiries-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin text-neon-pink" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">
            All <span className="gradient-text">Enquiries</span>
          </h1>
          <p className="text-muted-foreground">
            Total: {filteredEnquiries.length} enquiries
          </p>
        </div>
        
        <Button onClick={exportToCSV} className="neon-button self-start sm:self-auto">
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-secondary/50 border-border"
          />
        </div>

        <Select value={courseFilter} onValueChange={setCourseFilter}>
          <SelectTrigger className="bg-secondary/50 border-border">
            <BookOpen className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>
            {courses.map(course => (
              <SelectItem key={course} value={course}>{course}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={centerFilter}
          onValueChange={setCenterFilter}
          disabled={adminCenter !== 'all'}
        >
          <SelectTrigger className="bg-secondary/50 border-border">
            <MapPin className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by center" />
          </SelectTrigger>
          <SelectContent>
            {adminCenter === 'all' && <SelectItem value="all">All Centers</SelectItem>}
            {(adminCenter === 'all' ? centers : [adminCenter]).map(center => (
              <SelectItem key={center} value={center}>{getCenterDisplayName(center)}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button 
          variant="outline" 
          onClick={() => {
            setSearchTerm("");
            setCourseFilter("all");
            setCenterFilter(adminCenter !== 'all' ? adminCenter : 'all');
          }}
          className="border-border"
        >
          Clear Filters
        </Button>
      </div>

      {/* Enquiries Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/30">
              <tr>
                <th className="text-left py-2 px-3 sm:py-4 sm:px-6 text-sm font-medium text-muted-foreground">Name</th>
                <th className="text-left py-2 px-3 sm:py-4 sm:px-6 text-sm font-medium text-muted-foreground">Email</th>
                <th className="text-left py-2 px-3 sm:py-4 sm:px-6 text-sm font-medium text-muted-foreground">Phone</th>
                <th className="text-left py-2 px-3 sm:py-4 sm:px-6 text-sm font-medium text-muted-foreground">Course</th>
                <th className="text-left py-2 px-3 sm:py-4 sm:px-6 text-sm font-medium text-muted-foreground">Center</th>
                <th className="text-left py-2 px-3 sm:py-4 sm:px-6 text-sm font-medium text-muted-foreground">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredEnquiries.map((enquiry, index) => (
                <motion.tr
                  key={enquiry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border hover:bg-secondary/20 transition-colors"
                >
                  <td className="py-2 px-3 sm:py-4 sm:px-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{enquiry.name}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3 sm:py-4 sm:px-6">
                    <a 
                      href={`mailto:${enquiry.email}`} 
                      className="text-muted-foreground hover:text-neon-pink transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      {enquiry.email}
                    </a>
                  </td>
                  <td className="py-2 px-3 sm:py-4 sm:px-6">
                    <a 
                      href={`tel:${enquiry.phone}`} 
                      className="text-muted-foreground hover:text-neon-pink transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      {enquiry.phone}
                    </a>
                  </td>
                  <td className="py-2 px-3 sm:py-4 sm:px-6">
                    <span className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 text-neon-pink">
                      {enquiry.course}
                    </span>
                  </td>
                  <td className="py-2 px-3 sm:py-4 sm:px-6">
                    <span className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 text-neon-pink flex items-center gap-1 w-fit">
                      <MapPin className="w-3 h-3" />
                      {getCenterDisplayName(enquiry.center || '')}
                    </span>
                  </td>
                  <td className="py-2 px-3 sm:py-4 sm:px-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(enquiry.created_at), 'dd MMM yyyy, h:mm a')}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredEnquiries.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No enquiries found
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiriesPage;