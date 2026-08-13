import { NavLink, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  MessagesSquare, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

interface AdminSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  isMobile: boolean;
  isTablet: boolean;
}

const AdminSidebar = ({ isOpen, onToggle, isMobile, isTablet }: AdminSidebarProps) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/admin/login");
  };

  const getSidebarClasses = () => {
    if (isMobile || isTablet) {
      return `
        fixed left-0 top-0 h-full bg-card border-r border-border 
        transition-transform duration-300 z-40 w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `;
    }
    
    return `
      fixed left-0 top-0 h-full bg-card border-r border-border 
      transition-all duration-300 z-40
      ${isOpen ? 'w-64' : 'w-20'}
    `;
  };

  return (
    <>
      {(isMobile || isTablet) && isOpen && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={onToggle} />
      )}
      
      <aside className={getSidebarClasses()}>
        <div className="flex flex-col h-full">
          <div className="h-14 flex items-center px-4 border-b border-border">
            <div className="flex items-center flex-1 min-w-0">
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink flex-shrink-0" />
              {isOpen && (
                <span className="ml-2 font-display font-semibold text-sm truncate">Admin Panel</span>
              )}
            </div>
            
            {(isMobile || isTablet) && isOpen && (
              <button onClick={onToggle} className="p-1 hover:bg-secondary/50 rounded-lg">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <nav className="flex-1 py-4">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) => `
                flex items-center px-4 py-2.5 mx-2 rounded-lg transition-colors
                ${!isOpen && !isMobile && !isTablet ? 'justify-center' : 'justify-start'}
                ${isActive ? 'bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 text-neon-pink' : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'}
              `}
            >
              <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
              {isOpen && <span className="ml-2 text-xs">Dashboard</span>}
            </NavLink>

            <NavLink
              to="/admin/enquiries"
              className={({ isActive }) => `
                flex items-center px-4 py-2.5 mx-2 rounded-lg transition-colors
                ${!isOpen && !isMobile && !isTablet ? 'justify-center' : 'justify-start'}
                ${isActive ? 'bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 text-neon-pink' : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'}
              `}
            >
              <MessagesSquare className="w-4 h-4 flex-shrink-0" />
              {isOpen && <span className="ml-2 text-xs">Enquiries</span>}
            </NavLink>
          </nav>

          <div className="border-t border-border py-3">
            <button
              onClick={handleLogout}
              className={`
                flex items-center w-full px-4 py-2 text-muted-foreground hover:text-destructive transition-colors
                ${!isOpen && !isMobile && !isTablet ? 'justify-center' : 'justify-start'}
              `}
            >
              <LogOut className="w-4 h-4 flex-shrink-0" />
              {isOpen && <span className="ml-2 text-xs">Logout</span>}
            </button>

            {!isMobile && !isTablet && (
              <button
                onClick={onToggle}
                className="flex items-center w-full px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {isOpen ? (
                  <>
                    <ChevronLeft className="w-4 h-4 flex-shrink-0" />
                    <span className="ml-2 text-xs">Collapse</span>
                  </>
                ) : (
                  <ChevronRight className="w-4 h-4 mx-auto" />
                )}
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;