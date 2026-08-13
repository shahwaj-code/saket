import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      toast.success("Welcome back! 🎉");
      navigate("/admin");
    } catch (error: any) {
      toast.error(error.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background p-3 sm:p-4">
      {/* VHS Effect */}
      <div className="absolute inset-0 vhs-lines opacity-5 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[400px] sm:max-w-md"
      >
        <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <LogIn className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold mb-2">
              Admin <span className="gradient-text">Login</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Access the admin dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1.5 sm:mr-2" />
                Email
              </label>
              <Input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rainbow-border bg-secondary/50 h-10 sm:h-12 text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                <Lock className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1.5 sm:mr-2" />
                Password
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rainbow-border bg-secondary/50 h-10 sm:h-12 text-sm sm:text-base"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full neon-button h-10 sm:h-12 text-base sm:text-lg font-bold"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  <span className="text-sm sm:text-base">Logging in...</span>
                </div>
              ) : (
                "Login to Dashboard"
              )}
            </Button>
          </form>

          {/* Note */}
          <p className="text-xs text-muted-foreground text-center mt-4 sm:mt-6">
            First time? Create an admin user in Supabase Authentication
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;