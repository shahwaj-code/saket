import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import CourseDetail from "./pages/CourseDetail";
import PortfolioDetail from "./pages/PortfolioDetail";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/beta">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/course/:slug" element={<CourseDetail />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
