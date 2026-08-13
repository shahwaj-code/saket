import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";

const StickyButtons = lazy(() => import("@/components/StickyButtons"));

// Lazy loading pages (IMPORTANT FOR TBT)
const CourseDetail = lazy(() => import("./pages/CourseDetail"));
const QuizCourseDetail = lazy(() => import("./pages/QuizCourseDetail"));
// const PortfolioDetail = lazy(() => import("./pages/PortfolioDetail"));
// const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const Courses = lazy(() => import("./pages/Courses"));
const StudentWork = lazy(() => import("./pages/StudentWork"));
// const Events = lazy(() => import("./pages/Events"));
const Quiz = lazy(() => import("./pages/Quiz"));
// const Franchise = lazy(() => import("./pages/Franchise"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const FAQ = lazy(() => import("./pages/FAQ"));
const About = lazy(() => import("./pages/About"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Admin
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminEnquiries = lazy(() => import("./pages/admin/Enquiries"));
const AdminLayout = lazy(() => import("./components/admin/AdminLayout"));
const PrivateRoute = lazy(() => import("./components/admin/PrivateRoute"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        <Toaster />
        <Sonner />

        <BrowserRouter basename="/saket" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />

          {/* Suspense Loader with better design */}
          <Suspense fallback={
            <div className="min-h-screen bg-[#030306] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-[#ffc107] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-[#ffc107] font-medium"></p>
              </div>
            </div>
          }>

            <Routes>

              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/course/:slug" element={<CourseDetail />} />
              <Route path="/quiz-course/:slug" element={<QuizCourseDetail />} /> {/* New route */}
              <Route path="/:slug" element={<QuizCourseDetail />} />
              <Route path="/courses" element={<Courses />} />
              {/* <Route path="/events" element={<Events />} /> */}
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path="/franchise" element={<Franchise />} /> */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* <Route path="/portfolio/:slug" element={<PortfolioDetail />} /> */}
              {/* <Route path="/portfolio" element={<Portfolio />} /> */}
              <Route path="/student-work" element={<StudentWork />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Blog />} />
              <Route path="/thank-you" element={<ThankYou />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />

              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <AdminLayout />
                  </PrivateRoute>
                }
              >
                <Route index element={<AdminDashboard />} />
                <Route path="enquiries" element={<AdminEnquiries />} />
              </Route>

              {/* 404 Route - Always keep at the end */}
              <Route path="*" element={<NotFound />} />

            </Routes>

          </Suspense>

          <Suspense fallback={null}>
            <StickyButtons />
          </Suspense>

        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;