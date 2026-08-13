import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase, Enquiry } from "@/lib/supabase";
import { 
  Search, Mail, Phone, User, Calendar, BookOpen, 
  Loader2, Download, Filter, X, ChevronDown, MapPin
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCenterDisplayName } from "@/data/centers";

const EnquiriesPage = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [filteredEnquiries, setFilteredEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState<string>("all");
  const [centerFilter, setCenterFilter] = useState<string>("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const courses = [...new Set(enquiries.map(e => e.course))];
  const centers = [...new Set(enquiries.map(e => e.center).filter(Boolean))];

  useEffect(() => {
    fetchEnquiries();
  }, []);

  useEffect(() => {
    filterEnquiries();
  }, [searchTerm, courseFilter, centerFilter, enquiries]);

  const fetchEnquiries = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('leads');

      if (error) throw error;
      setEnquiries(data.enquiries || []);
      setFilteredEnquiries(data.enquiries || []);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      toast.error("Failed to load enquiries");
    } finally {
      setLoading(false);
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
    if (centerFilter !== "all") {
      filtered = filtered.filter(e => e.center === centerFilter);
    }
    setFilteredEnquiries(filtered);
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Course', 'Center', 'Date'];
    const csvData = filteredEnquiries.map(e => [
      e.name, e.email, e.phone, e.course, getCenterDisplayName(e.center || ''),
      format(new Date(e.created_at), 'dd/MM/yyyy HH:mm')
    ]);
    
    const csvContent = [headers, ...csvData].map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `enquiries-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
    toast.success("Export started!");
  };

  const clearFilters = () => {
    setSearchTerm("");
    setCourseFilter("all");
    setCenterFilter("all");
    setShowMobileFilters(false);
  };

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-neon-pink" />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col space-y-4">
      {/* Header - Fixed */}
      <div className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold mb-1">
            All <span className="gradient-text">Enquiries</span>
          </h1>
          <p className="text-sm text-muted-foreground">
            Total: {filteredEnquiries.length} {filteredEnquiries.length === 1 ? 'enquiry' : 'enquiries'}
          </p>
        </div>
        
        <Button onClick={exportToCSV} size="sm" className="w-full sm:w-auto">
          <Download className="w-3 h-3 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Filters - Fixed */}
      <div className="flex-shrink-0">
        <div className="md:hidden mb-2">
          <Button
            variant="outline"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full flex items-center justify-between h-9"
          >
            <span className="flex items-center gap-2">
              <Filter className="w-3 h-3" />
              Filters
            </span>
            <ChevronDown className={`w-3 h-3 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
          </Button>
        </div>

        <div className={`grid gap-2 ${showMobileFilters ? 'grid-cols-1' : 'hidden md:grid md:grid-cols-4'}`}>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground" />
            <Input
              placeholder="Search name, email, phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-7 h-9 text-sm"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="absolute right-2 top-1/2 -translate-y-1/2">
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          <Select value={courseFilter} onValueChange={setCourseFilter}>
            <SelectTrigger className="h-9">
              <div className="flex items-center gap-2">
                <BookOpen className="w-3 h-3" />
                <span className="text-sm">{courseFilter === "all" ? "All Courses" : courseFilter}</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              {courses.map(course => (
                <SelectItem key={course} value={course}>{course}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={centerFilter} onValueChange={setCenterFilter}>
            <SelectTrigger className="h-9">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                <span className="text-sm">{centerFilter === "all" ? "All Centers" : getCenterDisplayName(centerFilter)}</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Centers</SelectItem>
              {centers.map(center => (
                <SelectItem key={center} value={center}>{getCenterDisplayName(center)}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline" onClick={clearFilters} className="h-9 text-sm">
            Clear Filters
          </Button>
        </div>

        {(searchTerm || courseFilter !== "all" || centerFilter !== "all") && (
          <div className="flex flex-wrap gap-1 mt-2 text-xs">
            {searchTerm && (
              <span className="px-2 py-0.5 bg-secondary/50 rounded-full flex items-center gap-1">
                "{searchTerm}"
                <button onClick={() => setSearchTerm("")}><X className="w-2 h-2" /></button>
              </span>
            )}
            {courseFilter !== "all" && (
              <span className="px-2 py-0.5 bg-secondary/50 rounded-full flex items-center gap-1">
                {courseFilter}
                <button onClick={() => setCourseFilter("all")}><X className="w-2 h-2" /></button>
              </span>
            )}
            {centerFilter !== "all" && (
              <span className="px-2 py-0.5 bg-secondary/50 rounded-full flex items-center gap-1">
                {getCenterDisplayName(centerFilter)}
                <button onClick={() => setCenterFilter("all")}><X className="w-2 h-2" /></button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Mobile Cards - Scrollable */}
      <div className="md:hidden flex-1 overflow-y-auto space-y-2 pb-2">
        {filteredEnquiries.map((enquiry) => (
          <div key={enquiry.id} className="bg-card border border-border rounded-lg p-3">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <User className="w-3 h-3 text-neon-pink" />
                <h3 className="font-medium text-sm">{enquiry.name}</h3>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 text-neon-pink">
                {enquiry.course}
              </span>
            </div>
            
            <div className="space-y-1 pl-5">
              <a href={`mailto:${enquiry.email}`} className="text-xs text-muted-foreground hover:text-neon-pink flex items-center gap-1">
                <Mail className="w-2.5 h-2.5" /> 
                <span className="truncate">{enquiry.email}</span>
              </a>
              <a href={`tel:${enquiry.phone}`} className="text-xs text-muted-foreground hover:text-neon-pink flex items-center gap-1">
                <Phone className="w-2.5 h-2.5" /> 
                <span>{enquiry.phone}</span>
              </a>
              <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5" />
                <span>{getCenterDisplayName(enquiry.center || 'N/A')}</span>
              </div>
              <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                <Calendar className="w-2.5 h-2.5" />
                {format(new Date(enquiry.created_at), 'dd MMM yyyy')}
              </div>
            </div>
          </div>
        ))}
        
        {filteredEnquiries.length === 0 && (
          <div className="text-center py-8 text-sm text-muted-foreground">
            No enquiries found
          </div>
        )}
      </div>

      {/* Desktop Table - VERTICAL SCROLLABLE */}
      <div className="hidden md:block flex-1 min-h-0">
        <Card className="h-full flex flex-col border-border">
          <CardHeader className="flex-shrink-0 py-3 px-4 border-b">
            <CardTitle className="text-sm font-medium">Enquiries List</CardTitle>
          </CardHeader>
          
          {/* Scrollable Table Container */}
          <CardContent className="flex-1 overflow-y-auto p-0">
            <table className="w-full table-fixed">
              <thead className="bg-secondary/30 sticky top-0 z-10">
                <tr>
                  <th className="text-left py-2 px-2 text-xs font-medium w-1/6">Name</th>
                  <th className="text-left py-2 px-2 text-xs font-medium w-1/6">Email</th>
                  <th className="text-left py-2 px-2 text-xs font-medium w-1/6">Phone</th>
                  <th className="text-left py-2 px-2 text-xs font-medium w-1/6">Course</th>
                  <th className="text-left py-2 px-2 text-xs font-medium w-1/6">Center</th>
                  <th className="text-left py-2 px-2 text-xs font-medium w-1/6">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredEnquiries.map((enquiry) => (
                  <tr key={enquiry.id} className="border-t hover:bg-secondary/20">
                    <td className="py-2 px-2">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                        <span className="text-xs truncate">{enquiry.name}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2">
                      <a href={`mailto:${enquiry.email}`} className="text-xs text-muted-foreground hover:text-neon-pink flex items-center gap-1">
                        <Mail className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{enquiry.email}</span>
                      </a>
                    </td>
                    <td className="py-2 px-2">
                      <a href={`tel:${enquiry.phone}`} className="text-xs text-muted-foreground hover:text-neon-pink flex items-center gap-1">
                        <Phone className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{enquiry.phone}</span>
                      </a>
                    </td>
                    <td className="py-2 px-2">
                      <span className="px-1.5 py-0.5 text-[10px] rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 text-neon-pink truncate block">
                        {enquiry.course}
                      </span>
                    </td>
                    <td className="py-2 px-2">
                      <span className="px-1.5 py-0.5 text-[10px] rounded-full bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 text-neon-pink truncate block flex items-center gap-1 w-fit">
                        <MapPin className="w-2.5 h-2.5 flex-shrink-0" />
                        {getCenterDisplayName(enquiry.center || 'N/A')}
                      </span>
                    </td>
                    <td className="py-2 px-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">
                          {format(new Date(enquiry.created_at), 'dd MMM yyyy')}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredEnquiries.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <p className="text-sm">No enquiries found</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnquiriesPage;