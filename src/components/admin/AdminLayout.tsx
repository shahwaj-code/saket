import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      const tablet = width >= 768 && width < 1024;
      
      setIsMobile(mobile);
      setIsTablet(tablet);
      
      if (width >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      if ((isMobile || isTablet) && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [isMobile, isTablet, sidebarOpen]);

  const getMainContentMargin = () => {
    if (isMobile || isTablet) return 'ml-0';
    return sidebarOpen ? 'ml-64' : 'ml-20';
  };

  return (
    <div className="h-screen bg-background overflow-hidden"> {/* Fixed: h-screen instead of min-h-screen */}
      <AdminSidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
        isMobile={isMobile} 
        isTablet={isTablet} 
      />
      
      {/* Main Content - Fixed height with flex col */}
      <div className={`
        transition-all duration-300 h-screen flex flex-col overflow-hidden
        ${getMainContentMargin()}
      `}>
        {/* Navbar for mobile/tablet */}
        {(isMobile || isTablet) && (
          <nav className="h-14 bg-card border-b border-border flex items-center px-4 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hover:bg-secondary/50 rounded-lg w-9 h-9"
            >
              <Menu className="h-4 w-4" />
            </Button>
            <div className="ml-2 font-display font-semibold text-base">Admin</div>
          </nav>
        )}
        
        {/* Page Content - Scrollable area */}
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-full"> {/* Prevents horizontal overflow */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;